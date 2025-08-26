import Link from 'next/link';
import Image from 'next/image';
import PageHeader from '@/components/PageHeader';
import AnimatedSection from '@/components/AnimatedSection';
import { getSortedPostsData, getPostData } from '@/lib/posts';

// This data would typically come from a single source in a real app
const allPosts = [
    {
        slug: 'understanding-mutual-funds',
        title: 'A Beginner\'s Guide to Understanding Mutual Funds',
        excerpt: 'Mutual funds can be a great way to start investing...',
        author: 'Jane Doe',
        date: '2025-08-22',
        category: 'Investing 101',
        imageUrl: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format=fit=crop',
        content: `
            <p>Mutual funds are a popular investment choice for many, and for good reason. They offer diversification and professional management, which can be particularly helpful for new investors. In this guide, we'll break down the essentials.</p>
            <h3 class="text-2xl font-bold mt-8 mb-4">What is a Mutual Fund?</h3>
            <p>A mutual fund is a company that pools money from many investors and invests the money in securities such as stocks, bonds, and short-term debt. The combined holdings of the mutual fund are known as its portfolio.</p>
        `
    },
    {
        slug: 'ipo-investing-strategies',
        title: 'Strategies for Investing in IPOs',
        author: 'John Smith',
        date: '2025-08-18',
        category: 'Advanced Trading',
        imageUrl: 'https://images.unsplash.com/photo-1624953901718-e21e875073ae?q=80&w=2070&auto=format=fit=crop',
        content: '<p>Content for IPO investing strategies...</p>'
    },
    {
        slug: 'tax-saving-investments',
        title: 'Top 5 Tax-Saving Investment Options for 2025',
        author: 'Priya Sharma',
        date: '2025-08-15',
        category: 'Financial Planning',
        imageUrl: 'https://images.unsplash.com/photo-160098457సు5342-821fab9e850b?q=80&w=2070&auto=format=fit=crop',
        content: '<p>Content for tax-saving investments...</p>'
    },
     {
        slug: 'nps-retirement-planning',
        title: 'How the National Pension System (NPS) Can Secure Your Retirement',
        author: 'Anil Kumar',
        date: '2025-08-10',
        category: 'Financial Planning',
        imageUrl: 'https://images.unsplash.com/photo-1601559410317-32115f6c2e35?q=80&w=1964&auto=format=fit=crop',
        content: '<p>Content for NPS retirement planning...</p>'
    },
    {
        slug: 'equity-vs-debt',
        title: 'Choosing Between Equity and Debt Investments',
        excerpt: 'Every investor faces a fundamental choice: equity or debt?...',
        author: 'Priya Sharma',
        date: '2025-08-20',
        category: 'Investing 101',
        imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format=fit=crop',
        content: '<p>Content for equity vs debt...</p>'
    },
    {
        slug: 'power-of-compounding',
        title: 'The Power of Compounding: Why Starting Early Matters',
        excerpt: "Albert Einstein reportedly called compounding the 'eighth wonder of the world.'...",
        author: 'Anil Kumar',
        date: '2025-08-19',
        category: 'Financial Planning',
        imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format=fit=crop',
        content: '<p>Content for power of compounding...</p>'
    }
];

export async function generateMetadata({ params }) {
    const post = allPosts.find(p => p.slug === params.slug);
    if (!post) return { title: 'Post Not Found' };
    return {
        title: `${post.title} | Integrated Blog`,
        description: post.excerpt,
    };
}

export default async function SinglePostPage({ params }) {
    const post = allPosts.find(p => p.slug === params.slug);

    // --- EDITED: Moved this check to be BEFORE the post object is used ---
    if (!post) {
        return (
            <div className="bg-white min-h-screen">
                <PageHeader 
                    title="Post Not Found"
                    subtitle="Sorry, we couldn't find the article you were looking for."
                    breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Blogs', href: '/blogs' }]}
                />
                 <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
                    <p className="text-xl">The blog post you're looking for doesn't exist.</p>
                    <Link href="/blogs" className="mt-6 inline-block btn btn-primary">
                        ← Back to All Articles
                    </Link>
                </main>
            </div>
        );
    }

    // Now it is safe to use the post object
    const recentPosts = allPosts.filter(p => p.slug !== post.slug).slice(0, 4);

    return (
        <div className="bg-white min-h-screen">
             <PageHeader 
                title={post.title}
                subtitle={`${post.author} • ${new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`}
                breadcrumbs={[
                    { name: 'Home', href: '/' },
                    { name: 'Blogs', href: '/blogs' },
                    { name: post.title, href: `/blogs/${post.slug}` }
                ]}
            />
            
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                    <article className="lg:col-span-2">
                        <AnimatedSection>
                            <div className="relative w-full h-96 rounded-2xl overflow-hidden mb-8">
                                <Image src={post.imageUrl} alt={post.title} fill className="object-cover"/>
                            </div>
                            <div 
                                className="prose prose-lg max-w-none prose-headings:text-primary prose-a:text-secondary hover:prose-a:text-primary"
                                dangerouslySetInnerHTML={{ __html: post.content }}
                            />
                        </AnimatedSection>
                    </article>
                    <aside className="lg:col-span-1">
                        <div className="sticky top-24 space-y-8">
                            <AnimatedSection delay={200}>
                                <div className="bg-light-bg p-6 rounded-xl border border-gray-200">
                                    <h3 className="text-xl font-bold text-primary mb-4 pb-3 border-b border-gray-200">Recent Posts</h3>
                                    <ul className="space-y-4">
                                        {recentPosts.map(p => (
                                            <li key={p.slug}>
                                                <Link href={`/blogs/${p.slug}`} className="group flex items-center space-x-4">
                                                    <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                                                        <Image src={p.imageUrl} alt={p.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
                                                    </div>
                                                    <div>
                                                        <p className="font-semibold text-primary group-hover:text-secondary transition-colors leading-tight">{p.title}</p>
                                                        <p className="text-sm text-text-secondary mt-1">{new Date(p.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}</p>
                                                    </div>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </AnimatedSection>
                        </div>
                    </aside>
                </div>
            </main>
        </div>
    );
}