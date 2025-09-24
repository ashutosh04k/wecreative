// src/components/FooterSection.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <div className="flex items-center mb-4">
            <img src="https://wecreativetech.in/wp-content/uploads/2023/09/we-creative-tech-logo-e1695318995174.png" alt="CABA Logo" className="mr-2 h-10 w-30" />
            <span className="text-xl font-bold">CABA Innovatives</span>
          </div>
          <p className="text-gray-400">
            Leading multimedia and digital marketing training institute established in 2008. Empowering students with industry-relevant skills and 100% job placement assistance.
          </p>
          <div className="flex space-x-2 mt-4">
            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">All Courses</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Achievements</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Job Guarantee</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Franchise</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Courses</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">Graphic Design</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Motion Graphics</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Digital Marketing</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">UI/UX Design</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Video Editing</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Web Development</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">SEO & SEM</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Cyber Security</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
          <ul className="space-y-2">
            <li className="flex items-center"><i className="fas fa-phone mr-2 text-orange-500"></i> Call Us: +91 98712 34567</li>
            <li className="flex items-center"><i className="fas fa-envelope mr-2 text-orange-500"></i> Email Us: info@cabainnovatives.com</li>
            <li className="flex items-center"><i className="fas fa-map-marker-alt mr-2 text-orange-500"></i> Visit Us: 123 Training Center, New Delhi, India - 110001</li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-6 text-gray-400">
        <p>© 2025 CABA INNOVATIVES. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
          <a href="#" className="hover:text-white">Disclaimer</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;