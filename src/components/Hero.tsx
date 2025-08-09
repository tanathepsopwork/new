import React from 'react';
import { ArrowRight, Play, Star } from 'lucide-react';
import { RobotCharacter } from './RobotCharacter';

export function Hero() {
  return (
    <section className="relative min-h-screen bg-slate-950 overflow-hidden flex items-center">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-teal-500/5"></div>
      
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Trust Indicators */}
            <div className="flex items-center justify-center lg:justify-start space-x-4 mb-6">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-slate-400 text-sm">Trusted by 500+ clients worldwide</span>
            </div>
            
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-slate-800/50 rounded-full border border-slate-700 mb-8">
              <span className="text-slate-300 text-sm font-medium">🏆 Award-Winning Design Studio</span>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Transform Your Vision Into
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                Digital Excellence
              </span>
            </h1>
            
            {/* Value Proposition */}
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              We create stunning, user-centric designs that drive growth and engagement. 
              From concept to launch, we bring your ideas to life with cutting-edge technology.
            </p>
            
            {/* Social Proof Numbers */}
            <div className="flex items-center justify-center lg:justify-start space-x-8 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-sm text-slate-400">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">98%</div>
                <div className="text-sm text-slate-400">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-sm text-slate-400">Countries Served</div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group inline-flex items-center px-8 py-4 bg-slate-800/50 text-white font-semibold rounded-lg border border-slate-700 hover:bg-slate-700/50 transition-all duration-300">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </button>
            </div>
          </div>
          {/* Right Content - Robot Character */}
          <div className="flex justify-center lg:justify-end">
            <RobotCharacter />
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}