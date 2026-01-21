'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaClipboardList } from 'react-icons/fa';

export default function HackathonRegisterButton() {
    const pathname = usePathname();

    // Hide button on the feedback page and portfolio section
    // We can probably keep the check for /feedback just in case, or remove it if that page is going away.
    // For now, I'll keep the exclude logic similar to avoid showing it where it shouldn't be.
    if (pathname === '/feedback' || pathname?.startsWith('/portfolio')) return null;

    return (
        <Link
            href="https://forms.gle/DnzCXSSaMe3ZFHn97"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed right-0 top-1/2 -translate-y-1/2 z-[90] hidden md:flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white py-4 px-4 rounded-l-2xl shadow-lg transition-all duration-300 hover:pr-6 group border-l-2 border-t-2 border-b-2 border-white/20"
        >
            <span className="writing-mode-vertical text-sm font-bold tracking-widest uppercase transform rotate-180" style={{ writingMode: 'vertical-rl' }}>
                Register Now
            </span>
            <FaClipboardList className="text-xl animate-pulse" />
        </Link>
    );
}
