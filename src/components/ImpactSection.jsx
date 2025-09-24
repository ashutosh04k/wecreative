// src/components/ImpactSection.js
import React from 'react';

const ImpactSection = () => {
  const stats = [
    { number: '30+', label: 'Years in Multimedia Training' },
    { number: '100%', label: 'Job Guarantee' },
    { number: '10000+', label: 'Professionals Trained' },
    { number: '500+', label: 'Hiring Companies' },
    { number: '50+', label: 'Specializations' },
    { number: '1-on-1', label: 'Personal Mentoring' },
  ];

  return (
    <div className="bg-purple-800 text-white p-6 h-[500px]">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Our Impact in Numbers</h1>
        <p className="mt-2 text-purple-200">For three decades, we've been shaping the creative industry with our unique training approach.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="p-6">
            <p className="text-4xl font-bold">{stat.number}</p>
            <p className="text-purple-200 mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImpactSection;