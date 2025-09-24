import React from "react";

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-24 py-20 bg-black text-white pt-32">
      <div className="max-w-4xl space-y-12">
        <p className="text-orange-500 font-bold text-2xl">2500+ Batches</p>
        <h1 className="text-5xl md:text-5xl font-bold leading-tight">
          Asia's Leading Brand <br /> In Digital Career Training
        </h1>
        <p className="text-gray-300 text-xl">
          Advance your career in Data Science and Digital Marketing with the
          most trusted brand in Digital Education.
        </p>
        <div className="flex gap-12 mt-10">
          <button className="bg-orange-500 px-16 py-6 rounded-xl font-bold text-2xl hover:bg-orange-600 transition-colors">
            View Courses
          </button>
          <button className="border-2 border-gray-400 px-16 py-6 rounded-xl font-bold text-2xl hover:bg-gray-800 transition-colors">
            Book Free Demo →
          </button>
        </div>
      </div>
      <div className="mt-10 md:mt-0 relative">
        <img
          src="https://digiperform.org/wp-content/uploads/2023/10/12hbrr.png"
          alt="Student"
          className="w-[48rem] relative z-10"
        />
      </div>
    </section>
  );
};

export default HeroSection;
