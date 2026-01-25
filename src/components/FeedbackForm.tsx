'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FaCheckCircle, FaTimes, FaStar, FaArrowLeft } from 'react-icons/fa';
import { submitHiveFeedback } from '@/app/actions/feedback';

interface FeedbackFormProps {
    initialStats: {
        total: number;
        average: string;
    };
}

export default function FeedbackForm({ initialStats }: FeedbackFormProps) {
    const router = useRouter();
    const [stats, setStats] = useState(initialStats);
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [role, setRole] = useState("Student");

    // Auto-redirect effect when modal opens
    useEffect(() => {
        let timeout: NodeJS.Timeout;
        if (showModal) {
            timeout = setTimeout(() => {
                router.push('/');
            }, 3000); // Redirect after 3 seconds
        }
        return () => clearTimeout(timeout);
    }, [showModal, router]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (rating === 0) {
            alert("Please provide a rating.");
            return;
        }
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        formData.append('clarity_rating', rating.toString());

        try {
            const result = await submitHiveFeedback(formData);

            if (result.success) {
                setStats(result.stats);
                setShowModal(true);
                (e.target as HTMLFormElement).reset();
                setRating(0);
                setRole("Student");
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Submission error", error);
            alert("Error submitting form. Please check your connection.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 dark:border-gray-700 relative">

            {/* Back Button */}
            <button
                onClick={() => router.back()}
                className="absolute top-4 left-4 md:top-8 md:left-8 p-2 text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors bg-gray-50 dark:bg-gray-700 rounded-full"
                aria-label="Go Back"
            >
                <FaArrowLeft size={18} />
            </button>

            {/* Live Stats Badge */}
            <div className="absolute top-4 right-4 md:top-8 md:right-8 bg-blue-50 dark:bg-blue-900/30 px-4 py-2 rounded-xl text-center border border-blue-100 dark:border-blue-800">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{stats.average} ★</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{stats.total} submissions</div>
            </div>

            <div className="text-center mb-10 pt-8 md:pt-4">
                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4 inline-block">
                    Event Feedback
                </span>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Workshop in the Hive</h1>
                <p className="text-gray-600 dark:text-gray-400">
                    We&apos;d love to hear your thoughts! Your feedback helps us create better experiences.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">

                {/* Personal Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                        <input type="text" id="name" name="name" placeholder="Your Name" required
                            className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-gray-950 focus:ring-0 text-gray-900 dark:text-white transition-all" />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Phone Number</label>
                        <input type="tel" id="phone" name="phone" placeholder="+91 XXXXX XXXXX" required
                            className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-gray-950 focus:ring-0 text-gray-900 dark:text-white transition-all" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="school" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">School / Institution</label>
                        <input type="text" id="school" name="school" placeholder="Goldenbee, etc." required
                            className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-gray-950 focus:ring-0 text-gray-900 dark:text-white transition-all" />
                    </div>
                    <div>
                        <label htmlFor="role" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Role</label>
                        <select id="role" name="role" value={role} onChange={(e) => setRole(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-gray-950 focus:ring-0 text-gray-900 dark:text-white transition-all appearance-none cursor-pointer">
                            <option value="Student">Student</option>
                            <option value="Teacher">Teacher</option>
                            <option value="Organizer">Organizer</option>
                        </select>
                    </div>
                </div>

                {/* Rating Section */}
                <div className="py-2">
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-4 text-center">Clarity of Workshop Objectives</label>
                    <div className="flex justify-center gap-2">
                        {[...Array(5)].map((_, index) => {
                            const ratingValue = index + 1;
                            return (
                                <label key={index} className="cursor-pointer group">
                                    <input
                                        type="radio"
                                        name="clarity_rating"
                                        value={ratingValue}
                                        onClick={() => setRating(ratingValue)}
                                        className="hidden"
                                    />
                                    <FaStar
                                        className="transition-all duration-200 group-hover:scale-110"
                                        size={36}
                                        color={ratingValue <= (hover || rating) ? "#fbbf24" : "#e5e7eb"}
                                        onMouseEnter={() => setHover(ratingValue)}
                                        onMouseLeave={() => setHover(0)}
                                    />
                                </label>
                            );
                        })}
                    </div>
                    <p className="text-center text-xs text-gray-400 mt-2">{rating > 0 ? `You selected: ${rating} Star${rating > 1 ? 's' : ''}` : 'Tap a star to rate'}</p>
                </div>

                {/* Feedback Body */}
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Feedback & Comments</label>
                    <textarea id="message" name="message" rows={4} placeholder="What did you like? What can we improve?" required
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-gray-950 focus:ring-0 text-gray-900 dark:text-white transition-all resize-none"></textarea>
                </div>

                {/* Teacher/Organizer Conditional */}
                {(role === "Teacher" || role === "Organizer") && (
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-100 dark:border-blue-800 animate-fade-in-down">
                        <label className="flex items-center gap-3 cursor-pointer">
                            <input type="checkbox" name="presentation_interest" value="Yes" className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500 border-gray-300" />
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                I&apos;m interested in having a presentation for my organization.
                            </span>
                        </label>
                    </div>
                )}

                <button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                        <>
                            Working on it...
                        </>
                    ) : (
                        'Submit Feedback'
                    )}
                </button>
            </form>

            {/* Success Modal */}
            {showModal && (
                <div className="absolute inset-0 z-50 flex items-center justify-center p-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl animate-fade-in">
                    <div className="text-center max-w-sm w-full">
                        <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6 animate-scale-up">
                            <FaCheckCircle className="text-green-500 text-4xl" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Thank You!</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-8">Redirecting you to home...</p>
                        <button onClick={() => router.push('/')} className="px-8 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-white rounded-xl font-bold transition-all">
                            Home
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
