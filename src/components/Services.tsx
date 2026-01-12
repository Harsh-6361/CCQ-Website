'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaSchool, FaLaptopCode } from 'react-icons/fa';
import EnquiryModal from './EnquiryModal';

export default function Services() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const schoolServices = [
        { title: "Hackathons", desc: "Team up, solve problems, and win with creative solutions.", gradient: "from-orange-400 to-yellow-300" },
        { title: "Ideathons", desc: "Brainstorming marathons to turn sparks of imagination into fire.", gradient: "from-pink-400 to-rose-300" },
        { title: "Bootcamps", desc: "Intensive training sessions in AI, IoT, and modern tech.", gradient: "from-blue-400 to-indigo-300" },
        { title: "Cybersecurity", desc: "Workshops on internet safety and digital self-defense.", gradient: "from-cyan-400 to-blue-300" },
        { title: "Career Guidance", desc: "Expert advice to help students choose the right path.", gradient: "from-purple-400 to-violet-300" },
        { title: "Scholarships", desc: "Financial aid and support for deserving young talent.", gradient: "from-emerald-400 to-teal-300" },
        { title: "Entrepreneurship", desc: "Learning how to build, launch, and lead a startup.", gradient: "from-amber-400 to-orange-300" },
        { title: "Web Development", desc: "Teaching kids to build and deploy their own websites.", gradient: "from-indigo-400 to-blue-300" },
        { title: "Mind Hack", desc: "Cognitive drills to boost memory, focus, and creativity.", gradient: "from-red-400 to-pink-300" },
        { title: "Interactive CCQ Science", desc: "Hands-on science experiments mixed with tech.", gradient: "from-green-400 to-lime-300" },
    ];

    const techServices = [
        { title: "Web Development", desc: "Custom websites built for performance and scale.", color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400" },
        { title: "App Development", desc: "Native and cross-platform mobile applications.", color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400" },
        { title: "Maintenance", desc: "Ongoing support ensuring 99.9% uptime and security.", color: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400" },
        { title: "Cybersecurity", desc: "Enterprise-grade protection for digital assets.", color: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400" },
        { title: "Infrastructure Dev", desc: "Robust cloud architecture and backend systems.", color: "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400" },
    ];

    return (
        <section id="services" className="py-24 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Our Services</h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        Bridging the gap between education and industry with tailored solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Column 1: For Schools */}
                    <div>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 rounded-2xl bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400">
                                <FaSchool size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">For Schools & Students</h3>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {schoolServices.map((service, idx) => (
                                <div key={idx} className="group relative bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all hover:-translate-y-1">
                                    <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${service.gradient} rounded-l-xl`}></div>
                                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">{service.title}</h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-snug">{service.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Tech Services */}
                    <div>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 rounded-2xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                                <FaLaptopCode size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Tech Solutions</h3>
                        </div>

                        <div className="space-y-4">
                            {techServices.map((service, idx) => (
                                <div key={idx} className="flex items-start gap-4 p-5 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-blue-500/30 transition-all hover:shadow-md">
                                    <div className={`mt-1 flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center font-bold ${service.color}`}>
                                        {idx + 1}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 transition-colors">{service.title}</h4>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm">{service.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA Box */}
                        <div className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl text-white text-center shadow-lg transform hover:scale-[1.02] transition-all">
                            <h4 className="font-bold text-xl mb-2">Need a Custom Solution?</h4>
                            <p className="text-blue-100 text-sm mb-4">We build software that scales with your ambition.</p>
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="px-6 py-2 bg-white text-blue-600 rounded-full font-bold text-sm hover:bg-gray-50 transition-colors shadow-sm"
                            >
                                Get in Touch
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            {/* Custom Solution Modal */}
            <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

        </section>
    );
}
