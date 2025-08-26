"use client";
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

const benefits = [
    'Zero Account Opening Charges',
    'Zero AMC for the First Year',
    'Access to All Investment Products',
];

const Hero = () => {
    return (
        <section className="relative w-full h-[90vh] max-h-[850px] min-h-[600px] grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
            {/* Left Side: Text Content */}
            <div className="bg-light-bg flex flex-col justify-center p-8 md:p-16 z-10">
                <div className="max-w-md mx-auto">
                    <h1 className="text-2xl md:text-6xl font-extrabold leading-tight mb-6 text-primary animate-slideUp">
                        Your Long Term Wealth Partner
                    </h1>
                    <p className="text-lg text-text-secondary mb-8 animate-slideUp" style={{ animationDelay: '0.2s' }}>
                        Invest in Stocks, Mutual Funds, IPOs, and more. Open your FREE Demat account today and start your journey to financial freedom.
                    </p>
                    
                    <ul className="space-y-3 mb-10 animate-slideUp" style={{ animationDelay: '0.3s' }}>
                        {benefits.map((benefit, index) => (
                            <li key={index} className="flex items-center text-text-secondary">
                                <CheckCircle size={20} className="text-accent mr-3 flex-shrink-0" />
                                <span>{benefit}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="animate-slideUp" style={{ animationDelay: '0.4s' }}>
                        <Link href="/open-account" className="inline-block">
                            <button className="btn btn-secondary">
                                Open a FREE Account <ArrowRight size={20} className="ml-2" />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Right Side: Video Background */}
            <div className="relative hidden lg:block">
                <div className="absolute inset-0 bg-primary opacity-20 z-10"></div>
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    src="https://cdn.pixabay.com/video/2024/05/29/211385_large.mp4"
                ></video>
            </div>
        </section>
    );
};

export default Hero;