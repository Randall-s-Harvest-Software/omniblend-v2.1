import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isAuthPage = location.pathname === "/buy" || location.pathname === "/login" || location.pathname === "/register" || location.pathname === "/admin";

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleBackClick = () => {
    // Navigate back to products page or previous page
    navigate(-1);
  };

  return (
      <>
        {/* Mobile Menu Overlay - Outside of nav to ensure full viewport coverage */}
        {!isAuthPage && isMenuOpen && (
            <div className="fixed inset-0 z-40">
              {/* Glassmorphism Overlay */}
              <div
                  className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                  onClick={() => setIsMenuOpen(false)}
              />

              {/* Mobile Menu Content */}
              <div className="absolute top-0 right-0 h-full w-3/4 max-w-sm bg-white/10 backdrop-blur-lg p-6 flex flex-col items-center justify-center space-y-8 transform transition-transform duration-300 ease-in-out">
                <NavLink to="/home" mobile>Home</NavLink>
                <NavLink to="/products" mobile>Products</NavLink>
                <NavLink to="/about" mobile>About Us</NavLink>
                <NavLink to="/contact" mobile>Contact Us</NavLink>

                <div className="flex flex-col space-y-4 w-full mt-8">
                  <Link
                      to="/login"
                      className="bg-white/10 backdrop-blur-sm border border-white/20 text-white font-afacad font-medium text-[16px] px-6 py-3 rounded-full hover:bg-white/20 transition-all duration-300 text-center"
                      style={{fontFamily: 'Afacad, sans-serif'}}
                      onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                      to="/register"
                      className="bg-[#265B06] backdrop-blur-sm border border-white/20 text-white font-afacad font-medium text-[16px] px-6 py-3 rounded-full hover:bg-[#38611F] transition-all duration-300 text-center"
                      style={{fontFamily: 'Afacad, sans-serif'}}
                      onClick={() => setIsMenuOpen(false)}
                  >
                    Register
                  </Link>
                </div>
              </div>
            </div>
        )}

        <nav className={`w-full max-w-[340px] md:max-w-[90%] lg:max-w-[85%] xl:max-w-[80%] 2xl:max-w-[70%] h-[45px] md:h-[60px] flex items-center px-4 sm:px-6 md:px-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-full shadow-2xl mx-auto fixed top-[20px] sm:top-[25px] md:top-[30px] left-1/2 transform -translate-x-1/2 z-50 ${isAuthPage ? 'justify-center' : 'justify-between'}`}>
          {/* Back Button - Only on Auth pages */}
          {isAuthPage && (
              <button
                  onClick={handleBackClick}
                  className="absolute left-8 flex items-center gap-2 text-white font-afacad font-medium text-[16px] hover:text-gray-200 transition-colors duration-300"
                  style={{fontFamily: 'Afacad, sans-serif'}}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left">
                  <path d="M19 12H5"></path>
                  <path d="m12 19-7-7 7-7"></path>
                </svg>
                Back
              </button>
          )}

          {/* Logo Section - Always visible, centered on Auth pages */}
          <div className={`flex items-center ${isAuthPage ? 'flex-1 justify-center' : ''}`}>
            <img
                src="/logo1.png"
                alt="Logo"
                className="w-[80px] h-auto"
            />
          </div>

          {/* Desktop Navigation Links - Hidden on mobile and Auth pages */}
          {!isAuthPage && (
              <div className="hidden md:flex items-center gap-16 lg:gap-24 xl:gap-32 2xl:gap-40">
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/products">Products</NavLink>
                <NavLink to="/about">About Us</NavLink>
                <NavLink to="/contact">Contact Us</NavLink>
              </div>
          )}

          {/* Mobile Menu Button - Only visible on mobile and not on auth pages */}
          {!isAuthPage && (
              <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="md:hidden text-white p-2 focus:outline-none z-50"
                  aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
          )}


          {/* Right side - Auth Buttons - Hidden on mobile and Auth pages */}
          {!isAuthPage && (
              <div className="hidden md:flex items-center gap-4">
                <Link
                    to="/login"
                    className="bg-white/10 backdrop-blur-sm border border-white/20 text-white font-afacad font-medium text-[14px] px-4 py-2 rounded-full hover:bg-white/20 transition-all duration-300"
                    style={{fontFamily: 'Afacad, sans-serif'}}
                >
                  Login
                </Link>
                <Link
                    to="/register"
                    className="bg-[#265B06] backdrop-blur-sm border border-white/20 text-white font-afacad font-medium text-[14px] px-4 py-2 rounded-full hover:bg-[#38611F] transition-all duration-300"
                    style={{fontFamily: 'Afacad, sans-serif'}}
                >
                  Register
                </Link>
              </div>
          )}
        </nav>
      </>
  );
};

// Reusable NavLink component
const NavLink = ({ to, children, mobile = false }) => (
    <Link
        to={to}
        className={`${mobile ? 'text-2xl py-4 w-full text-center' : ''} text-white font-afacad font-medium hover:text-gray-200 transition-colors duration-300`}
        style={{fontFamily: 'Afacad, sans-serif'}}
    >
      {children}
    </Link>
);

export default Navbar;
