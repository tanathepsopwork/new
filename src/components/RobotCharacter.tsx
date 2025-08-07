import React from 'react';
import { Monitor, Palette, Code, Layers, Figma, Zap } from 'lucide-react';

export function RobotCharacter() {
  return (
    <div className="relative flex justify-center items-center">
      {/* Robot Body */}
      <div className="relative">
        {/* Main Robot */}
        <div className="w-48 h-48 bg-gradient-to-br from-slate-200 to-slate-400 rounded-full flex items-center justify-center shadow-2xl">
          <div className="w-32 h-32 bg-slate-800 rounded-full flex items-center justify-center">
            {/* Eyes */}
            <div className="flex space-x-4">
              <div className="w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
              <div className="w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
        
        {/* Arms */}
        <div className="absolute -left-8 top-16 w-16 h-8 bg-gradient-to-r from-slate-200 to-slate-400 rounded-full transform -rotate-12"></div>
        <div className="absolute -right-8 top-16 w-16 h-8 bg-gradient-to-l from-slate-200 to-slate-400 rounded-full transform rotate-12"></div>
        
        {/* Base */}
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-32 h-16 bg-gradient-to-t from-slate-300 to-slate-200 rounded-t-full"></div>
      </div>
      
      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Design Tools Icons */}
        <div className="absolute top-8 left-8 p-3 bg-pink-500/20 backdrop-blur-sm rounded-lg border border-pink-500/30 animate-float">
          <Palette className="w-6 h-6 text-pink-400" />
        </div>
        
        <div className="absolute top-4 right-12 p-3 bg-purple-500/20 backdrop-blur-sm rounded-lg border border-purple-500/30 animate-float-delayed">
          <Figma className="w-6 h-6 text-purple-400" />
        </div>
        
        <div className="absolute bottom-20 left-4 p-3 bg-blue-500/20 backdrop-blur-sm rounded-lg border border-blue-500/30 animate-float">
          <Code className="w-6 h-6 text-blue-400" />
        </div>
        
        <div className="absolute bottom-16 right-8 p-3 bg-teal-500/20 backdrop-blur-sm rounded-lg border border-teal-500/30 animate-float-delayed">
          <Layers className="w-6 h-6 text-teal-400" />
        </div>
        
        <div className="absolute top-1/2 left-0 p-3 bg-orange-500/20 backdrop-blur-sm rounded-lg border border-orange-500/30 animate-float">
          <Monitor className="w-6 h-6 text-orange-400" />
        </div>
        
        <div className="absolute top-1/3 right-0 p-3 bg-yellow-500/20 backdrop-blur-sm rounded-lg border border-yellow-500/30 animate-float-delayed">
          <Zap className="w-6 h-6 text-yellow-400" />
        </div>
      </div>
    </div>
  );
}