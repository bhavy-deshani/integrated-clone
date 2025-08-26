"use client";
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'; // Using icons for consistency

const Footer = () => {
    const SocialLink = ({ href, children }) => (
        <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            {children}
        </a>
    );

  return (
    <footer className="bg-primary text-white">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-10">
                {/* About Section */}
                <div className="space-y-4 md:col-span-2 lg:col-span-1">
                    <Link href="/">
                        <Image 
                            src="https://www.integratedindia.in/assets/img/integrated_enterprises_india_pvt_ltd.png" 
                            alt="Integrated Enterprises" 
                            width={180} 
                            height={60}
                            onError={(e) => { e.currentTarget.src = 'https://placehold.co/180x60/102A55/FFFFFF?text=Integrated'; }}
                        />
                    </Link>
                    <p className="text-gray-300 text-base">
                        Grow your wealth with confidence. Integrated India is your one-stop solution for all your financial needs.
                    </p>
                    <div className="flex space-x-5 pt-2">
                        <SocialLink href="https://www.facebook.com/IntegratedEnterprises/"><Facebook size={20} /></SocialLink>
                        <SocialLink href="https://x.com/IntegratedTweet"><Twitter size={20} /></SocialLink>
                        <SocialLink href="https://www.instagram.com/integratedenterprises/"><Instagram size={20} /></SocialLink>
                        <SocialLink href="https://www.linkedin.com/company/integratedenterprises/"><Linkedin size={20} /></SocialLink>
                    </div>
                </div>

                {/* Quick Links */}
                 <div>
                    <h4 className="text-lg font-bold mb-4 tracking-wider">Quick Links</h4>
                    <ul className="space-y-3 text-gray-300">
                        <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                        <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
                        <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                        <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                         <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                    </ul>
                </div>

                {/* Registered Office */}
                <div>
                    <h4 className="text-lg font-bold mb-4 tracking-wider">Registered Office</h4>
                    <ul className="space-y-3 text-gray-300">
                        <li>5A, 5th Floor, Kences Towers, 1, Ramakrishna St, T. Nagar, Chennai - 600 017.</li>
                        <li><a href="mailto:customercare@integratedindia.in" className="hover:text-white transition-colors">customercare@integratedindia.in</a></li>
                        <li><a href="tel:04428143045" className="hover:text-white transition-colors">044 - 28143045/46</a></li>
                    </ul>
                </div>

                {/* Branch Timings */}
                <div>
                    <h4 className="text-lg font-bold mb-4 tracking-wider">Branch Timings</h4>
                    <ul className="space-y-3 text-gray-300">
                        <li>Mon-Fri: 8.30 A.M to 6.30 P.M</li>
                        <li>Saturday: 9.30 A.M to 1.30 P.M</li>
                        <li><a href="tel:180042523456" className="font-semibold hover:text-white transition-colors">Toll Free: 1800 425 23456</a></li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-gray-700 pt-8 mt-8 text-center text-gray-400 text-sm">
                <p className="mb-2">
                    NSE Member ID: 12718 | BSE Member ID: 6168 | MCX Member ID: 57225 | SEBI REG NO: INZ000095737 | CIN No: U65993TN1987PTC014964
                </p>
                <p>
                    Copyright &copy; {new Date().getFullYear()} Integrated Enterprises (India) Private Ltd. All rights reserved.
                </p>
            </div>
        </div>
    </footer>
  );
};

export default Footer;