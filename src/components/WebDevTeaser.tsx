'use client';

import Link from 'next/link';
import { FaLaptopCode, FaArrowRight } from 'react-icons/fa';

export default function WebDevTeaser() {
    return (
        <section id="gallery" className="py-16 bg-gradient-to-r from-gray-900 via-gray-900 to-black text-white border-y border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">

                    <div className="flex items-center gap-6">
                        <div className="hidden sm:flex h-16 w-16 bg-blue-600/20 rounded-2xl items-center justify-center text-blue-400 border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                            <FaLaptopCode size={32} />
                        </div>
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                                Looking for Web Development?
                            </h2>
                            <p className="text-gray-400 mt-2 max-w-xl">
                                We craft high-performance websites and applications tailored to your business needs using cutting-edge technology.
                            </p>
                        </div>
                    </div>

                    <Link href="/portfolio">
                        <button className="whitespace-nowrap px-8 py-3 rounded-xl bg-white text-gray-900 font-bold hover:bg-blue-50 transition-colors shadow-lg shadow-white/5 flex items-center gap-2 group">
                            View Our Portfolio <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </Link>

                </div>
            </div>
        </section>
    );
}
