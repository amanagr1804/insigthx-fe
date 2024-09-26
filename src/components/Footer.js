import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <a href="#features" className="hover:text-accentGreen transition-colors duration-300">Features</a>
            <a href="#how-it-works" className="hover:text-accentGreen transition-colors duration-300">How It Works</a>
            <a href="#faq" className="hover:text-accentGreen transition-colors duration-300">FAQ</a>
            <a href="#privacy-policy" className="hover:text-accentGreen transition-colors duration-300">Privacy Policy</a>
            <a href="#terms-conditions" className="hover:text-accentGreen transition-colors duration-300">Terms & Conditions</a>
          </div>
          <div className="text-sm">
            <p>All rights Reserved | 2024 © Absolute Algorithms LLP</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
