import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Bottom from "../components/Bottom.jsx";
import { useProducts } from '../context/ProductContext';
import { ChevronDown } from 'lucide-react';

const Products = () => {
    // Navigation hook
    const navigate = useNavigate();
    const { getActiveProducts } = useProducts();

    // Get active products from context
    const activeProducts = getActiveProducts();

    // State for current product index
    const [currentProductIndex, setCurrentProductIndex] = useState(0);

    // Navigation functions - Linear navigation (no looping)
    const nextProduct = () => {
        if (currentProductIndex < activeProducts.length - 1) {
            setCurrentProductIndex(prevIndex => prevIndex + 1);
        }
    };

    const prevProduct = () => {
        if (currentProductIndex > 0) {
            setCurrentProductIndex(prevIndex => prevIndex - 1);
        }
    };

    // Navigation function
    const handleBuyNow = () => {
        navigate('/buy', {
            state: {
                selectedProduct: currentProduct,
                productIndex: currentProductIndex
            }
        });
    };

    // Get current product data
    const currentProduct = activeProducts[currentProductIndex];

    // Show loading if no products or empty
    if (activeProducts.length === 0) {
        return (
            <div className="min-h-screen bg-black relative" style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(/product.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
                <Navbar />
                <div className="pt-36 flex flex-col items-center justify-center min-h-screen px-4">
                    <div className="w-full max-w-[90%] sm:max-w-[80%] md:max-w-[700px] h-auto min-h-[60px] md:min-h-[80px] bg-black/40 backdrop-blur-[10px] border border-white/20 rounded-2xl shadow-lg flex items-center justify-center p-4 md:p-6">
                        <h1 className="text-white font-pethra font-bold text-[28px] sm:text-[36px] md:text-[48px] lg:text-[52px] leading-tight text-center">
                            No Products Available
                        </h1>
                    </div>
                    <p className="text-gray-400 text-lg mt-8 text-center">Please check back later or contact administrator.</p>
                </div>
                <Bottom />
            </div>
        );
    }

    // State for scroll indicator visibility
    const [showScrollIndicator, setShowScrollIndicator] = useState(true);
    const productsRef = useRef(null);

    // Hide scroll indicator when user scrolls
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowScrollIndicator(false);
            } else {
                setShowScrollIndicator(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Scroll to products function
    const scrollToProducts = () => {
        window.scrollTo({
            top: window.innerHeight * 0.7,
            behavior: 'smooth'
        });
    };

    return (
        <div 
            className="min-h-screen bg-black relative" 
            style={{
                backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(/product.png)', 
                backgroundSize: 'cover', 
                backgroundPosition: 'center', 
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed'
            }}
        >
            {/* Navbar positioned 60px from top and centered */}
            <Navbar />

            {/* Scroll Down Indicator - Bottom Right */}
            {showScrollIndicator && (
                <div 
                    className="fixed bottom-8 right-1 z-40 cursor-pointer animate-bounce"
                    onClick={scrollToProducts}
                >
                    <div className="flex flex-col items-center">
                        <span className="text-white text-sm font-afacad mb-2">Scroll Down</span>
                        <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center">
                            <ChevronDown className="w-6 h-6 text-white" />
                        </div>
                    </div>
                </div>
            )}

            {/* Main Products Section */}
            <div className="pt-[90px] md:pt-36 flex flex-col items-center px-4 md:px-24 min-h-screen" style={{ position: 'relative' }}>
                {/* Products Heading */}
                <div className="mb-1 md:mb-16">
                    <div className="w-full max-w-[630px] h-[60px] md:h-[80px] bg-black/40 backdrop-blur-[10px] border border-white/20 rounded-2xl shadow-lg flex items-center justify-center px-4 md:px-6">
                        <h1 className="text-white font-pethra font-bold text-[32px] md:text-[52px] leading-tight text-center">
                            Types of Omni Blends
                        </h1>
                    </div>
                </div>

                {/* Mobile - Single Glassmorphism Container */}
                <div className="w-full max-w-[1820px] flex flex-col md:hidden items-center justify-center mt-2 gap-6 mb-12 px-4">
                    <div className="w-full bg-black/40 backdrop-blur-[10px] border border-white/20 rounded-2xl shadow-lg p-6 space-y-6">
                        {/* Product Name */}
                        <div className="w-full h-auto min-h-[60px] flex items-center justify-center px-4">
                            <h2 className="text-white font-pethra font-bold text-[28px] leading-tight text-center" style={{fontFamily: 'Afacad, sans-serif'}}>
                                {currentProduct.name}
                            </h2>
                        </div>

                        {/* Product Image */}
                        <div className="w-full h-[340px] bg-black/20 rounded-2xl flex items-center justify-center p-2">
                            <div className="w-full h-full bg-white rounded-xl shadow-lg overflow-hidden">
                                <img
                                    src={currentProduct.image}
                                    alt={`${currentProduct.name} Product`}
                                    className="w-full h-full object-contain p-2"
                                    onError={(e) => {
                                        e.target.src = '/default-product.svg';
                                    }}
                                />
                            </div>
                        </div>

                        {/* Tagline */}
                        <div className="w-full h-auto min-h-[50px] flex items-center justify-center px-2">
                            <p className="text-white font-afacad font-normal text-[18px] leading-relaxed text-center" style={{fontFamily: 'Afacad, sans-serif'}}>
                                {currentProduct.tagline}
                            </p>
                        </div>

                        {/* Description */}
                        <div className="w-full h-auto min-h-[100px]">
                            <p className="text-white font-afacad font-normal text-[14px] leading-relaxed text-justify" style={{fontFamily: 'Afacad, sans-serif'}}>
                                {currentProduct.description}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Desktop - Original Layout */}
                <div className="hidden md:flex w-full max-w-[1820px] flex-row items-start justify-center mt-8 gap-32 mb-16 px-4">
                    {/* Left Section - Product Information */}
                    <div className="flex flex-col items-start gap-6 py-12">
                        {/* First Row - Product Name */}
                        <div className="w-[350px] h-[80px] bg-black/40 backdrop-blur-[10px] border border-white/20 rounded-2xl shadow-lg flex items-center justify-center px-4">
                            <h2 className="text-white font-pethra font-bold text-[38px] leading-tight text-center" style={{fontFamily: 'Afacad, sans-serif'}}>
                                {currentProduct.name}
                            </h2>
                        </div>

                        {/* Second Row - Tagline */}
                        <div className="w-[360px] h-[70px] bg-black/40 backdrop-blur-[10px] border border-white/20 rounded-2xl shadow-lg flex items-center justify-center px-4">
                            <p className="text-white font-afacad font-normal text-[24px] leading-relaxed text-center" style={{fontFamily: 'Afacad, sans-serif'}}>
                                {currentProduct.tagline}
                            </p>
                        </div>

                        {/* Third Row - Description */}
                        <div className="w-[585px] h-[240px] bg-black/40 backdrop-blur-[10px] border border-white/20 rounded-2xl shadow-lg flex items-start justify-start px-6 py-4">
                            <p className="text-white font-afacad font-normal text-[18px] leading-relaxed" style={{fontFamily: 'Afacad, sans-serif'}}>
                                {currentProduct.description}
                            </p>
                        </div>
                    </div>

                    {/* Right Section - Product Image */}
                    <div className="w-[415px] h-[510px] bg-black/40 backdrop-blur-[10px] border border-white/20 rounded-2xl shadow-lg flex items-center justify-center px-6 py-6">
                        <div className="w-[390px] h-[480px] bg-white rounded-2xl shadow-lg flex items-center justify-center overflow-hidden">
                            <img
                                src={currentProduct.image}
                                alt={`${currentProduct.name} Product`}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.target.src = '/default-product.svg';
                                }}
                            />
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation Arrows - Inside the glass container */}
                <div className="md:hidden w-full flex justify-between px-2 -mt-4 mb-4">
                    {currentProductIndex > 0 && (
                        <button
                            onClick={prevProduct}
                            className="w-[60px] h-[60px] bg-black/40 backdrop-blur-[10px] border border-white/20 rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-black/50 transition-all duration-300"
                        >
                            <svg className="w-6 h-6 text-white transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                            </svg>
                        </button>
                    )}
                    {currentProductIndex < activeProducts.length - 1 && (
                        <button
                            onClick={nextProduct}
                            className="w-[60px] h-[60px] bg-black/40 backdrop-blur-[10px] border border-white/20 rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-black/50 transition-all duration-300 ml-auto"
                        >
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                            </svg>
                        </button>
                    )}
                </div>

                {/* Desktop Navigation Arrows */}
                <div className="hidden md:block">
                    {/* Next Arrow - Right Side (shows on 1st and 2nd products) */}
                    {currentProductIndex < activeProducts.length - 1 && (
                        <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
                            <button
                                onClick={nextProduct}
                                className="w-[70px] h-[70px] bg-black/40 backdrop-blur-[10px] border border-white/20 rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-black/50 transition-all duration-300"
                            >
                                <svg className="w-[30px] h-[30px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                                </svg>
                            </button>
                        </div>
                    )}

                    {/* Previous Arrow - Left Side (shows on 2nd and 3rd products) */}
                    {currentProductIndex > 0 && (
                        <div className="absolute left-8 top-1/2 transform -translate-y-1/2">
                            <button
                                onClick={prevProduct}
                                className="w-[70px] h-[70px] bg-black/40 backdrop-blur-[10px] border border-white/20 rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-black/50 transition-all duration-300"
                            >
                                <svg className="w-[30px] h-[30px] text-white transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                                </svg>
                            </button>
                        </div>
                    )}
                </div>

                {/* Mobile Ready to Buy Button */}
                <div className="md:hidden w-full px-4 mb-8">
                    <div
                        onClick={handleBuyNow}
                        className="w-full max-w-md lg:max-w-xl xl:max-w-2xl mx-auto bg-black/40 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 ease-in-out transform hover:scale-[1.02] hover:shadow-2xl"
                    >
                        <span className="text-white font-afacad font-semibold text-[18px]" style={{fontFamily: 'Afacad, sans-serif'}}>
                            Ready to buy...
                        </span>
                    </div>
                </div>

                {/* Desktop Ready to Buy Button */}
                <div className="hidden md:block">
                    <div
                        onClick={handleBuyNow}
                        className="w-[300px] h-[60px] bg-black/40 backdrop-blur-[10px] border border-white/20 rounded-2xl shadow-lg flex items-center justify-center cursor-pointer hover:bg-black/50 transition-all duration-300 mt-8"
                    >
                        <span className="text-white font-afacad font-semibold text-[24px]" style={{fontFamily: 'Afacad, sans-serif'}}>
                            Ready to buy...
                        </span>
                    </div>
                </div>
            </div>

            <Bottom />
        </div>
    )
}

export default Products
