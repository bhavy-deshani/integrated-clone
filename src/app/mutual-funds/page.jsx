import Link from 'next/link';
import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';
import { Search, ArrowRight, TrendingUp, Landmark, Layers, PieChart, Percent, Rocket, ShieldCheck, Zap, IndianRupee, Umbrella } from 'lucide-react';

export const metadata = {
  title: 'Invest in Mutual Funds | Integrated',
  description: 'Explore and invest in top-rated mutual fund schemes across equity, debt, hybrid, ETFs, and more. Start your SIP with Integrated today.',
};

// Data for the sections
const fundTypes = [
    { name: 'Equity Funds', icon: <TrendingUp size={24} className="text-secondary"/> },
    { name: 'Debt Funds', icon: <Landmark size={24} className="text-secondary"/> },
    { name: 'Hybrid Funds', icon: <Layers size={24} className="text-secondary"/> },
    { name: 'ETF', icon: <PieChart size={24} className="text-secondary"/> },
    { name: 'Tax Saving (ELSS)', icon: <Percent size={24} className="text-secondary"/> },
    { name: 'NFO', icon: <Rocket size={24} className="text-secondary"/> },
];

const benefits = [
    { icon: <Layers size={24} className="text-accent"/>, title: 'Diversification With One Investment', description: 'The risk is spread when money is placed in different stocks, bonds, and sectors.' },
    { icon: <ShieldCheck size={24} className="text-accent"/>, title: 'Expert Management', description: 'Each fund is managed by experts who monitor the trends and take decisions on behalf of investors.' },
    { icon: <Zap size={24} className="text-accent"/>, title: 'Flexible to All Goals', description: 'Whether you want exposure for three months or thirty years, there are funds for every time period.' },
    { icon: <IndianRupee size={24} className="text-accent"/>, title: 'Liquidity and Accessibility', description: 'Most funds can usually allow you to redeem in one to three working days of making the request, giving you access to cash.' },
    { icon: <Umbrella size={24} className="text-accent"/>, title: 'Tax Efficiency', description: 'ELSS Schemes offer tax advantages along with Capital Appreciation.' },
];

const whyChooseUs = [
    { icon: <TrendingUp size={24} className="text-accent"/>, title: 'Smart Digital Tools', description: 'Compare funds, returns, and keep track of your portfolio in a user-friendly environment.' },
    { icon: <ShieldCheck size={24} className="text-accent"/>, title: 'End-to-End Support', description: 'From onboarding to investing, redeeming and beyond, we keep you covered.' },
    { icon: <Rocket size={24} className="text-accent"/>, title: 'Goal-Based Investing', description: 'Prepare for your retirement, your children\'s education, or your wealth-building venture.' },
    { icon: <Zap size={24} className="text-accent"/>, title: 'Fully Paperless Experience', description: 'Invest, track, and manage your entire mutual fund journey 100% online—securely and efficiently.' },
]

