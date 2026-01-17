'use client';

import { useState, useRef, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Watermark from '@/components/Watermark';
import { FaSearchPlus, FaSearchMinus, FaUndo } from 'react-icons/fa';

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
    const [scale, setScale] = useState(1);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
    const imgRef = useRef<HTMLImageElement>(null);

    // Reset zoom when image is closed or changed
    useEffect(() => {
        if (!selectedImage) {
            setScale(1);
            setPosition({ x: 0, y: 0 });
        }
    }, [selectedImage]);

    const handleZoomIn = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setScale(prev => Math.min(prev + 0.5, 4));
    };

    const handleZoomOut = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setScale(prev => Math.max(prev - 0.5, 1));
        if (scale <= 1.5) {
            setPosition({ x: 0, y: 0 }); // Reset position if zooming out to near original
        }
    };

    const handleReset = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setScale(1);
        setPosition({ x: 0, y: 0 });
    };

    // Calculate watermark opacity: 1 at scale=1, 0 at scale=3
    const watermarkOpacity = Math.max(0, 1 - (scale - 1) / 1.5);

    const handleMouseDown = (e: React.MouseEvent) => {
        if (scale > 1) {
            setIsDragging(true);
            setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
        }
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (isDragging && scale > 1) {
            e.preventDefault();
            setPosition({
                x: e.clientX - dragStart.x,
                y: e.clientY - dragStart.y
            });
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

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
                    className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
                    onClick={() => setSelectedImage(null)}
                >
                    {/* Controls */}
                    <div className="absolute top-6 left-1/2 -translate-x-1/2 flex items-center gap-4 z-50 bg-black/50 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10" onClick={e => e.stopPropagation()}>
                        <button
                            onClick={handleZoomOut}
                            className="text-white/80 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
                            title="Zoom Out"
                            disabled={scale <= 1}
                        >
                            <FaSearchMinus size={20} />
                        </button>
                        <span className="text-white/50 text-sm font-mono min-w-[3ch] text-center">{Math.round(scale * 100)}%</span>
                        <button
                            onClick={handleZoomIn}
                            className="text-white/80 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
                            title="Zoom In"
                            disabled={scale >= 4}
                        >
                            <FaSearchPlus size={20} />
                        </button>
                        <div className="w-px h-6 bg-white/20 mx-2"></div>
                        <button
                            onClick={handleReset}
                            className="text-white/80 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
                            title="Reset View"
                        >
                            <FaUndo size={18} />
                        </button>
                    </div>

                    <button
                        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50 p-2 hover:bg-white/10 rounded-full"
                        onClick={() => setSelectedImage(null)}
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>

                    <div
                        className="relative w-full h-full flex items-center justify-center overflow-hidden"
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseUp}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div
                            className="relative transition-transform duration-200 ease-out"
                            style={{
                                transform: `scale(${scale}) translate(${position.x / scale}px, ${position.y / scale}px)`,
                                cursor: scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default'
                            }}
                        >
                            <img
                                ref={imgRef}
                                src={selectedImage}
                                alt="Full Screen View"
                                className="max-w-[90vw] max-h-[85vh] object-contain shadow-2xl rounded-sm backdrop-blur-none"
                                onContextMenu={(e) => e.preventDefault()}
                                draggable={false}
                            />

                            {/* Watermark with scaling opacity */}
                            <div className="absolute inset-0 pointer-events-none z-20 flex items-center justify-center">
                                <Watermark
                                    className="!static w-full h-full"
                                    opacity={watermarkOpacity}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </main>
    );
}
