import PageHeader from '@/components/PageHeader';
import IPODetailView from './IPODetailView.jsx';
import { Calendar, Layers, Scaling } from 'lucide-react';

// --- VERIFY THIS DATA is complete ---
const allIPOs = {
    'mangal-electrical': {
        name: 'Mangal Electrical', status: 'Open', type: 'Mainboard', logo: 'https://placehold.co/64x64/1C355E/FFFFFF?text=ME',
        about: 'Mangal Electrical Industries is a key player in processing transformers and related components.',
        timeline: [{ status: 'Completed', event: 'Bidding Ends', date: 'Aug 22, 2025' }],
        details: [{ icon: <Calendar size={20} />, title: 'Issue Dates', value: 'Aug 20 - Aug 22' }, { icon: <Layers size={20} />, title: 'Issue Size', value: '₹1,200 Cr' }, { icon: <Scaling size={20} />, title: 'Price Range', value: '₹320 - ₹331' }],
        subscription: [{ category: 'Retail Investors', value: 2.33 }],
        faqs: [{ q: 'What is the issue size?', a: 'The issue size is ₹1,200 Cr.' }]
    },
    'arc-insulation': {
        name: 'ARC Insulation', status: 'Open', type: 'SME', logo: 'https://placehold.co/64x64/005CB9/FFFFFF?text=AI',
        about: 'ARC Insulation specializes in high-performance insulation materials for industrial use.',
        timeline: [{ status: 'Upcoming', event: 'Bidding Ends', date: 'Aug 25, 2025' }],
        details: [{ icon: <Calendar size={20} />, title: 'Issue Dates', value: 'Aug 23 - Aug 25' }, { icon: <Layers size={20} />, title: 'Issue Size', value: '₹800 Cr' }, { icon: <Scaling size={20} />, title: 'Price Range', value: '₹150 - ₹155' }],
        subscription: [{ category: 'Retail Investors', value: 1.92 }],
        faqs: [{ q: 'What is the lot size?', a: 'The lot size is 100 shares.' }]
    },
    'quantum-it': {
        name: 'Quantum IT', status: 'Upcoming', type: 'SME', logo: 'https://placehold.co/64x64/00AE42/FFFFFF?text=QI',
        about: 'Quantum IT is a leading provider of next-generation technology solutions.',
        timeline: [{ status: 'Upcoming', event: 'Bidding Starts', date: 'Aug 26, 2025' }],
        details: [{ icon: <Calendar size={20} />, title: 'Issue Dates', value: 'Aug 26 - Aug 28' }, { icon: <Layers size={20} />, title: 'Issue Size', value: '₹500 Cr' }, { icon: <Scaling size={20} />, title: 'Price Range', value: '₹90 - ₹95' }],
        subscription: [],
        faqs: [{ q: 'What is the lot size?', a: 'The lot size is 130 shares.' }]
    },
    'innovate-tech': {
        name: 'Innovate Tech', status: 'Closed', type: 'Mainboard', logo: 'https://placehold.co/64x64/4A5568/FFFFFF?text=IT',
        about: 'Innovate Tech was a technology company that recently went public.',
        timeline: [{ status: 'Completed', event: 'Listing Date', date: 'Aug 22, 2025' }],
        details: [{ icon: <Calendar size={20} />, title: 'Issue Dates', value: 'Aug 12 - Aug 15' }, { icon: <Layers size={20} />, title: 'Issue Size', value: '₹5,000 Cr' }, { icon: <Scaling size={20} />, title: 'Price Range', value: '₹1500 - ₹1550' }],
        subscription: [{ category: 'Total Subscription', value: 73.10 }],
        faqs: [{ q: 'What was the listing gain?', a: 'The listing gain was +45.2%.' }],
        performance: { listingDate: 'Aug 22, 2025', listingGain: '+35.20%', gainStatus: 'positive' }
    }
};

export async function generateMetadata({ params }) {
    const ipo = allIPOs[params.slug] || { name: 'IPO' };
    return {
        title: `${ipo.name} IPO Details | Integrated`,
        description: `Get all the details for the ${ipo.name} IPO, including issue dates, price range, and subscription information.`,
    };
}

export default function IPODetailPage({ params }) {
    const ipo = allIPOs[params.slug];

    if (!ipo) {
        return (
            <div className="bg-white min-h-screen">
               <PageHeader title="IPO Not Found" subtitle="The IPO you are looking for does not exist." breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'IPO', href: '/ipo' }]} />
            </div>
        )
    }

    return (
        <div className="bg-white min-h-screen">
            <PageHeader
                title={ipo.name}
                subtitle="Review all details for this IPO."
                breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'IPO', href: '/ipo' }, { name: ipo.name, href: `/ipo/${params.slug}` }]}
            />
            <IPODetailView ipo={ipo} />
        </div>
    );
}