import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';

const Bottom = () => {
  return (
      <footer className="w-full bg-black py-2 px-8 md:px-4">
        {/* White line separator at top */}
        <div className="w-full h-px bg-white/20 my-1"></div>
        <div className="max-w-[1820px] mx-auto mb-6 flex flex-col md:flex-row items-start justify-between gap-8 md:gap-16 mt-3">
          {/* Left Side - Logo and Description */}
          <div className="flex flex-col items-start w-full md:w-auto mb-8 md:mb-0">
            {/* Logo */}
            <div className="mb-6">
              <img
                  src="/logo1.png"
                  alt="Omniblend Logo"
                  className="w-[120px] md:w-[130px] h-auto"
              />
            </div>

            {/* Description */}
            <p className="text-white font-afacad font-normal text-[14px] md:text-[18px] leading-relaxed md:max-w-[280px] max-w-[290px]" style={{fontFamily: 'Afacad, sans-serif'}}>
              A modern spice brand rooted in purity and craftsmanship, redefining everyday cooking with honest, flavorful blends.
            </p>
          </div>

          {/* Right Side - 3 Sections */}
          <div className="w-full md:w-[1300px] grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-16 lg:gap-44 ">
            {/* Section 1 - About Company */}
            <div className="flex flex-col items-start md:mb-0 mb-4">
              <h3 className="text-white font-afacad font-semibold text-[20px] mb-4 md:mb-6">
                About Company
              </h3>
              <div className="flex flex-col items-start gap-2 md:gap-5">
                <a href="/about" className="text-white font-afacad font-normal text-[14px] hover:text-gray-300 transition-colors" style={{fontFamily: 'Afacad, sans-serif'}}>
                  About Us
                </a>
                <a href="/delivery" className="text-white font-afacad font-normal text-[14px] hover:text-gray-300 transition-colors" style={{fontFamily: 'Afacad, sans-serif'}}>
                  Deliver and Payment
                </a>
                <a href="/recipes" className="text-white font-afacad font-normal text-[14px] hover:text-gray-300 transition-colors" style={{fontFamily: 'Afacad, sans-serif'}}>
                  Recipies
                </a>
              </div>
            </div>

            {/* Section 2 - Quick Links */}
            <div className="flex flex-col items-start md:mb-0 mb-4">
              <h3 className="text-white font-afacad font-semibold text-[20px] mb-4 md:mb-6">
                Quick Links
              </h3>
              <div className="flex flex-col items-start gap-2 md:gap-5">
                <a href="/blog" className="text-white font-afacad font-normal text-[14px] hover:text-gray-300 transition-colors" style={{fontFamily: 'Afacad, sans-serif'}}>
                  Blog
                </a>
                <a href="/qa" className="text-white font-afacad font-normal text-[14px] hover:text-gray-300 transition-colors" style={{fontFamily: 'Afacad, sans-serif'}}>
                  Q&A
                </a>
                <a href="/buy" className="text-white font-afacad font-normal text-[14px] hover:text-gray-300 transition-colors" style={{fontFamily: 'Afacad, sans-serif'}}>
                  Buy
                </a>
              </div>
            </div>

            {/* Section 3 - Contact Us */}
            <div className="flex flex-col items-start md:mb-0 mb-4">
              <h3 className="text-white font-afacad font-semibold text-[20px] mb-4 md:mb-6">
                Contact Us
              </h3>
              <div className="flex flex-col items-start gap-2 md:gap-5">
                <a href="tel:+911234567890" className="text-white font-afacad font-normal text-[14px] hover:text-gray-300 transition-colors" style={{fontFamily: 'Afacad, sans-serif'}}>
                  +91 12345 67890
                </a>
                <a href="mailto:omniblendservice@gmail.com" className="text-white font-afacad font-normal text-[14px] hover:text-gray-300 transition-colors" style={{fontFamily: 'Afacad, sans-serif'}}>
                  omniblendservice@gmail.com
                </a>
                <div className="flex flex-col items-start gap-3">
                <span className="text-white font-afacad font-normal text-[14px]" style={{fontFamily: 'Afacad, sans-serif'}}>
                  Our Social Networks :
                </span>
                  <div className="flex items-center gap-4">
                    <a href="https://instagram.com" className="text-white hover:text-gray-300 transition-colors">
                      <Instagram size={24} />
                    </a>
                    <a href="https://linkedin.com" className="text-white hover:text-gray-300 transition-colors">
                      <Linkedin size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* White line separator */}
        <div className="w-full h-px bg-white/20 my-1"></div>

        {/* Bottom section with copyright and legal links */}
        <div className="max-w-[1820px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Left side - Copyright */}
          <div className="flex items-center gap-36 md:gap-52 ">
            <a href="/privacy" className="text-white font-afacad font-normal text-[14px] hover:text-gray-300 transition-colors" style={{fontFamily: 'Afacad, sans-serif'}}>
              Privacy Policy
            </a>
            <a href="/terms" className="text-white font-afacad font-normal text-[14px] hover:text-gray-300 transition-colors" style={{fontFamily: 'Afacad, sans-serif'}}>
              Terms of refund
            </a>
          </div>

          {/* Right side - Legal links */}
          <div>
            <p className="text-white font-afacad font-normal text-[12px]" style={{fontFamily: 'Afacad, sans-serif'}}>
              © 2025 Randall's Harvest. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
  );
};

export default Bottom;
