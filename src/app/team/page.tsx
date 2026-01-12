import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const teamMembers = [
    {
        name: "Zaid",
        role: "Founder & CEO",
        fullRole: "Chief Executive Officer",
        image: "/TeamImages/Zaid4x5.jpg",
        linkedin: "#"
    },
    {
        name: "Jordan",
        role: "Co-founder & CIO",
        fullRole: "Chief Information Officer",
        image: "/TeamImages/Jordan4x5.jpg",
        linkedin: "#"
    },
    {
        name: "Shreyas",
        role: "Co-founder, CTO & BDE",
        fullRole: "Chief Technical Officer & Business Development Engineer",
        image: "/TeamImages/Shreyas4x5.jpg",
        linkedin: "#"
    },
    {
        name: "Anlin",
        role: "Co-founder, CMO & HR",
        fullRole: "Chief Marketing Officer & HR",
        image: "/TeamImages/Anlin4x5.jpg",
        linkedin: "#"
    },
    /* {
        name: "Sallu",
        role: "Co-founder, CFO & CSO",
        fullRole: "Chief Finance Officer & Chief Security Officer",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Placeholder
        linkedin: "#"
    }, */
    {
        name: "Harsha",
        role: "Co-founder, COO & MD",
        fullRole: "Chief Operational Officer & Managing Director",
        image: "/TeamImages/harsh4x5.jpg",
        linkedin: "#"
    },
    {
        name: "Vishal",
        role: "Tech Support",
        fullRole: "Technical Support Engineer",
        image: "/TeamImages/Vishal.jpg",
        linkedin: "#"
    }
];

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Our Team | CodeQuest',
    description: 'Meet the passionate team behind CodeQuest. Founders, engineers, and educators dedicated to the future of tech.',
};

export default function TeamPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-gray-950">
            <Navbar />
            <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Meet Our Team</h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400">The passionate minds behind CodeQuest.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member, idx) => (
                        <div key={idx} className="group bg-gray-50 dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-800">
                            <div className="relative h-80 overflow-hidden">
                                <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                                    <div className="flex gap-4">
                                        <a href={member.linkedin} className="text-white hover:text-blue-400 transform hover:scale-110 transition-all"><FaLinkedin size={24} /></a>
                                        <a href="#" className="text-white hover:text-blue-500 transform hover:scale-110 transition-all"><FaTwitter size={24} /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 text-center">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 transition-colors">{member.name}</h3>
                                <p className="text-blue-600 dark:text-blue-400 font-bold text-sm uppercase tracking-wider mb-2">{member.role}</p>
                                <p className="text-gray-500 dark:text-gray-400 text-xs italic">{member.fullRole}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </main>
    );
}
