'use client';

import { FaArrowRight } from 'react-icons/fa';

export default function Partners() {
    const partners = [
        { name: "Maithry Vidyanikethan", link: "/partners/maithry-vidyanikethan" },
        { name: "Medhasya Academy", link: "/partners/medhasya-academy" },
        { name: "VVS", link: "/partners/vvs" },
        { name: "Goldenbee School", link: "/partners/goldenbee-school" },
    ];

    return (
        <section id="partners" className="py-20 bg-white dark:bg-gray-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Educational Partners</h2>
                    <p className="text-gray-600 dark:text-gray-400">We partner with forward-thinking schools to bring technology education to students.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {partners.map((partner, idx) => (
                        <a key={idx} href={partner.link} className="group relative block bg-gray-50 dark:bg-gray-900 rounded-xl p-8 text-center border border-gray-100 dark:border-gray-800 hover:border-blue-500/30 transition-all overflow-hidden">
                            <div className="relative z-10 flex flex-col h-full justify-between min-h-[140px]">
                                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {partner.name}
                                </h3>

                                <div className="mt-4 flex items-center justify-center text-blue-600 font-medium text-sm opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                    View More <FaArrowRight className="ml-2 text-xs" />
                                </div>
                            </div>

                            {/* Hover Background Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent dark:from-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
