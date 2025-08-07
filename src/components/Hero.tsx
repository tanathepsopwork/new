import React from 'react';
import { RobotCharacter } from './RobotCharacter';

export function Hero() {
  return (
    <section className="relative min-h-screen bg-slate-950 overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      <div className="relative z-10 container mx-auto px-6 pt-20 pb-12">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-slate-800/50 rounded-full border border-slate-700 mb-8">
            <span className="text-slate-300 text-sm font-medium">Best Design's Studio</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Unlock Design,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
              Drive Growth
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Bringing your vision to life with innovative, user-centric design solutions
            that inspire and engage.
          </p>
          
          {/* CTA Button */}
          <button className="inline-flex items-center px-8 py-4 bg-white text-slate-950 font-semibold rounded-lg hover:bg-slate-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Get Started
          </button>
        </div>
        
        {/* Robot Character */}
        <div className="mt-16 flex justify-center">
          <RobotCharacter />
        </div>
      </div>
    </section>
  );
}