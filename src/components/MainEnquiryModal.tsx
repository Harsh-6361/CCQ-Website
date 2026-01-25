'use client';

import { FaTimes } from 'react-icons/fa';
import EnquiryForm from './EnquiryForm';
import { useState } from 'react';

interface MainEnquiryModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function MainEnquiryModal({ isOpen, onClose }: MainEnquiryModalProps) {
    const [showSuccess, setShowSuccess] = useState(false);

    if (!isOpen) return null;

    const handleSuccess = () => {
        setShowSuccess(true);
        // Optional: Close modal after a delay or let user close it via "Success" UI
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl w-full max-w-2xl relative overflow-hidden shadow-2xl animate-scale-up max-h-[90vh] overflow-y-auto scrollbar-hide">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 z-20 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                    <FaTimes size={20} />
                </button>

                <div className="p-6 md:p-8">
                    {!showSuccess ? (
                        <>
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Enquire Now</h3>
                                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                                    Have a question about our programs or services? Reach out to us.
                                </p>
                            </div>
                            <EnquiryForm onSuccess={handleSuccess} />
                        </>
                    ) : (
                        <div className="py-12 flex flex-col items-center justify-center text-center">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Message Sent!</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-6">
                                Thank you for your enquiry. We will get back to you shortly.
                            </p>
                            <button
                                onClick={onClose}
                                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all"
                            >
                                Close
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
