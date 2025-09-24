// src/pages/WhyChoose.jsx
import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="bg-white py-16 px-6 md:px-20">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <button className="bg-red-600 text-white text-xs px-4 py-1 rounded-full mb-3">
          ABOUT US
        </button>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Why Students Choose
        </h2>
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
          CABA INNOVATIVES is India's first multimedia training institute,
          offering one-on-one expert-led professional courses in graphic design,
          web design, UI/UX, animation, digital marketing, and video editing —
          with a 100% job guarantee since 1993.
        </p>
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left side - Image */}
        <div className="relative rounded-2xl overflow-hidden bg-gray-50 p-2 shadow-lg">
          <img
            src="https://www.caba.in/images/caba-award.webp"
            alt="Award"
            className="w-full h-auto rounded-xl" 
          />
          <div className="absolute -bottom-4 -right-4 bg-white shadow-lg px-4 py-2 rounded-lg border border-gray-100">
            <h3 className="text-xl font-bold text-blue-600">30+</h3>
            <p className="text-gray-600 text-sm">Years of Excellence</p>
          </div>
        </div>

        {/* Right side - Features */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">
            Award-Winning Training Since 1993
          </h3>
          <ul className="space-y-3 text-gray-700">
            {[
              "Pioneers in multimedia education since 1993",
              "Awarded Best Multimedia Institute since 1997",
              "One-on-one training by industry experts only",
              "100% job guarantee in writing — or money back",
              "Govt. Registered Institute under Film & TV (Delhi Govt.)",
              "First Web Design Company in India (1996)",
              "First SEO/SEM Company (1998)",
            ].map((item, i) => (
              <li key={i} className="flex items-start">
                <span className="text-blue-600 mr-2">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <ul className="space-y-3 text-gray-700">
            {[
              "First 2D/3D Animation Studio (1993)",
              "First Digital Video Editing Studio (1995)",
              "Real work experience with Doordarshan, NDTV, Zee, IBN7",
              "Corporate & agency clients: ONGC, AMEX, WHO, HTA, Mudra, Lintas",
              "Unique course curriculum tailored for real-world jobs",
              "Flexible batch timings, personal mentor support",
            ].map((item, i) => (
              <li key={i} className="flex items-start">
                <span className="text-blue-600 mr-2">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* CTA Box */}
          <div className="bg-purple-600 text-white rounded-xl p-6 mt-8">
            <h4 className="text-lg font-semibold">Join the pioneers</h4>
            <p className="text-sm mt-2">
              Get industry-ready with personal mentoring and job placement
              support. Enroll now — because your career deserves more than just
              a certificate.
            </p>
            <button className="mt-4 bg-white text-purple-600 font-medium px-5 py-2 rounded-full">
              Get Fee Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
