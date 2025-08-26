import { Factory, Landmark, Hospital, ShoppingCart, School, Plane } from 'lucide-react';

export default function IndustriesPage() {
    const industries = [
        { icon: <Factory size={48} className="text-secondary" />, name: 'Manufacturing' },
        { icon: <Landmark size={48} className="text-secondary" />, name: 'Corporate & IT' },
        { icon: <Hospital size={48} className="text-secondary" />, name: 'Healthcare' },
        { icon: <ShoppingCart size={48} className="text-secondary" />, name: 'Retail' },
        { icon: <School size={48} className="text-secondary" />, name: 'Education' },
        { icon: <Plane size={48} className="text-secondary" />, name: 'Aviation' },
    ];

    return (
        <div>
            <section className="bg-light-bg py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-2xl md:text-2xl font-bold">Industries We Serve</h1>
                    <p className="mt-4 text-lg text-text-secondary max-w-3xl mx-auto">Providing tailored solutions for a diverse range of sectors with industry-specific expertise.</p>
                </div>
            </section>

            <section className="py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                        {industries.map((industry, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center justify-center text-center hover:shadow-xl hover:scale-105 transition-all duration-300">
                                {industry.icon}
                                <h3 className="text-2xl font-semibold text-primary mt-5">{industry.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}