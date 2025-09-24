// src/components/TestimonialsSection.js
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Suyash Chitre',
      quote: 'My personal experience with Digiperform was good, especially when it comes to PPC the trainer here have the depth of knowledge over the subject line.',
      rating: 4,
      image: 'https://via.placeholder.com/50?text=Suyash',
    },
    {
      name: 'Harsh Rawat',
      quote: 'Best Digital Marketing Career Academy among all! I suggest all my friends about Digiperform. They provide depth course module both technically and strategically. Happy to be a part of Digiperform.',
      rating: 5,
      image: 'https://via.placeholder.com/50?text=Harsh',
    },
    {
      name: 'Kim Znamte',
      quote: 'If you are looking for an institute which helps you learn digital marketing, then you must consider Digiperform. They are the best in this field.',
      rating: 5,
      image: 'https://via.placeholder.com/50?text=Kim',
    },
    {
      name: 'Kim Znamte',
      quote: 'If you are looking for an institute which helps you learn digital marketing, then you must consider Digiperform. They are the best in this field.',
      rating: 5,
      image: 'https://via.placeholder.com/50?text=Kim',
    },
    {
      name: 'Kim Znamte',
      quote: 'If you are looking for an institute which helps you learn digital marketing, then you must consider Digiperform. They are the best in this field.',
      rating: 5,
      image: 'https://via.placeholder.com/50?text=Kim',
    },
  ];

  return (
    <div className="bg-gray-900 min-h-screen text-white p-6">
      <div className="text-center">
        <div className="inline-block bg-orange-500 rounded-full p-2 mb-4">
          <span className="text-2xl">⦿</span>
        </div>
        <h1 className="text-4xl font-bold">What Our Trainees Have To Say</h1>
        <p className="mt-2 text-gray-400">Our Courses have Been Receiving average rating of 9.4/10 from our course participants. Till date, Digiperform has trained more than 75,000+ individuals.</p>
      </div>
      <div className="mt-10 overflow-x-auto whitespace-nowrap scrollbar-hide">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="inline-block bg-white bg-opacity-10 p-6 rounded-lg shadow-lg text-center mx-2"
            style={{ width: '300px', verticalAlign: 'top' }}
          >
            <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mx-auto mb-4" />
            <p className="text-gray-300 whitespace-normal">{testimonial.quote}</p>
            <div className="flex justify-center mt-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={i < testimonial.rating ? 'text-yellow-400' : 'text-gray-600'}>★</span>
              ))}
            </div>
            <p className="mt-4 text-gray-200 font-semibold">{testimonial.name}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600">
          Start with a Free Demo
        </button>
      </div>
    </div>
  );
};

export default Testimonials;