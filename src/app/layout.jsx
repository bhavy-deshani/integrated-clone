import { Jost } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ClientWrapper from '@/components/ClientWrapper';
import Chatbot from '@/components/Chatbot';
import BackgroundAnimation from '@/components/BackgroundAnimation'; // Import the new component

const jost = Jost({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Integrated Services - Your Trusted Partner',
  description: 'Providing integrated facility management, security, and business support services.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* ADDED: bg-light-bg to see the container */}
      <body className={`${jost.className} font-sans bg-light-bg overflow-hidden`}>
      <ClientWrapper>
          <Header />
        {/* ADDED: Main container div for the boxed layout */}
          <main>{children}</main>
          <Footer />
          </ClientWrapper>
           <Chatbot />
      </body>
    </html>
  )
}

