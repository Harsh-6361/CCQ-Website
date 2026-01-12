'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Watermark from '@/components/Watermark';

export default function GalleryContent() {
    // Placeholder images array (using Unsplash source for variety)
    // Placeholder images array (using Unsplash source for variety)
    const galleryImages = [
        "/Gallery/IMG-20251128-WA0003.jpg",
        "/Gallery/IMG_1088.jpg",
        "/Gallery/IMG_1090.jpg",
        "/Gallery/IMG_1100.jpg",
        "/Gallery/IMG_1106.jpg",
        "/Gallery/IMG_20251125_150828.jpg",
        "/Gallery/IMG_6838.jpg",
        "/Gallery/IMG_6886.jpg",

    ];

    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <main className="min-h-screen bg-white dark:bg-gray-950">
            <Navbar />
            <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Gallery</h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400">Capturing moments of innovation, learning, and fun.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {galleryImages.map((src, idx) => (
                        <div
                            key={idx}
                            onClick={() => setSelectedImage(src)}
                            className="group relative aspect-video bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all hover:scale-[1.02] cursor-pointer"
                        >
                            <img
                                src={src}
                                alt={`Gallery Image ${idx + 1}`}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                draggable={false}
                            />
                            <Watermark />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center relative z-30">
                                <span className="text-white border border-white px-4 py-2 rounded-full backdrop-blur-sm hover:bg-white hover:text-black transition-colors">View</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Image Modal / Lightbox */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50"
                        onClick={() => setSelectedImage(null)}
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>

                    <div
                        className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center overflow-hidden rounded-lg shadow-2xl"
                        onClick={(e) => e.stopPropagation()} // Prevent close when clicking image area
                    >
                        <img
                            src={selectedImage}
                            alt="Full Screen View"
                            className="max-w-full max-h-[90vh] object-contain"
                            onContextMenu={(e) => e.preventDefault()}
                            draggable={false}
                        />
                        <Watermark className="scale-150" />
                    </div>
                </div>
            )}

            <Footer />
        </main>
    );
}
