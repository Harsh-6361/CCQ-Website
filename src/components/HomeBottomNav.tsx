'use client';

import Link from 'next/link';
import { FaEnvelope, FaImages, FaLaptopCode } from 'react-icons/fa';
import { useState } from 'react';
import WebDevEnquiryModal from '@/app/portfolio/components/WebDevEnquiryModal'; // Reusing or creating new?
// Actually, for Home Page "Enquire", we usually just scroll to contact or open a modal.
// User said "Enquire". I'll use the existing contact section scroll or the modal if preferred.
// Let's use the WebDevEnquiryModal for consistency if it's "Web Solution" related, but for general "Enquire", maybe just scroll to #contact.
// However, "Web Solution" leads to portfolio. "Enquire" might be general.
// "Gallay" (Gallery).

export default function HomeBottomNav() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const navItems = [
        {
            name: 'Enquire',
            icon: <FaEnvelope />,
            action: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }),
            isLink: false,
            color: 'text-blue-500'
        },
        {
            name: 'Gallery',
            icon: <FaImages />,
            action: () => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' }), // Assuming gallery section exists or will create
            isLink: false, // or true if it's a page
            color: 'text-purple-500'
        },
        {
            name: 'Web Solution',
            icon: <FaLaptopCode />,
            href: '/portfolio',
            isLink: true,
            color: 'text-green-500'
        }
    ];

    return (
        <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border border-gray-200 dark:border-gray-800 rounded-2xl shadow-2xl p-2 flex justify-between items-center px-6 transition-all duration-300">
            {navItems.map((item, idx) => {
                if (item.isLink) {
                    return (
                        <Link
                            key={idx}
                            href={item.href || '#'}
                            className="flex flex-col items-center gap-1 p-2 active:scale-95 transition-transform"
                        >
                            <span className={`text-xl ${item.color}`}>{item.icon}</span>
                            <span className="text-[10px] font-medium text-gray-600 dark:text-gray-300">{item.name}</span>
                        </Link>
                    )
                } else {
                    return (
                        <button
                            key={idx}
                            onClick={item.action}
                            className="flex flex-col items-center gap-1 p-2 active:scale-95 transition-transform"
                        >
                            <span className={`text-xl ${item.color}`}>{item.icon}</span>
                            <span className="text-[10px] font-medium text-gray-600 dark:text-gray-300">{item.name}</span>
                        </button>
                    )
                }
            })}
        </div>
    );
}
