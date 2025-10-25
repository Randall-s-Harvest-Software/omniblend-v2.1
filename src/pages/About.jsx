import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Bottom from "../components/Bottom.jsx";

const About = () => {
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

    return (
        <div className="min-h-screen bg-black relative" style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(/about.webp)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
            {/* Navbar positioned 60px from top and centered */}
            <Navbar />


            {/* Main content with glassmorphism box */}
            <div className="pt-28 flex justify-center items-center min-h-screen px-4">
                {/* Glassmorphism Box - 800h x 1820w */}
                <div className="w-[1820px] h-[950px] bg-black/30 backdrop-blur-[10px] border border-white/20 rounded-3xl shadow-2xl flex flex-col items-center justify-center px-16">
                    {/* Top Center Title */}
                    <div className="mb-16">
                        <h1 className="text-white font-pethra text-[64px] leading-tight text-center underline decoration-2 underline-offset-8">
                            Introducing Omniblend
                        </h1>
                    </div>

                    {/* Content Layout */}
                    <div className="flex items-center justify-center gap-52 w-full">
                        {/* Left Side - White Box */}
                        <div className="w-[425px] h-[450px] bg-white rounded-2xl flex items-center justify-center shadow-lg overflow-hidden">
                            <img
                                src="/aboutproduct.webp"
                                alt="Omniblend Product Display"
                                className="w-[440px] h-auto object-contain transform drop-shadow-xl"
                            />
                        </div>

                        {/* Right Side - Text Content */}
                        <div className="w-[615px]">
                            <p className="text-white font-afacad font-normal text-[27px] leading-relaxed" style={{fontFamily: 'Afacad, sans-serif'}}>
                                OmniBlend is our all-in-one spice innovation—meticulously balanced with 20+ premium ingredients. From smoked paprika to real sumac, each spice is crushed and powdered for maximum depth and texture. Whether you're grilling, roasting, stir-frying, or sprinkling on snacks, one shake transforms any meal into a masterpiece.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sourcing and Ingredients Section */}
            <div className="py-44 flex flex-col items-center px-4">
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
                    <div className="flex-1 max-w-[645px] ml-8">
                        <div className="w-[645px] h-[110px] bg-black/40 backdrop-blur-[10px] border border-white/20 rounded-2xl shadow-lg flex items-center justify-start px-6">
                            <p className="text-white font-afacad font-normal text-[18px] leading-relaxed" style={{fontFamily: 'Afacad, sans-serif'}}>
                                We travel the world to find the highest quality spices, working directly with farmers who share our commitment to sustainable and ethical practices.
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

            {/* Our Values Section */}
            <div className="py-24 flex flex-col items-center px-4">
                {/* Top Center Glassmorphism Box */}
                <div className="w-[1820px] flex items-center justify-center mb-20">
                    <div className="w-[660px] h-[140px] bg-black/40 backdrop-blur-[10px] border border-white/20 rounded-2xl shadow-lg flex flex-col items-center justify-center px-6">
                        <h2 className="text-white font-pethra font-bold text-[40px] leading-tight text-center mb-2">
                            Our Values
                        </h2>
                        <p className="text-white font-afacad font-normal text-[18px] leading-relaxed text-center" style={{fontFamily: 'Afacad, sans-serif'}}>
                            At Omniblend, our business is built on core principles that guide every decision we make, from sourcing to production to community engagement.
                        </p>
                    </div>
                </div>

                {/* 6 Values Boxes - 2 rows of 3 columns */}
                <div className="w-[1820px] flex flex-col items-center gap-8">
                    {/* First Row */}
                    <div className="flex items-center justify-center gap-16">
                        {/* Sustainability Box */}
                        <div className="w-[360px] h-[320px] bg-black/40 backdrop-blur-[10px] border border-white/20 rounded-2xl shadow-lg flex flex-col items-center justify-start px-6 py-6">
                            {/* Icon */}
                            <div className="mb-6 mt-2">
                                <svg className="w-[50px] h-[50px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                </svg>
                            </div>

                            {/* Title */}
                            <h3 className="text-white font-afacad font-semibold text-[24px] mb-4 text-center" style={{fontFamily: 'Afacad, sans-serif'}}>
                                Sustainability
                            </h3>

                            {/* Description */}
                            <p className="text-white font-afacad font-normal text-[16px] leading-relaxed text-center" style={{fontFamily: 'Afacad, sans-serif'}}>
                                We're committed to environmentally responsible practices throughout our supply chain, from farm to table.
                            </p>
                        </div>

                        {/* Quality Box */}
                        <div className="w-[360px] h-[320px] bg-black/40 backdrop-blur-[10px] border border-white/20 rounded-2xl shadow-lg flex flex-col items-center justify-start px-6 py-6">
                            {/* Icon */}
                            <div className="mb-6 mt-2">
                                <svg className="w-[50px] h-[50px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                </svg>
                            </div>

                            {/* Title */}
                            <h3 className="text-white font-afacad font-semibold text-[24px] mb-4 text-center" style={{fontFamily: 'Afacad, sans-serif'}}>
                                Quality
                            </h3>

                            {/* Description */}
                            <p className="text-white font-afacad font-normal text-[16px] leading-relaxed text-center" style={{fontFamily: 'Afacad, sans-serif'}}>
                                We never compromise on quality, selecting only the finest ingredients and maintaining rigorous standards.
                            </p>
                        </div>

                        {/* Community Box */}
                        <div className="w-[360px] h-[320px] bg-black/40 backdrop-blur-[10px] border border-white/20 rounded-2xl shadow-lg flex flex-col items-center justify-start px-6 py-6">
                            {/* Icon */}
                            <div className="mb-6 mt-2">
                                <svg className="w-[50px] h-[50px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>

                            {/* Title */}
                            <h3 className="text-white font-afacad font-semibold text-[24px] mb-4 text-center" style={{fontFamily: 'Afacad, sans-serif'}}>
                                Community
                            </h3>

                            {/* Description */}
                            <p className="text-white font-afacad font-normal text-[16px] leading-relaxed text-center" style={{fontFamily: 'Afacad, sans-serif'}}>
                                We build lasting relationships with farmers and support the communities where our ingredients are grown.
                            </p>
                        </div>
                    </div>

                    {/* Second Row */}
                    <div className="flex items-center justify-center gap-16">
                        {/* Innovation Box */}
                        <div className="w-[360px] h-[320px] bg-black/40 backdrop-blur-[10px] border border-white/20 rounded-2xl shadow-lg flex flex-col items-center justify-start px-6 py-6">
                            {/* Icon */}
                            <div className="mb-6 mt-2">
                                <svg className="w-[50px] h-[50px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>

                            {/* Title */}
                            <h3 className="text-white font-afacad font-semibold text-[24px] mb-4 text-center" style={{fontFamily: 'Afacad, sans-serif'}}>
                                Innovation
                            </h3>

                            {/* Description */}
                            <p className="text-white font-afacad font-normal text-[16px] leading-relaxed text-center" style={{fontFamily: 'Afacad, sans-serif'}}>
                                We constantly explore new techniques and combinations while respecting traditional methods.
                            </p>
                        </div>

                        {/* Fair Trade Box */}
                        <div className="w-[360px] h-[320px] bg-black/40 backdrop-blur-[10px] border border-white/20 rounded-2xl shadow-lg flex flex-col items-center justify-start px-6 py-6">
                            {/* Icon */}
                            <div className="mb-6 mt-2">
                                <svg className="w-[50px] h-[50px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 3m0 0l3-3m-3 3v12m9-15v3m0 0a3 3 0 100 6v0a3 3 0 100-6v0m0-3a6 6 0 110 12 6 6 0 010-12z" />
                                </svg>
                            </div>

                            {/* Title */}
                            <h3 className="text-white font-afacad font-semibold text-[24px] mb-4 text-center" style={{fontFamily: 'Afacad, sans-serif'}}>
                                Fair Trade
                            </h3>

                            {/* Description */}
                            <p className="text-white font-afacad font-normal text-[16px] leading-relaxed text-center" style={{fontFamily: 'Afacad, sans-serif'}}>
                                We ensure fair compensation for farmers and workers throughout our global supply chain.
                            </p>
                        </div>

                        {/* Service Box */}
                        <div className="w-[360px] h-[320px] bg-black/40 backdrop-blur-[10px] border border-white/20 rounded-2xl shadow-lg flex flex-col items-center justify-start px-6 py-6">
                            {/* Icon */}
                            <div className="mb-6 mt-2">
                                <svg className="w-[50px] h-[50px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                </svg>
                            </div>

                            {/* Title */}
                            <h3 className="text-white font-afacad font-semibold text-[24px] mb-4 text-center" style={{fontFamily: 'Afacad, sans-serif'}}>
                                Service
                            </h3>

                            {/* Description */}
                            <p className="text-white font-afacad font-normal text-[16px] leading-relaxed text-center" style={{fontFamily: 'Afacad, sans-serif'}}>
                                We're dedicated to exceptional customer service and building relationships with our customers.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-1 flex justify-center items-center min-h-screen px-4">
                {/* Glassmorphism Box - 800h x 1820w */}
                <div className="w-[1820px] h-[950px] flex flex-col items-center justify-center px-16">
                    {/* Top Center Title */}
                    <div className="mb-16 bg-black/40 backdrop-blur-[10px] border border-white/20 rounded-2xl shadow-lg flex flex-col items-center justify-start px-6 py-6">
                        <h1 className="text-white font-pethra text-[64px] leading-tight text-center underline decoration-2 underline-offset-8">
                            Introducing Omniblend
                        </h1>
                    </div>

                    {/* Content Layout */}
                    <div className="flex items-center justify-center gap-52 w-full ">
                        {/* Left Side - White Box */}
                        <div className="w-[425px] h-[450px] bg-black/40 backdrop-blur-[10px] border border-white/20 rounded-2xl shadow-lg flex items-center justify-center shadow-lg overflow-hidden">
                            <img
                                src="/Randall.webp"
                                alt="Omniblend Product Display"
                                className="w-auto h-[490px] object-contain transform drop-shadow-xl"
                            />
                        </div>

                        {/* Right Side - Text Content */}
                        <div className="w-[615px] bg-black/40 backdrop-blur-[10px] border border-white/20 rounded-2xl shadow-lg flex flex-col items-center justify-start px-6 py-6">
                            <p className="text-white font-afacad font-normal text-[27px] leading-relaxed" style={{fontFamily: 'Afacad, sans-serif'}}>
                                OmniBlend is our all-in-one spice innovation—meticulously balanced with 20+ premium ingredients. From smoked paprika to real sumac, each spice is crushed and powdered for maximum depth and texture. Whether you're grilling, roasting, stir-frying, or sprinkling on snacks, one shake transforms any meal into a masterpiece.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Bottom />
        </div>
    )
}

export default About
