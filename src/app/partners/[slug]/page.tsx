import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export function generateStaticParams() {
    return [
        { slug: 'maithry-vidyanikethan' },
        { slug: 'medhasya-academy' },
        { slug: 'vvs' },
        { slug: 'goldenbee-school' },
    ];
}

interface PartnerData {
    name: string;
    description: string[];
    image?: string;
}

export default function PartnerDetail({ params }: { params: { slug: string } }) {
    const { slug } = params;

    const partnerContent: Record<string, PartnerData> = {
        'maithry-vidyanikethan': {
            name: "Maithry Vidyanikethan",
            description: [
                "Maithry Vidyanikethan is a beacon of holistic education, committed to nurturing young minds with a perfect blend of academics and innovation.",
                "Our partnership with Maithry Vidyanikethan has led to transformative workshops where students explored the realms of coding, robotics, and creative problem-solving. The enthusiasm displayed by the students is a testament to the school's forward-thinking approach to education.",
                "Together, we are empowering the next generation to be creators, not just consumers, of technology."
            ],
            image: "/Gallery/IMG-20251128-WA0003.jpg"
        }
        // Add other partners here as needed
    };

    const data = partnerContent[slug];

    return (
        <main className="min-h-screen bg-white dark:bg-gray-950 flex flex-col">
            <Navbar />
            <div className="flex-grow pt-32 pb-20 px-4">
                <div className="max-w-4xl mx-auto">
                    {data ? (
                        <div className="animate-fade-in-up">
                            {/* Header */}
                            <div className="text-center mb-12">
                                <span className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-6 inline-block">
                                    Educational Partner
                                </span>
                                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                                    {data.name}
                                </h1>
                                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
                            </div>

                            {/* Content Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                                {/* Image Column */}
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-blue-600 rounded-2xl rotate-3 opacity-20 group-hover:rotate-6 transition-transform duration-300"></div>
                                    <div className="relative bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                                        {data.image ? (
                                            <img
                                                src={data.image}
                                                alt={`${data.name} Event`}
                                                className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-gray-400">
                                                <span>No Image Available</span>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Text Column */}
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Empowering Students Together</h3>
                                    <div className="text-gray-600 dark:text-gray-300 space-y-4 leading-relaxed text-lg">
                                        {data.description.map((paragraph, idx) => (
                                            <p key={idx}>{paragraph}</p>
                                        ))}
                                    </div>

                                    <div className="pt-4">
                                        <Link href="/#contact">
                                            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-1">
                                                Start a Partnership
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        /* Fallback for other partners */
                        <div className="text-center py-20 animate-fade-in">
                            <div className="w-24 h-24 mx-auto bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-4xl mb-6">
                                🛠️
                            </div>
                            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                Partner Profile Updating...
                            </h1>
                            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto">
                                We are currently curating the success story and details for this educational partner. Please check back soon!
                            </p>
                            <Link href="/partners">
                                <button className="px-6 py-3 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium hover:scale-105 transition-transform">
                                    Back to Partners
                                </button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </main>
    );
}
