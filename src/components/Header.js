"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';

// Data for the mega menu
const megaMenuData = {
    investing: {
        title: "Investing & Trading",
        links: [
            { href: "/equity-stock-trading", title: "Stocks", description: "Trade on the NSE & BSE." },
            { href: "/online-commodity-trading", title: "Commodities", description: "Invest in gold, silver, and more." },
            { href: "/ipo", title: "IPO", description: "Invest in companies as they go public." },
            { href: "/bonds", title: "Bonds & FDs", description: "Earn fixed, predictable returns." },
        ]
    },
    wealth: {
        title: "Wealth Management",
        links: [
            { href: "/mutual-funds", title: "Mutual Funds", description: "Diversify with 5000+ funds." },
            { href: "/nps-national-pension-system", title: "NPS", description: "Plan and save for your retirement." },
            { href: "/insurance", title: "Insurance", description: "Secure your life and health." },
        ]
    },
    knowledge: {
        title: "Knowledge & Tools",
        links: [
            { href: "/research", title: "Research Reports", description: "In-depth analysis from our experts." },
            { href: "/blogs", title: "Blogs", description: "Read our latest market insights." },
            { href: "/financial-calculators", title: "Calculators", description: "Plan your financial goals." },
            { href: "/faqs", title: "FAQs", description: "Get answers to your questions." },
        ]
    }
};

