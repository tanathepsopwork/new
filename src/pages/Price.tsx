import React from 'react';
import { Check, Star } from 'lucide-react';

export function Price() {
  const plans = [
    {
      name: 'Basic',
      price: '฿2,999',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Logo Design',
        'Business Card Design',
        '2 Revisions',
        'Basic Brand Guidelines',
        'Email Support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '฿5,999',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Complete Brand Identity',
        'Website Design (5 pages)',
        'Social Media Templates',
        'Unlimited Revisions',
        'Brand Guidelines',
        'Priority Support',
        'Print Materials'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '฿12,999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Full Brand Strategy',
        'Custom Website Development',
        'Mobile App Design',
        'Marketing Materials',
        'Video Content',
        '24/7 Support',
        'Dedicated Account Manager',
        'Monthly Strategy Calls'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Choose Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
              Perfect Plan
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Flexible pricing options designed to grow with your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl border transition-all duration-300 hover:transform hover:scale-105 ${
                plan.popular
                  ? 'bg-gradient-to-br from-blue-500/10 to-teal-500/10 border-blue-500/30'
                  : 'bg-slate-800/50 border-slate-700 hover:border-slate-600'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="flex items-center space-x-1 bg-gradient-to-r from-blue-500 to-teal-500 px-4 py-2 rounded-full">
                    <Star className="w-4 h-4 text-white" />
                    <span className="text-white text-sm font-medium">Most Popular</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-slate-400 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-slate-400 ml-1">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-teal-400 mr-3 flex-shrink-0" />
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-500 to-teal-500 text-white hover:from-blue-600 hover:to-teal-600'
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-slate-400 mb-4">
            Need a custom solution? We'd love to help.
          </p>
          <button className="px-8 py-3 bg-white text-slate-950 font-semibold rounded-lg hover:bg-slate-100 transition-colors">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
}