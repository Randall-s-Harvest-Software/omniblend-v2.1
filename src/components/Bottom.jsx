import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';

const Bottom = () => {
  return (
    <footer className="w-full bg-black py-2 px-4">
      <div className="max-w-[1820px] mx-auto mb-6 flex items-start justify-between gap-16 mt-3">
        {/* Left Side - Logo and Description */}
        <div className="flex flex-col items-start">
          {/* Logo */}
          <div className="mb-6">
            <img
              src="/logo1.png"
              alt="Omniblend Logo"
              className="w-[130px] h-auto"
            />
          </div>

          {/* Description */}
          <p className="text-white font-afacad font-normal text-[18px] leading-relaxed max-w-[260px]" style={{fontFamily: 'Afacad, sans-serif'}}>
            A modern spice brand rooted in purity and craftsmanship, redefining everyday cooking with honest, flavorful blends.
          </p>
        </div>

        {/* Right Side - 3 Sections */}
        <div className="flex items-start gap-72">
          {/* Section 1 - About Company */}
          <div className="flex flex-col items-start">
            <h3 className="text-white font-afacad font-semibold text-[22px] mb-6">
              About Company
            </h3>
            <div className="flex flex-col items-start gap-5">
              <a href="/about" className="text-white font-afacad font-normal text-[18px] hover:text-gray-300 transition-colors" style={{fontFamily: 'Afacad, sans-serif'}}>
                About Us
              </a>
              <a href="/delivery" className="text-white font-afacad font-normal text-[18px] hover:text-gray-300 transition-colors" style={{fontFamily: 'Afacad, sans-serif'}}>
                Deliver and Payment
              </a>
              <a href="/recipes" className="text-white font-afacad font-normal text-[18px] hover:text-gray-300 transition-colors" style={{fontFamily: 'Afacad, sans-serif'}}>
                Recipies
              </a>
            </div>
          </div>

          {/* Section 2 - Quick Links */}
          <div className="flex flex-col items-start">
            <h3 className="text-white font-afacad font-semibold text-[22px] mb-6">
              Quick Links
            </h3>
            <div className="flex flex-col items-start gap-5">
              <a href="/blog" className="text-white font-afacad font-normal text-[18px] hover:text-gray-300 transition-colors" style={{fontFamily: 'Afacad, sans-serif'}}>
                Blog
              </a>
              <a href="/qa" className="text-white font-afacad font-normal text-[18px] hover:text-gray-300 transition-colors" style={{fontFamily: 'Afacad, sans-serif'}}>
                Q&A
              </a>
              <a href="/buy" className="text-white font-afacad font-normal text-[18px] hover:text-gray-300 transition-colors" style={{fontFamily: 'Afacad, sans-serif'}}>
                Buy
              </a>
            </div>
          </div>

          {/* Section 3 - Contact Us */}
          <div className="flex flex-col items-start">
            <h3 className="text-white font-afacad font-semibold text-[22px] mb-6">
              Contact Us
            </h3>
            <div className="flex flex-col items-start gap-5">
              <a href="tel:+911234567890" className="text-white font-afacad font-normal text-[18px] hover:text-gray-300 transition-colors" style={{fontFamily: 'Afacad, sans-serif'}}>
                +91 12345 67890
              </a>
              <a href="mailto:omniblendservice@gmail.com" className="text-white font-afacad font-normal text-[18px] hover:text-gray-300 transition-colors" style={{fontFamily: 'Afacad, sans-serif'}}>
                omniblendservice@gmail.com
              </a>
              <div className="flex flex-col items-start gap-3">
                <span className="text-white font-afacad font-normal text-[18px]" style={{fontFamily: 'Afacad, sans-serif'}}>
                  Our Social Networks :
                </span>
                <div className="flex px-8 items-center gap-4">
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
      <div className="max-w-[1820px] mx-auto flex items-center justify-between">
        {/* Left side - Copyright */}
        <div>
          <p className="text-white font-afacad font-normal text-[14px]" style={{fontFamily: 'Afacad, sans-serif'}}>
            © 2025 Randall's Harvest. All rights reserved.
          </p>
        </div>

        {/* Right side - Legal links */}
        <div className="flex items-center gap-52">
          <a href="/privacy" className="text-white font-afacad font-normal text-[14px] hover:text-gray-300 transition-colors" style={{fontFamily: 'Afacad, sans-serif'}}>
            Privacy Policy
          </a>
          <a href="/terms" className="text-white font-afacad font-normal text-[14px] hover:text-gray-300 transition-colors" style={{fontFamily: 'Afacad, sans-serif'}}>
            Terms of refund
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Bottom;
