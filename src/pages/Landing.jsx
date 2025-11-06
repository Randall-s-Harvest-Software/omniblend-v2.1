import React, { useCallback, useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { MoreHorizontal, X } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

// Responsive container component
const ResponsiveContainer = ({ children, className = '' }) => (
  <div className={`w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

const Landing = () => {
    const navigate = useNavigate();
    const [isExiting, setIsExiting] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isBgImageLoaded, setIsBgImageLoaded] = useState(false);
    const [isContentVisible, setIsContentVisible] = useState(false);
    const controls = useAnimation();
    const imageRef = useRef(null);

    useEffect(() => {
        // Load background image
        const bgImg = new Image();
        const bgImgSrc = window.innerWidth >= 640 ? '/homew.webp' : '/homem.webp';
        
        bgImg.src = bgImgSrc;
        bgImg.onload = async () => {
            setIsBgImageLoaded(true);
            // Small delay to ensure background is fully rendered before showing content
            setTimeout(() => {
                setIsContentVisible(true);
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
                        delay: 0.3
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
                                delay: 1
                            }
                        }
                    });
                });
            }, 300);
        };
        
        // Fallback in case the image fails to load
        bgImg.onerror = () => {
            console.error(`Failed to load background image: ${bgImgSrc}`);
            setIsBgImageLoaded(true);
            setIsContentVisible(true);
        };
        
        return () => {
            bgImg.onload = null;
            bgImg.onerror = null;
        };
    }, [controls]);

    const handleReadyToBuy = useCallback(() => {
        if (isExiting) return;
        setIsExiting(true);
        // Add a small delay to allow the exit animation to play
        setTimeout(() => {
            navigate("/home");
        }, 800); // Match this with your exit animation duration
    }, [isExiting, navigate]);

    const toggleMenu = () => setIsMenuOpen((prev) => !prev);

    return (
        <motion.section
            className="min-h-screen w-full flex flex-col text-white relative overflow-hidden bg-black"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
        >
            {/* Background Image with Loading */}
            <div 
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${isBgImageLoaded ? 'opacity-100' : 'opacity-0'}`}
                style={{
                    backgroundImage: `url(${window.innerWidth >= 640 ? '/homew.webp' : '/homem.webp'})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            />
            
            {/* Loading Overlay */}
            {!isBgImageLoaded && (
                <div className="absolute inset-0 bg-black flex items-center justify-center z-10">
                    <div className="animate-pulse flex flex-col items-center">
                        <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <p className="mt-4 text-white/80 text-sm font-michroma">Loading...</p>
                    </div>
                </div>
            )}
            {/* Background Overlay */}
            <div className="absolute inset-0 pointer-events-none bg-black/15 z-0" />

            {/* Navbar */}
            <motion.header
                className="w-full flex items-center justify-between px-4 sm:px-6 lg:px-16 py-4 sm:py-6 absolute top-0 left-0 z-50"
                initial={{ opacity: 1 }}
                animate={{ opacity: isExiting ? 0 : 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                {/* Logo */}
                <motion.div 
                    className="relative z-30 flex items-center justify-center w-[80px] sm:w-[100px] lg:w-[120px] h-auto py-1 sm:py-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-sm"
                    initial={{ x: '-100vw', opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                        x: { 
                            type: "spring",
                            stiffness: 80,
                            damping: 15,
                            duration: 1
                        },
                        opacity: { 
                            duration: 0.8
                        }
                    }}
                >
                    <img
                        src="/logo1.png"
                        alt="Landing Logo"
                        className="w-[70px] sm:w-[90px] lg:w-[110px] h-auto"
                    />
                </motion.div>

                {/* Desktop Navigation */}
                <motion.nav 
                    className="hidden sm:flex relative gap-2 sm:gap-3 lg:-left-8 left-4 sm:left-12"
                    initial={{ x: '100vw', opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                        x: { 
                            type: "spring",
                            stiffness: 80,
                            damping: 15,
                            delay: 0.3,
                            duration: 1
                        },
                        opacity: { 
                            duration: 0.8,
                            delay: 0.3
                        }
                    }}
                >
                    <Link
                        to="/products"
                        className="text-[11px] sm:text-[13px] font-michroma font-bold text-[#0A0A0A] bg-[#D9D9D9]/30 hover:bg-[#FFFFFF]/60 relative z-30 flex items-center justify-center w-[80px] sm:w-[100px] lg:w-[120px] h-auto backdrop-blur-sm border border-black/20 shadow-sm transition px-2 sm:px-4 py-1 sm:py-1.5 rounded-full"
                    >
                        Product
                    </Link>
                    <Link
                        to="/contact"
                        className="text-[11px] sm:text-[13px] font-michroma font-bold text-[#EDEAFF] bg-[#1E1E1E]/70 hover:bg-[#000000] relative z-30 flex items-center justify-center w-[80px] sm:w-[100px] lg:w-[120px] h-auto backdrop-blur-sm border border-white/20 shadow-sm transition px-2 sm:px-4 py-1 sm:py-1.5 rounded-full"
                    >
                        Contact
                    </Link>
                </motion.nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMenu}
                    className="sm:hidden text-white focus:outline-none z-40"
                >
                    {isMenuOpen ? <X className="w-8 h-8" /> : <MoreHorizontal className="w-8 h-8" />}
                </button>

                {/* Desktop Menu Icon */}
                <div className="hidden sm:flex items-center justify-center">
                    <MoreHorizontal className="text-white w-8 h-8" />
                </div>
            </motion.header>

            {/* ✅ Mobile Dropdown Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="sm:hidden absolute top-16 left-0 w-full bg-[#121b13]/95 backdrop-blur-lg border-t border-white/10 shadow-lg z-40"
                    >
                        <ul className="flex flex-col items-center space-y-3 py-4 text-white font-michroma text-sm">
                            <li>
                                <Link
                                    to="/products"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="hover:text-gray-300 transition"
                                >
                                    Product
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="hover:text-gray-300 transition"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Hero Section */}
            <main className="flex-1 flex items-center justify-center relative mt-20 sm:mt-0">
                <div className="relative flex justify-center items-center w-full">
                    {/* Background Decorative Element */}
                    <AnimatePresence>
                        {isContentVisible && (
                            <motion.img
                                src="/Omniblendbg.png"
                                alt="Background Omniblend"
                                className="absolute w-[250px] xs:w-[300px] sm:w-[350px] lg:w-[500px] top-32 xs:top-40 sm:top-44 md:top-52 h-auto"
                                initial={{ opacity: 0, scale: 0.9, rotate: -10 }}
                                animate={{ opacity: 0.5, scale: 1, rotate: 0 }}
                                exit={{ opacity: 0, scale: 0.9, rotate: -10 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            />
                        )}
                    </AnimatePresence>

                    {/* Foreground Image */}
                    <AnimatePresence>
                        {isContentVisible && (
                            <motion.img
                                src="/omniblend.png"
                                alt="Landing"
                                className="relative w-[250px] xs:w-[300px] sm:w-[330px] lg:w-[460px] top-24 xs:top-28 sm:top-32 h-auto z-20"
                                initial={{ y: '-50vh', opacity: 0, scale: 0.5 }}
                                animate={{ 
                                    y: [0, -10, 0],
                                    opacity: 1, 
                                    scale: 1,
                                }}
                                transition={{
                                    y: {
                                        duration: 2.5,
                                        ease: "easeInOut",
                                        repeat: Infinity,
                                        repeatType: "loop",
                                        times: [0, 0.5, 1],
                                    },
                                    opacity: {
                                        duration: 0.8,
                                        ease: "easeOut"
                                    },
                                    scale: {
                                        type: "spring",
                                        damping: 20,
                                        stiffness: 150,
                                        mass: 0.5,
                                        delay: 0.1
                                    },
                                    default: {
                                        duration: 0.8
                                    }
                                }}
                                whileHover={{
                                    scale: 1.05,
                                    transition: { duration: 0.3 }
                                }}
                                whileTap={{ 
                                    scale: 0.95,
                                    transition: { duration: 0.2 }
                                }}
                                exit={{ 
                                    scale: 1.6, 
                                    opacity: 0, 
                                    y: 220,
                                    transition: { duration: 0.8, ease: "easeIn" }
                                }}
                                onAnimationComplete={() => {
                                    if (isExiting) {
                                        setTimeout(() => navigate("/home"), 150);
                                    }
                                }}
                            />
                        )}
                    </AnimatePresence>

                    {/* Text Box */}
                    <AnimatePresence>
                        {isContentVisible && (
                            <motion.div 
                                className="absolute left-2 xs:left-4 sm:left-8 lg:left-14 -top-2 xs:top-0 sm:-top-6 lg:top-36 text-right z-20"
                                initial={{ x: '-100vw', opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{
                                    x: { 
                                        type: "spring",
                                        stiffness: 80,
                                        damping: 12,
                                        delay: 0.5,
                                        duration: 1
                                    },
                                    opacity: { 
                                        duration: 0.8,
                                        delay: 0.5
                                    }
                                }}
                            >
                                <div className="inline-block px-3 xs:px-4 py-2 xs:py-3 rounded-2xl bg-white/8 backdrop-blur-sm border border-white/20 shadow-sm">
                                    <h1 className="font-light font-michroma text-base xs:text-lg sm:text-[22px] lg:text-[30px]">
                                        Randall's Harvest
                                    </h1>
                                    <h2 className="mt-2 xs:mt-3 sm:mt-5 font-michroma text-lg xs:text-xl sm:text-2xl lg:text-[28px]">
                                        OMNIBLEND
                                    </h2>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Weight Box */}
                    <AnimatePresence>
                        {isContentVisible && (
                            <motion.div 
                                className="absolute right-0 -bottom-32 xs:-bottom-40 sm:-bottom-48 lg:bottom-24 z-20"
                                initial={{ x: '100vw', opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{
                                    x: { 
                                        type: "spring",
                                        stiffness: 80,
                                        damping: 12,
                                        delay: 0.7,
                                        duration: 1
                                    },
                                    opacity: { 
                                        duration: 0.8,
                                        delay: 0.7
                                    }
                                }}
                            >
                                <div className="inline-flex items-center justify-center px-2 xs:px-3 py-1 xs:py-2 rounded-xl bg-white/8 backdrop-blur-md border border-white/20 shadow-sm">
                                    <span className="text-[10px] xs:text-[12px] sm:text-[14px] lg:text-[16px]">
                                        85 g
                                    </span>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Exit Blur + Black Overlay */}
                <AnimatePresence>
                    {isExiting && (
                        <>
                            <motion.div
                                className="fixed inset-0 z-10"
                                initial={{ backdropFilter: "blur(0px)" }}
                                animate={{ backdropFilter: "blur(8px)" }}
                                exit={{ backdropFilter: "blur(0px)" }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                            />
                            <motion.div
                                className="fixed inset-0 bg-black z-30"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1.1, ease: "easeIn" }}
                            />
                        </>
                    )}
                </AnimatePresence>
            </main>

            {/* Footer */}
            <AnimatePresence>
                <motion.footer
                    className="w-full flex flex-col items-center px-4 sm:px-6 lg:px-16 py-4 sm:py-6 gap-4 relative"
                    initial={{ x: '-100vw', opacity: 0 }}
                    animate={{ 
                        x: 0, 
                        opacity: isExiting ? 0 : 1 
                    }}
                    transition={{
                        x: { 
                            type: "spring",
                            stiffness: 60,
                            damping: 15,
                            delay: 0.9,
                            duration: 1
                        },
                        opacity: { 
                            duration: 0.8,
                            delay: 0.9
                        },
                        default: { duration: 0.3 }
                    }}
                    style={{
                        marginTop: "auto",
                        marginBottom: "env(safe-area-inset-bottom, 1rem)",
                    }}
                >
                    <div className="w-full flex justify-center">
                        <h1 className="text-white font-michroma font-bold text-[16px] lg:text-2xl text-center">
                            ₹ 179.00
                        </h1>
                    </div>

                <div className="relative z-10 w-full sm:w-auto">
                    <div className="relative flex justify-center sm:justify-end items-center">
                        <div className="sm:hidden absolute left-0 top-1/2 -translate-y-1/2">
                            <MoreHorizontal className="text-white w-6 h-6" />
                        </div>

                        <div className="relative">
                            <span className="absolute inset-0 -m-1 rounded-full bg-white/6 backdrop-blur-sm border border-white/12 pointer-events-none" />
                            <button
                                onClick={handleReadyToBuy}
                                className="relative z-10 text-sm xs:text-[14px] sm:text-lg font-michroma font-bold text-white bg-white/30 hover:bg-white/80 transition px-6 sm:px-6 py-2 sm:py-2 rounded-full w-full sm:w-auto min-w-[160px] text-center"
                            >
                                Ready to Buy ?
                            </button>
                        </div>
                    </div>
                </div>
                </motion.footer>
            </AnimatePresence>
        </motion.section>
    );
};

export default Landing;
