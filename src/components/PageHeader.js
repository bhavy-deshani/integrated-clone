"use client";
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const PageHeader = ({ title, subtitle, breadcrumbs }) => {
    return (
        <AnimatedSection>
            {/* This section now breaks out to be full-width */}
            <section className="animated-gradient-bg text-white relative left-1/2 -translate-x-1/2 w-screen-custom ">
                
                {/* This inner div re-aligns the content with your main container */}
                <div className="max-w-screen-xl  mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 overflow-hidden">
                    
                    <nav className="flex items-center text-sm text-gray-300 mb-4">
                        {breadcrumbs.map((crumb, index) => (
                            <div key={index} className="flex items-center">
                                <Link href={crumb.href} className="hover:text-white transition-colors">
                                    {crumb.name}
                                </Link>
                                {index < breadcrumbs.length - 1 && (
                                    <ChevronRight size={16} className="mx-1" />
                                )}
                            </div>
                        ))}
                    </nav>
                    
                    <h1 className="text-3xl md:text-2xl font-bold text-white-imp">{title}</h1>
                    {subtitle && <p className="mt-2 text-lg text-gray-200 max-w-3xl">{subtitle}</p>}
                </div>
            </section>
        </AnimatedSection>
    );
};

export default PageHeader;