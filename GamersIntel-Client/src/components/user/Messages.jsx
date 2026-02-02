import React from 'react';
import { MdMessage } from 'react-icons/md';
import { HiLightningBolt } from 'react-icons/hi';

const Messages = () => {
    return (
        <div className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600 rounded-full filter blur-3xl"></div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
                {/* Icon */}
                <div className="flex justify-center mb-8">
                    <div className="relative">
                        <MdMessage className="text-7xl text-purple-400" />
                        <HiLightningBolt className="absolute -top-2 -right-2 text-cyan-400 text-3xl" />
                    </div>
                </div>

                {/* Headline */}
                <h1 className="poetsen-one-regular text-6xl md:text-7xl text-white mb-4">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
                        COMING SOON
                    </span>
                </h1>

                {/* Subtext */}
                <p className="galdeano-regular text-gray-400 text-xl md:text-2xl">
                    Stay Tuned
                </p>
            </div>
        </div>
    );
};

export default Messages;