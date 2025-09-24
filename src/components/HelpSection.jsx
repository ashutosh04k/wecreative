// src/components/HelpSection.js
import React from 'react';

const HelpSection = () => {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center p-6">
      <div className="flex flex-col md:flex-row items-center max-w-4xl w-full bg-gray-50 rounded-lg shadow-lg p-6">
        <div className="md:w-1/2 text-center md:text-left">
          <div className="inline-block bg-gray-800 rounded-full p-2 mb-4">
            <span className="text-2xl text-white"><img src="https://digiperform.org/wp-content/uploads/2023/10/Black-1.png" alt="" /></span>
          </div>
          <h1 className="text-4xl font-bold text-gray-800">Confused? Why not let us help!</h1>
          <p className="mt-4 text-gray-600">Get in touch with our Friendly Team. Speak to us for Batches, fee and curriculum.</p>
          <div className="mt-6">
            <select className="w-full p-2 border rounded-lg mb-4">
              <option>Select Course*</option>
              <option>Annual Program in Digital Marketing</option>
            </select>
            <button className="w-full bg-orange-500 text-white p-2 rounded-lg hover:bg-orange-600">
              Get Brochure
            </button>
          </div>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
          <img src="	https://digiperform.org/wp-content/uploads/2023/10/Digiperform-Contact.webp" alt="Friendly Team" className="rounded-lg" />
          <div className="absolute w-32 h-32 bg-orange-500 rounded-full opacity-50 -mt-16 md:-mt-24 md:-ml-16"></div>
          <div className="absolute w-16 h-16 bg-gray-800 rounded-full opacity-50 mt-16 md:mt-24 md:ml-16"></div>
        </div>
      </div>
    </div>
  );
};

export default HelpSection;