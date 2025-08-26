export default function ContactPage() {
    return (
        <div>
            <section className="bg-light-bg py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-2xl md:text-2xl font-bold">Contact Us</h1>
                    <p className="mt-4 text-lg text-text-secondary max-w-3xl mx-auto">We'd love to hear from you. Reach out to us for any inquiries or to get a quote for our services.</p>
                </div>
            </section>

            <section className="py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-2xl">
                        <h2 className="text-2xl font-bold text-primary mb-8 text-center">Get in Touch</h2>
                        <form>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">Your Name</label>
                                    <input type="text" id="name" placeholder="John Doe" className="w-full p-3 bg-light-bg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">Your Email</label>
                                    <input type="email" id="email" placeholder="john.doe@example.com" className="w-full p-3 bg-light-bg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary" />
                                </div>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="subject" className="block text-sm font-medium text-text-primary mb-2">Subject</label>
                                <input type="text" id="subject" placeholder="Inquiry about Security Services" className="w-full p-3 bg-light-bg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary" />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">Your Message</label>
                                <textarea id="message" placeholder="Please describe your needs..." rows="6" className="w-full p-3 bg-light-bg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"></textarea>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn btn-secondary">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}