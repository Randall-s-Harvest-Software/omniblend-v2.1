import React, { createContext, useContext, useState, useEffect } from 'react';

// Product Context for shared state management
const ProductContext = createContext();

// Default products (same as in Products.jsx)
const defaultProducts = [
    {
        id: 1,
        name: "Omniblend Original",
        tagline: "Perfect balance in every sprinkle.",
        description: "Omniblend Original is the signature creation that defines the heart of Randall's Harvest. Designed as an all-purpose seasoning, it combines earthy undertones with aromatic depth to elevate any dish — from classic Indian curries to global favorites. With every use, it delivers harmony between spice, aroma, and texture, making it the perfect companion for both everyday cooking and gourmet experiments. It's more than just seasoning — it's the essence of true flavor balance.",
        image: "/original1.jpg",
        price: 179,
        category: 'Signature Spices',
        status: 'active'
    },
    {
        id: 2,
        name: "Omniblend Mild",
        tagline: "Gentle flavor, pure comfort.",
        description: "Omniblend Mild is crafted for those who cherish flavor without the fire. This smooth, well-rounded blend brings out the natural taste of your ingredients with a comforting hint of warmth. Made from carefully selected herbs and sun-dried spices, it's perfect for soups, roasted vegetables, light curries, or even daily home-cooked meals. Every sprinkle adds a touch of authenticity — subtle, aromatic, and irresistibly fresh.",
        image: "/mild1.png",
        price: 179,
        category: 'Gentle Seasonings',
        status: 'active'
    },
    {
        id: 3,
        name: "Omniblend Spicy",
        tagline: "Bold flavor, unforgettable heat.",
        description: "Omniblend Spicy is a powerhouse of flavor, made for those who love their meals with character and intensity. Blended with premium red chilies, smoked paprika, and handpicked peppercorns, it ignites every dish with vibrant heat and rich aroma. Ideal for marinades, grilled meats, stir-fries, and hearty curries, this blend adds a fiery kick without overpowering the natural taste. Each spoonful awakens the senses — bold, deep, and truly unforgettable.",
        image: "/spicy1.jpg",
        price: 179,
        category: 'Bold Spices',
        status: 'active'
    }
];

// Product Provider Component
export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    // Load products from localStorage on mount
    useEffect(() => {
        const savedProducts = localStorage.getItem('omniblend_products');
        if (savedProducts) {
            setProducts(JSON.parse(savedProducts));
        } else {
            // Initialize with default products
            setProducts(defaultProducts);
            localStorage.setItem('omniblend_products', JSON.stringify(defaultProducts));
        }
    }, []);

    // Save products to localStorage whenever products change
    useEffect(() => {
        if (products.length > 0) {
            localStorage.setItem('omniblend_products', JSON.stringify(products));
        }
    }, [products]);

    const addProduct = (productData) => {
        const newProduct = {
            id: Date.now(),
            name: productData.name,
            tagline: productData.tagline || "Premium spice blend",
            description: productData.description,
            image: productData.image || "/default-product.svg",
            price: parseFloat(productData.price),
            category: productData.category,
            status: productData.status || 'active'
        };
        setProducts(prev => [...prev, newProduct]);
        return newProduct;
    };

    const updateProduct = (productId, productData) => {
        setProducts(prev => prev.map(product =>
            product.id === productId
                ? {
                    ...product,
                    name: productData.name,
                    tagline: productData.tagline,
                    description: productData.description,
                    image: productData.image,
                    price: parseFloat(productData.price),
                    category: productData.category,
                    status: productData.status
                }
                : product
        ));
    };

    const deleteProduct = (productId) => {
        setProducts(prev => prev.filter(product => product.id !== productId));
    };

    const getActiveProducts = () => {
        return products.filter(product => product.status === 'active');
    };

    const value = {
        products,
        addProduct,
        updateProduct,
        deleteProduct,
        getActiveProducts
    };

    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    );
};

// Custom hook to use product context
export const useProducts = () => {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error('useProducts must be used within a ProductProvider');
    }
    return context;
};
