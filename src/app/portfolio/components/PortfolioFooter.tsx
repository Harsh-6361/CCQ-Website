import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function PortfolioFooter() {
    return (
        <footer className="bg-black text-gray-400 py-12 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                    <div className="text-center md:text-left">
                        <h3 className="text-white text-lg font-bold mb-2">DevPortfolio</h3>
                        <p className="text-sm">Building the future, one pixel at a time.</p>
                    </div>

                    <div className="flex gap-6">
                        <a href="#" className="hover:text-blue-500 transition-colors"><FaGithub size={20} /></a>
                        <a href="#" className="hover:text-blue-500 transition-colors"><FaLinkedin size={20} /></a>
                        <a href="#" className="hover:text-blue-500 transition-colors"><FaTwitter size={20} /></a>
                        <a href="mailto:contact@codequest.in" className="hover:text-blue-500 transition-colors"><FaEnvelope size={20} /></a>
                    </div>

                    <div className="text-sm">
                        &copy; {new Date().getFullYear()} All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}
