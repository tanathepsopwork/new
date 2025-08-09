import React from 'react';
import { Globe, Cog, Users, ArrowRight, TrendingUp } from 'lucide-react';

export function FeatureCards() {
  const features = [
    {
      icon: Globe,
      title: "Global Clients",
      description: "Serving clients across 50+ countries with localized solutions and 24/7 support",
      stats: "500+ Projects",
      bgGradient: "from-blue-500/10 to-cyan-500/10",
      borderColor: "border-blue-500/20",
      iconColor: "text-blue-400",
      hoverColor: "hover:border-blue-400/50"
    },
    {
      icon: Cog,
      title: "Cutting-Edge Technology",
      description: "Leveraging AI, AR/VR, IoT, and Blockchain to create next-generation digital experiences",
      stats: "15+ Technologies",
      bgGradient: "from-purple-500/10 to-pink-500/10", 
      borderColor: "border-purple-500/20",
      iconColor: "text-purple-400",
      hoverColor: "hover:border-purple-400/50"
    },
    {
      icon: Users,
      title: "Collaborative Process",
      description: "Agile methodology with transparent communication and regular updates throughout development",
      stats: "98% Satisfaction",
      bgGradient: "from-teal-500/10 to-green-500/10",
      borderColor: "border-teal-500/20",
      iconColor: "text-teal-400",
      hoverColor: "hover:border-teal-400/50"
    },
  ];

  return (
    <section className="bg-slate-950 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-teal-500/10 rounded-full border border-teal-500/20 mb-6">
            <span className="text-teal-400 text-sm font-medium">Our Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Sets Us Apart
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Discover the key advantages that make Dstudio the preferred choice for businesses worldwide
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className={`relative p-8 bg-gradient-to-br ${feature.bgGradient} backdrop-blur-sm rounded-2xl border ${feature.borderColor} ${feature.hoverColor} transition-all duration-300 group hover:transform hover:scale-105 cursor-pointer`}
              >
                <div className="flex flex-col items-start h-full">
                  <div className={`p-4 bg-slate-800/50 rounded-xl mb-6 ${feature.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  
                  <div className="flex items-center justify-between w-full mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-teal-400 transition-all duration-300">
                      {feature.title}
                    </h3>
                    <div className={`px-3 py-1 bg-slate-800/50 rounded-full ${feature.iconColor} text-xs font-medium`}>
                      {feature.stats}
                    </div>
                  </div>
                  
                  <p className="text-slate-300 leading-relaxed mb-6 flex-grow">
                    {feature.description}
                  </p>
                  
                  <div className="flex items-center text-sm font-medium text-slate-400 group-hover:text-white transition-colors duration-300">
                    <span>Learn more</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
                
                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
                
                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-white/20 rounded-full group-hover:bg-white/40 transition-colors duration-300"></div>
                <div className="absolute bottom-4 right-8 w-1 h-1 bg-white/10 rounded-full group-hover:bg-white/30 transition-colors duration-300"></div>
              </div>
            );
          })}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-slate-400 mb-4">
            <TrendingUp className="w-5 h-5" />
            <span>Join 500+ satisfied clients worldwide</span>
          </div>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            View Our Portfolio
          </button>
        </div>
      </div>
    </section>
  );
}

// Testimonials Section Component
export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      content: "Dstudio transformed our vision into a stunning reality. Their attention to detail and innovative approach exceeded our expectations.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      name: "Michael Chen",
      role: "Founder, EcoSolutions",
      content: "The team's expertise in emerging technologies helped us create a cutting-edge platform that revolutionized our industry.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director, GlobalCorp",
      content: "Professional, reliable, and incredibly talented. Dstudio delivered beyond our wildest dreams and on schedule.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100"
    }
  ];

  return (
    <section className="bg-slate-900 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-yellow-500/10 rounded-full border border-yellow-500/20 mb-6">
            <span className="text-yellow-400 text-sm font-medium">Client Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-slate-600 transition-all duration-300 group">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <div key={i} className="w-5 h-5 text-yellow-400 fill-current">⭐</div>
                ))}
              </div>
              
              <p className="text-slate-300 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-slate-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}