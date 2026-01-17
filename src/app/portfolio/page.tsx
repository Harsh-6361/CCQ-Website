'use client';

import { useState } from 'react';
import Link from 'next/link';
import PortfolioHero from './components/PortfolioHero';
import ScrollingLogos from '@/components/ScrollingLogos';
import WebDevEnquiryModal from './components/WebDevEnquiryModal';
import { FaSchool, FaLaptopCode, FaExternalLinkAlt, FaGithub, FaServer, FaDatabase, FaMobileAlt, FaArrowRight } from 'react-icons/fa';

export default function Portfolio() {
    const [activeCategory, setActiveCategory] = useState<'all' | 'web' | 'app' | 'backend'>('all');
    const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

    const projects = [
        {
            id: 1,
            title: 'EduTrack - School Management',
            category: 'web',
            description: 'A comprehensive ERP solution for schools managing attendance, grades, and fee payments.',
            tags: ['Next.js', 'Django', 'PostgreSQL'],
            color: 'from-blue-600 to-indigo-700',
            icon: <FaSchool size={40} className="text-white" />,
        },
        {
            id: 2,
            title: 'ShopWave E-Commerce',
            category: 'web',
            description: 'Full-featured online store with real-time inventory, secure checkout, and admin dashboard.',
            tags: ['React', 'Node.js', 'MongoDB'],
            color: 'from-purple-600 to-pink-700',
            icon: <FaLaptopCode size={40} className="text-white" />,
        },
        {
            id: 3,
            title: 'HealthMate App',
            category: 'app',
            description: 'Mobile application for tracking fitness goals, diet plans, and connecting with trainers.',
            tags: ['React Native', 'Firebase'],
            color: 'from-green-500 to-teal-600',
            icon: <FaMobileAlt size={40} className="text-white" />,
        },
        {
            id: 4,
            title: 'SecureVault API',
            category: 'backend',
            description: 'High-security financial transaction processing API with banking-grade encryption.',
            tags: ['Python', 'FastAPI', 'Docker'],
            color: 'from-orange-500 to-red-600',
            icon: <FaServer size={40} className="text-white" />,
        },
        {
            id: 5,
            title: 'Zonal Calculator',
            category: 'web',
            description: 'Automated tool for real estate feasibility analysis and zonal regulations.',
            tags: ['Next.js', 'Typescript', 'Tailwind'],
            color: 'from-cyan-500 to-blue-600',
            icon: <FaDatabase size={40} className="text-white" />,
        }
    ];

    /* Icon imports fix - FaSchool wasn't imported */
    function FaSchool(props: { size?: number, className?: string }) {
        return (
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" height={props.size} width={props.size} className={props.className} xmlns="http://www.w3.org/2000/svg"><path d="M0 224v272c0 8.84 7.16 16 16 16h80V192H32c-17.67 0-32 14.33-32 32zm160-32h224v320H160V192zm384 32v272c0 8.84 7.16 16 16 16h80V192h-64c-17.67 0-32 14.33-32 32zm-48-32v320h-96V192h96zM256 224v64h128v-64H256zm0 128v64h128v-64H256zM96 0C42.98 0 0 42.98 0 96v64h640V96c0-53.02-42.98-96-96-96H96z"></path></svg>
        )
    }

    const filteredProjects = activeCategory === 'all'
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <main className="bg-black min-h-screen">

            <PortfolioHero />

            {/* Tech Stack Marquee */}
            <section id="tech-stack" className="py-20 bg-gray-900/50 border-y border-gray-800 relative z-20">
                <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
                    <h3 className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-2">Technologies We Master</h3>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Powering Your Success</h2>
                </div>
                <ScrollingLogos speed="normal" direction="left" />
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20 px-6 bg-black">
                <div className="max-w-7xl mx-auto">

                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Selected Work</h2>
                            <p className="text-gray-400 max-w-xl mb-4">
                                A collection of projects that define our expertise in web and mobile development.
                            </p>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-800 text-blue-400 text-xs font-bold uppercase tracking-wider animate-pulse">
                                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                                Works will be updated soon
                            </div>
                        </div>

                        {/* Filter Buttons */}
                        <div className="flex bg-gray-900 p-1 rounded-xl">
                            {['all', 'web', 'app', 'backend'].map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat as any)}
                                    className={`px-4 py-2 rounded-lg text-sm font-bold capitalize transition-all ${activeCategory === cat
                                        ? 'bg-gray-800 text-white shadow-md'
                                        : 'text-gray-500 hover:text-gray-300'
                                        }`}
                                >
                                    {cat === 'all' ? 'All' : cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Grid */}


                </div>
            </section>

            {/* Tech Stack Marquee */}


            {/* CTA */}
            <section className="py-32 px-6 bg-black relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
                        LET'S BUILD SOMETHING <br />
                        <span className="text-blue-500">EXTRAORDINARY</span>
                    </h2>
                    <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                        Ready to take your digital presence to the next level? creating your vision start today.
                    </p>
                    <button
                        onClick={() => setIsEnquiryOpen(true)}
                        className="px-10 py-5 bg-white text-black font-bold text-lg rounded-full hover:bg-blue-500 hover:text-white transition-all shadow-xl hover:shadow-blue-500/50"
                    >
                        Start a Project
                    </button>
                </div>
            </section>

            <WebDevEnquiryModal
                isOpen={isEnquiryOpen}
                onClose={() => setIsEnquiryOpen(false)}
            />

        </main>
    );
}
