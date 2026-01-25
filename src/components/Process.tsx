'use client';

export default function Process() {
    return (
        <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900 border-t border-gray-800">
            <div className="max-w-7xl mx-auto text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">How We Work</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">Simple, transparent, and effective. We keep you in the loop at every step.</p>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                    { step: "01", title: "Discovery", desc: "We discuss your goals, requirements, and budget to find the best fit." },
                    { step: "02", title: "Proposal", desc: "You get a clear timeline, cost estimate, and tech roadmap." },
                    { step: "03", title: "Build", desc: "We develop your solution with regular updates and feedback loops." },
                    { step: "04", title: "Launch", desc: "We deploy smoothly and provide ongoing support to ensure success." }
                ].map((item, idx) => (
                    <div key={idx} className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700 hover:bg-gray-800 transition-colors relative overflow-hidden group">
                        <div className="text-6xl font-black text-gray-800 group-hover:text-blue-900/50 absolute top-[-10px] right-[-10px] transition-colors z-0 select-none">
                            {item.step}
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-gray-400 text-sm">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