export default function MutualFundsPage() {
    return (
        <div className="bg-white min-h-screen">
            
            <main>
                {/* --- Hero Section --- */}
                <AnimatedSection>
                    <section className="bg-light-bg">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-20">
                            <div className="text-left">
                                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Invest Confidently in Mutual Funds with Integrated</h1>
                                <p className="text-lg text-text-secondary mb-6">Mutual funds are smart instruments for diversifying and building wealth. We help you select a suitable Mutual Fund Scheme based on your requirement.</p>
                                <Link href="/open-demat-account" className="btn btn-primary">Start Investing</Link>
                            </div>
                            <div className="relative h-64 w-full md:h-full">
                                <Image src="https://images.unsplash.com/photo-1542744173-8e7e-53d415bb0?q=80&w=2070&auto=format=fit=crop" alt="Mutual Funds Investment" layout="fill" className="object-cover rounded-xl"/>
                            </div>
                        </div>
                    </section>
                </AnimatedSection>

                {/* --- Fund Types Grid --- */}
                <AnimatedSection>
                    <section className="py-20">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                            <h2 className="text-3xl font-bold text-center text-primary mb-12">Top Mutual Funds Based on Asset Class</h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
                                {fundTypes.map((fund, index) => (
                                    <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all">
                                        <div className="flex justify-center items-center h-16 w-16 mx-auto mb-4">{fund.icon}</div>
                                        <h3 className="font-semibold text-primary">{fund.name}</h3>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </AnimatedSection>

                {/* --- Compare Funds UI --- */}
                <AnimatedSection>
                    <section className="py-20 bg-light-bg">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                            <h2 className="text-3xl font-bold text-center text-primary mb-4">Compare Mutual Funds</h2>
                            <p className="text-center text-text-secondary mb-8">Select any two funds to see a side-by-side comparison.</p>
                            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                                <select className="w-full md:w-1/3 p-3 border-2 border-gray-200 rounded-lg text-lg focus:ring-secondary focus:border-secondary"><option>Select Fund 1</option></select>
                                <span className="font-bold text-2xl text-gray-400">VS</span>
                                <select className="w-full md:w-1/3 p-3 border-2 border-gray-200 rounded-lg text-lg focus:ring-secondary focus:border-secondary"><option>Select Fund 2</option></select>
                                <button className="btn btn-primary w-full md:w-auto"><Search size={20} className="mr-2"/>Compare</button>
                            </div>
                        </div>
                    </section>
                </AnimatedSection>
                
                {/* --- Split-Screen Benefits Section --- */}
                <AnimatedSection>
                    <section className="py-20">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                             <div className="relative h-80 w-full">
                                <Image src="https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=2070&auto=format&fit=crop" alt="Investment Growth" layout="fill" className="object-cover rounded-xl"/>
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-primary mb-8">Benefits of Mutual Fund Investments</h2>
                                <div className="space-y-6">
                                    {benefits.map((benefit, index) => (
                                        <div key={index} className="flex items-start">
                                            <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 bg-green-100 rounded-full">{benefit.icon}</div>
                                            <div className="ml-4">
                                                <h3 className="text-lg font-bold text-primary">{benefit.title}</h3>
                                                <p className="text-text-secondary">{benefit.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                </AnimatedSection>

                {/* --- "How to Get Started" Stepper --- */}
                <AnimatedSection>
                    <section className="py-20 bg-light-bg">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                            <h2 className="text-3xl font-bold text-center text-primary mb-16">How to Get Started in 4 Easy Steps</h2>
                            <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
                                <div className="absolute top-8 left-0 w-full h-0.5 bg-gray-300 hidden md:block"></div>
                                {[
                                    { num: 1, title: 'Open an Account', desc: 'Sign up and complete your KYC online in minutes.' },
                                    { num: 2, title: 'Explore & Select', desc: 'Use our tools to compare funds, returns, and risks.' },
                                    { num: 3, title: 'Make Your Investment', desc: 'Start with as little as ₹500 via lumpsum or SIP.' },
                                    { num: 4, title: 'Track & Adjust', desc: 'Manage your portfolio from a single dashboard.' },
                                ].map(step => (
                                    <div key={step.num} className="relative text-center">
                                        <div className="flex items-center justify-center w-16 h-16 mx-auto bg-secondary text-white rounded-full text-2xl font-bold border-4 border-light-bg mb-4 z-10 relative">{step.num}</div>
                                        <h3 className="text-xl font-bold text-primary mb-2">{step.title}</h3>
                                        <p className="text-text-secondary">{step.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </AnimatedSection>
                
                {/* --- Why Choose Us Section --- */}
                 <AnimatedSection>
                    <section className="py-20">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
                            <h2 className="text-3xl font-bold text-primary mb-12">Why Choose Integrated?</h2>
                            <div className="space-y-8">
                                {whyChooseUs.map((item, index) => (
                                    <div key={index} className="flex items-start text-left">
                                        <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 bg-green-100 rounded-full">{item.icon}</div>
                                        <div className="ml-4">
                                            <h3 className="text-lg font-bold text-primary">{item.title}</h3>
                                            <p className="text-text-secondary">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </AnimatedSection>

                {/* --- Final CTA --- */}
                <AnimatedSection>
                    <section className="relative py-20 bg-primary text-white">
                         <Image src="https://images.unsplash.com/photo-1462206092226-f46025ffe607?q=80&w=2074&auto=format&fit=crop" alt="Ready to Invest" layout="fill" className="object-cover opacity-20"/>
                        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
                             <h2 className="text-3xl font-bold mb-4">Ready to Invest?</h2>
                             <p className="text-lg text-gray-200 mb-8">Take control of your financial future. Invest in mutual funds through Integrated now—securely, smartly, and on your terms.</p>
                             <Link href="/open-demat-account" className="btn btn-primary">Start Investing Now <ArrowRight className="ml-2"/></Link>
                        </div>
                    </section>
                </AnimatedSection>
            </main>
        </div>
    );
}