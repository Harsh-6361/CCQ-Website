'use client';

import { useState, useEffect } from 'react';
import { FaCalendarAlt, FaArrowRight, FaMapMarkerAlt } from 'react-icons/fa';
import Link from 'next/link';

export default function EventBoard() {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        // Target Date: Jan 26, 2026
        const targetDate = new Date('2026-01-24T00:00:00').getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                clearInterval(interval);
                return;
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000),
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-white/50 dark:border-gray-700 rounded-3xl p-6 shadow-2xl relative overflow-hidden h-full flex flex-col justify-center">
            {/* Decorative header */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
                Ongoing & Upcoming
            </h3>

            <div className="space-y-6">
                {/* Event 1: Workshop */}
                <div className="group p-4 rounded-2xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 hover:border-blue-300 transition-all cursor-pointer">
                    <div className="flex flex-row justify-between items-center gap-4">
                        {/* Left Column: Info */}
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs font-bold px-2 py-1 rounded-md uppercase tracking-wide">
                                    Workshop
                                </span>
                                <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1 font-medium">
                                    <FaCalendarAlt /> Jan, 2026
                                </span>
                            </div>
                            <h4 className="font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 transition-colors">Workshop in the Hive</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300">Conducted by GoldenBee School</p>
                        </div>

                        {/* Right Column: Feedback Button */}
                        <div className="flex-shrink-0">
                            <Link href="/feedback">
                                <button className="flex flex-col items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 group-hover:bg-blue-700">
                                    <span className="text-xs font-semibold uppercase tracking-wider mb-1">Feedback</span>
                                    <span className="text-[10px] opacity-80">Form</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Event 2: Hackathon with Countdown */}
                <div className="group p-4 rounded-2xl bg-purple-50 dark:bg-purple-900/20 border border-purple-100 dark:border-purple-800 hover:border-purple-300 transition-all">
                    <div className="flex justify-between items-start mb-3">
                        <span className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 text-xs font-bold px-2 py-1 rounded-md uppercase tracking-wide">
                            Hackathon
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1 font-medium">
                            <FaCalendarAlt /> Jan 24, 2026
                        </span>
                    </div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1 group-hover:text-purple-600 transition-colors">Interschool Hackathon</h4>

                    {/* Updated Organizer and Venue Info */}
                    <div className="space-y-1 mb-4">
                        <p className="text-sm text-gray-700 dark:text-gray-200 font-medium">Organized by <span className="text-purple-600 dark:text-purple-400">C/CodeQuest</span></p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                            <FaMapMarkerAlt /> Venue: GoldenBee School
                        </p>
                    </div>

                    {/* Countdown Timer */}
                    <div className="grid grid-cols-4 gap-2 text-center">
                        <div className="bg-white dark:bg-gray-800 rounded-lg p-2 shadow-sm border border-gray-100 dark:border-gray-700">
                            <div className="text-lg font-bold text-purple-600 dark:text-purple-400">{timeLeft.days}</div>
                            <div className="text-[10px] uppercase text-gray-500 font-medium">Days</div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 rounded-lg p-2 shadow-sm border border-gray-100 dark:border-gray-700">
                            <div className="text-lg font-bold text-purple-600 dark:text-purple-400">{timeLeft.hours}</div>
                            <div className="text-[10px] uppercase text-gray-500 font-medium">Hrs</div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 rounded-lg p-2 shadow-sm border border-gray-100 dark:border-gray-700">
                            <div className="text-lg font-bold text-purple-600 dark:text-purple-400">{timeLeft.minutes}</div>
                            <div className="text-[10px] uppercase text-gray-500 font-medium">Mins</div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 rounded-lg p-2 shadow-sm border border-gray-100 dark:border-gray-700">
                            <div className="text-lg font-bold text-purple-600 dark:text-purple-400">{timeLeft.seconds}</div>
                            <div className="text-[10px] uppercase text-gray-500 font-medium">Secs</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
