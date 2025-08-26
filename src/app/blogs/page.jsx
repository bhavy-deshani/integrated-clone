import Link from 'next/link';
import Image from 'next/image';
import PageHeader from '@/components/PageHeader';
import AnimatedSection from '@/components/AnimatedSection';
import { getSortedPostsData } from '@/lib/posts';

const categories = ['All', 'Investing 101', 'Advanced Trading', 'Financial Planning'];

export const metadata = {
  title: 'Blog | Integrated',
  description: 'Read the latest insights on investing, trading, and financial planning from our team of experts.',
};

export default function BlogPage({ searchParams }) {
    const allPosts = getSortedPostsData();
    const activeCategory = searchParams.category || 'All';
    const posts = activeCategory === 'All' ? allPosts : allPosts.filter(p => p.category === activeCategory);
    const featuredPost = posts[0];
    const otherPosts = posts.slice(1);

    return (
        <div className="bg-white min-h-screen">
            <PageHeader 
                title="Our Blog"
                subtitle="Insights on investing, trading, and financial planning from our team of experts."
                breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Blogs', href: '/blogs' }]}
            />

            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <AnimatedSection>
                    <div className="flex justify-center mb-16 flex-wrap gap-4">
                        {categories.map(category => (
                            <Link key={category} href={category === 'All' ? '/blogs' : `/blogs?category=${category}`} scroll={false} className={`tab-btn ${activeCategory === category ? 'active' : ''}`}>
                                {category}
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>

                {featuredPost && (
                    <AnimatedSection delay={200}>
                        <Link href={`/blogs/${featuredPost.slug}`} className="block group mb-16">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-light-bg rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                                <div className="relative h-64 lg:h-full"><Image src={featuredPost.imageUrl} alt={featuredPost.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" /></div>
                                <div className="p-8">
                                    <p className="font-semibold text-secondary mb-2">{featuredPost.category}</p>
                                    <h2 className="text-2xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors">{featuredPost.title}</h2>
                                    <p className="text-text-secondary mb-4">{featuredPost.excerpt}</p>
                                    <p className="text-sm text-gray-500">{featuredPost.author} • {new Date(featuredPost.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                                </div>
                            </div>
                        </Link>
                    </AnimatedSection>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {otherPosts.map((post, index) => (
                         <AnimatedSection key={post.slug} delay={index * 100}>
                             <Link href={`/blogs/${post.slug}`} className="block group h-full">
                                <div className="bg-white rounded-2xl shadow-lg border border-gray-200 h-full flex flex-col overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all">
                                    <div className="relative h-48"><Image src={post.imageUrl} alt={post.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" /></div>
                                    <div className="p-6 flex flex-col flex-grow">
                                        <p className="font-semibold text-secondary text-sm mb-2">{post.category}</p>
                                        <h3 className="text-1   xl font-bold text-primary mb-3 flex-grow">{post.title}</h3>
                                        <p className="text-sm text-gray-500">{post.author} • {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                                    </div>
                                </div>
                            </Link>
                         </AnimatedSection>
                    ))}
                </div>
            </main>
        </div>
    );
}