import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, BarChart, Shield, DollarSign, ArrowRight, Download, PlayCircle } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import TestimonialSlider from '@/components/TestimonialSlider';

// --- Data for New Sections ---
const allProducts = [
    { name: 'Stocks', href: '/equity-stock-trading' }, { name: 'Mutual Funds', href: '/mutual-funds' }, { name: 'IPO', href: '/ipo' },
    { name: 'Bonds & FDs', href: '/bonds' }, { name: 'Insurance', href: '/insurance' }, { name: 'NPS', href: '/nps-national-pension-system' },
];

const gipData = [
    { icon: <BarChart size={24} className="text-secondary"/>, title: "Growth", description: "Long-term wealth creation to build your financial security." },
    { icon: <DollarSign size={24} className="text-secondary"/>, title: "Income", description: "Meet short-term needs and provide portfolio stability." },
    { icon: <Shield size={24} className="text-secondary"/>, title: "Protection", description: "A safety net for your family against unforeseen events." }
];

const whyChooseUsData = [
    { icon: <CheckCircle className="text-accent"/>, title: "Legacy of Trust", description: "A name you can trust, established out of integrity and client-centric principles." },
    { icon: <CheckCircle className="text-accent"/>, title: "Comprehensive Offerings", description: "From equities to fixed income, we cover every asset class in one ecosystem." },
    { icon: <CheckCircle className="text-accent"/>, title: "Research Driven Advice", description: "Expert action plan to assist you in preserving and growing your wealth." },
];

const testimonialsData = [
    { quote: "Best office for nps Best stafff , such a helpful nps mam No ego problem very sweet and kind", author: "Tanu Gupta", imageSrc: 'https://placehold.co/100x100/EFEFEF/333333?text=TG' },
    { quote: "Employees are having good patience and listening skills and easily understand the customer needs.", author: "Vamsi Lankisetty", imageSrc: 'https://placehold.co/100x100/EFEFEF/333333?text=VL' },
    { quote: "Many kinds of services here. For one which I went there, they were very helpful. On call, they also assisted very politely.", author: "Monika Sharma", imageSrc: 'https://placehold.co/100x100/EFEFEF/333333?text=MS' },
];


