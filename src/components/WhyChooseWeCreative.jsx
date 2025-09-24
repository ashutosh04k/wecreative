// src/components/CabaSection.js
import React from 'react';

const WhyChooseWeCreative = () => {
  const features = [
    { icon: '👤', title: 'One-on-one personal training', desc: 'No group batches - get personalized attention from your mentor' },
    { icon: '🎓', title: 'Training by industry veterans', desc: 'Learn from experienced professionals, not interns' },
    { icon: '🖼️', title: 'Real-time portfolio building', desc: 'Create impressive work samples during your course' },
    { icon: '📋', title: 'Training on live projects', desc: 'Work on real client projects for job-ready outcomes' },
    { icon: '💰', title: 'Flexible payment plans', desc: 'Monthly, quarterly, and custom fee plans available' },
    { icon: '📊', title: 'Student progress tracking', desc: 'Monitor your growth with admin panel access' },
    { icon: '✅', title: 'Legal 100% job guarantee', desc: 'Written guarantee with money-back clause' },
    { icon: '📝', title: 'Weekly assessments', desc: 'Regular feedback and interview preparation' },
    { icon: '🌐', title: 'Freelancing sessions', desc: 'Learn how to handle international clients' },
  ];

  return (
    <div className="bg-purple-800 min-h-screen text-white p-6">
      <div className="text-center">
        <h2 className="text-sm uppercase text-purple-200">Why Choose CABA</h2>
        <h1 className="text-4xl font-bold mt-2">What Makes Us Different</h1>
        <p className="mt-2 text-purple-100">We've been training creative professionals since 1993 with a unique approach focused on real skills and job placement.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {features.map((feature, index) => (
          <div key={index} className="bg-purple-700 bg-opacity-50 p-6 rounded-lg shadow-lg text-center">
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold">{feature.title}</h3>
            <p className="text-purple-200 mt-2">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseWeCreative;