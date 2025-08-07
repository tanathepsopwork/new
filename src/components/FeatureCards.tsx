import React from 'react';
import { Globe, Cog, Users } from 'lucide-react';

export function FeatureCards() {
  const features = [
    {
      icon: Globe,
      title: "Global Clients",
      description: "Worked with the clients of more than 50 countries",
      bgGradient: "from-blue-500/10 to-cyan-500/10",
      borderColor: "border-blue-500/20",
      iconColor: "text-blue-400",
    },
    {
      icon: Cog,
      title: "Emerging technologies",
      description: "We leverage the power of emerging technologies such as AI, AR, VR, IoT, Blockchain, AR, VR",
      bgGradient: "from-purple-500/10 to-pink-500/10", 
      borderColor: "border-purple-500/20",
      iconColor: "text-purple-400",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Our collaborative approach ensures a seamless and productive working relationship",
      bgGradient: "from-teal-500/10 to-green-500/10",
      borderColor: "border-teal-500/20",
      iconColor: "text-teal-400",
    },
  ];

  return (
    <section className="bg-slate-950 pb-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className={`relative p-8 bg-gradient-to-br ${feature.bgGradient} backdrop-blur-sm rounded-2xl border ${feature.borderColor} hover:border-opacity-50 transition-all duration-300 group hover:transform hover:scale-105`}
              >
                <div className="flex flex-col items-start">
                  <div className={`p-3 bg-slate-800/50 rounded-xl mb-6 ${feature.iconColor}`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-teal-400 transition-all duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-slate-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-white/20 rounded-full"></div>
                <div className="absolute bottom-4 right-8 w-1 h-1 bg-white/10 rounded-full"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}