export default function Home() {
    return (
        <div className="bg-white">
            {/* --- 1. Hero Section --- */}
            <AnimatedSection>
                <section className="bg-light-bg">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-24">
                        <div className="text-left">
                            <p className="font-semibold text-accent">INVEST SMART, SECURE YOUR FUTURE</p>
                            <h1 className="text-4xl md:text-6xl font-bold text-primary my-4 leading-tight">Open a FREE DigiTrade* Account</h1>
                            <p className="text-lg text-text-secondary mb-2">(*Trading cum Demat Account)</p>
                            <p className="text-lg text-text-secondary mb-8">₹0 : A/c Opening Charges, A/c Maintenance Charges</p>
                            <Link href="/open-account" className="btn btn-primary">Open Your Account</Link>
                        </div>
                        <div className="relative h-80 w-full rounded-xl overflow-hidden">
                            <Image src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1911&auto=format=fit=crop" alt="Open a FREE DigiTrade Account" layout="fill" className="object-cover"/>
                        </div>
                    </div>
                </section>
            </AnimatedSection>

            {/* --- 2. All-in-One Investment Platform --- */}
            <AnimatedSection>
                <section className="py-24">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">Your All-in-One Investment Platform</h2>
                        <div className="flex flex-wrap justify-center gap-4 mt-8">
                            {allProducts.map(product => (
                                <Link key={product.name} href={product.href} className="bg-light-bg text-primary font-semibold px-6 py-3 rounded-full border border-gray-200 hover:bg-secondary hover:text-white transition-all">
                                    {product.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </AnimatedSection>
            
            {/* --- 3. GIP: Our Investment Philosophy --- */}
            <AnimatedSection>
                <section className="py-24 bg-light-bg">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">GIP: Our Investment Philosophy</h2>
                        <p className="mt-4 text-lg text-text-secondary max-w-3xl mx-auto">The key to a solid Wealth Creation Plan is a balance between Growth, Income, & Protection.</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-left">
                            {gipData.map(item => (
                                <div key={item.title} className="bg-white p-8 rounded-xl border border-gray-200">
                                    <div className="flex items-center text-secondary mb-3">{item.icon}<h3 className="ml-3 text-2xl font-bold text-primary">{item.title}</h3></div>
                                    <p className="text-text-secondary">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </AnimatedSection>

            {/* --- 4. Why Choose Integrated? --- */}
            <AnimatedSection>
                <section className="py-24">
                     <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative h-96 w-full rounded-xl overflow-hidden">
                            <Image src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=1974&auto=format=fit=crop" alt="Why Choose Us" layout="fill" className="object-cover" />
                        </div>
                        <div className="lg:pl-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary">Why Choose Integrated?</h2>
                            <p className="mt-4 text-lg text-text-secondary">Your financial goals need more than a platform; they require the right partner.</p>
                            <div className="space-y-6 mt-8">
                                {whyChooseUsData.map(item => (
                                    <div key={item.title} className="flex items-start">
                                        <div className="flex-shrink-0 text-accent">{item.icon}</div>
                                        <div className="ml-4"><h3 className="text-xl font-bold text-primary">{item.title}</h3><p className="text-text-secondary mt-1">{item.description}</p></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </AnimatedSection>
            
            {/* --- 7. iInvest App Section --- */}
            <AnimatedSection>
                <section className="py-24 bg-light-bg">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                         <div className="md:pr-8">
                            <h2 className="text-4xl font-bold text-primary">iInvest: One App, Endless Opportunities</h2>
                            <p className="mt-4 text-lg text-text-secondary">The iInvest app is designed to be easy, smooth, and convenient. Monitor the stock market, use advanced research features, execute orders quickly, and track your portfolio in a safe environment.</p>
                        </div>
                        <div className="relative h-[450px] w-full max-w-xs mx-auto">
                            <Image src="https://placehold.co/300x600/102A55/FFFFFF?text=iInvest" alt="iInvest App" layout="fill" className="object-contain"/>
                        </div>
                    </div>
                </section>
            </AnimatedSection>
            
            {/* --- 8. Testimonials Section --- */}
            <AnimatedSection>
                <section className="py-24">
                     <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">Customer Testimonials</h2>
                        <div className="relative max-w-3xl mx-auto h-80 bg-gray-200 rounded-lg flex items-center justify-center my-12">
                            <PlayCircle size={64} className="text-white absolute z-10" />
                            <Image src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070&auto=format&fit=crop" alt="Video testimonial placeholder" layout="fill" className="object-cover rounded-lg opacity-80" />
                        </div>
                        <TestimonialSlider testimonials={testimonialsData} />
                     </div>
                </section>
            </AnimatedSection>
            
            {/* --- 10. Newsletter Subscription --- */}
            <AnimatedSection>
                <section className="py-24 bg-light-bg">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">Subscribe Our E-Magazine</h2>
                        <p className="mt-4 text-lg text-text-secondary">Stay updated on exclusive investment opportunities and market insights.</p>
                        <form className="mt-8 flex flex-col gap-4 max-w-lg mx-auto">
                            <input type="text" placeholder="Full Name *" className="w-full p-3 border-2 border-gray-200 rounded-lg text-lg" required />
                            <input type="email" placeholder="Email Address *" className="w-full p-3 border-2 border-gray-200 rounded-lg text-lg" required />
                             <div className="bg-white p-4 rounded-lg text-left border-2 border-gray-200">
                                <label htmlFor="captcha" className="font-semibold text-text-secondary">Security Check *</label>
                                <p>Please solve: 4 + 3 = ?</p>
                                <input type="text" id="captcha" className="w-full p-2 mt-2 border-2 border-gray-300 rounded-lg" />
                            </div>
                            <button type="submit" className="btn btn-primary w-full">Subscribe</button>
                        </form>
                    </div>
                </section>
            </AnimatedSection>
        </div>
    );
}