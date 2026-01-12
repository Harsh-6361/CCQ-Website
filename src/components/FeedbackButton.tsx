'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaCommentDots } from 'react-icons/fa';

export default function FeedbackButton() {
    const pathname = usePathname();

    // Hide button on the feedback page itself to avoid redundancy
    if (pathname === '/feedback') return null;

    return (
        <Link href="/feedback" className="fixed right-0 top-1/2 -translate-y-1/2 z-[90] hidden md:flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-l-2xl shadow-lg transition-all duration-300 hover:pr-6 group">
            <span className="writing-mode-vertical text-sm font-bold tracking-widest uppercase transform rotate-180" style={{ writingMode: 'vertical-rl' }}>
                Feedback
            </span>
            <FaCommentDots className="text-xl animate-pulse" />
        </Link>
    );
}