const FeaturedIllustration = () => (
    <svg width="100%" viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="160" height="120" rx="12" fill="url(#paint0_linear_101_2)"/><path d="M40 96C40 96 52.0019 46.5 81.5 61.5C111 76.5 120 24 120 24" stroke="white" strokeOpacity="0.3" strokeWidth="4" strokeLinecap="round"/><circle cx="81.5" cy="61.5" r="6" fill="white" fillOpacity="0.5"/><circle cx="120" cy="24" r="6" fill="white" fillOpacity="0.5"/><rect x="20" y="70" width="40" height="26" rx="4" fill="#005CB9" fillOpacity="0.5"/><rect x="28" y="78" width="24" height="4" rx="2" fill="white" fillOpacity="0.7"/><rect x="28" y="86" width="16" height="4" rx="2" fill="white" fillOpacity="0.7"/><defs><linearGradient id="paint0_linear_101_2" x1="0" y1="0" x2="160" y2="120" gradientUnits="userSpaceOnUse"><stop stopColor="#102A55"/><stop offset="1" stopColor="#005CB9"/></linearGradient></defs></svg>
);

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openAccordion, setOpenAccordion] = useState('');
    const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
    let menuTimeout;

    const handleMenuEnter = () => { clearTimeout(menuTimeout); setIsMegaMenuOpen(true); };
    const handleMenuLeave = () => { menuTimeout = setTimeout(() => { setIsMegaMenuOpen(false); }, 200); };
    const closeMegaMenu = () => { setIsMegaMenuOpen(false); };

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    }, [isMobileMenuOpen]);
    
    const toggleAccordion = (title) => {
        setOpenAccordion(openAccordion === title ? '' : title);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 shadow-md bg-white">
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-3 items-center h-20">
                    {/* Left: Logo */}
                    <div className="flex justify-start">
                        <Link href="/"><Image src="https://www.integratedindia.in/assets/img/integrated_enterprises_india_pvt_ltd.png" alt="Integrated Enterprises" width={160} height={50} className="h-auto" /></Link>
                    </div>

                    {/* Center: Navigation */}
                    <nav className="hidden lg:flex items-center justify-center space-x-8">
                        <div className="relative" onMouseLeave={handleMenuLeave}>
                            <button onMouseEnter={handleMenuEnter} className="flex items-center font-semibold text-text-primary hover:text-secondary transition-colors">Products <ChevronDown size={16} className={`ml-1 transition-transform ${isMegaMenuOpen ? 'rotate-180' : ''}`} /></button>
                            <div onMouseEnter={handleMenuEnter} className={`absolute top-full pt-4 w-screen max-w-5xl transform -translate-x-1/2 transition-all duration-300 ease-in-out ${isMegaMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'}`}>
                                <div className="bg-white rounded-xl shadow-2xl grid grid-cols-4 gap-6 p-8">
                                    <div className="col-span-1">
                                        <div className="relative rounded-lg overflow-hidden mb-4"><FeaturedIllustration /></div>
                                        <h3 className="font-bold text-primary">Invest in Stocks</h3>
                                        <p className="text-sm text-text-secondary mt-1">Track returns and view real-time P&L.</p>
                                        <Link href="/equity-stock-trading" onClick={closeMegaMenu} className="inline-flex items-center text-sm font-semibold text-secondary mt-3 group">Start Investing <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" /></Link>
                                    </div>
                                    {Object.values(megaMenuData).map(column => (
                                        <div key={column.title} className="col-span-1">
                                            <h3 className="font-bold text-primary mb-4 border-b pb-2">{column.title}</h3>
                                            <ul className="space-y-2">{column.links.map(link => (<li key={link.href}><Link href={link.href} onClick={closeMegaMenu} className="block p-2 rounded-md hover:bg-light-bg"><p className="font-semibold text-text-primary">{link.title}</p><p className="text-sm text-text-secondary">{link.description}</p></Link></li>))}</ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <Link href="/about" className="font-semibold text-text-primary hover:text-secondary transition-colors">About Us</Link>
                        <Link href="/ipo" className="font-semibold text-text-primary hover:text-secondary transition-colors">IPO</Link>
                        <Link href="/contact" className="font-semibold text-text-primary hover:text-secondary transition-colors">Contact</Link>
                    </nav>
                    
                    {/* Right: CTAs and Mobile Toggle */}
                    <div className="flex justify-end">
                        <div className="hidden lg:flex items-center space-x-6">
                            <Link href="/login" className="font-semibold text-text-primary hover:text-secondary transition-colors">Login</Link>
                            <Link href="/open-demat-account" className="btn btn-primary">Open Demat A/C</Link>
                        </div>
                        <div className="lg:hidden">
                            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-primary">{isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- Mobile Menu Panel --- */}
            <div className={`fixed inset-0 z-50 lg:hidden ${isMobileMenuOpen ? 'visible' : 'invisible'}`}>
                <div onClick={closeMobileMenu} className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}></div>
                <div className={`absolute top-0 right-0 h-full w-full max-w-sm bg-white shadow-xl transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="flex items-center justify-between p-4 border-b">
                        <h2 className="font-bold text-primary">Menu</h2>
                        <button onClick={closeMobileMenu} className="text-primary"><X size={28} /></button>
                    </div>
                    <nav className="flex flex-col text-lg p-4">
                        <Link href="/about" onClick={closeMobileMenu} className="py-3 px-4 font-semibold border-b">About Us</Link>
                        <div>
                            <button onClick={() => toggleAccordion('products')} className="w-full flex justify-between items-center py-3 px-4 font-semibold border-b">
                                <span>Products</span>
                                <ChevronDown size={20} className={`transition-transform ${openAccordion === 'products' ? 'rotate-180' : ''}`} />
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${openAccordion === 'products' ? 'max-h-screen' : 'max-h-0'}`}>
                                <div className="pl-8 py-2 bg-light-bg flex flex-col items-start space-y-2">
                                    {Object.values(megaMenuData).flatMap(col => col.links).map(link => <Link key={link.href} href={link.href} onClick={closeMobileMenu} className="py-1 text-base">{link.title}</Link>)}
                                </div>
                            </div>
                        </div>
                        <Link href="/ipo" onClick={closeMobileMenu} className="py-3 px-4 font-semibold border-b">IPO</Link>
                        <Link href="/contact" onClick={closeMobileMenu} className="py-3 px-4 font-semibold border-b">Contact</Link>
                        
                        <div className="mt-8 px-4 space-y-4">
                             <Link href="/login" onClick={closeMobileMenu} className="block text-center font-semibold text-primary border-2 border-primary rounded-full py-3">Login</Link>
                             <Link href="/open-demat-account" onClick={closeMobileMenu} className="block text-center font-semibold text-white bg-primary rounded-full py-3">Open Demat A/C</Link>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;