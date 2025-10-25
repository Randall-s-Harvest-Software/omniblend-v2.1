import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Bottom from "../components/Bottom.jsx";

const Buy = () => {
    const location = useLocation();
    const { selectedProduct, productIndex } = location.state || {};

    // Product variants data based on selected product
    const getProductVariants = (productType) => {
        switch (productType) {
            case "Omniblend Original":
                return [
                    { id: 0, name: "Original", image: "/original1.jpg", price: 179 },
                    { id: 1, name: "Original 2", image: "/original2.jpg", price: 179 },
                    { id: 2, name: "Original 3", image: "/original3.jpg", price: 179 },
                    { id: 3, name: "Original 4", image: "/original4.jpg", price: 179 }
                ];
            case "Omniblend Mild":
                return [
                    { id: 0, name: "Mild", image: "/mild1.png", price: 179 },
                    { id: 1, name: "Mild 2", image: "/mild2.png", price: 179 },
                    { id: 2, name: "Mild 3", image: "/mild3.jpg", price: 179 },
                    { id: 3, name: "Mild 4", image: "/mild4.png", price: 179 }
                ];
            case "Omniblend Spicy":
                return [
                    { id: 0, name: "Spicy", image: "/spicy1.jpg", price: 179 },
                    { id: 1, name: "Spicy 2", image: "/spicy2.png", price: 179 },
                    { id: 2, name: "Spicy 3", image: "/spicy3.png", price: 179 },
                    { id: 3, name: "Spicy 4", image: "/spicy4.png", price: 179 }
                ];
            default:
                return [
                    { id: 0, name: "Original", image: "/original1.jpg", price: 179 },
                    { id: 1, name: "Original 2", image: "/original2.jpg", price: 179 },
                    { id: 2, name: "Original 3", image: "/original3.jpg", price: 179 },
                    { id: 3, name: "Original 4", image: "/original4.jpg", price: 179 }
                ];
        }
    };

    const initialVariants = getProductVariants(selectedProduct?.name);
    const [variants, setVariants] = useState(initialVariants);
    const [selectedVariant, setSelectedVariant] = useState(0);
    const [quantity, setQuantity] = useState(1);

    // Update variants when selected product changes
    useEffect(() => {
        const newVariants = getProductVariants(selectedProduct?.name);
        setVariants(newVariants);
        setSelectedVariant(0); // Reset to first variant when product changes
    }, [selectedProduct?.name]);

    const handleVariantSelect = (variantId) => {
        console.log('Clicked variant:', variantId, 'Current selected:', selectedVariant);
        console.log('New image will be:', variants[variantId].image);
        // Simply update the selected variant - the main display will show the new variant's image
        setSelectedVariant(variantId);
    };

    const handleQuantityChange = (newQuantity) => {
        if (newQuantity >= 1) {
            setQuantity(newQuantity);
        }
    };

    // Calculate total price
    const unitPrice = variants[selectedVariant].price;
    const totalPrice = unitPrice * quantity;
    return (
        <div className="min-h-screen bg-black relative" style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(/buy.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
            {/* Navbar positioned 60px from top and centered */}
            <Navbar />

            {/* Main Buy Section */}
            <div className="pt-56 flex flex-row items-start justify-center px-4 min-h-screen gap-44">
                {/* Section 1 - Product Display */}
                <div className="flex flex-col items-center">
                    {/* Big Glassmorphism Box */}
                    <div className="w-[530px] h-[530px] bg-black/40 backdrop-blur-[10px] border border-white/20 rounded-2xl shadow-lg flex items-center justify-center px-6 py-6 mb-8">
                        {/* Inner White Box */}
                        <div className="w-[360px] h-[450px] bg-white rounded-2xl shadow-lg flex items-center justify-center overflow-hidden">
                            {console.log('Main display showing:', variants[selectedVariant]?.image, 'Selected variant:', selectedVariant)}
                            <img
                                src={variants[selectedVariant].image}
                                alt={`Omniblend ${variants[selectedVariant].name} - ${selectedProduct?.name || 'Premium Spice Blend'} Product`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* 4 Small Glassmorphism Boxes Row */}
                    <div className="flex items-center justify-center gap-4">
                        {variants.map((variant, index) => (
                            console.log(`Thumbnail ${index}:`, variant.image, 'Selected:', selectedVariant === variant.id) ||
                            <div
                                key={variant.id}
                                onClick={() => handleVariantSelect(variant.id)}
                                className={`w-[110px] h-[110px] backdrop-blur-[10px] border rounded-2xl shadow-lg flex items-center justify-center cursor-pointer transition-all duration-300 ${
                                    selectedVariant === variant.id
                                        ? 'bg-white/30 border-white/40'
                                        : 'bg-black/40 border-white/20 hover:bg-black/50'
                                }`}
                                title={`${variant.name} - ${selectedProduct?.name || 'Premium Spice Blend'} Variant`}
                            >
                                <img
                                    src={variant.image}
                                    alt={`Omniblend ${variant.name} - ${selectedProduct?.name || 'Premium Spice Blend'} Variant`}
                                    className="w-[80px] h-[80px] object-cover rounded-xl"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section 2 - Product Details */}
                <div className="flex flex-col justify-start max-w-lg">
                    {/* Product Badges in Glassmorphism Box */}
                    <div className="w-[200px] h-[50px] bg-black/40 backdrop-blur-[10px] border border-white/20 rounded-2xl shadow-lg flex items-center justify-center px-4 mb-4">
                        <div className="flex gap-3">
                            {selectedProduct?.name === "Omniblend Original" ? (
                                <>
                                    <span className="px-3 py-1 bg-yellow-400/80 rounded-md text-white/70 text-xs font-bold uppercase tracking-wide">Signature</span>
                                    <span className="px-2 py-1 bg-green-800/80 rounded-md text-xs text-white/70 font-bold uppercase tracking-wide">Premium</span>
                                </>
                            ) : selectedProduct?.name === "Omniblend Mild" ? (
                                <>
                                    <span className="px-3 py-1 bg-green-800/80 rounded-md text-xs text-white/70 font-bold uppercase tracking-wide">Gentle</span>
                                    <span className="px-2 py-1 bg-green-800/80 rounded-md text-xs text-white/70 font-bold uppercase tracking-wide">Premium</span>
                                </>
                            ) : selectedProduct?.name === "Omniblend Spicy" ? (
                                <>
                                    <span className="px-3 py-1 bg-red-800/80 rounded-md text-xs text-white/70 font-bold uppercase tracking-wide">Bold</span>
                                    <span className="px-2 py-1 bg-green-800/80 rounded-md text-xs text-white/70 font-bold uppercase tracking-wide">Premium</span>
                                </>
                            ) : (
                                <>
                                    <span className="px-3 py-1 bg-green-800/80 rounded-md text-xs text-white/70 font-bold uppercase tracking-wide">New</span>
                                    <span className="px-2 py-1 bg-green-800/80 rounded-md text-xs text-white/70 font-bold uppercase tracking-wide">Premium</span>
                                </>
                            )}
                        </div>
                    </div>
                    {/* Product Details in Glassmorphism Box */}
                    <div className="w-[560px] bg-black/40 backdrop-blur-[10px] border border-white/20 rounded-2xl shadow-lg p-6 mb-4">
                        <div className="flex flex-col">
                            <h1 className="text-3xl lg:text-4xl font-bold mb-2 text-white">
                                Omniblend {selectedProduct?.name?.replace('Omniblend ', '') || variants[selectedVariant].name}
                                {variants[selectedVariant].description && (
                                    <span className="text-lg font-normal text-gray-300"> - {variants[selectedVariant].description}</span>
                                )}
                            </h1>
                            <p className="text-white/70 font-semibold mb-4">Randall's Harvest Premium Spice Blend</p>
                            <p className="lg:w-[497px] text-white/90 mb-8 text-sm lg:text-base leading-relaxed">
                                {selectedProduct?.name === "Omniblend Original"
                                    ? "Experience the signature flavor that started it all. Omniblend Original delivers the perfect balance of aromatic spices and earthy undertones, creating a versatile seasoning that enhances any dish. This carefully crafted blend combines traditional spices with modern flavor profiles, making it the ideal choice for both everyday cooking and gourmet experimentation."
                                    : selectedProduct?.name === "Omniblend Mild"
                                    ? "Discover gentle flavor without compromise. Omniblend Mild offers a smooth, well-rounded taste that brings out the natural flavors of your ingredients with a comforting hint of warmth. Perfect for those who prefer subtle seasoning that enhances rather than overwhelms, this blend is ideal for soups, roasted vegetables, and light curries."
                                    : selectedProduct?.name === "Omniblend Spicy"
                                    ? "Ignite your taste buds with bold, unforgettable heat. Omniblend Spicy delivers a powerhouse of flavor with premium red chilies, smoked paprika, and handpicked peppercorns. This vibrant blend adds character and intensity to marinades, grilled meats, stir-fries, and hearty curries without overpowering the natural taste of your ingredients."
                                    : `Experience the perfect harmony of flavors with Omniblend ${variants[selectedVariant].name}, our signature premium spice powder. Carefully crafted with a selection of the finest herbs and spices from around the world, this versatile blend elevates any dish with its complex, balanced profile. Each jar contains 100g of our proprietary blend, packaged to preserve freshness and flavor.`
                                }
                            </p>
                            <p className="lg:w-[497px] text-white/70 mb-8 text-sm lg:text-base leading-relaxed">
                                {selectedProduct?.name === "Omniblend Original"
                                    ? "100g | Signature Blend | Perfect Balance | All-Purpose |"
                                    : selectedProduct?.name === "Omniblend Mild"
                                    ? "100g | Gentle Seasoning | Subtle Heat | Comforting |"
                                    : selectedProduct?.name === "Omniblend Spicy"
                                    ? "100g | Bold Seasoning | Premium Heat | Intense Flavor |"
                                    : "85g | Gourmet Seasoning Blend | Dual Texture | No BS |"
                                }
                            </p>
                        </div>
                    </div>
                    {/* Price in Glassmorphism Box */}
                    <div className="w-[300px] p-4 mb-8">
                        <div className="bg-black/40 flex items-center justify-center w-[170px] h-[50px] backdrop-blur-[10px] border border-white/20 rounded-2xl shadow-lg">
                            <h2 className="text-2xl lg:text-3xl font-bold  text-white">₹ {totalPrice.toFixed(2)}</h2>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 mb-6">
                        <button
                            onClick={() => handleQuantityChange(quantity - 1)}
                            disabled={quantity <= 1}
                            className={`px-3 py-2 rounded-md transition-colors ${
                                quantity <= 1
                                    ? 'bg-gray-800 cursor-not-allowed'
                                    : 'bg-gray-700 hover:bg-gray-600 cursor-pointer'
                            }`}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-minus" aria-hidden="true">
                                <path d="M5 12h14"></path>
                            </svg>
                        </button>
                        <span className="font-bold text-lg text-white">{quantity}</span>
                        <button
                            onClick={() => handleQuantityChange(quantity + 1)}
                            className="bg-gray-700 px-3 py-2 rounded-md hover:bg-gray-600 transition-colors cursor-pointer"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus" aria-hidden="true">
                                <path d="M5 12h14"></path>
                                <path d="M12 5v14"></path>
                            </svg>
                        </button>
                    </div>

                    <button className="w-[230px] h-[50px] flex items-center justify-center gap-2 px-6 py-3 bg-[#265B06] rounded-full font-semibold text-white shadow-lg hover:bg-[#38611F] hover:shadow-green-500/30 transition">
                        {selectedProduct?.name === "Omniblend Original"
                            ? "Add to Cart"
                            : selectedProduct?.name === "Omniblend Mild"
                            ? "Add to Cart"
                            : selectedProduct?.name === "Omniblend Spicy"
                            ? "Add to Cart"
                            : "Add to Cart"
                        } ₹ {totalPrice.toFixed(2)}
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart" aria-hidden="true">
                            <circle cx="8" cy="21" r="1"></circle>
                            <circle cx="19" cy="21" r="1"></circle>
                            <path d="m2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                        </svg>
                    </button>

                    {/* Product Info in Glassmorphism Box */}
                    <div className="w-[450px] bg-black/40 backdrop-blur-[10px] border border-white/20 rounded-2xl shadow-lg p-4 mt-10 mb-14">
                        <div className="text-sm text-gray-400 py-2 space-y-2">
                            <div className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-truck" aria-hidden="true">
                                    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                                    <path d="M15 18H9"></path>
                                    <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                                    <circle cx="17" cy="18" r="2"></circle>
                                    <circle cx="7" cy="18" r="2"></circle>
                                </svg>
                                <span>Fast Delivery Available</span>
                            </div>
                            <p><span className="font-semibold text-white">Category:</span> {
                                selectedProduct?.name === "Omniblend Original"
                                    ? "Signature Spices"
                                    : selectedProduct?.name === "Omniblend Mild"
                                    ? "Gentle Seasonings"
                                    : selectedProduct?.name === "Omniblend Spicy"
                                    ? "Bold Spices"
                                    : "Premium Spices"
                            }</p>
                            <p><span className="font-semibold text-white">Tags:</span> {
                                selectedProduct?.name === "Omniblend Original"
                                    ? "Signature, Balanced, All-Purpose, Premium"
                                    : selectedProduct?.name === "Omniblend Mild"
                                    ? "Gentle, Subtle, Comforting, Premium"
                                    : selectedProduct?.name === "Omniblend Spicy"
                                    ? "Bold, Intense, Premium, Heat"
                                    : "Organic, Gourmet, Artisanal"
                            }</p>
                        </div>
                    </div>
                </div>
            </div>

            <Bottom />
        </div>
    )
}

export default Buy
