import React, { useState, useEffect, useRef } from 'react'
import Navbar from '../components/Navbar'
import Bottom from "../components/Bottom.jsx";
import { motion, useInView } from 'framer-motion';

const About = () => {
    const aboutRef = useRef(null);
    const sourcingRef = useRef(null);
    const valuesRef = useRef(null);
    const desktopValuesRef = useRef(null);
    const isInView = useInView(aboutRef, { once: true, margin: "-10% 0px" });
    const isInViewSourcing = useInView(sourcingRef, { once: true, margin: "-10% 0px" });
    const isInViewValues = useInView(valuesRef, { once: true, margin: "-10% 0px" });
    const isInViewDesktopValues = useInView(desktopValuesRef, { once: true, margin: "-10% 0px" });
    const desktopTributeRef = useRef(null);
    const isDesktopTributeInView = useInView(desktopTributeRef, { once: true, margin: "-20% 0px" });
    const mobileTributeRef = useRef(null);
    const isMobileTributeInView = useInView(mobileTributeRef, { once: true, margin: "-20% 0px" });
    
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };
    
    // Ingredients data with all 11 ingredients including image paths
    const ingredients = [
        {
            name: "Garlic",
            description: "Garlic is a flavorful, aromatic bulb used worldwide as a spice and medicine, known for its pungent taste and health benefits.",
            image: "/garlic.jpg"
        },
        {
            name: "Smoked Paprika",
            description: "Smoked paprika is a rich, smoky spice made from wood-smoked red peppers, perfect for adding depth and flavor to meats, stews, and veggies.",
            image: "/smokedpaprika.jpg"
        },
        {
            name: "Onion",
            description: "Onion is a versatile vegetable with a sharp, savory flavor that turns sweet when cooked, widely used to enhance dishes around the world.",
            image: "/onion.jpg"
        },
        {
            name: "Black Pepper",
            description: "Black pepper is a bold, aromatic spice made from dried peppercorns, prized for its sharp, spicy flavor that enhances both savory and sweet dishes.",
            image: "/pepper.jpg"
        },
        {
            name: "Cumin Seeds",
            description: "Cumin is a warm, earthy spice made from dried seeds, known for its nutty, slightly peppery flavor that adds depth to curries, stews, and spice blends.",
            image: "/cuminseed.jpg"
        },
        {
            name: "Coriander Seeds",
            description: "Coriander seed is a fragrant spice with a warm, citrusy, and slightly sweet flavor, commonly used in curries, pickles, and spice blends.",
            image: "/corriander.jpg"
        },
        {
            name: "Toasted Sesame Seeds",
            description: "Toasted sesame seeds have a rich, nutty flavor and a crunchy texture, perfect for sprinkling on breads, salads, and stir-fries.",
            image: "/toastedseasame.jpg"
        },
        {
            name: "Rosemary Seeds",
            description: "Rosemary seeds grow into a fragrant herb with a pine-like flavor, perfect for seasoning meats, breads, and Mediterranean dishes.",
            image: "/rosemarseeds.jpg"
        },
        {
            name: "Light Citrus",
            description: "Delivers light citrus notes that brighten and balance the spice blend.",
            image: "/citrus.jpg"
        },
        {
            name: "Cracked Fennel",
            description: "Cracked fennel has a sweet, slightly licorice-like flavor, perfect for adding aroma and depth to breads, sausages, and spice blends.",
            image: "/crackedfennel.jpg"
        }
    ];

    // State for current displayed ingredients (indices)
    const [currentIndices, setCurrentIndices] = useState([0, 1, 2]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndices(prev => {
                // Simple rotation: move everything one step forward
                return [
                    (prev[0] + 1) % ingredients.length,
                    (prev[1] + 1) % ingredients.length,
                    (prev[2] + 1) % ingredients.length
                ];
            });
        }, 2000); // Change every 2 seconds

        return () => clearInterval(interval);
    }, [ingredients.length]);

    // Get current ingredients to display
    const currentIngredients = currentIndices.map(index => ingredients[index]);

    // State for mobile ingredient index
    const [mobileIngredientIndex, setMobileIngredientIndex] = useState(0);
    const desktopContentRef = useRef(null);
    const isInViewDesktop = useInView(desktopContentRef, { once: true, margin: "-10% 0px" });

    // Auto-rotate ingredients on mobile
    useEffect(() => {
        const interval = setInterval(() => {
            setMobileIngredientIndex(prev => (prev + 1) % ingredients.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [ingredients.length]);

    return (
        <div className="min-h-screen bg-black relative" style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(/about.webp)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
            {/* Navbar */}
            <Navbar />

            {/* Mobile View */}
            <div className="md:hidden pt-24 px-4 pb-16">
                <div className="bg-black/30 backdrop-blur-[10px] border border-white/20 rounded-3xl shadow-2xl p-6 mb-8">
                    <div ref={aboutRef} className="space-y-8">
                        <motion.h1 
                            className="text-white font-pethra text-[32px] leading-tight text-center mb-8"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        >
                            Introducing Omniblend
                        </motion.h1>
                        
                        <motion.div 
                            className="md:p-4 p-0 mb-6 flex justify-center"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                        >
                            <img
                                src="/aboutproduct.webp"
                                alt="Omniblend Product Display"
                                className="rounded-2xl max-w-[310px] md:max-w-[300px] h-auto object-contain"
                            />
                        </motion.div>

                        <motion.p 
                            className="text-white font-afacad font-normal text-[16px] leading-relaxed mb-6" 
                            style={{fontFamily: 'Afacad, sans-serif'}}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                        >
                            OmniBlend is our all-in-one spice innovation—meticulously balanced with 20+ premium ingredients. From smoked paprika to real sumac, each spice is crushed and powdered for maximum depth and texture. Whether you're grilling, roasting, stir-frying, or sprinkling on snacks, one shake transforms any meal into a masterpiece.
                        </motion.p>
                    </div>

                    {/* Mobile Ingredient Showcase */}
                    <motion.div 
                        className="mt-12"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                    >
                        <div className="bg-black/40 backdrop-blur-[10px] border border-white/20 rounded-2xl p-6 mb-6">
                            <h2 className="text-white font-pethra text-[24px] text-center mb-6">
                                Sourcing The Finest Ingredients
                            </h2>
                            <p className="text-white font-afacad text-[14px] mb-6 text-center">
                                {isInView && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.5 }}
                                        style={{ position: 'relative' }}
                                    >
                                        {'We travel the world to find the highest quality spices, working directly with farmers who share our commitment to sustainable and ethical practices.'.split('').map((char, index) => (
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
                                )}
                            </p>
                        </div>

                        <div className="bg-black/40 backdrop-blur-[10px] border border-white/20 rounded-2xl p-6">
                            <div className="rounded-xl p-4 mb-4">
                                <img
                                    src={ingredients[mobileIngredientIndex].image}
                                    alt={ingredients[mobileIngredientIndex].name}
                                    className="w-full h-[200px] object-contain"
                                />
                            </div>
                            <h3 className="text-white font-afacad font-semibold text-[18px] text-center mb-2">
                                {ingredients[mobileIngredientIndex].name}
                            </h3>
                            <p className="text-white font-afacad text-[14px] text-center">
                                {ingredients[mobileIngredientIndex].description}
                            </p>
                            <div className="flex justify-center mt-4 space-x-2">
                                {ingredients.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setMobileIngredientIndex(index)}
                                        className={`w-2 h-2 rounded-full ${mobileIngredientIndex === index ? 'bg-white' : 'bg-white/40'}`}
                                        aria-label={`View ${ingredients[index].name}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Desktop View */}
            <div ref={desktopContentRef} className="hidden md:flex justify-center items-center mt-12 min-h-screen px-4">
                <div className="w-[1820px] h-[950px] bg-black/30 backdrop-blur-[10px] border border-white/20 rounded-3xl shadow-2xl flex flex-col items-center justify-center px-16">
                    <motion.div 
                        className="mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInViewDesktop ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    >
                        <h1 className="text-white font-pethra text-[64px] leading-tight text-center underline decoration-2 underline-offset-8">
                            Introducing Omniblend
                        </h1>
                    </motion.div>

                    <div className="flex items-center justify-center gap-52 w-full">
                        <motion.div 
                            className="w-[425px] h-[450px] bg-black rounded-2xl flex items-center justify-center shadow-lg overflow-hidden"
                            initial={{ opacity: 0, x: -50 }}
                            animate={isInViewDesktop ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                        >
                            <motion.img
                                src="/aboutproduct.webp"
                                alt="Omniblend Product Display"
                                className="w-[440px] h-auto object-contain transform drop-shadow-xl"
                                initial={{ scale: 0.9 }}
                                animate={isInViewDesktop ? { scale: 1 } : {}}
                                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                            />
                        </motion.div>

                        <motion.div 
                            className="w-[615px]"
                            initial={{ opacity: 0, x: 50 }}
                            animate={isInViewDesktop ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                        >
                            <p className="text-white font-afacad font-normal text-[27px] leading-relaxed" style={{fontFamily: 'Afacad, sans-serif'}}>
                                OmniBlend is our all-in-one spice innovation—meticulously balanced with 20+ premium ingredients. From smoked paprika to real sumac, each spice is crushed and powdered for maximum depth and texture. Whether you're grilling, roasting, stir-frying, or sprinkling on snacks, one shake transforms any meal into a masterpiece.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Desktop Sourcing and Ingredients Section */}
            <div className="hidden md:flex py-24 flex-col items-center px-4">
                {/* Top Section - Sourcing Information */}
                <div className="w-[1820px] flex items-start justify-between mb-20 px-[300px]">
                    {/* Left Side - Sourcing Title */}
                    <div className="flex-shrink-0">
                        <div className="w-[520px] h-[155px] bg-black/40 backdrop-blur-[10px] border border-white/20 rounded-2xl shadow-lg flex items-center justify-center px-6">
                            <h2 className="text-white font-pethra font-bold text-[52px] leading-tight text-center">
                                Sourcing The Finest Ingredients
                            </h2>
                        </div>
                    </div>

                    {/* Right Side - Sourcing Description */}
                    <div className="flex-1 max-w-[645px] ml-8" ref={sourcingRef}>
                        <div className="w-[645px] h-[110px] bg-black/40 backdrop-blur-[10px] border border-white/20 rounded-2xl shadow-lg flex items-center justify-start px-6">
                            <p className="text-white font-afacad font-normal text-[18px] leading-relaxed" style={{fontFamily: 'Afacad, sans-serif'}}>
                                {isInViewSourcing && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.5 }}
                                        style={{ position: 'relative' }}
                                    >
                                        {'We travel the world to find the highest quality spices, working directly with farmers who share our commitment to sustainable and ethical practices.'.split('').map((char, index) => (
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
                                )}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Section - Animated Ingredient Showcase */}
                <div className="w-[1820px] flex items-center justify-center" style={{ height: '500px' }}>
                    <div className="relative w-full h-full flex items-center justify-center">
                        {/* Three boxes positioned side by side without gaps */}
                        <div className="flex items-center justify-center w-full h-full">
                            {/* Left Box */}
                            <div className="w-[420px] h-[467px] bg-black/40 backdrop-blur-[10px] border border-white/20 rounded-2xl shadow-lg flex flex-col items-center justify-start px-6 py-6 transition-all duration-1000 ease-in-out" style={{ opacity: 0.5 }}>
                                <div className="w-[324px] h-[324px] bg-white rounded-xl shadow-lg mb-6 overflow-hidden">
                                    <img
                                        src={currentIngredients[0].image}
                                        alt={currentIngredients[0].name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="text-white font-afacad font-semibold text-[22px] mb-4 text-center" style={{fontFamily: 'Afacad, sans-serif'}}>
                                    {currentIngredients[0].name}
                                </h3>
                                <p className="text-white font-afacad font-normal text-[18px] leading-relaxed text-center max-w-[360px]" style={{fontFamily: 'Afacad, sans-serif'}}>
                                    {currentIngredients[0].description}
                                </p>
                            </div>

                            {/* Middle Box - Featured (center position) */}
                            <div className="w-[450px] h-[500px] bg-black/40 backdrop-blur-[10px] border border-white/20 rounded-2xl shadow-lg flex flex-col items-center justify-start px-6 py-6 transition-all duration-1000 ease-in-out mx-0">
                                <div className="w-[360px] h-[360px] bg-white rounded-xl shadow-lg mb-6 overflow-hidden">
                                    <img
                                        src={currentIngredients[1].image}
                                        alt={currentIngredients[1].name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="text-white font-afacad font-semibold text-[22px] mb-4 text-center" style={{fontFamily: 'Afacad, sans-serif'}}>
                                    {currentIngredients[1].name}
                                </h3>
                                <p className="text-white font-afacad font-normal text-[18px] leading-relaxed text-center max-w-[360px]" style={{fontFamily: 'Afacad, sans-serif'}}>
                                    {currentIngredients[1].description}
                                </p>
                            </div>

                            {/* Right Box */}
                            <div className="w-[420px] h-[467px] bg-black/40 backdrop-blur-[10px] border border-white/20 rounded-2xl shadow-lg flex flex-col items-center justify-start px-6 py-6 transition-all duration-1000 ease-in-out" style={{ opacity: 0.5 }}>
                                <div className="w-[324px] h-[324px] bg-white rounded-xl shadow-lg mb-6 overflow-hidden">
                                    <img
                                        src={currentIngredients[2].image}
                                        alt={currentIngredients[2].name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="text-white font-afacad font-semibold text-[22px] mb-4 text-center" style={{fontFamily: 'Afacad, sans-serif'}}>
                                    {currentIngredients[2].name}
                                </h3>
                                <p className="text-white font-afacad font-normal text-[18px] leading-relaxed text-center max-w-[360px]" style={{fontFamily: 'Afacad, sans-serif'}}>
                                    {currentIngredients[2].description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Values Section - Mobile */}
            <div className="md:hidden py-12 px-4 w-full">
                {/* Mobile Header */}
                <div className="w-full flex items-center justify-center mb-8" ref={valuesRef}>
                    <div className="w-full bg-black/40 backdrop-blur-[10px] border border-white/20 rounded-2xl shadow-lg flex flex-col items-center justify-center p-6">
                        <h2 className="text-white font-pethra font-bold text-[28px] leading-tight text-center mb-3">
                            Our Values
                        </h2>
                        <p className="text-white font-afacad font-normal text-[14px] leading-relaxed text-center" style={{fontFamily: 'Afacad, sans-serif'}}>
                            {isInViewValues && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                    style={{ position: 'relative' }}
                                >
                                    {'At Omniblend, our business is built on core principles that guide every decision we make, from sourcing to production to community engagement.'.split('').map((char, index) => (
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
                            )}
                        </p>
                    </div>
                </div>

                {/* Mobile Values Grid */}
                <motion.div 
                    className="w-full grid grid-cols-1 gap-6"
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {[
                        {
                            title: 'Sustainability',
                            description: 'We\'re committed to environmentally responsible practices throughout our supply chain, from farm to table.',
                            icon: (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                            )
                        },
                        {
                            title: 'Quality',
                            description: 'We never compromise on quality, selecting only the finest ingredients and maintaining rigorous standards.',
                            icon: (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                            )
                        },
                        {
                            title: 'Community',
                            description: 'We build lasting relationships with farmers and support the communities where our ingredients are grown.',
                            icon: (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            )
                        },
                        {
                            title: 'Innovation',
                            description: 'We constantly explore new techniques and combinations while respecting traditional methods.',
                            icon: (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            )
                        },
                        {
                            title: 'Fair Trade',
                            description: 'We ensure fair compensation for farmers and workers throughout our global supply chain.',
                            icon: (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 3m0 0l3-3m-3 3v12m9-15v3m0 0a3 3 0 100 6v0a3 3 0 100-6v0m0-3a6 6 0 110 12 6 6 0 010-12z" />
                            )
                        },
                        {
                            title: 'Service',
                            description: 'We are dedicated to providing exceptional customer service and creating memorable culinary experiences.',
                            icon: (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                            )
                        }
                    ].map((value, index) => (
                        <motion.div 
                            key={index} 
                            className="w-full bg-black/40 backdrop-blur-[10px] border border-white/20 rounded-2xl shadow-lg flex flex-col items-center justify-start p-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                        >
                            <motion.div 
                                className="mb-4"
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + (index * 0.1), duration: 0.5 }}
                            >
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    {value.icon}
                                </svg>
                            </motion.div>
                            <motion.h3 
                                className="text-white font-afacad font-semibold text-[20px] mb-3 text-center" 
                                style={{fontFamily: 'Afacad, sans-serif'}}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 + (index * 0.1), duration: 0.4 }}
                            >
                                {value.title}
                            </motion.h3>
                            <motion.p 
                                className="text-white font-afacad font-normal text-[14px] leading-relaxed text-center" 
                                style={{fontFamily: 'Afacad, sans-serif'}}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 + (index * 0.1), duration: 0.4 }}
                            >
                                {value.description}
                            </motion.p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Desktop Our Values Section - Unchanged */}
            <div className="hidden md:flex py-16 flex-col items-center px-4">
                {/* Top Center Glassmorphism Box */}
                <div className="w-[1820px] flex items-center justify-center mb-20" ref={desktopValuesRef}>
                    <div className="w-[660px] h-[140px] bg-black/40 backdrop-blur-[10px] border border-white/20 rounded-2xl shadow-lg flex flex-col items-center justify-center px-6">
                        <h2 className="text-white font-pethra font-bold text-[40px] leading-tight text-center mb-2">
                            Our Values
                        </h2>
                        <p className="text-white font-afacad font-normal text-[18px] leading-relaxed text-center" style={{fontFamily: 'Afacad, sans-serif'}}>
                            {isInViewDesktopValues && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                    style={{ position: 'relative' }}
                                >
                                    {'At Omniblend, our business is built on core principles that guide every decision we make, from sourcing to production to community engagement.'.split('').map((char, index) => (
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
                            )}
                        </p>
                    </div>
                </div>

                {/* 6 Values Boxes - 2 rows of 3 columns */}
                <motion.div 
                    className="w-[1820px] flex flex-col items-center gap-8"
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {/* First Row */}
                    <div className="flex items-center justify-center gap-16">
                        {/* Sustainability Box */}
                        <motion.div 
                            className="w-[360px] h-[320px] bg-black/40 backdrop-blur-[10px] border border-white/20 rounded-2xl shadow-lg flex flex-col items-center justify-start px-6 py-6"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                        >
                            {/* Icon */}
                            <motion.div 
                                className="mb-6 mt-2"
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                            >
                                <svg className="w-[50px] h-[50px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                </svg>
                            </motion.div>

                            {/* Title */}
                            <motion.h3 
                                className="text-white font-afacad font-semibold text-[24px] mb-4 text-center" 
                                style={{fontFamily: 'Afacad, sans-serif'}}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, duration: 0.4 }}
                            >
                                Sustainability
                            </motion.h3>

                            {/* Description */}
                            <motion.p 
                                className="text-white font-afacad font-normal text-[16px] leading-relaxed text-center" 
                                style={{fontFamily: 'Afacad, sans-serif'}}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: 0.4 }}
                            >
                                We're committed to environmentally responsible practices throughout our supply chain, from farm to table.
                            </motion.p>
                        </motion.div>

                        {/* Quality Box */}
                        <motion.div 
                            className="w-[360px] h-[320px] bg-black/40 backdrop-blur-[10px] border border-white/20 rounded-2xl shadow-lg flex flex-col items-center justify-start px-6 py-6"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        >
                            {/* Icon */}
                            <motion.div 
                                className="mb-6 mt-2"
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                            >
                                <svg className="w-[50px] h-[50px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                </svg>
                            </motion.div>

                            {/* Title */}
                            <motion.h3 
                                className="text-white font-afacad font-semibold text-[24px] mb-4 text-center" 
                                style={{fontFamily: 'Afacad, sans-serif'}}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: 0.4 }}
                            >
                                Quality
                            </motion.h3>

                            {/* Description */}
                            <motion.p 
                                className="text-white font-afacad font-normal text-[16px] leading-relaxed text-center" 
                                style={{fontFamily: 'Afacad, sans-serif'}}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6, duration: 0.4 }}
                            >
                                We never compromise on quality, selecting only the finest ingredients and maintaining rigorous standards.
                            </motion.p>
                        </motion.div>

                        {/* Community Box */}
                        <motion.div 
                            className="w-[360px] h-[320px] bg-black/40 backdrop-blur-[10px] border border-white/20 rounded-2xl shadow-lg flex flex-col items-center justify-start px-6 py-6"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                        >
                            {/* Icon */}
                            <motion.div 
                                className="mb-6 mt-2"
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                            >
                                <svg className="w-[50px] h-[50px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </motion.div>

                            {/* Title */}
                            <motion.h3 
                                className="text-white font-afacad font-semibold text-[24px] mb-4 text-center" 
                                style={{fontFamily: 'Afacad, sans-serif'}}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6, duration: 0.4 }}
                            >
                                Community
                            </motion.h3>

                            {/* Description */}
                            <motion.p 
                                className="text-white font-afacad font-normal text-[16px] leading-relaxed text-center" 
                                style={{fontFamily: 'Afacad, sans-serif'}}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.7, duration: 0.4 }}
                            >
                                We build lasting relationships with farmers and support the communities where our ingredients are grown.
                            </motion.p>
                        </motion.div>
                    </div>

                    {/* Second Row */}
                    <div className="flex items-center justify-center gap-16">
                        {/* Innovation Box */}
                        <motion.div 
                            className="w-[360px] h-[320px] bg-black/40 backdrop-blur-[10px] border border-white/20 rounded-2xl shadow-lg flex flex-col items-center justify-start px-6 py-6"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                        >
                            {/* Icon */}
                            <motion.div 
                                className="mb-6 mt-2"
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6, duration: 0.5 }}
                            >
                                <svg className="w-[50px] h-[50px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </motion.div>

                            {/* Title */}
                            <motion.h3 
                                className="text-white font-afacad font-semibold text-[24px] mb-4 text-center" 
                                style={{fontFamily: 'Afacad, sans-serif'}}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.7, duration: 0.4 }}
                            >
                                Innovation
                            </motion.h3>

                            {/* Description */}
                            <motion.p 
                                className="text-white font-afacad font-normal text-[16px] leading-relaxed text-center" 
                                style={{fontFamily: 'Afacad, sans-serif'}}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.8, duration: 0.4 }}
                            >
                                We constantly explore new techniques and combinations while respecting traditional methods.
                            </motion.p>
                        </motion.div>

                        {/* Fair Trade Box */}
                        <motion.div 
                            className="w-[360px] h-[320px] bg-black/40 backdrop-blur-[10px] border border-white/20 rounded-2xl shadow-lg flex flex-col items-center justify-start px-6 py-6"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                        >
                            {/* Icon */}
                            <motion.div 
                                className="mb-6 mt-2"
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.7, duration: 0.5 }}
                            >
                                <svg className="w-[50px] h-[50px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 3m0 0l3-3m-3 3v12m9-15v3m0 0a3 3 0 100 6v0a3 3 0 100-6v0m0-3a6 6 0 110 12 6 6 0 010-12z" />
                                </svg>
                            </motion.div>

                            {/* Title */}
                            <motion.h3 
                                className="text-white font-afacad font-semibold text-[24px] mb-4 text-center" 
                                style={{fontFamily: 'Afacad, sans-serif'}}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.8, duration: 0.4 }}
                            >
                                Fair Trade
                            </motion.h3>

                            {/* Description */}
                            <motion.p 
                                className="text-white font-afacad font-normal text-[16px] leading-relaxed text-center" 
                                style={{fontFamily: 'Afacad, sans-serif'}}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.9, duration: 0.4 }}
                            >
                                We ensure fair compensation for farmers and workers throughout our global supply chain.
                            </motion.p>
                        </motion.div>

                        {/* Service Box */}
                        <motion.div 
                            className="w-[360px] h-[320px] bg-black/40 backdrop-blur-[10px] border border-white/20 rounded-2xl shadow-lg flex flex-col items-center justify-start px-6 py-6"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                        >
                            {/* Icon */}
                            <motion.div 
                                className="mb-6 mt-2"
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.8, duration: 0.5 }}
                            >
                                <svg className="w-[50px] h-[50px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                </svg>
                            </motion.div>

                            {/* Title */}
                            <motion.h3 
                                className="text-white font-afacad font-semibold text-[24px] mb-4 text-center" 
                                style={{fontFamily: 'Afacad, sans-serif'}}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.9, duration: 0.4 }}
                            >
                                Service
                            </motion.h3>

                            {/* Description */}
                            <motion.p 
                                className="text-white font-afacad font-normal text-[16px] leading-relaxed text-center" 
                                style={{fontFamily: 'Afacad, sans-serif'}}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 1.0, duration: 0.4 }}
                            >
                                We're dedicated to exceptional customer service and building relationships with our customers.
                            </motion.p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            <div className="hidden md:flex justify-center items-center min-h-screen px-4">
                <div className="w-[1820px] h-[950px]  flex flex-col items-center justify-center px-16">
                    <div className="mb-24">
                        <h1 className="text-white font-pethra text-[64px] leading-tight text-center underline decoration-2 underline-offset-8">
                            Honor & Impact
                        </h1>
                    </div>

                    <div className="flex items-center justify-center gap-52 w-full">
                        <div className="w-[425px] h-[400px] bg-white rounded-2xl flex items-center justify-center shadow-lg overflow-hidden">
                            <img
                                src="/Randall.webp"
                                alt="Omniblend Product Display"
                                className=" h-[400px] w-auto transform drop-shadow-xl"
                            />
                        </div>

                        <div className="w-[615px]" ref={desktopTributeRef}>
                            <p className="text-white font-afacad font-normal text-[27px] leading-relaxed" style={{fontFamily: 'Afacad, sans-serif'}}>
                                {isDesktopTributeInView && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.5 }}
                                        style={{ position: 'relative' }}
                                    >
                                        {'In memory of our dear friend Randall L. McConahay, whose passion inspired us daily, a percentage of every order goes to the Randall\'s Cremation Society—to plant trees and keep his spirit alive in every forest we grow.'.split('').map((char, index) => (
                                            <motion.span
                                                key={index}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{
                                                    duration: 0.05,
                                                    delay: index * 0.02,
                                                }}
                                            >
                                                {char}
                                            </motion.span>
                                        ))}
                                    </motion.div>
                                )}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile View */}
            <div className="md:hidden py-12 px-4 w-full">
                <div className="w-full bg-black/40 backdrop-blur-[10px] border border-white/20 rounded-2xl shadow-lg p-6 mb-8">
                    <h1 className="text-white font-pethra text-[32px] leading-tight text-center mb-6">
                        Introducing Omniblend
                    </h1>

                    <div className="w-full bg-white/10 rounded-2xl p-4 mb-6 flex justify-center">
                        <img
                            src="/Randall.webp"
                            alt="Omniblend Product Display"
                            className="w-full max-w-[300px] h-auto object-contain"
                        />
                    </div>

                    <div className="w-full bg-black/40 backdrop-blur-[10px] border border-white/20 rounded-2xl p-6" ref={mobileTributeRef}>
                        <p className="text-white font-afacad font-normal text-[16px] leading-relaxed" style={{fontFamily: 'Afacad, sans-serif'}}>
                            {isMobileTributeInView && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                    style={{ position: 'relative' }}
                                >
                                    {'In memory of our dear friend Randall L. McConahay, whose passion inspired us daily, a percentage of every order goes to the Randall\'s Cremation Society—to plant trees and keep his spirit alive in every forest we grow.'.split('').map((char, index) => (
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
                            )}
                        </p>
                    </div>
                </div>
            </div>

            <Bottom />
        </div>
    )
}

export default About
