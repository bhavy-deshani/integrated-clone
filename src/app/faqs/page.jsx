import fs from 'fs';
import path from 'path';
import PageHeader from '@/components/PageHeader';
import FAQView from './FAQView'; // We will create this next

export const metadata = {
  title: 'Frequently Asked Questions | Integrated',
  description: 'Find answers to common questions about our products and services, including Equity, Demat, NPS, and more.',
};

// This function reads the JSON data from your file
function getFaqData() {
    const filePath = path.join(process.cwd(), 'faqs.json');
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(jsonData);
}

export default function FAQsPage() {
    const faqs = getFaqData();

    return (
        <div className="bg-white min-h-screen">
            <PageHeader 
                title="Frequently Asked Questions"
                subtitle="Have a question? Find answers to our most common inquiries below."
                breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'FAQs', href: '/faqs' }]}
            />
            <FAQView faqs={faqs} />
        </div>
    );
}