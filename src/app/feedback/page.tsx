import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeedbackForm from '@/components/FeedbackForm';
import { getHiveStats } from '@/app/actions/feedback';

// Force dynamic rendering to ensure stats are fresh
export const dynamic = 'force-dynamic';

export default async function FeedbackPage() {
    const stats = await getHiveStats();

    return (
        <main className="min-h-screen bg-gray-50 dark:bg-gray-950">
            <Navbar />
            <div className="pt-32 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <FeedbackForm initialStats={stats} />
            </div>
            <Footer />
        </main>
    );
}
