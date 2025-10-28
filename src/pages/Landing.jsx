import React, { useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MoreHorizontal } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

const Landing = () => {
    const navigate = useNavigate();
    const [isExiting, setIsExiting] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleReadyToBuy = useCallback(() => {
        if (isExiting) return;
        setIsExiting(true);
    }, [isExiting]);

    return (
        <motion.section
            className="min-h-screen w-full flex flex-col text-white relative overflow-hidden bg-[#571111] bg-cover bg-center bg-[url('/homem.webp')] sm:bg-[url('/homew.webp')]"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
        >
            {/* Subtle background dark overlay (10% opacity) */}
            <div className="absolute inset-0 pointer-events-none bg-black/15 z-0" />
            {/* Navbar */}
            <motion.header
                className="w-full flex items-center justify-between px-4 sm:px-6 lg:px-16 py-4 sm:py-6 absolute top-0 left-0 z-50"
                initial={{ opacity: 1 }}
                animate={{ opacity: isExiting ? 0 : 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <div className="relative z-30 flex items-center justify-center w-[80px] sm:w-[100px] lg:w-[120px] h-auto py-1 sm:py-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-sm">
                    <img
                        src="/logo1.png"
                        alt="Landing Logo"
                        className="w-[70px] sm:w-[90px] lg:w-[110px] h-auto"
                    />
                </div>


                {/* Center Buttons */}
                <nav className="hidden sm:flex relative gap-2 sm:gap-3 lg:-left-8 left-4 sm:left-12">
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
                </nav>

                {/* Mobile Menu Button */}
                <div className="sm:hidden text-white focus:outline-none"
                >
                    {isMenuOpen ? (
                        <X className="w-8 h-8" />
                    ) : (
                        <MoreHorizontal className="w-8 h-8" />
                    )}
                </div>

                {/* Desktop Menu Icon - Hidden on mobile */}
                <div className="hidden sm:flex items-center justify-center">
                    <MoreHorizontal className="text-white w-8 h-8" />
                </div>
            </motion.header>


            {/* Hero Section */}
            <main className="flex-1 flex items-center justify-center relative mt-20 sm:mt-0">
                {/* Central product container */}
                <div className="relative flex justify-center items-center w-full">
                    {/* Background image */}
                    <motion.img
                        src="/Omniblendbg.png"
                        alt="Background Omniblend"
                        className="absolute w-[250px] xs:w-[300px] sm:w-[350px] lg:w-[500px] top-32 xs:top-40 sm:top-44 md:top-52 h-auto"
                        initial={{ opacity: 0, scale: 0.9, rotate: -10 }}
                        animate={{ opacity: 0.5, scale: 1, rotate: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
                    />
                    {/* Foreground image */}
                    <motion.img
                        src="/omniblend.png"
                        alt="Landing"
                        className={`relative w-[250px] xs:w-[300px] sm:w-[330px] lg:w-[500px] top-24 xs:top-28 sm:top-32 h-auto z-20 ${isExiting ? "" : "animate-drop-then-float"}`}
                        initial={false}
                        animate={isExiting ? { scale: 1.6, opacity: 0, y: 220 } : {}}
                        transition={isExiting ? { duration: 1.1, ease: "easeIn" } : {}}
                        onAnimationComplete={() => {
                            if (isExiting) {
                                setTimeout(() => navigate("/home"), 150);
                            }
                        }}
                    />


                    {/* Overlay text box (glassmorphism) */}
                    <div className="absolute left-2 xs:left-4 sm:left-8 lg:-left-[620px] -top-2 xs:top-0 sm:-top-6 lg:top-36 text-right z-20">
                        <div className="inline-block px-3 xs:px-4 py-2 xs:py-3 rounded-2xl bg-white/8 backdrop-blur-sm border border-white/20 shadow-sm">
                            <h1 className="font-light font-michroma text-base xs:text-lg sm:text-[22px] lg:text-[30px]">
                                Randall's Harvest
                            </h1>
                            <h2 className="mt-2 xs:mt-3 sm:mt-5 font-michroma text-lg xs:text-xl sm:text-2xl lg:text-[28px]">
                                OMNIBLEND
                            </h2>
                        </div>
                    </div>

                    {/* Separate weight box (glassmorphism) */}
                    <div className="absolute -right-4 xs:-right-6 sm:-right-0 lg:-right-[500px] -bottom-32 xs:-bottom-40 sm:-bottom-48 lg:bottom-24 z-20">
                        <div className="inline-flex items-center justify-center px-2 xs:px-3 py-1 xs:py-2 rounded-xl bg-white/8 backdrop-blur-md border border-white/20 shadow-sm">
                            <span className="text-[10px] xs:text-[12px] sm:text-[18px] lg:text-[20px]">85 g</span>
                        </div>
                    </div>
                </div>

                {/* Blur overlay */}
                <AnimatePresence>
                    {isExiting && (
                        <motion.div
                            className="fixed inset-0 z-10"
                            initial={{ backdropFilter: "blur(0px)" }}
                            animate={{ backdropFilter: "blur(8px)" }}
                            exit={{ backdropFilter: "blur(0px)" }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            style={{ background: "transparent" }}
                        />
                    )}
                </AnimatePresence>

                {/* Black fade overlay */}
                <AnimatePresence>
                    {isExiting && (
                        <motion.div
                            className="fixed inset-0 bg-black z-30"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.1, ease: "easeIn" }}
                        />
                    )}
                </AnimatePresence>
            </main>

            {/* Bottom Section */}
            <motion.footer
                className="w-full flex flex-col items-center px-4 sm:px-6 lg:px-16 py-4 sm:py-6 gap-4 relative"
                initial={{ opacity: 1 }}
                animate={{ opacity: isExiting ? 0 : 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                style={{
                    marginTop: 'auto',
                    marginBottom: 'env(safe-area-inset-bottom, 1rem)'
                }}
            >
                {/* Price - centered at the bottom */}
                <div className="w-full flex justify-center">
                    <h1 className="text-white font-michroma font-bold text-lg lg:text-2xl text-center">
                        ₹ 179.00
                    </h1>
                </div>

                {/* Button container */}
                <div className="relative z-10 w-full sm:w-auto">
                    <div className="relative flex justify-center sm:justify-end items-center">
                        {/* Mobile: MoreHorizontal at bottom-left */}
                        <div className="sm:hidden absolute left-0 top-1/2 -translate-y-1/2">
                            <MoreHorizontal className="text-white w-6 h-6" />
                        </div>

                        {/* Button with backdrop */}
                        <div className="relative">
                            <span className="absolute inset-0 -m-1 rounded-full bg-white/6 backdrop-blur-sm border border-white/12 pointer-events-none" />
                            <button
                                onClick={handleReadyToBuy}
                                className="relative z-10 text-sm xs:text-base sm:text-lg font-michroma font-bold text-white bg-white/30 hover:bg-white/80 transition px-6 sm:px-6 py-2 sm:py-2 rounded-full w-full sm:w-auto min-w-[160px] text-center"
                            >
                                Ready to Buy ?
                            </button>
                        </div>
                    </div>
                </div>
            </motion.footer>
        </motion.section>
    );
};

export default Landing;
