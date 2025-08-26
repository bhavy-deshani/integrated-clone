"use client";
import { useState } from 'react';
import Image from 'next/image';
import { CheckCircle, ChevronDown } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

const Section = ({ title, children }) => (<div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 mb-8"><h2 className="text-2xl font-bold text-primary mb-5 pb-3 border-b border-gray-200">{title}</h2>{children}</div>);
const FAQItem = ({ q, a }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (<div className="border-b"><button onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-center text-left py-4"><span className="font-semibold text-primary">{q}</span><ChevronDown className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} /></button>{isOpen && <div className="py-2 text-text-secondary">{a}</div>}</div>);
};
const SubscriptionBar = ({ category, value }) => {
    const percentage = Math.min((value / 5) * 100, 100);
    return (
        <div>
            <div className="flex justify-between mb-1">
                <span className="text-sm text-text-secondary">{category}</span>
                <span className="text-sm font-bold text-primary">{value}x</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2"><div className="bg-green-600 h-2 rounded-full" style={{ width: `${percentage}%` }}></div></div>
        </div>
    );
};

export default function IPODetailView({ ipo }) {
    return (
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                {/* Left Column */}
                <div className="lg:col-span-2">
                    <AnimatedSection><Section title="IPO Timeline">
                        <div className="relative pl-6">{ipo.timeline.map((item) => (
                            <div key={item.event} className="relative mb-8">
                                <div className={`absolute -left-[34px] top-1 w-4 h-4 rounded-full ${item.status === 'Completed' ? 'bg-secondary border-4 border-white' : 'bg-gray-300 border-4 border-white'}`}></div>
                                <p className="font-bold text-primary">{item.event}</p><p className="text-text-secondary">{item.date}</p>
                            </div>))}
                        </div>
                    </Section></AnimatedSection>
                    <AnimatedSection delay={100}><Section title="Subscription Details"><div className="space-y-4">{ipo.subscription.map(sub => <SubscriptionBar key={sub.category} {...sub} />)}</div></Section></AnimatedSection>
                    <AnimatedSection delay={200}><Section title="About The Company"><p className="text-text-secondary leading-relaxed">{ipo.about}</p></Section></AnimatedSection>
                    <AnimatedSection delay={300}><Section title="Frequently Asked Questions">{ipo.faqs.map(faq => <FAQItem key={faq.q} q={faq.q} a={faq.a} />)}</Section></AnimatedSection>
                </div>

                {/* Right Column (Sticky) */}
                <div className="lg:col-span-1">
                    <AnimatedSection delay={400}>
                        <div className="sticky top-24">
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
                                <h3 className="text-xl font-bold text-primary mb-4">Application Details</h3>
                                <div className="space-y-3 text-sm mb-6">
                                    <div className="flex justify-between"><span className="text-text-secondary">Bidding Dates</span><span className="font-semibold text-primary">{ipo.details[0].value}</span></div>
                                    <div className="flex justify-between"><span className="text-text-secondary">Issue Size</span><span className="font-semibold text-primary">{ipo.details[1].value}</span></div>
                                    <div className="flex justify-between"><span className="text-text-secondary">Price Range</span><span className="font-semibold text-primary">{ipo.details[2].value}</span></div>
                                </div>
                                <button className="w-full bg-accent text-white font-bold py-3 rounded-lg hover:bg-accent-hover transition-colors">Apply Now</button>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </main>
    );
}