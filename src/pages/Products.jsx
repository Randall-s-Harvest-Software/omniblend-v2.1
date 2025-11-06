import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Bottom from '../components/Bottom.jsx';
import { useProducts } from '../context/ProductContext';
import { ChevronDown } from 'lucide-react';

const Products = () => {
    const navigate = useNavigate();
    const { getActiveProducts } = useProducts();
    const activeProducts = getActiveProducts();

    const [currentProductIndex, setCurrentProductIndex] = useState(0);
    const [showScrollIndicator, setShowScrollIndicator] = useState(true);
    const productsRef = useRef(null);

    const currentProduct = activeProducts[currentProductIndex];

    const nextProduct = () => {
        if (currentProductIndex < activeProducts.length - 1) {
            setCurrentProductIndex(prev => prev + 1);
        }
    };

    const prevProduct = () => {
        if (currentProductIndex > 0) {
            setCurrentProductIndex(prev => prev - 1);
        }
    };

    const handleBuyNow = () => {
        navigate('/buy', {
            state: {
                selectedProduct: currentProduct,
                productIndex: currentProductIndex,
            },
        });
    };

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollIndicator(window.scrollY <= 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToProducts = () => {
        window.scrollTo({
            top: window.innerHeight * 0.7,
            behavior: 'smooth',
        });
    };

    // Show loading if no products
    if (activeProducts.length === 0) {
        return (
            <div
                className="min-h-screen bg-black relative"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(/product.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <Navbar />
                <div className="pt-36 flex flex-col items-center justify-center min-h-screen px-4">
                    <div className="w-full max-w-[90%] sm:max-w-[80%] md:max-w-[700px] h-auto min-h-[60px] md:min-h-[80px] bg-black/40 backdrop-blur-[10px] border border-white/20 rounded-2xl shadow-lg flex items-center justify-center p-4 md:p-6">
                        <h1 className="text-white font-pethra font-bold text-[28px] sm:text-[36px] md:text-[48px] lg:text-[52px] leading-tight text-center">
                            No Products Available
                        </h1>
                    </div>
                    <p className="text-gray-400 text-lg mt-8 text-center">
                        Please check back later or contact administrator.
                    </p>
                </div>
                <Bottom />
            </div>
        );
    }

    return (
        <div
            className="min-h-screen bg-black relative"
            style={{
                backgroundImage:
                    'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(/product.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
            }}
        >
            <Navbar />

            {/* Scroll Down Indicator */}
            {showScrollIndicator && (
                <div
                    className="fixed bottom-20 right-1 z-40 cursor-pointer animate-bounce md:hidden"
                    onClick={scrollToProducts}
                >
                    <div className="flex flex-col items-center">
                           <span className="text-white text-sm font-afacad mb-2">
                                 Scroll Down
                           </span>
                        <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center">
                            <ChevronDown className="w-6 h-6 text-white" />
                        </div>
                    </div>
                </div>
            )}


            {/* Main Products Section */}
            <div
                className="pt-[90px] md:pt-36 flex flex-col items-center px-2 md:px-24 min-h-screen"
                style={{ position: 'relative' }}
            >
                {/* Products Heading */}
                <div className="mb-1 md:mb-16">
                    <div className="w-full max-w-[630px] h-[60px] md:h-[80px] bg-black/40 backdrop-blur-[10px] border border-white/20 rounded-2xl shadow-lg flex items-center justify-center px-6 md:px-6">
                        <h1 className="text-white font-pethra font-bold text-[30px] md:text-[52px] leading-tight text-center">
                            Types of Omni Blends
                        </h1>
                    </div>
                </div>

                {/* Mobile Layout */}
                <div className="w-full max-w-[1820px] flex flex-col md:hidden items-center justify-center mt-2 gap-6 mb-12 px-4">
                    <div className="w-full bg-black/40 backdrop-blur-[10px] border border-white/20 rounded-2xl shadow-lg p-6 space-y-6">
                        <div className="w-full h-auto min-h-[60px] flex items-center justify-center px-4">
                            <h2 className="text-white font-pethra font-bold text-[28px] leading-tight text-center">
                                {currentProduct.name}
                            </h2>
                        </div>

                        <div className="w-full h-[340px] bg-black/20 rounded-2xl flex items-center justify-center p-2">
                            <div className="w-full h-full bg-black rounded-xl shadow-lg overflow-hidden">
                                <img
                                    src={currentProduct.image}
                                    alt={`${currentProduct.name} Product`}
                                    className="w-full h-full object-contain p-2"
                                    onError={e => (e.target.src = '/default-product.svg')}
                                />
                            </div>
                        </div>

                        <div className="w-full h-auto min-h-[50px] flex items-center justify-center px-2">
                            <p className="text-white font-afacad font-normal text-[18px] leading-relaxed text-center">
                                {currentProduct.tagline}
                            </p>
                        </div>

                        <div className="w-full h-auto min-h-[100px]">
                            <p className="text-white font-afacad font-normal text-[14px] leading-relaxed text-justify">
                                {currentProduct.description}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Desktop Layout with Outline */}
                <div className="hidden md:flex w-full max-w-[1820px] justify-center mt-0 mb-16 px-4">
                    <div className="relative p-8 border-2 border-white/20 rounded-3xl">
                        <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 to-amber-600/20 rounded-3xl blur-sm -z-10"></div>
                        <div className="relative flex flex-row items-start justify-center gap-32">
                            <div className="flex flex-col items-start gap-6 py-4">
                                <div className="w-[350px] h-[80px] bg-black/40 backdrop-blur-[10px] border border-white/20 rounded-2xl shadow-lg flex items-center justify-center px-4">
                                    <h2 className="text-white font-pethra font-bold text-[38px] leading-tight text-center">
                                        {currentProduct.name}
                                    </h2>
                                </div>
                                <div className="w-[360px] h-[70px] bg-black/40 backdrop-blur-[10px] border border-white/20 rounded-2xl shadow-lg flex items-center justify-center px-4">
                                    <p className="text-white font-afacad font-normal text-[24px] leading-relaxed text-center">
                                        {currentProduct.tagline}
                                    </p>
                                </div>
                                <div className="w-[585px] h-[240px] bg-black/40 backdrop-blur-[10px] border border-white/20 rounded-2xl shadow-lg flex items-start justify-start px-6 py-4">
                                    <p className="text-white font-afacad font-normal text-[18px] leading-relaxed">
                                        {currentProduct.description}
                                    </p>
                                </div>
                            </div>

                            <div className="w-[415px] h-[510px] bg-black/40 backdrop-blur-[10px] border border-white/20 rounded-2xl shadow-lg flex items-center justify-center px-6 py-6">
                                <div className="w-[390px] h-[480px] bg-white rounded-2xl shadow-lg flex items-center justify-center overflow-hidden">
                                    <img
                                        src={currentProduct.image}
                                        alt={`${currentProduct.name} Product`}
                                        className="w-full h-full object-cover"
                                        onError={e => (e.target.src = '/default-product.svg')}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation with Text Indicator */}
                <div className="w-full flex items-center justify-center gap-4 -mt-4 mb-4 px-2">
                    {currentProductIndex > 0 ? (
                        <button
                            onClick={prevProduct}
                            className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] bg-black/40 backdrop-blur-[10px] border border-white/20 rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-black/50 transition-all duration-300"
                            aria-label="Previous product"
                        >
                            <svg
                                className="w-5 h-5 md:w-6 md:h-6 text-white transform rotate-180"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    ) : (
                        <div className="w-[50px] h-[50px] md:w-[60px] md:h-[60px]" />
                    )}
                    
                    <div className="text-center px-4 py-2 bg-black/40 backdrop-blur-[10px] border border-white/20 rounded-xl shadow-lg">
                        <p className="text-white font-afacad text-sm md:text-base">
                            {currentProductIndex < activeProducts.length - 1 ? (
                                <span>Click to see next product</span>
                            ) : currentProductIndex > 0 ? (
                                <span>Click to see previous product</span>
                            ) : (
                                <span>Swipe or use arrows to navigate</span>
                            )}
                        </p>
                        <p className="text-white/70 text-xs mt-1">
                            {currentProductIndex + 1} of {activeProducts.length}
                        </p>
                    </div>
                    
                    {currentProductIndex < activeProducts.length - 1 ? (
                        <button
                            onClick={nextProduct}
                            className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] bg-black/40 backdrop-blur-[10px] border border-white/20 rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-black/50 transition-all duration-300"
                            aria-label="Next product"
                        >
                            <svg 
                                className="w-5 h-5 md:w-6 md:h-6 text-white" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    ) : (
                        <div className="w-[50px] h-[50px] md:w-[60px] md:h-[60px]" />
                    )}
                </div>

                {/* Mobile Buy Button */}
                <div className="md:hidden fixed bottom-4 left-0 right-0 z-40 flex justify-center px-6">
                    <div
                        onClick={handleBuyNow}
                        className="w-[330px] h-12 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 rounded-2xl shadow-lg flex items-center justify-center cursor-pointer transition-all duration-300 active:scale-[0.98] active:shadow-inner"
                    >
            <span className="text-white font-afacad font-bold text-xl tracking-wide">
              Ready to Buy
            </span>
                        <svg className="w-5 h-5 ml-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </div>
                </div>

                {/* Desktop Buy Button */}
                <div className="hidden md:block mt-8">
                    <div
                        onClick={handleBuyNow}
                        className="w-72 h-16 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 rounded-2xl shadow-lg flex items-center justify-center cursor-pointer transition-all duration-300 hover:shadow-xl active:scale-[0.98] active:shadow-inner"
                    >
            <span className="text-white font-afacad font-bold text-2xl tracking-wide">
              Ready to Buy
            </span>
                        <svg className="w-6 h-6 ml-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </div>
                </div>
            </div>

            <Bottom />
        </div>
    );
};

export default Products;
