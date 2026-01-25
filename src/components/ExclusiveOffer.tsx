"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FaPhoneAlt } from "react-icons/fa";
import { useState } from 'react';
import BookingModal from './BookingModal';

export default function ExclusiveOffer() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);

    return (
        <section className="py-16 px-4 bg-black flex justify-center">
            <Card className="w-full max-w-4xl bg-gradient-to-r from-gray-900 to-black border-gray-800 shadow-2xl overflow-hidden relative group">

                {/* Decorative Glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] group-hover:bg-blue-600/20 transition-all duration-500 pointer-events-none" />

                <CardHeader className="text-center relative z-10 pt-12 pb-2">
                    <div className="mx-auto bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full inline-block mb-4">
                        Exclusive Offer
                    </div>
                    <CardTitle className="text-3xl md:text-5xl font-black text-white leading-tight">
                        You&apos;ve Scrolled This Far—<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                            Let&apos;s Talk
                        </span>
                    </CardTitle>
                </CardHeader>

                <CardContent className="text-center relative z-10 pb-12">
                    <CardDescription className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8">
                        We&apos;ll diagnose your biggest challenge and map out your next steps—<span className="text-white font-semibold">no obligation.</span>
                    </CardDescription>

                    <Button
                        size="lg"
                        className="text-lg px-8 py-6 rounded-full bg-white text-black hover:bg-blue-600 hover:text-white transition-all shadow-lg hover:shadow-blue-500/30 font-bold gap-3"
                        onClick={() => setIsBookingOpen(true)}
                    >
                        <FaPhoneAlt className="text-sm" />
                        Book Your Free Call
                    </Button>

                    <p className="mt-4 text-xs text-gray-500 uppercase tracking-wider font-semibold">
                        Limited Spots Available for This Month
                    </p>
                </CardContent>
            </Card>

            <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
        </section>
    );
}
