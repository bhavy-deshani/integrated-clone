import Link from 'next/link';

export default function CareersPage() {
    const jobOpenings = [
        { title: 'Security Supervisor', location: 'Mumbai', type: 'Full-time' },
        { title: 'Facility Manager', location: 'Delhi', type: 'Full-time' },
        { title: 'HR Executive', location: 'Bangalore', type: 'Full-time' },
        { title: 'Operations Head', location: 'Pune', type: 'Full-time' },
    ];

    return (
        <div>
            <section className="bg-light-bg py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-2xl md:text-2xl font-bold">Join Our Team</h1>
                    <p className="mt-4 text-lg text-text-secondary max-w-3xl mx-auto">Be a part of a dynamic and growing organization. Explore exciting career opportunities with us.</p>
                </div>
            </section>

            <section className="py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-primary text-center mb-12">Current Openings</h2>
                    <div className="max-w-3xl mx-auto space-y-6">
                        {jobOpenings.map((job, index) => (
                            <div key={index} className="bg-white shadow-lg rounded-xl p-6 flex flex-col md:flex-row justify-between md:items-center transition-shadow hover:shadow-xl">
                                <div>
                                    <h3 className="text-2xl font-bold text-primary">{job.title}</h3>
                                    <p className="text-text-secondary mt-1">{job.location} - <span className="font-medium text-secondary">{job.type}</span></p>
                                </div>
                                <div className="mt-4 md:mt-0">
                                  <Link href="#" className="bg-accent text-white px-6 py-2 rounded-full hover:bg-accent-hover transition-colors font-semibold">
                                    Apply Now
                                  </Link>
                                </div>
                            </div>
                        ))}
                         {jobOpenings.length === 0 && (
                            <p className="text-center text-text-secondary text-lg">There are no current openings. Please check back later!</p>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}