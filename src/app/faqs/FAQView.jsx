"use client";

import { useState, useMemo, useEffect } from 'react';
import { ChevronDown, Search, TrendingUp, UserCheck, PiggyBank, Shield, PieChart, Rocket, Landmark, Coins, FileText, Globe, Briefcase } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

const AccordionItem = ({ q, a }) => {
    const [isOpen, setIsOpen] = useState(false);

    const renderAnswer = () => {
        if (typeof a === 'string') {
            return <p dangerouslySetInnerHTML={{ __html: a }} />;
        }
        if (Array.isArray(a)) {
            return <ul className="list-disc pl-5 space-y-2">{a.map((item, i) => <li key={i}>{item}</li>)}</ul>;
        }
        return null;
    };

    return (
        <div className="border-b border-gray-200">
            <button onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-center text-left py-5">
                <span className="font-semibold text-lg text-primary">{q}</span>
                <ChevronDown className={`transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180 text-secondary' : 'text-gray-400'}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[1000px] pb-5' : 'max-h-0'}`}>
                <div className="prose max-w-none text-text-secondary">
                    {renderAnswer()}
                </div>
            </div>
        </div>
    );
};

// Map category names to icons
const categoryIcons = {
    "Equity": <TrendingUp size={20} />, "Demat": <UserCheck size={20} />, "NPS": <PiggyBank size={20} />, "NPS Vatsalya": <PiggyBank size={20} />, "Insurance": <Shield size={20} />, "Financial": <FileText size={20} />, "Mutual Fund": <PieChart size={20} />, "GIP Strategy": <Briefcase size={20} />, "Fixed Deposit": <Landmark size={20} />, "MTF": <TrendingUp size={20} />, "Commodities": <Coins size={20} />, "Gold ETF/Bond": <Coins size={20} />, "IPO": <Rocket size={20} />, "Bonds": <FileText size={20} />,
};


export default function FAQView({ faqs }) {
    const categories = Object.keys(faqs);
    const [activeCategory, setActiveCategory] = useState(categories[0] || '');
    const [searchTerm, setSearchTerm] = useState('');

    const filteredQuestions = useMemo(() => {
        if (!activeCategory) return [];
        const questions = faqs[activeCategory];
        if (!searchTerm) return questions;
        const lowercasedTerm = searchTerm.toLowerCase();
        return questions.filter(item => item.question.toLowerCase().includes(lowercasedTerm) || (typeof item.answer === 'string' && item.answer.toLowerCase().includes(lowercasedTerm)));
    }, [searchTerm, faqs, activeCategory]);

    const SearchBar = () => (
        <div className="relative w-full">
            <input 
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-full border-2 border-gray-200 focus:ring-secondary focus:border-secondary transition"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        </div>
    );

    return (
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
                
                {/* --- DESKTOP SIDEBAR (hidden on mobile) --- */}
                <aside className="hidden lg:block lg:col-span-1">
                    <div className="sticky top-24">
                        <div className="mb-8"><SearchBar /></div>
                        
                        <div className="bg-light-bg p-4 rounded-xl border border-gray-200">
                            <h3 className="text-lg font-bold text-primary mb-2 px-2">Categories</h3>
                            <ul className="space-y-1">
                                {categories.map(category => {
                                    const isActive = activeCategory === category;
                                    return (
                                        <li key={category}>
                                            <button 
                                               onClick={() => setActiveCategory(category)}
                                               className={`sidebar-btn ${isActive ? 'active' : ''}`}>
                                                {categoryIcons[category] || <Briefcase size={20}/>}
                                                <span>{category}</span>
                                            </button>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </aside>

                {/* --- Main Content --- */}
                <div className="lg:col-span-3">
                    {/* --- MOBILE CONTROLS (hidden on desktop) --- */}
                    <div className="lg:hidden mb-8 space-y-4">
                        <SearchBar />
                        <div>
                            <label htmlFor="faq-category-select" className="sr-only">Select a Category</label>
                            <select
                                id="faq-category-select"
                                value={activeCategory}
                                onChange={(e) => setActiveCategory(e.target.value)}
                                className="w-full p-3 text-lg font-semibold bg-light-bg border-2 border-gray-200 rounded-lg focus:ring-secondary focus:border-secondary"
                            >
                                {categories.map(category => (
                                    <option key={category} value={category}>{category}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <AnimatedSection key={activeCategory}>
                        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-200">
                            <h2 className="text-2xl font-bold text-primary mb-6 pb-4 border-b-2 border-gray-200">{activeCategory}</h2>
                            {filteredQuestions.length > 0 ? (
                                <div className="space-y-2">
                                    {filteredQuestions.map(item => (<AccordionItem key={item.question} q={item.question} a={item.answer} />))}
                                </div>
                            ) : (
                                <div className="text-center py-16">
                                    <p className="text-2xl font-semibold text-primary">No results found for "{searchTerm}"</p>
                                    <p className="text-text-secondary mt-2">Try adjusting your search or selecting a different category.</p>
                                </div>
                            )}
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </main>
    );
}