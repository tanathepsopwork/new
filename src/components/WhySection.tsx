import React from 'react';
import { CheckCircle, Users, Award, Zap } from 'lucide-react';

export function WhySection() {
  const benefits = [
    {
      icon: CheckCircle,
      title: "Proven Track Record",
      description: "500+ successful projects delivered on time and within budget"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Seasoned designers and developers with 10+ years of experience"
    },
    {
      icon: Award,
      title: "Award-Winning Designs",
      description: "Recognized by industry leaders for exceptional design quality"
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Rapid prototyping and development with agile methodology"
    }
  ];

  return (
    <section className="bg-slate-950 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20 mb-6">
            <span className="text-blue-400 text-sm font-medium">Why Choose Dstudio?</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The Smart Choice for
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
              Digital Success
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            We combine creativity with strategy to deliver exceptional results that exceed expectations
            and drive measurable business growth.
          </p>
        </div>
        
        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-2xl border border-blue-500/30 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>
        
        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-4 p-6 bg-gradient-to-r from-blue-500/10 to-teal-500/10 rounded-2xl border border-blue-500/20">
            <div className="text-left">
              <h3 className="text-xl font-semibold text-white mb-1">Ready to get started?</h3>
              <p className="text-slate-400">Let's discuss your project and bring your vision to life</p>
            </div>
            <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
              Start Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}