import React from 'react'
import Navbar from '../components/Navbar'
import Bottom from "../components/Bottom.jsx";

const Home = () => {
    return (
        <div className="min-h-screen bg-black relative" style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.5)), url(/Home.webp)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
            {/* Navbar positioned 60px from top and centered */}
            <Navbar />

            {/* Main content with glassmorphism box */}
            <div className="pt-28 -top-6 relative md:pt-32 lg:pt-40 flex justify-center items-center min-h-screen px-4 sm:px-6 lg:px-8">
                {/* Glassmorphism Box - Responsive width and height */}
                <div className="w-full max-w-[95%] md:max-w-[90%] lg:max-w-[1820px] h-auto md:h-[600px] lg:h-[950px] bg-black/30 backdrop-blur-[10px] border border-white/20 rounded-3xl shadow-2xl flex flex-col lg:flex-row items-center justify-between p-6 md:p-8 lg:px-16 lg:py-12">
                    {/* Left Side Content */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center lg:pr-4 xl:pr-8 relative lg:left-0 lg:transform-none">
                        {/* Main Heading */}
                        <h1 className="text-white font-pethra text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[100px] leading-tight mb-4 sm:mb-6 md:mb-8 text-center lg:text-left">
                            One Blend.<br className="hidden sm:block" /> Endless Flavors.
                        </h1>

                        {/* Description */}
                        <p className="text-white font-afacad font-normal text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[26px] leading-relaxed mb-6 sm:mb-8 md:mb-10 lg:mb-12 max-w-full lg:max-w-[730px] text-center lg:text-left">
                            Omniblend is a gourmet seasoning crafted from the finest natural ingredients, designed to add depth and richness to any dish. Whether it's a quick snack or a festive meal, one spoonful transforms your cooking into a flavorful experience.
                        </p>

                        {/* Buy Now Button */}
                        <div className="flex justify-center lg:justify-start">
                            <button className="w-full sm:w-1/2 bg-white text-black font-afacad font-semibold text-base sm:text-lg px-6 py-2 md:py-3 sm:px-8 sm:py-4 rounded-[20px] hover:bg-gray-100 transition-colors duration-300 shadow-lg">
                                Buy Now
                            </button>
                        </div>
                    </div>

                    {/* Right Side Image - Hidden on mobile, shown on md and up */}
                    <div className="hidden lg:flex lg:w-1/2 justify-center items-center mt-12 lg:mt-0 lg:relative lg:right-0 xl:right-[100px]">
                        <img
                            src="/omniblend.png"
                            alt="Omniblend Product"
                            className="w-full max-w-[500px] xl:max-w-[600px] h-auto transform rotate-[-7deg] drop-shadow-2xl"
                            loading="lazy"
                        />
                    </div>
                    
                    {/* Small product image for mobile */}
                    <div className="lg:hidden w-full flex justify-center items-center mt-8">
                        <img
                            src="/omniblend.png"
                            alt="Omniblend Product"
                            className="w-2/3 max-w-[300px] h-auto transform rotate-[-7deg] drop-shadow-2xl"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>

            {/* Story Section */}
             <div className="relative px-4 sm:px-6 lg:px-8 xl:px-44 md:py-12 py-8">
                <div className="py-12 md:py-20 flex justify-center items-center">
                    <div className="w-full max-w-[1820px] flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12">
                        {/* Left Side - Story Title */}
                        <div className="w-full lg:flex-1 lg:mr-8">
                            <h2 className="text-white font-pethra font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[64px] leading-tight text-center lg:text-left">
                                The Story Behind Omniblend
                            </h2>
                        </div>

                        {/* Right Side - Description */}
                        <div className="w-full lg:flex-1 lg:max-w-[574px]">
                            <p className="text-white font-afacad font-normal text-lg sm:text-xl md:text-2xl lg:text-[24px] leading-relaxed text-center lg:text-left" style={{fontFamily: 'Afacad, sans-serif'}}>
                                Discover how Omniblend brings together the essence of pure, handpicked spices — blended to perfection for a balanced burst of flavor in every dish.
                            </p>
                        </div>
                    </div>
                </div>

             
              {/* Feature Boxes Section */}
              <div className="pb-12 md:pb-20 flex justify-center items-start px-4 sm:px-6">
                <div className="w-full max-w-[1820px] flex flex-col lg:flex-row items-start justify-between gap-8">
                    {/* Left Side - 3 Glassmorphism Boxes */}
                    <div className="w-full lg:flex-1 flex flex-col gap-4 sm:gap-6">
                        {/* Box 1 - 100% Natural */}
                        <div className="w-full sm:w-[500px] lg:w-full h-auto sm:h-[130px] bg-black/40 backdrop-blur-[10px] border border-white/20 rounded-2xl shadow-lg flex items-start justify-start p-4 sm:px-6 sm:py-4">
                            <div className="flex flex-col sm:flex-row items-start">
                                <h3 className="text-white font-afacad font-semibold text-xl sm:text-[24px] w-full sm:w-[100px] text-left mb-2 sm:mb-0">
                                    100% Natural
                                </h3>
                                <p className="text-white font-afacad font-normal text-sm sm:text-[16px] leading-relaxed max-w-full sm:max-w-[287px] text-left" style={{fontFamily: 'Afacad, sans-serif'}}>
                                    No preservatives, no artificial colors — only pure, natural ingredients blended to perfection for authentic flavor.
                                </p>
                            </div>
                        </div>

                        {/* Box 2 - 10 Handpicked Spices */}
                        <div className="w-full sm:w-[500px] lg:w-full h-auto sm:h-[130px] bg-black/40 backdrop-blur-[10px] border border-white/20 rounded-2xl shadow-lg flex items-start justify-start p-4 sm:px-6 sm:py-4">
                            <div className="flex flex-col sm:flex-row items-start">
                                <h3 className="text-white font-afacad font-semibold text-xl sm:text-[26px] w-full sm:w-[142px] text-left mb-2 sm:mb-0">
                                    10 Handpicked Spices
                                </h3>
                                <p className="text-white font-afacad font-normal text-sm sm:text-[16px] leading-relaxed max-w-full sm:max-w-[287px] text-left" style={{fontFamily: 'Afacad, sans-serif'}}>
                                    Hand-selected from India's elite spice estates — where tradition, quality, and authenticity come together to create the perfect blend.
                                </p>
                            </div>
                        </div>

                        {/* Box 3 - Crafted with Care */}
                        <div className="w-full sm:w-[500px] lg:w-full h-auto sm:h-[130px] bg-black/40 backdrop-blur-[10px] border border-white/20 rounded-2xl shadow-lg flex items-start justify-start p-4 sm:px-6 sm:py-4">
                            <div className="flex flex-col sm:flex-row items-start">
                                <h3 className="text-white font-afacad font-semibold text-xl sm:text-[24px] w-full sm:w-[153px] text-left mb-2 sm:mb-0">
                                    Crafted with Care
                                </h3>
                                <p className="text-white font-afacad font-normal text-sm sm:text-[16px] leading-relaxed max-w-full sm:max-w-[287px] text-left" style={{fontFamily: 'Afacad, sans-serif'}}>
                                    Prepared in limited batches to maintain peak freshness and quality, so every blend reaches you at its most flavorful.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - White Box - Hidden on mobile, shown on lg and up */}
                    <div className="hidden lg:flex lg:flex-shrink-0 w-full lg:w-1/2">
                        <div className="w-full h-[400px] lg:h-[440px] bg-white/10 rounded-[10px] shadow-lg">
                            {/* Empty white box as specified */}
                        </div>
                    </div>
                </div>
              </div>

             {/* Nature's Finest Section */}
             <div className="py-12 md:py-20 flex flex-col items-center justify-center px-4 sm:px-6">
                <div className="w-full max-w-[1820px] flex flex-col items-center text-center">
                    {/* Main Title */}
                    <h2 className="text-white font-pethra font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[54px] leading-tight mb-4 sm:mb-6">
                        Nature's Finest,<br className="sm:hidden" /> Perfectly Blended
                    </h2>

                    {/* Subtitle */}
                    <p className="text-white font-afacad font-normal text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed mb-12 md:mb-16 lg:mb-20 max-w-full sm:max-w-[90%] md:max-w-[900px]" style={{fontFamily: 'Afacad, sans-serif'}}>
                        A handcrafted fusion of organic ingredients and timeless expertise — taste purity redefined.
                    </p>

                    {/* 3 Glassmorphism Boxes */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 w-full max-w-7xl px-4">
                        {/* Box 1 - 100% Natural */}
                        <div className="w-full h-auto min-h-[300px] sm:min-h-[350px] md:h-[400px] bg-black/40 backdrop-blur-[8px] border border-white/20 rounded-3xl shadow-lg flex flex-col items-center justify-start p-6 sm:p-8">
                            {/* Icon */}
                            <div className="mb-6 sm:mb-8 md:mb-10 mt-2 sm:mt-5">
                                <svg className="w-12 h-12 sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                </svg>
                            </div>

                            {/* Title */}
                            <h3 className="text-white font-afacad font-semibold text-xl sm:text-2xl md:text-[26px] mb-4 sm:mb-6 md:mb-8 text-center">
                                100% Natural
                            </h3>

                            {/* Description */}
                            <p className="text-white font-afacad font-normal text-base sm:text-lg md:text-[20px] leading-relaxed max-w-full text-center opacity-80">
                                Sourced from the finest organic farms around the world, free from additives and preservatives.
                            </p>
                        </div>

                        {/* Box 2 - Expertly Crafted */}
                        <div className="w-full h-auto min-h-[300px] sm:min-h-[350px] md:h-[400px] bg-black/40 backdrop-blur-[8px] border border-white/20 rounded-3xl shadow-lg flex flex-col items-center justify-start p-6 sm:p-8">
                            {/* Icon */}
                            <div className="mb-6 sm:mb-8 md:mb-10 mt-2 sm:mt-5">
                                <svg className="w-12 h-12 sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                </svg>
                            </div>

                            {/* Title */}
                            <h3 className="text-white font-afacad font-semibold text-xl sm:text-2xl md:text-[26px] mb-4 sm:mb-6 md:mb-8 text-center">
                                Expertly Crafted
                            </h3>

                            {/* Description */}
                            <p className="text-white font-afacad font-normal text-base sm:text-lg md:text-[20px] leading-relaxed max-w-full text-center opacity-80">
                                Blended by master herbalists with decades of experience in flavor profiling.
                            </p>
                        </div>

                        {/* Box 3 - Health Benefits */}
                        <div className="w-full h-auto min-h-[300px] sm:min-h-[350px] md:h-[400px] bg-black/40 backdrop-blur-[8px] border border-white/20 rounded-3xl shadow-lg flex flex-col items-center justify-start p-6 sm:p-8 md:col-span-2 lg:col-span-1">
                            {/* Icon */}
                            <div className="mb-6 sm:mb-8 md:mb-10 mt-2 sm:mt-5">
                                <svg className="w-12 h-12 sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>

                            {/* Title */}
                            <h3 className="text-white font-afacad font-semibold text-xl sm:text-2xl md:text-[26px] mb-4 sm:mb-6 md:mb-8 text-center">
                                Health Benefits
                            </h3>

                            {/* Description */}
                            <p className="text-white font-afacad font-normal text-base sm:text-lg md:text-[20px] leading-relaxed max-w-full text-center opacity-80">
                                Packed with antioxidants and nutrients that support overall wellness and immunity.
                            </p>
                        </div>
                    </div>
                </div>
             </div>


            {/* Elevate Every Meal Section */}
            <div className="py-12 md:py-20 flex justify-center items-center px-4 sm:px-6">
                <div className="w-full max-w-[1820px] flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 xl:gap-24">
                    {/* Left Side - Glassmorphism Box with White Box Inside - Hidden on mobile, shown on lg and up */}
                    <div className="hidden lg:flex justify-center items-center w-full lg:w-1/2">
                        <div className="w-full max-w-[415px] h-[400px] md:h-[480px] bg-black/40 backdrop-blur-[8px] border border-white/20 rounded-3xl shadow-2xl flex items-center justify-center">
                            {/* White Box Inside */}
                            <div className="w-[355px] h-[415px] bg-white rounded-2xl shadow-lg flex items-center justify-center overflow-hidden">
                                <img
                                    src="/homeproduct.webp"
                                    alt="Omniblend Product Display"
                                    className="w-[380px] h-auto object-contain transform drop-shadow-xl"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Text Content */}
                    <div className="flex flex-col items-start max-w-[800px]">
                        {/* Main Title */}
                        <h2 className="text-white font-pethra font-bold text-[44px] leading-tight mb-6">
                            Elevate Every Meal with Omniblend
                        </h2>

                        {/* Description */}
                        <p className="text-white font-afacad font-normal text-[24px] leading-relaxed mb-8 max-w-[725px]" style={{fontFamily: 'Afacad, sans-serif'}}>
                            Elevate your meals with Omniblend — a dual-texture gourmet seasoning crafted from the world's finest spices. Perfectly balanced, naturally pure, and beautifully packaged for those who savor quality.
                        </p>

                        {/* Buy Now Button with Glassmorphism */}
                        <div className="bg-black/30 backdrop-blur-md border border-white/30 rounded-2xl shadow-lg px-6 py-3">
                            <span className="text-white font-afacad font-semibold text-[18px]" style={{fontFamily: 'Afacad, sans-serif'}}>
                                Buy Now - ₹499
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div>
                <Bottom />
            </div>
        </div>
    )
}

export default Home
