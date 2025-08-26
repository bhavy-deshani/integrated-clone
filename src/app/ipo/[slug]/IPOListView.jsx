"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';

// Mock data and ProgressBar
const openIPOs = [
    { name: 'Mangal Electrical', logo: 'https://placehold.co/48x48/1C355E/FFFFFF?text=ME', type: 'Mainboard', price: '₹320 - ₹331', minInvest: '₹14,970', subscription: 2.33, status: 'Closes Today', slug: 'mangal-electrical' },
    { name: 'ARC Insulation', logo: 'https://placehold.co/48x48/005CB9/FFFFFF?text=AI', type: 'SME', price: '₹150 - ₹155', minInvest: '₹12,400', subscription: 1.92, status: 'Bidding Open', slug: 'arc-insulation' },
];
const upcomingIPOs = [{ name: 'Quantum IT', logo: 'https://placehold.co/48x48/00AE42/FFFFFF?text=QI', type: 'SME', price: '₹90 - ₹95', minInvest: '₹11,700', subscription: 0, status: 'Opens Aug 28', slug: 'quantum-it' }];

const ProgressBar = ({ value }) => {
    const percentage = Math.min((value / 5) * 100, 100);
    return (<div className="w-full bg-gray-200 rounded-full h-2"><div className="bg-green-600 h-2 rounded-full" style={{ width: `${percentage}%` }}></div></div>);
};

export default function IPOListView() {
    const [activeTab, setActiveTab] = useState('Open');
    const tabs = ['Open', 'Upcoming', 'Closed'];
    const ipoList = activeTab === 'Open' ? openIPOs : upcomingIPOs;

    return (
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <AnimatedSection>
                <div className="flex justify-center mb-12">
                    <div className="flex items-center bg-light-bg p-1 rounded-full shadow-sm border border-gray-200">
                        {tabs.map(tab => (
                            <button key={tab} onClick={() => setActiveTab(tab)} className={`w-32 text-center px-4 py-2 rounded-full font-semibold transition-colors duration-300 ${activeTab === tab ? 'bg-white text-primary shadow' : 'text-gray-600 hover:text-primary'}`}>{tab}</button>
                        ))}
                    </div>
                </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {ipoList.length > 0 ? (
                    ipoList.map((ipo, index) => (
                        <AnimatedSection key={ipo.name} delay={index * 100}>
                            <Link href={`/ipo/${ipo.slug}`} className="block h-full">
                                <div className="bg-white rounded-2xl shadow-lg border border-gray-200 h-full flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                    <div className="p-6">
                                        <div className="flex items-center mb-4">
                                            <Image src={ipo.logo} alt={`${ipo.name} logo`} width={48} height={48} className="rounded-lg mr-4" />
                                            <div>
                                                <h3 className="font-bold text-xl text-primary">{ipo.name}</h3>
                                                <p className="text-sm text-text-secondary">{ipo.type}</p>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-3 gap-4 text-center my-6">
                                            <div><p className="text-xs text-text-secondary">Price Range</p><p className="font-semibold text-primary">{ipo.price}</p></div>
                                            <div><p className="text-xs text-text-secondary">Min. Invest</p><p className="font-semibold text-primary">{ipo.minInvest}</p></div>
                                            <div><p className="text-xs text-text-secondary">Subscribed</p><p className="font-bold text-primary">{ipo.subscription > 0 ? `${ipo.subscription}x` : 'N/A'}</p></div>
                                        </div>
                                        {ipo.subscription > 0 && <ProgressBar value={ipo.subscription} />}
                                    </div>
                                    <div className="bg-light-bg p-3 mt-auto border-t border-gray-200 text-center">
                                        <p className="text-sm font-semibold text-text-secondary">{ipo.status}</p>
                                    </div>
                                </div>
                            </Link>
                        </AnimatedSection>
                    ))
                ) : (
                    <AnimatedSection className="lg:col-span-2"><div className="text-center py-16 bg-light-bg rounded-lg border"><p className="text-text-secondary">No IPOs to display in this category.</p></div></AnimatedSection>
                )}
            </div>
        </main>
    );
}