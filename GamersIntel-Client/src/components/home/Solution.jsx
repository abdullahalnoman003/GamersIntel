import { FaQuestionCircle, FaCheckCircle } from 'react-icons/fa';

const Solution = () => {
    const problems = [
        {
            title: "Forgotten Games",
            description: "Can't remember what you played last year or what you thought about it?"
        },
        {
            title: "Choice Overload",
            description: "Massive backlog but can't decide what to play next?"
        },
        {
            title: "Lost Progress",
            description: "No way to track which games you've completed or abandoned?"
        },
        {
            title: "No History",
            description: "Want to look back at your gaming journey over the years?"
        }
    ];

    const solutions = [
        "Complete game tracking system",
        "Personal ratings and reviews",
        "Beautiful progress visualization",
        "Smart backlog management",
        "Full gaming history",
        "Achievement tracking"
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="poetsen-one-regular text-4xl md:text-6xl text-white mb-4">
                        WHY{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                            GAMERSINTEL?
                        </span>
                    </h2>
                    <p className="galdeano-regular text-xl text-gray-400 max-w-3xl mx-auto">
                        Every gamer faces these challenges. We built the perfect solution.
                    </p>
                </div>

                {/* Problem-Solution Layout */}
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Problems Side */}
                    <div className="bg-gray-900/50 border border-red-500/30 rounded-xl p-8 hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-300">
                        <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                            <FaQuestionCircle className="text-red-400" />
                            Common Problems
                        </h3>
                        <div className="space-y-6">
                            {problems.map((item, index) => (
                                <div key={index} className="border-l-4 border-red-500 pl-4 rounded-r-lg hover:bg-red-500/5 transition-colors duration-300">
                                    <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                                    <p className="text-gray-400">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Solution Side */}
                    <div className="bg-gray-900/50 border border-purple-500/30 rounded-xl p-8 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300">
                        <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                            <FaCheckCircle className="text-green-400" />
                            Our Solution
                        </h3>
                        <div className="space-y-4">
                            {solutions.map((solution, index) => (
                                <div 
                                    key={index} 
                                    className="flex items-center gap-3 bg-purple-500/10 border border-purple-500/20 rounded-lg p-4 hover:bg-purple-500/20 hover:scale-105 hover:border-purple-500/40 transition-all duration-300"
                                >
                                    <div className="flex-shrink-0 w-2 h-2 bg-purple-400 rounded-full"></div>
                                    <span className="text-gray-300 font-medium">{solution}</span>
                                </div>
                            ))}
                        </div>

                        {/* Benefits */}
                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6 text-center hover:bg-green-900/30 hover:scale-105 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300">
                                <div className="text-3xl font-black text-green-400 mb-2">100%</div>
                                <div className="text-sm text-gray-400">Free Forever</div>
                            </div>
                            <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6 text-center hover:bg-blue-900/30 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
                                <div className="text-3xl font-black text-blue-400 mb-2">&lt;2min</div>
                                <div className="text-sm text-gray-400">Quick Setup</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Solution;
