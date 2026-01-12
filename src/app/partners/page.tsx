import Navbar from '@/components/Navbar';
import Partners from '@/components/Partners';
import Footer from '@/components/Footer';

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Our Partners | CodeQuest',
    description: 'CodeQuest partners with leading schools and organizations to bring tech education to every classroom.',
};

export default function PartnersPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-gray-950">
            <Navbar />
            <div className="pt-20">
                <Partners />
            </div>
            <Footer />
        </main>
    );
}
