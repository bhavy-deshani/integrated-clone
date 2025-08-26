import Image from 'next/image';
import { Target, Eye, Gem } from 'lucide-react';
import PageHeader from '@/components/PageHeader';

export const metadata = {
  title: 'About Us | Integrated',
  description: 'Learn more about Integrated\'s journey, our mission, vision, and the core values that drive our commitment to client success.',
};
export default function AboutPage() {
  return (
    <div>
     <PageHeader
        title="About Us"
        subtitle="Discover our journey, our commitment to excellence, and the core values that drive us."
        breadcrumbs={[
            { name: 'Home', href: '/' },
            { name: 'About Us', href: '/about' }
        ]}
      />
      {/* Page Header */}
     

      {/* Company Overview */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">Who We Are</h2>
              <p className="text-lg text-text-secondary mb-4">
                Founded over two decades ago, Integrated Services has grown to become a leading provider of facility management, security, and business support solutions in India. Our journey is built on a foundation of trust, integrity, and a relentless commitment to client satisfaction.
              </p>
              <p className="text-lg text-text-secondary">
                We believe in building long-term partnerships with our clients by understanding their unique needs and delivering customized, high-quality services. Our dedicated team of professionals is our greatest asset, driving our success and ensuring we exceed expectations.
              </p>
            </div>
            <div>
              <Image 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2190&auto=format&fit=crop"
                alt="Our Team"
                width={600}
                height={400}
                className="rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission, Vision, Values */}
      <section className="bg-light-bg py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center justify-center w-16 h-16 bg-secondary/10 text-secondary rounded-full mx-auto mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Our Mission</h3>
              <p className="text-text-secondary">To deliver superior service and value to our clients through innovative solutions and a highly trained, motivated workforce.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center justify-center w-16 h-16 bg-secondary/10 text-secondary rounded-full mx-auto mb-6">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Our Vision</h3>
              <p className="text-text-secondary">To be the most trusted and respected integrated services provider in India, known for our commitment to quality and excellence.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center justify-center w-16 h-16 bg-secondary/10 text-secondary rounded-full mx-auto mb-6">
                <Gem className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Our Values</h3>
              <p className="text-text-secondary">Integrity, Professionalism, Teamwork, and Client-Centricity are the core principles that guide our actions.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}