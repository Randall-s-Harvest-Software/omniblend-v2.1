import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Bottom from "../components/Bottom.jsx";
import { Play } from 'lucide-react';
import { motion, useAnimation, useInView } from 'framer-motion';

// Responsive container component
const ResponsiveContainer = ({ children, className = '' }) => (
  <div className={`w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

const Home = () => {
    const navigate = useNavigate();
    const controls = useAnimation();
    const headingRef = useRef(null);
    const descRef = useRef(null);
    const buttonRef = useRef(null);
    const box1Ref = useRef(null);
    const box2Ref = useRef(null);
    const box3Ref = useRef(null);
    
    const isInViewHeading = useInView(headingRef, { once: true });
    const isInViewDesc = useInView(descRef, { once: true, margin: "-20% 0px" });
    const isInViewButton = useInView(buttonRef, { once: true, margin: "-10% 0px" });
    const isInViewBox1 = useInView(box1Ref, { once: true, margin: "-10% 0px" });
    const isInViewBox2 = useInView(box2Ref, { once: true, margin: "-10% 0px" });
    const isInViewBox3 = useInView(box3Ref, { once: true, margin: "-10% 0px" });
    const storyRef = useRef(null);
    const subtitleRef = useRef(null);
    const featureBox1Ref = useRef(null);
    const featureBox2Ref = useRef(null);
    const featureBox3Ref = useRef(null);
    
    const isInViewStory = useInView(storyRef, { once: true, margin: "-10% 0px" });
    const isInViewSubtitle = useInView(subtitleRef, { once: true, margin: "-10% 0px" });
    const isInViewFeatureBox1 = useInView(featureBox1Ref, { once: true, margin: "-10% 0px" });
    const isInViewFeatureBox2 = useInView(featureBox2Ref, { once: true, margin: "-10% 0px" });
    const isInViewFeatureBox3 = useInView(featureBox3Ref, { once: true, margin: "-10% 0px" });
    const glassmorphismBoxRef = useRef(null);
    const isInViewGlassmorphism = useInView(glassmorphismBoxRef, { once: true, margin: "-10% 0px" });
    
    // Text for typing animations
    const storyText = "Discover how Omniblend brings together the essence of pure, handpicked spices — blended to perfection for a balanced burst of flavor in every dish.";
    const subtitleText = "A handcrafted fusion of organic ingredients and timeless expertise — taste purity redefined.";
    const mealDescriptionText = "Elevate your meals with Omniblend — a dual-texture gourmet seasoning crafted from the world's finest spices. Perfectly balanced, naturally pure, and beautifully packaged for those who savor quality.";
    
    const handleBuyNow = () => {
        navigate('/products');
    };

    useEffect(() => {
        // Start the drop animation
        controls.start({
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                damping: 10,
                stiffness: 100,
                mass: 1,
                delay: 0.1
            }
        }).then(() => {
            // After drop animation completes, start the bounce animation
            controls.start({
                y: [0, -15, 0],
                transition: {
                    y: {
                        duration: 2,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatType: "reverse",
                        times: [0, 0.5, 1],
                        delay: 0.1
                    }
                }
            });
        });
    }, [controls]);
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
                        <motion.h1 
                            ref={headingRef}
                            initial={{ x: -50, opacity: 0 }}
                            animate={isInViewHeading ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-white font-pethra text-[40px] sm:text-6xl md:text-7xl lg:text-8xl xl:text-[100px] leading-tight mb-4 sm:mb-6 md:mb-8 text-center lg:text-left"
                        >
                            One Blend.<br className="hidden sm:block" /> Endless Flavors.
                        </motion.h1>

                        {/* Description */}
                        <motion.p 
                            ref={descRef}
                            initial={{ x: -50, opacity: 0 }}
                            animate={isInViewDesc ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                            className="text-white font-afacad font-normal text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[26px] leading-relaxed mb-6 sm:mb-8 md:mb-10 lg:mb-12 max-w-full lg:max-w-[730px] text-center lg:text-left"
                        >
                            Omniblend is a gourmet seasoning crafted from the finest natural ingredients, designed to add depth and richness to any dish. Whether it's a quick snack or a festive meal, one spoonful transforms your cooking into a flavorful experience.
                        </motion.p>

                        {/* Buy Now Button */}
                        <motion.div 
                            ref={buttonRef}
                            initial={{ x: -50, opacity: 0 }}
                            animate={isInViewButton ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                            className="flex justify-center lg:justify-start"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={handleBuyNow}
                                className="w-full sm:w-1/2 bg-white text-black font-afacad font-semibold text-[14px] sm:text-lg px-6 py-2 md:py-3 sm:px-8 sm:py-4 rounded-[20px] hover:bg-gray-100 transition-colors duration-300 shadow-lg cursor-pointer"
                            >
                                Buy Now
                            </motion.button>
                        </motion.div>
                    </div>

                    {/* Right Side Image - Hidden on mobile, shown on md and up */}
                    <motion.div 
                        initial={{ y: -50, opacity: 0, scale: 0.8 }}
                        animate={controls}
                        className="hidden lg:flex lg:w-1/2 justify-center items-center mt-12 lg:mt-0 lg:relative lg:right-0 xl:right-[100px]"
                    >
                        <img
                            src="/omniblend.png"
                            alt="Omniblend Product"
                            className="w-full max-w-[500px] xl:max-w-[600px] h-auto transform rotate-[-7deg] drop-shadow-2xl"
                            loading="lazy"
                        />
                    </motion.div>

                    {/* Small product image for mobile */}
                    <motion.div 
                        initial={{ y: -50, opacity: 0, scale: 0.8 }}
                        animate={controls}
                        className="lg:hidden w-full flex justify-center items-center mt-8"
                    >
                        <img
                            src="/omniblend.png"
                            alt="Omniblend Product"
                            className="w-[250px] max-w-[300px] h-auto transform rotate-[-7deg] drop-shadow-2xl"
                            loading="lazy"
                        />
                    </motion.div>
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
                        <div ref={storyRef} className="w-full lg:flex-1 lg:max-w-[574px] relative">
                            <p className="text-white font-afacad font-normal text-lg sm:text-xl md:text-2xl lg:text-[24px] leading-relaxed text-center lg:text-left" style={{fontFamily: 'Afacad, sans-serif'}}>
                                {isInViewStory ? (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.5 }}
                                        style={{ position: 'relative' }}
                                    >
                                        {storyText.split('').map((char, index) => (
                                            <motion.span
                                                key={index}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{
                                                    duration: 0.1,
                                                    delay: index * 0.03,
                                                }}
                                            >
                                                {char}
                                            </motion.span>
                                        ))}
                                    </motion.div>
                                ) : (
                                    storyText
                                )}
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
                            <motion.div 
                                ref={box1Ref}
                                initial={{ y: 30, opacity: 0 }}
                                animate={isInViewBox1 ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="w-full sm:w-[500px] lg:w-full h-auto sm:h-[130px] bg-black/40 backdrop-blur-[10px] border border-white/20 rounded-2xl shadow-lg flex items-start justify-start p-4 sm:px-6 sm:py-4"
                            >
                                <div className="flex flex-col sm:flex-row items-start">
                                    <h3 className="text-white font-afacad font-semibold text-xl sm:text-[24px] w-full sm:w-[100px] text-left mb-2 sm:mb-0">
                                        100% Natural
                                    </h3>
                                    <p className="text-white font-afacad font-normal text-sm sm:text-[16px] leading-relaxed max-w-full sm:max-w-[287px] text-left" style={{fontFamily: 'Afacad, sans-serif'}}>
                                        No preservatives, no artificial colors — only pure, natural ingredients blended to perfection for authentic flavor.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Box 2 - 10 Handpicked Spices */}
                            <motion.div 
                                ref={box2Ref}
                                initial={{ y: 30, opacity: 0 }}
                                animate={isInViewBox2 ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                                className="w-full sm:w-[500px] lg:w-full h-auto sm:h-[130px] bg-black/40 backdrop-blur-[10px] border border-white/20 rounded-2xl shadow-lg flex items-start justify-start p-4 sm:px-6 sm:py-4"
                            >
                                <div className="flex flex-col sm:flex-row items-start">
                                    <h3 className="text-white font-afacad font-semibold text-xl sm:text-[26px] w-full sm:w-[142px] text-left mb-2 sm:mb-0">
                                        10 Handpicked Spices
                                    </h3>
                                    <p className="text-white font-afacad font-normal text-sm sm:text-[16px] leading-relaxed max-w-full sm:max-w-[287px] text-left" style={{fontFamily: 'Afacad, sans-serif'}}>
                                        Hand-selected from India's elite spice estates — where tradition, quality, and authenticity come together to create the perfect blend.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Box 3 - Crafted with Care */}
                            <motion.div 
                                ref={box3Ref}
                                initial={{ y: 30, opacity: 0 }}
                                animate={isInViewBox3 ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                                className="w-full sm:w-[500px] lg:w-full h-auto sm:h-[130px] bg-black/40 backdrop-blur-[10px] border border-white/20 rounded-2xl shadow-lg flex items-start justify-start p-4 sm:px-6 sm:py-4"
                            >
                                <div className="flex flex-col sm:flex-row items-start">
                                    <h3 className="text-white font-afacad font-semibold text-xl sm:text-[24px] w-full sm:w-[153px] text-left mb-2 sm:mb-0">
                                        Crafted with Care
                                    </h3>
                                    <p className="text-white font-afacad font-normal text-sm sm:text-[16px] leading-relaxed max-w-full sm:max-w-[287px] text-left" style={{fontFamily: 'Afacad, sans-serif'}}>
                                        Prepared in limited batches to maintain peak freshness and quality, so every blend reaches you at its most flavorful.
                                    </p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Video Player - Visible on all screens */}
                        <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
                            <div className="w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[440px] bg-black/80 rounded-[10px] shadow-lg relative overflow-hidden">
                                {/* YouTube iframe with autoplay and mute */}
                                <iframe
                                    id="youtube-video"
                                    className="w-full h-full"
                                    src="https://www.youtube.com/embed/VhZln5gCGF4?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=VhZln5gCGF4"
                                    title="Omniblend Video"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen>
                                </iframe>

                                {/* Play Button Overlay */}
                                <div
                                    className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer transition-opacity duration-300 hover:bg-black/40"
                                    onClick={() => {
                                        const iframe = document.getElementById('youtube-video');
                                        if (iframe) {
                                            iframe.src = "https://www.youtube.com/embed/VhZln5gCGF4?autoplay=1&mute=0&controls=1&showinfo=0&rel=0";
                                        }
                                        const playButton = document.getElementById('play-button');
                                        const playText = document.getElementById('play-text');
                                        if (playButton) playButton.style.display = 'none';
                                        if (playText) playText.style.display = 'none';
                                    }}
                                >
                                    <div className="text-center">
                                        <div id="play-button" className="flex justify-center mb-2">
                                            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white transition-all duration-300">
                                                <Play className="w-6 h-6 sm:w-8 sm:h-8 text-black ml-1" fill="currentColor" />
                                            </div>
                                        </div>
                                        <p id="play-text" className="text-white font-afacad text-base sm:text-lg font-medium mt-2 sm:mt-3">Watch Story</p>
                                    </div>
                                </div>
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
                        <div ref={subtitleRef} className="w-full">
                            <p className="text-white font-afacad font-normal text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed mb-12 md:mb-16 lg:mb-20 max-w-full sm:max-w-[90%] md:max-w-[900px] mx-auto" style={{fontFamily: 'Afacad, sans-serif'}}>
                                {isInViewSubtitle ? (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.5 }}
                                        style={{ position: 'relative' }}
                                    >
                                        {subtitleText.split('').map((char, index) => (
                                            <motion.span
                                                key={index}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{
                                                    duration: 0.1,
                                                    delay: index * 0.02, // Slightly faster than story text
                                                }}
                                            >
                                                {char}
                                            </motion.span>
                                        ))}
                                    </motion.div>
                                ) : (
                                    subtitleText
                                )}
                            </p>
                        </div>

                        {/* Buy Now Button with Glassmorphism */}
                        <div className="bg-black/30 backdrop-blur-md border border-white/30 rounded-2xl shadow-lg px-6 py-3 mb-12">
                          <span
                              className="text-white font-afacad font-semibold text-[18px]"
                                 style={{ fontFamily: 'Afacad, sans-serif' }}
                                 >
                                 Buy Now - ₹179
                          </span>
                        </div>


                        {/* 3 Glassmorphism Boxes */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 w-full max-w-7xl px-4">
                            {/* Box 1 - 100% Natural */}
                            <motion.div 
                                ref={featureBox1Ref}
                                initial={{ y: 30, opacity: 0 }}
                                animate={isInViewFeatureBox1 ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="w-full h-auto min-h-[300px] sm:min-h-[350px] md:h-[400px] bg-black/40 backdrop-blur-[8px] border border-white/20 rounded-3xl shadow-lg flex flex-col items-center justify-start p-6 sm:p-8"
                            >
                                {/* Icon */}
                                <motion.div 
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={isInViewFeatureBox1 ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                                    className="mb-6 sm:mb-8 md:mb-10 mt-2 sm:mt-5"
                                >
                                    <svg className="w-12 h-12 sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                    </svg>
                                </motion.div>

                                {/* Title */}
                                <motion.h3 
                                    initial={{ y: 10, opacity: 0 }}
                                    animate={isInViewFeatureBox1 ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                                    className="text-white font-afacad font-semibold text-xl sm:text-2xl md:text-[26px] mb-4 sm:mb-6 md:mb-8 text-center"
                                >
                                    100% Natural
                                </motion.h3>

                                {/* Description */}
                                <motion.p 
                                    initial={{ y: 10, opacity: 0 }}
                                    animate={isInViewFeatureBox1 ? { y: 0, opacity: 0.8 } : { y: 10, opacity: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                                    className="text-white font-afacad font-normal text-base sm:text-lg md:text-[20px] leading-relaxed max-w-full text-center"
                                >
                                    Made with pure, organic ingredients sourced from sustainable farms for maximum freshness and flavor.
                                </motion.p>
                            </motion.div>

                            {/* Box 2 - Expertly Crafted */}
                            <motion.div 
                                ref={featureBox2Ref}
                                initial={{ y: 30, opacity: 0 }}
                                animate={isInViewFeatureBox2 ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                                className="w-full h-auto min-h-[300px] sm:min-h-[350px] md:h-[400px] bg-black/40 backdrop-blur-[8px] border border-white/20 rounded-3xl shadow-lg flex flex-col items-center justify-start p-6 sm:p-8"
                            >
                                {/* Icon */}
                                <motion.div 
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={isInViewFeatureBox2 ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                                    transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                                    className="mb-6 sm:mb-8 md:mb-10 mt-2 sm:mt-5"
                                >
                                    <svg className="w-12 h-12 sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </motion.div>

                                {/* Title */}
                                <motion.h3 
                                    initial={{ y: 10, opacity: 0 }}
                                    animate={isInViewFeatureBox2 ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                                    className="text-white font-afacad font-semibold text-xl sm:text-2xl md:text-[26px] mb-4 sm:mb-6 md:mb-8 text-center"
                                >
                                    Expertly Crafted
                                </motion.h3>

                                {/* Description */}
                                <motion.p 
                                    initial={{ y: 10, opacity: 0 }}
                                    animate={isInViewFeatureBox2 ? { y: 0, opacity: 0.8 } : { y: 10, opacity: 0 }}
                                    transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                                    className="text-white font-afacad font-normal text-base sm:text-lg md:text-[20px] leading-relaxed max-w-full text-center"
                                >
                                    Blended by master herbalists with decades of experience in flavor profiling.
                                </motion.p>
                            </motion.div>

                            {/* Box 3 - Health Benefits */}
                            <motion.div 
                                ref={featureBox3Ref}
                                initial={{ y: 30, opacity: 0 }}
                                animate={isInViewFeatureBox3 ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                                className="w-full h-auto min-h-[300px] sm:min-h-[350px] md:h-[400px] bg-black/40 backdrop-blur-[8px] border border-white/20 rounded-3xl shadow-lg flex flex-col items-center justify-start p-6 sm:p-8 md:col-span-2 lg:col-span-1"
                            >
                                {/* Icon */}
                                <motion.div 
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={isInViewFeatureBox3 ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                                    transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                                    className="mb-6 sm:mb-8 md:mb-10 mt-2 sm:mt-5"
                                >
                                    <svg className="w-12 h-12 sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </motion.div>

                                {/* Title */}
                                <motion.h3 
                                    initial={{ y: 10, opacity: 0 }}
                                    animate={isInViewFeatureBox3 ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }}
                                    transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                                    className="text-white font-afacad font-semibold text-xl sm:text-2xl md:text-[26px] mb-4 sm:mb-6 md:mb-8 text-center"
                                >
                                    Health Benefits
                                </motion.h3>

                                {/* Description */}
                                <motion.p 
                                    initial={{ y: 10, opacity: 0 }}
                                    animate={isInViewFeatureBox3 ? { y: 0, opacity: 0.8 } : { y: 10, opacity: 0 }}
                                    transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
                                    className="text-white font-afacad font-normal text-base sm:text-lg md:text-[20px] leading-relaxed max-w-full text-center"
                                >
                                    Packed with antioxidants and nutrients that support overall wellness and immunity.
                                </motion.p>
                            </motion.div>
                        </div>
                    </div>
                </div>


                {/* Elevate Every Meal Section */}
                <div className="py-12 md:py-20 flex justify-center items-center px-4 sm:px-6">
                    <div className="w-full max-w-[1820px] flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-12 lg:gap-16 xl:gap-24">
                        {/* Left Side - Glassmorphism Box with White Box Inside - Shown on all screens */}
                        <motion.div 
                            ref={glassmorphismBoxRef}
                            initial={{ y: 50, opacity: 0 }}
                            animate={isInViewGlassmorphism ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="flex justify-center items-center w-full lg:w-1/2 mb-8 lg:mb-0"
                        >
                            <motion.div 
                                initial={{ scale: 0.95, opacity: 0 }}
                                animate={isInViewGlassmorphism ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
                                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                                className="w-full max-w-[300px] sm:max-w-[350px] md:max-w-[415px] h-[300px] sm:h-[350px] md:h-[400px] lg:h-[480px] bg-black/40 backdrop-blur-[8px] border border-white/20 rounded-3xl shadow-2xl flex items-center justify-center"
                            >
                                {/* White Box Inside */}
                                <motion.div 
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={isInViewGlassmorphism ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                                    className="w-[260px] sm:w-[310px] md:w-[355px] h-[270px] sm:h-[360px] md:h-[415px] bg-black rounded-2xl shadow-lg flex items-center justify-center overflow-hidden"
                                >
                                    <motion.img
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={isInViewGlassmorphism ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                                        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                                        src="/homeproduct.webp"
                                        alt="Omniblend Product Display"
                                        className="w-full max-w-[280px] sm:max-w-[330px] md:max-w-[380px] h-auto object-contain transform drop-shadow-xl"
                                    />
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        {/* Right Side - Text Content */}
                        <div className="flex flex-col items-center lg:items-start max-w-[800px] text-center lg:text-left">
                            {/* Main Title */}
                            <h2 className="text-white font-pethra font-bold text-[44px] leading-tight mb-6">
                                Elevate Every Meal with Omniblend
                            </h2>

                            {/* Description */}
                            <div className="text-white font-afacad font-normal text-[24px] leading-relaxed mb-8 max-w-[725px] min-h-[180px] sm:min-h-[160px] md:min-h-[140px]" style={{fontFamily: 'Afacad, sans-serif'}}>
                                {isInViewGlassmorphism ? (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.5 }}
                                        className="whitespace-pre-line"
                                    >
                                        {mealDescriptionText.split('').map((char, index) => (
                                            <motion.span
                                                key={index}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{
                                                    duration: 0.05,
                                                    delay: index * 0.03,
                                                }}
                                            >
                                                {char}
                                            </motion.span>
                                        ))}
                                    </motion.div>
                                ) : (
                                    <span className="opacity-0">{mealDescriptionText}</span>
                                )}
                            </div>

                            {/* Buy Now Button with Glassmorphism */}
                            <div className="bg-black/30 backdrop-blur-md border border-white/30 rounded-2xl shadow-lg px-6 py-3">
                            <span className="text-white font-afacad font-semibold text-[18px]" style={{fontFamily: 'Afacad, sans-serif'}}>
                                Buy Now - ₹179
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
