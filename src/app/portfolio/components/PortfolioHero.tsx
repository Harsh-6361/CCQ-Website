export default function PortfolioHero() {
    return (
        <div className="relative pt-32 pb-40 lg:pt-48 overflow-hidden bg-black">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px]"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-900 border border-gray-800 text-gray-300 text-xs font-semibold mb-8">
                    <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
                    Available for New Projects
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight mb-8">
                    WE BUILD <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-300">
                        DIGITAL EXPERIENCES
                    </span>
                </h1>

                <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-10 leading-relaxed">
                    A dedicated team of developers and designers crafting high-performance web applications, scalable backends, and intuitive user interfaces.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors w-full sm:w-auto">
                        View Projects
                    </button>
                    <button className="px-8 py-4 bg-transparent border border-gray-700 text-white font-bold rounded-full hover:bg-gray-900 transition-colors w-full sm:w-auto">
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    );
}
