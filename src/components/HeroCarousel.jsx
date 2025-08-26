"use client";
import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUp, ArrowDown } from 'lucide-react';

const slides = [
    {
        overline: "INVEST SMART, SECURE YOUR FUTURE",
        title: "Open A FREE DigiTrade Account",
        description: "Zero Account Opening Charges & Zero Account Maintenance Charges.",
        buttonText: "OPEN YOUR ACCOUNT",
        buttonLink: "/open-account",
        imageUrl: "https://images.unsplash.com/photo-1640653799863-73a7f7c4964b?q=80&w=2070&auto=format&fit=crop",
        bgColor: "bg-light-bg",
        textColor: "text-text-primary"
    },
    {
        overline: "YOUR PATH TO FINANCIAL FREEDOM",
        title: "Unlock Wealth With Mutual Funds",
        description: "Start an SIP today to turn your dreams into reality. We offer Equity, Debt, Hybrid, and Index Funds.",
        buttonText: "INVEST NOW",
        buttonLink: "/mutual-funds",
        imageUrl: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop",
        bgColor: "bg-white",
        textColor: "text-text-primary"
    },
    {
        overline: "FOR YOUR CHILD'S FUTURE",
        title: "Start Your Champ's Investment Journey",
        description: "Secure and protect your children financially with our specially designed minor demat accounts.",
        buttonText: "OPEN MINOR DEMAT ACCOUNT",
        buttonLink: "/minor-demat",
        imageUrl: "https://images.unsplash.com/photo-1565705325211-3b7491a78880?q=80&w=1974&auto=format&fit=crop",
        bgColor: "bg-light-bg",
        textColor: "text-text-primary"
    },
    {
        overline: "PARTNER WITH US FOR SUCCESS",
        title: "Become Our Franchisee",
        description: "Integrated offers you a host of financial services with attractive remuneration and support.",
        buttonText: "ENQUIRE NOW",
        buttonLink: "/franchisee",
        imageUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2190&auto=format&fit=crop",
        bgColor: "bg-white",
        textColor: "text-text-primary"
    },
    {
        overline: "RECOGNIZED FOR EXCELLENCE",
        title: "Great Place to Work Certified!",
        description: "Certified 3 years in a row. Join a team that values growth and collaboration.",
        buttonText: "VIEW CAREERS",
        buttonLink: "/careers",
        imageUrl: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?q=80&w=2070&auto=format&fit=crop",
        bgColor: "bg-light-bg",
        textColor: "text-text-primary"
    },
];

const HeroCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, []);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const timer = setTimeout(nextSlide, 7000); // Auto-slide every 7 seconds
        return () => clearTimeout(timer);
    }, [currentIndex, nextSlide]);

    return (
        <section className="relative w-full h-[85vh] max-h-[800px] min-h-[600px] overflow-hidden">
            {/* Vertical Slider Track */}
            <div
                className="h-full w-full transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateY(-${currentIndex * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div key={index} className="h-full w-full grid grid-cols-1 lg:grid-cols-10">
                        {/* Text Content Panel */}
                        <div className={`lg:col-span-4 flex flex-col justify-center p-8 md:p-16 ${slide.bgColor} ${slide.textColor}`}>
                            <div className="max-w-md mx-auto">
                                <p className="font-semibold tracking-wider text-accent mb-3 animate-slideUp">
                                    {slide.overline.toUpperCase()}
                                </p>
                                <h1 className="text-2xl md:text-2xl font-bold leading-tight mb-5 animate-slideUp" style={{ animationDelay: '0.1s' }}>
                                    {slide.title}
                                </h1>
                                <p className="text-lg text-text-secondary mb-8 animate-slideUp" style={{ animationDelay: '0.2s' }}>
                                    {slide.description}
                                </p>
                                {slide.buttonText && (
                                    <Link href={slide.buttonLink} className="inline-block animate-slideUp" style={{ animationDelay: '0.3s' }}>
                                        <button className="inline-flex items-center font-semibold rounded-full px-8 py-3 bg-accent text-white hover:bg-accent-hover transition-transform hover:scale-105 duration-300 shadow-lg">
                                            {slide.buttonText} <ArrowRight size={20} className="ml-2" />
                                        </button>
                                    </Link>
                                )}
                            </div>
                        </div>
                        {/* Image Panel */}
                        <div className="hidden lg:block lg:col-span-6 relative">
                             <Image
                                src={slide.imageUrl}
                                alt={slide.title}
                                fill
                                className="object-cover"
                                priority={index === 0}
                            />
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Vertical Pagination */}
            <div className="absolute top-1/2 -translate-y-1/2 right-4 md:right-8 flex flex-col items-center space-y-3">
                 {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-primary scale-150' : 'bg-gray-400/70 hover:bg-primary'}`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Vertical Navigation Arrows */}
            <div className="absolute bottom-8 right-4 md:right-8 flex flex-col space-y-2">
                 <button
                    onClick={prevSlide}
                    className="p-2 rounded-full bg-white/50 hover:bg-white transition-colors shadow-md"
                    aria-label="Previous slide"
                >
                    <ArrowUp size={20} className="text-primary" />
                </button>
                <button
                    onClick={nextSlide}
                    className="p-2 rounded-full bg-white/50 hover:bg-white transition-colors shadow-md"
                    aria-label="Next slide"
                >
                    <ArrowDown size={20} className="text-primary" />
                </button>
            </div>
        </section>
    );
};

export default HeroCarousel;