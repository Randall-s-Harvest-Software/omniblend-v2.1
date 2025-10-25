import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isAuthPage = location.pathname === "/buy" || location.pathname === "/login" || location.pathname === "/register" || location.pathname === "/admin";

  const handleBackClick = () => {
    // Navigate back to products page or previous page
    navigate(-1);
  };

  return (
    <nav className={`w-full max-w-[1820px] h-[60px] flex items-center px-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-full shadow-2xl mx-auto fixed top-[40px] left-1/2 transform -translate-x-1/2 z-50 ${isAuthPage ? 'justify-center' : 'justify-between'}`}>
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

      {/* Navigation Links - Hidden on Auth pages */}
      {!isAuthPage && (
        <div className="flex items-center gap-[200px]">
          <Link
            to="/home"
            className="text-white font-afacad font-medium text-[20px] hover:text-gray-200 transition-colors duration-300"
            style={{fontFamily: 'Afacad, sans-serif'}}
          >
            Home
          </Link>
          <Link
            to="/products"
            className="text-white font-afacad font-medium text-[20px] hover:text-gray-200 transition-colors duration-300"
            style={{fontFamily: 'Afacad, sans-serif'}}
          >
            Products
          </Link>
          <Link
            to="/about"
            className="text-white font-afacad font-medium text-[20px] hover:text-gray-200 transition-colors duration-300"
            style={{fontFamily: 'Afacad, sans-serif'}}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="text-white font-afacad font-medium text-[20px] hover:text-gray-200 transition-colors duration-300"
            style={{fontFamily: 'Afacad, sans-serif'}}
          >
            Contact Us
          </Link>
        </div>
      )}

      {/* Right side - Auth Buttons - Hidden on Auth pages */}
      {!isAuthPage && (
        <div className="flex items-center gap-4">
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
  );
};

export default Navbar;
