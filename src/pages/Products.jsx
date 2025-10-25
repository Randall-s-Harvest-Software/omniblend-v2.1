import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Bottom from "../components/Bottom.jsx";
import { useProducts } from '../context/ProductContext';

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
                    <div className="w-[630px] h-[80px] bg-black/40 backdrop-blur-[10px] border border-white/20 rounded-2xl shadow-lg flex items-center justify-center px-6">
                        <h1 className="text-white font-pethra font-bold text-[52px] leading-tight text-center">
                            No Products Available
                        </h1>
                    </div>
                    <p className="text-gray-400 text-lg mt-8 text-center">Please check back later or contact administrator.</p>
                </div>
                <Bottom />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black relative" style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(/product.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
            {/* Navbar positioned 60px from top and centered */}
            <Navbar />

            {/* Main Products Section */}
            <div className="pt-36 flex flex-col items-center px-4 min-h-screen pr-24 pl-24" style={{ position: 'relative' }}>
                {/* Products Heading */}
                <div className="mb-16">
                    <div className="w-[630px] h-[80px] bg-black/40 backdrop-blur-[10px] border border-white/20 rounded-2xl shadow-lg flex items-center justify-center px-6">
                        <h1 className="text-white font-pethra font-bold text-[52px] leading-tight text-center">
                            Types of Omni Blends
                        </h1>
                    </div>
                </div>

                {/* Two Main Sections - Product Details and Image */}
                <div className="w-[1820px] flex items-start justify-center mt-8 gap-32 mb-16">
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
                                    e.target.src = '/default-product.svg'; // Fallback image
                                }}
                            />
                        </div>
                    </div>
                </div>

                {/* Navigation Arrow Buttons - Split Sides */}
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

                {/* Ready to Buy Button */}
                <div
                    onClick={handleBuyNow}
                    className="w-[300px] h-[60px] bg-black/40 backdrop-blur-[10px] border border-white/20 rounded-2xl shadow-lg flex items-center justify-center cursor-pointer hover:bg-black/50 transition-all duration-300 mt-8"
                >
                    <span className="text-white font-afacad font-semibold text-[24px]" style={{fontFamily: 'Afacad, sans-serif'}}>
                        Ready to buy...
                    </span>
                </div>
            </div>

            <Bottom />
        </div>
    )
}

export default Products
