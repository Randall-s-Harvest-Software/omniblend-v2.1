import React from 'react'
import Navbar from '../components/Navbar'
import Bottom from "../components/Bottom.jsx";

const Home = () => {
    return (
        <div className="min-h-screen bg-black relative" style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.5)), url(/Home.webp)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
            {/* Navbar positioned 60px from top and centered */}
            <Navbar />

            {/* Main content with glassmorphism box */}
            <div className="pt-28 flex justify-center items-center min-h-screen px-4">
                {/* Glassmorphism Box - 800h x 1820w */}
                <div className="w-[1820px] h-[950px] bg-black/30 backdrop-blur-[10px] border border-white/20 rounded-3xl shadow-2xl flex items-center justify-between px-16">
                    {/* Left Side Content */}
                    <div className="flex relative left-[50px] flex-col justify-center w-[730px]">
                        {/* Main Heading */}
                        <h1 className="text-white font-pethra text-[100px] leading-tight mb-8">
                            One Blend. Endless Flavors.
                        </h1>

                        {/* Description */}
                        <p className="text-white font-afacad font-normal text-[26px] leading-relaxed mb-12 max-w-[730px]">
                            Omniblend is a gourmet seasoning crafted from the finest natural ingredients, designed to add depth and richness to any dish. Whether it's a quick snack or a festive meal, one spoonful transforms your cooking into a flavorful experience.
                        </p>

                        {/* Buy Now Button */}
                        <button className="w-fit bg-white text-black font-afacad font-semibold text-lg px-8 py-4 rounded-[20px] hover:bg-gray-100 transition-colors duration-300 shadow-lg">
                            Buy Now
                        </button>
                    </div>

                    {/* Right Side Image */}
                    <div className="flex relative right-[100px] justify-center items-center">
                        <img
                            src="/omniblend.png"
                            alt="Omniblend Product"
                            className="w-[600px] h-auto transform rotate-[-7deg] drop-shadow-2xl"
                        />
                    </div>
                </div>
            </div>

            {/* Story Section */}
            <div className="relative px-44 py-12">
             <div className="py-20 flex justify-center items-center px-4 ">
                <div className="w-[1820px] flex items-start justify-between">
                    {/* Left Side - Story Title */}
                    <div className="flex-1 mr-8">
                        <h2 className="text-white font-pethra font-bold text-[64px] leading-tight">
                            The Story Behind Omniblend
                        </h2>
                    </div>

                    {/* Right Side - Description */}
                    <div className="flex-1 max-w-[574px]">
                        <p className="text-white font-afacad font-normal text-[24px] leading-relaxed" style={{fontFamily: 'Afacad, sans-serif'}}>
                            Discover how Omniblend brings together the essence of pure, handpicked spices — blended to perfection for a balanced burst of flavor in every dish.
                        </p>
                    </div>
                </div>
             </div>

             
              {/* Feature Boxes Section */}
              <div className="pb-20 flex justify-center items-start px-4">
                <div className="w-[1820px] flex items-start justify-between gap-8">
                    {/* Left Side - 3 Glassmorphism Boxes */}
                    <div className="flex-1 flex flex-col gap-6">
                        {/* Box 1 - 100% Natural */}
                        <div className="w-[500px] h-[130px] bg-black/40 backdrop-blur-[10px] border border-white/20 rounded-2xl shadow-lg flex items-start justify-start px-6 py-4">
                            <div className="flex flex-row items-start">
                                <h3 className="text-white font-afacad font-semibold text-[24px] w-[100px] text-left">
                                    100% Natural
                                </h3>
                                <p className="text-white font-afacad font-normal text-[16px] leading-relaxed max-w-[287px] text-left " style={{fontFamily: 'Afacad, sans-serif'}}>
                                    No preservatives, no artificial colors — only pure, natural ingredients blended to perfection for authentic flavor.
                                </p>
                            </div>
                        </div>

                        {/* Box 2 - 10 Handpicked Spices */}
                        <div className="w-[500px] h-[130px] bg-black/40 backdrop-blur-[10px] border border-white/20 rounded-2xl shadow-lg flex items-start justify-start px-6 py-4">
                            <div className="flex flex-row items-start">
                                <h3 className="text-white font-afacad font-semibold text-[26px] w-[142px] text-left">
                                    10 Handpicked Spices
                                </h3>
                                <p className="text-white font-afacad font-normal text-[16px] leading-relaxed max-w-[287px] text-left" style={{fontFamily: 'Afacad, sans-serif'}}>
                                    Hand-selected from India's elite spice estates — where tradition, quality, and authenticity come together to create the perfect blend.
                                </p>
                            </div>
                        </div>

                        {/* Box 3 - Crafted with Care */}
                        <div className="w-[500px] h-[130px] bg-black/40 backdrop-blur-[10px] border border-white/20 rounded-2xl shadow-lg flex items-start justify-start px-6 py-4">
                            <div className="flex flex-row items-start">
                                <h3 className="text-white font-afacad font-semibold text-[24px] w-[153px] text-left">
                                    Crafted with Care
                                </h3>
                                <p className="text-white font-afacad font-normal text-[16px] leading-relaxed max-w-[287px] text-left" style={{fontFamily: 'Afacad, sans-serif'}}>
                                    Prepared in limited batches to maintain peak freshness and quality, so every blend reaches you at its most flavorful.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - White Box */}
                    <div className="flex-shrink-0 ">
                        <div className="w-[915px] h-[440px] bg-white rounded-[10px] shadow-lg">
                            {/* Empty white box as specified */}
                        </div>
                    </div>
                </div>
              </div>

             {/* Nature's Finest Section */}
             <div className="py-20 flex flex-col items-center justify-center px-4">
                <div className="w-[1820px] flex flex-col items-center text-center">
                    {/* Main Title */}
                    <h2 className="text-white font-pethra font-bold text-[54px] leading-tight ">
                        Nature's Finest, Perfectly Blended
                    </h2>

                    {/* Subtitle */}
                    <p className="text-white font-afacad font-normal text-[24px] leading-relaxed mb-20 max-w-[900px]" style={{fontFamily: 'Afacad, sans-serif'}}>
                        A handcrafted fusion of organic ingredients and timeless expertise — taste purity redefined.
                    </p>

                    {/* 3 Glassmorphism Boxes */}
                    <div className="flex items-center justify-center gap-24">
                        {/* Box 1 - 100% Natural */}
                        <div className="w-[380px] h-[400px] bg-black/40 backdrop-blur-[8px] border border-white/20 rounded-3xl shadow-lg flex flex-col items-center justify-start px-8 py-8">
                            {/* Icon */}
                            <div className="mb-10 mt-5">
                                <svg className="w-[60px] h-[60px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                </svg>
                            </div>

                            {/* Title */}
                            <h3 className="text-white font-afacad font-semibold text-[26px] mb-8 text-center">
                                100% Natural
                            </h3>

                            {/* Description */}
                            <p className="text-white font-afacad font-normal text-[20px] leading-relaxed max-w-[285px] text-center opacity-80">
                                Sourced from the finest organic farms around the world, free from additives and preservatives.
                            </p>
                        </div>

                        {/* Box 2 - Expertly Crafted */}
                        <div className="w-[380px] h-[400px] bg-black/40 backdrop-blur-[8px] border border-white/20 rounded-3xl shadow-lg flex flex-col items-center justify-start px-8 py-8">
                            {/* Icon */}
                            <div className="mb-10 mt-5">
                                <svg className="w-[60px] h-[60px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                </svg>
                            </div>

                            {/* Title */}
                            <h3 className="text-white font-afacad font-semibold text-[26px] mb-8 text-center">
                                Expertly Crafted
                            </h3>

                            {/* Description */}
                            <p className="text-white font-afacad font-normal text-[20px] leading-relaxed max-w-[285px] text-center opacity-80">
                                Blended by master herbalists with decades of experience in flavor profiling.
                            </p>
                        </div>

                        {/* Box 3 - Health Benefits */}
                        <div className="w-[380px] h-[400px] bg-black/40 backdrop-blur-[8px] border border-white/20 rounded-3xl shadow-lg flex flex-col items-center justify-start px-8 py-8">
                            {/* Icon */}
                            <div className="mb-10 mt-5">
                                <svg className="w-[60px] h-[60px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>

                            {/* Title */}
                            <h3 className="text-white font-afacad font-semibold text-[26px] mb-8 text-center">
                                Health Benefits
                            </h3>

                            {/* Description */}
                            <p className="text-white font-afacad font-normal text-[20px] leading-relaxed max-w-[285px] text-center opacity-80">
                                Packed with antioxidants and nutrients that support overall wellness and immunity.
                            </p>
                        </div>
                    </div>
                </div>
             </div>


            {/* Elevate Every Meal Section */}
            <div className="py-20 flex justify-center items-center px-4">
                <div className="w-[1820px] flex items-center justify-center gap-24">
                    {/* Left Side - Glassmorphism Box with White Box Inside */}
                    <div className="flex justify-center items-center">
                        <div className="w-[415px] h-[480px] bg-black/40 backdrop-blur-[8px] border border-white/20 rounded-3xl shadow-2xl flex items-center justify-center">
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
