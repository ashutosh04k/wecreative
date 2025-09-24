// src/components/TabbedCoursesSection.js
import React, { useState } from 'react';

const Courses = () => {
  const [activeTab, setActiveTab] = useState('Design');

  const sections = {
    Design: [
      { title: 'Graphic Design', duration: '6 Months', desc: 'Master the fundamentals of graphic design with industry-standard tools.', image: 'https://via.placeholder.com/300x200?text=Graphic+Design' },
      { title: 'UI/UX Design', duration: '6 Months', desc: 'Design intuitive user interfaces and seamless user experiences.', image: 'https://via.placeholder.com/300x200?text=UI/UX+Design' },
    ],
    Development: [
      { title: 'Web Designing', duration: '8 Months', desc: 'Learn to create stunning, responsive websites with modern technologies.', image: 'https://via.placeholder.com/300x200?text=Web+Designing' },
      { title: 'App Development', duration: '10 Months', desc: 'Build cutting-edge mobile apps with the latest frameworks.', image: 'https://via.placeholder.com/300x200?text=App+Development' },
    ],
    Marketing: [
      { title: 'Digital Marketing', duration: '6 Months', desc: 'Master SEO, SEM, and social media strategies for business growth.', image: 'https://via.placeholder.com/300x200?text=Digital+Marketing' },
      { title: 'Content Marketing', duration: '5 Months', desc: 'Create compelling content to engage and convert audiences.', image: 'https://via.placeholder.com/300x200?text=Content+Marketing' },
    ],
    Multimedia: [
      { title: 'Video Editing', duration: '7 Months', desc: 'Learn professional video editing techniques for film and media.', image: 'https://via.placeholder.com/300x200?text=Video+Editing' },
      { title: 'Animation', duration: '8 Months', desc: 'Create stunning 2D and 3D animations for various platforms.', image: 'https://via.placeholder.com/300x200?text=Animation' },
    ],
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">Courses With Job Guarantee</h1>
        <p className="mt-2 text-gray-600">Our industry-aligned courses are designed to give you practical skills and real-world experience, with a 100% job guarantee.</p>
      </div>
      <div className="flex justify-center mt-6 space-x-4">
        {Object.keys(sections).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full ${activeTab === tab ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'}`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {sections[activeTab].map((course, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-lg text-center">
            <img src={course.image} alt={course.title} className="w-full h-40 object-cover rounded-t-lg" />
            <h3 className="text-lg font-semibold mt-4">{course.title}</h3>
            <p className="text-gray-500 mt-2">{course.duration}</p>
            <p className="text-gray-600 mt-2">{course.desc}</p>
            <a href="#" className="text-blue-600 mt-4 inline-block">View Course &gt;</a>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
          View All Courses &gt;
        </button>
      </div>
    </div>
  );
};

export default Courses;