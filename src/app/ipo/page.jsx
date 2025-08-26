import Link from 'next/link';
import Image from 'next/image';
import PageHeader from '@/components/PageHeader';
import AnimatedSection from '@/components/AnimatedSection';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'IPO Dashboard | Integrated',
  description: 'Explore and invest in upcoming, open, and closed Initial Public Offerings (IPOs) on the stock market.',
};

// --- CORRECTED MOCK DATA ---
const ipos = {
    Open: [
        { name: 'Mangal Electrical', logo: 'https://placehold.co/48x48/1C355E/FFFFFF?text=ME', type: 'Mainboard', dates: 'Aug 20 - Aug 22', price: '₹320 - ₹331', minInvest: '₹14,970', lotSize: '45 Shares', slug: 'mangal-electrical' },
        { name: 'ARC Insulation', logo: 'https://placehold.co/48x48/005CB9/FFFFFF?text=AI', type: 'SME', dates: 'Aug 23 - Aug 25', price: '₹150 - ₹155', minInvest: '₹12,400', lotSize: '80 Shares', slug: 'arc-insulation' },
    ],
    Upcoming: [
        { name: 'Quantum IT', logo: 'https://placehold.co/48x48/00AE42/FFFFFF?text=QI', type: 'SME', dates: 'Aug 26 - Aug 28', price: '₹90 - ₹95', minInvest: '₹11,700', lotSize: '130 Shares', slug: 'quantum-it' },
    ],
    Closed: [
        { name: 'Innovate Tech', logo: 'https://placehold.co/48x48/4A5568/FFFFFF?text=IT', type: 'Mainboard', dates: 'Aug 12 - Aug 15', price: '₹1500 - ₹1550', minInvest: '₹15,500', lotSize: '10 Shares', slug: 'innovate-tech' }
    ]
};

export default function IPOPage({ searchParams }) {
    const activeTab = searchParams.tab || 'Open';
    const tabs = [{ key: 'Upcoming', name: 'Upcoming IPOs' }, { key: 'Open', name: 'Current IPOs' }, { key: 'Closed', name: 'Closed IPOs' }];
    
    const ipoList = ipos[activeTab] || [];

    return (
        <div className="bg-light-bg min-h-screen">
            <PageHeader 
                title="Initial Public Offerings (IPOs)"
                subtitle="Stay updated with the latest and upcoming IPOs in the market."
                breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'IPO', href: '/ipo' }]}
            />
            
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <AnimatedSection>
                    <div className="flex justify-center mb-12 space-x-4">
                        {tabs.map(tab => (
                            <Link key={tab.key} href={`/ipo?tab=${tab.key}`} scroll={false} className={`tab-btn ${activeTab === tab.key ? 'active' : ''}`}>
                                {tab.name}
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection delay={200}>
                    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-x-auto">
                        <div className="min-w-[1000px]">
                            {/* Table Header */}
                            <div className="grid grid-cols-7 gap-4 p-4 text-left text-xs font-bold text-text-secondary border-b border-gray-200 uppercase tracking-wider">
                                <div className="col-span-2">Company</div>
                                <div>Issue Date</div>
                                <div>Price</div>
                                <div>Min Investment</div>
                                <div>Lot Size</div>
                                <div className="text-center">Action</div>
                            </div>
                            
                            {/* Table Body */}
                            <div>
                                {ipoList.length > 0 ? (
                                    ipoList.map((ipo) => (
                                        <div key={ipo.name} className="grid grid-cols-7 gap-4 p-4 items-center border-b border-gray-100 last:border-b-0">
                                            <div className="col-span-2 flex items-center">
                                                <Image src={ipo.logo} alt={`${ipo.name} logo`} width={40} height={40} className="rounded-full mr-4" />
                                                <div><Link href={`/ipo/${ipo.slug}`}><h3 className="font-bold text-primary hover:text-secondary transition-colors">{ipo.name}</h3></Link><p className="text-sm text-text-secondary">{ipo.type}</p></div>
                                            </div>
                                            <div className="font-medium text-text-secondary">{ipo.dates}</div>
                                            <div className="font-medium text-text-secondary">{ipo.price}</div>
                                            <div className="font-medium text-text-secondary">{ipo.minInvest}</div>
                                            <div className="font-medium text-text-secondary">{ipo.lotSize}</div>
                                            <div className="text-center">
                                                {activeTab === 'Open' && <Link href={`/ipo/${ipo.slug}`} className="action-btn action-btn-apply">Apply <ArrowRight size={16} className="ml-2" /></Link>}
                                                {activeTab === 'Upcoming' && <button className="action-btn action-btn-preapply">Pre-apply</button>}
                                                {activeTab === 'Closed' && <Link href={`/ipo/${ipo.slug}`} className="action-btn-details">View Details</Link>}
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="text-center py-16"><p className="text-text-secondary">No IPOs to display in this category.</p></div>
                                )}
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
            </main>
        </div>
    );
}