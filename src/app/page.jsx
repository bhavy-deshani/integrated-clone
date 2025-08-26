"use client";
import { useState } from 'react'; // Import useState for the tabs
import Link from 'next/link';
import Image from 'next/image';
import { 
    TrendingUp, Coins, PieChart, Landmark, Shield, 
    PiggyBank, FileText, UserCheck, ArrowRight,
    Calculator, BookOpen, HelpCircle, Globe, Briefcase
} from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import HeroCarousel from '@/components/HeroCarousel';
import Hero from '@/components/Hero';

export default function Home() {
  const [activeTab, setActiveTab] = useState('invest');

  // NEW: All 13 products, grouped into categories for the tabs
  const productTabs = {
    invest: {
      name: 'Investments',
      products: [
        { icon: <TrendingUp size={40} className="text-secondary" />, title: 'Equities', description: 'Invest in the stock market with confidence.', href: '/equity-stock-trading' },
        { icon: <Coins size={40} className="text-secondary" />, title: 'Commodity', description: 'Trade in raw materials and physical goods.', href: '/online-commodity-trading' },
        { icon: <PieChart size={40} className="text-secondary" />, title: 'Mutual Funds', description: 'Diversify your portfolio with expert-managed funds.', href: '/mutual-funds' },
        { icon: <UserCheck size={40} className="text-secondary" />, title: 'Demat Account', description: 'Your gateway to start trading and investing.', href: '/open-demat-trading-account' },
      ]
    },
    plan: {
      name: 'Plan & Protect',
      products: [
        { icon: <Landmark size={40} className="text-secondary" />, title: 'Fixed Income', description: 'Secure your returns with stable investment options.', href: '/fixed-deposit-income-option' },
        { icon: <Shield size={40} className="text-secondary" />, title: 'Insurance', description: 'Protect your life and health with the best plans.', href: '/health-life-insurance-providers' },
        { icon: <PiggyBank size={40} className="text-secondary" />, title: 'NPS', description: 'Plan for a secure retirement with the National Pension System.', href: '/nps-national-pension-system' },
        { icon: <FileText size={40} className="text-secondary" />, title: 'PAN/TAX Services', description: 'Simplify your tax filing and documentation needs.', href: '/pan-card-tan-tds-services' },
      ]
    },
    resources: {
      name: 'Resources & More',
      products: [
        { icon: <Calculator size={40} className="text-secondary" />, title: 'Calculators', description: 'Tools to help you plan your financial future.', href: '/financial-calculators' },
        { icon: <BookOpen size={40} className="text-secondary" />, title: 'Blogs', description: 'Read our latest insights on market trends.', href: '/blogs' },
        { icon: <HelpCircle size={40} className="text-secondary" />, title: 'FAQs', description: 'Get answers to all your investment questions.', href: '/faqs' },
        { icon: <Globe size={40} className="text-secondary" />, title: 'NRI Services', description: 'Specialized services for Non-Resident Indians.', href: '/nri-investments' },
        { icon: <Briefcase size={40} className="text-secondary" />, title: 'STRI Services', description: 'Explore our specialized STRI offerings.', href: '/stri' },
      ]
    }
  };

  const stats = [
    { value: '20+', label: 'Years of Experience' },
    { value: '50,000+', label: 'Trained Professionals' },
    { value: 'PAN-India', label: 'Presence Across India' },
    { value: '99%', label: 'Client Satisfaction' },
  ];

  return (
    <div>
    <HeroCarousel />

      {/* EDITED: This section is completely redesigned with a tabbed interface */}
      <section className="py-24 bg-white">
        <div className="container  mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-2xl font-bold text-text-primary">A Product for Every Financial Goal</h2>
              <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">Whether you're starting to invest, planning for retirement, or need help with taxes, we have a solution for you.</p>
            </div>
          </AnimatedSection>

          {/* Tab Buttons */}
          <AnimatedSection delay={200}>
            <div className="flex justify-center border-b border-gray-200 mb-12">
              {Object.keys(productTabs).map((tabKey) => (
                <button
                  key={tabKey}
                  onClick={() => setActiveTab(tabKey)}
                  className={`px-6 py-3 text-lg font-semibold transition-all duration-300 relative ${activeTab === tabKey ? 'text-secondary' : 'text-gray-500 hover:text-secondary'}`}
                >
                  {productTabs[tabKey].name}
                  {activeTab === tabKey && (
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-secondary rounded-t-full"></span>
                  )}
                </button>
              ))}
            </div>
          </AnimatedSection>
          
          {/* Tab Content */}
          <div key={activeTab} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-fadeIn">
            {productTabs[activeTab].products.map((product, index) => (
              <AnimatedSection key={product.title} delay={index * 100}>
                <Link href={product.href} className="group block h-full">
                  <div className="bg-light-bg p-8 h-full rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center">
                    <div className="mb-5 transition-transform duration-300 group-hover:scale-110">
                      {product.icon}
                    </div>
                    <h3 className="text-lg  font-bold text-text-primary mb-2">{product.title}</h3>
                    <p className="text-text-secondary flex-grow">{product.description}</p>
                    <div className="mt-4 text-secondary font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center">
                      Learn More <ArrowRight size={16} className="ml-1" />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-light-bg">
        <div className="container  mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <Image src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format&fit=crop" alt="Team Collaboration" width={600} height={600} className="rounded-xl shadow-2xl"/>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div>
                <h2 className="text-2xl md:text-2xl font-bold text-text-primary mb-6">Why Choose Integrated?</h2>
                <p className="text-lg text-text-secondary mb-8">We are committed to providing reliable, efficient, and cost-effective solutions tailored to your specific needs. Our experienced team and nationwide presence ensure we deliver on our promises every time.</p>
                <div className="grid grid-cols-2 gap-8">{stats.map((stat) => (<div key={stat.label}><p className="text-2xl font-bold text-secondary">{stat.value}</p><p className="text-text-secondary mt-1">{stat.label}</p></div>))}</div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="bg-primary">
          <div className="container  mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <AnimatedSection>
              <h2 className="text-2xl font-bold text-white mb-4">Ready to Elevate Your Business?</h2>
              <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">Let's discuss how our services can help you achieve your goals. Our experts are here to provide a tailored solution that fits your needs.</p>
              <Link href="/contact" className="btn btn-secondary">Contact Us Today</Link>
            </AnimatedSection>
          </div>
      </section>
    </div>
  );
}