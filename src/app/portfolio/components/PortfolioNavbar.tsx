'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes, FaCode } from 'react-icons/fa';
import WebDevEnquiryModal from './WebDevEnquiryModal';

export default function PortfolioNavbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">

                        {/* Logo */}
                        <Link href="/portfolio" className="flex items-center gap-2 group">
                            <div className="p-2 bg-blue-600 rounded-lg group-hover:bg-blue-500 transition-colors">
                                <FaCode className="text-white text-xl" />
                            </div>
                            <span className="text-xl font-bold text-white tracking-wider">
                                DEV<span className="text-blue-500">PORTFOLIO</span>
                            </span>
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden md:block">
                            <div className="flex items-baseline space-x-8">
                                <Link href="/portfolio" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                    Home
                                </Link>
                                <Link href="#projects" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                    Projects
                                </Link>
                                <Link href="#tech-stack" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                    Tech Stack
                                </Link>
                                <Link href="/" className="text-gray-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1">
                                    Back to Main Site
                                </Link>
                                <button
                                    onClick={() => setIsEnquiryOpen(true)}
                                    className="ml-4 px-5 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-sm font-bold rounded-full transition-all shadow-lg hover:shadow-blue-500/25"
                                >
                                    Hire Me
                                </button>
                            </div>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
                            >
                                {isOpen ? <FaTimes /> : <FaBars />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden bg-gray-900 border-b border-gray-800">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <Link href="/portfolio" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                                Home
                            </Link>
                            <Link href="#projects" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                                Projects
                            </Link>
                            <Link href="#tech-stack" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                                Tech Stack
                            </Link>
                            <Link href="/" className="text-gray-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                                Back to Main Site
                            </Link>
                            <div className="pt-4">
                                <button
                                    onClick={() => {
                                        setIsOpen(false);
                                        setIsEnquiryOpen(true);
                                    }}
                                    className="w-full px-5 py-3 bg-blue-600 text-white font-bold rounded-lg"
                                >
                                    Hire Me
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </nav>

            <WebDevEnquiryModal
                isOpen={isEnquiryOpen}
                onClose={() => setIsEnquiryOpen(false)}
            />
        </>
    );
}
