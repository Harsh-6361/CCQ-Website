"use client";

import { useState } from 'react';
import { FaTimes, FaSpinner, FaCheckCircle, FaCalendarAlt, FaClock } from 'react-icons/fa';
import { Button } from "@/components/ui/button";

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        // Add custom subject or other fields if needed
        formData.set('subject', 'Exclusive Offer - Consultation Booking');

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            if (response.ok) {
                setIsSuccess(true);
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
            <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 max-w-lg w-full shadow-2xl relative animate-scale-up border border-gray-100 dark:border-gray-800">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                >
                    <FaTimes size={20} />
                </button>

                {isSuccess ? (
                    <div className="text-center py-8">
                        <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                            <FaCheckCircle className="text-green-500 text-4xl" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            Booking Request Sent!
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-8">
                            We&apos;ve received your request. Our team will contact you shortly to confirm the schedule.
                        </p>
                        <Button onClick={onClose} className="w-full">
                            Close
                        </Button>
                    </div>
                ) : (
                    <>
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                Book Your Free Call
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">
                                Fill in the details below and we&apos;ll get back to you to confirm your slot.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input type="hidden" name="access_key" value="f12d555d-cffd-482e-b30b-68863e7207a6" />

                            {/* Contact Info */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="name" className="block text-xs font-bold uppercase text-gray-500 mb-1">Full Name</label>
                                    <input type="text" name="name" required placeholder="John Doe"
                                        className="w-full px-4 py-2 rounded-xl bg-gray-50 dark:bg-gray-800 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-gray-950 focus:ring-0 text-sm" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-xs font-bold uppercase text-gray-500 mb-1">Email</label>
                                    <input type="email" name="email" required placeholder="john@example.com"
                                        className="w-full px-4 py-2 rounded-xl bg-gray-50 dark:bg-gray-800 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-gray-950 focus:ring-0 text-sm" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-xs font-bold uppercase text-gray-500 mb-1">Phone Number</label>
                                <input type="tel" name="phone" required placeholder="+91 98765 43210"
                                    className="w-full px-4 py-2 rounded-xl bg-gray-50 dark:bg-gray-800 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-gray-950 focus:ring-0 text-sm" />
                            </div>

                            {/* Preferred Timing */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="date" className="block text-xs font-bold uppercase text-gray-500 mb-1">Preferred Date</label>
                                    <div className="relative">
                                        <FaCalendarAlt className="absolute left-3 top-3 text-gray-400 text-sm" />
                                        <input type="date" name="date" required
                                            className="w-full pl-10 pr-4 py-2 rounded-xl bg-gray-50 dark:bg-gray-800 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-gray-950 focus:ring-0 text-sm appearance-none" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="time" className="block text-xs font-bold uppercase text-gray-500 mb-1">Preferred Time</label>
                                    <div className="relative">
                                        <FaClock className="absolute left-3 top-3 text-gray-400 text-sm" />
                                        <input type="time" name="time" required
                                            className="w-full pl-10 pr-4 py-2 rounded-xl bg-gray-50 dark:bg-gray-800 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-gray-950 focus:ring-0 text-sm appearance-none" />
                                    </div>
                                </div>
                            </div>

                            {/* Challenge/Note */}
                            <div>
                                <label htmlFor="message" className="block text-xs font-bold uppercase text-gray-500 mb-1">Biggest Challenge / Topic</label>
                                <textarea name="message" rows={3} placeholder="Briefly describe what you'd like to discuss..."
                                    className="w-full px-4 py-2 rounded-xl bg-gray-50 dark:bg-gray-800 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-gray-950 focus:ring-0 text-sm resize-none"></textarea>
                            </div>

                            <Button type="submit" disabled={isSubmitting} className="w-full py-6 text-lg font-bold shadow-lg hover:shadow-blue-500/20">
                                {isSubmitting ? (
                                    <>
                                        <FaSpinner className="animate-spin mr-2" /> Booking...
                                    </>
                                ) : (
                                    'Confirm Booking'
                                )}
                            </Button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}
