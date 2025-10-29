import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import About from "./pages/About.jsx";
import Landing from "./pages/Landing.jsx";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import Products from "./pages/Products.jsx";
import Buy from "./pages/Buy.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Admin from "./pages/Admin.jsx";
import { ProductProvider } from "./context/ProductContext.jsx";

// Wrapper component to handle page refresh and scroll to top
const ForceRefresh = ({ children }) => {
    const location = useLocation();
    
    useEffect(() => {
        // Scroll to top on initial load
        window.scrollTo(0, 0);
        
        // Force full page refresh on route change
        if (location.pathname !== window.location.pathname) {
            window.location.href = location.pathname + window.location.search;
        } else {
            // If already on the same URL, just scroll to top
            window.scrollTo(0, 0);
        }
    }, [location]);

    // Add scroll restoration to handle browser back/forward buttons
    useEffect(() => {
        window.history.scrollRestoration = 'manual';
        return () => {
            window.history.scrollRestoration = 'auto';
        };
    }, []);

    return children;
};

const App = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // animation duration in ms
            once: true,     // animate only once when element enters viewport
            easing: "ease-out", // easing type
        });
    }, []);

    return (
        <ProductProvider>
            <Router>
                <ForceRefresh>
                    <Routes>
                        <Route path="/" element={<Landing />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/buy" element={<Buy />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/admin" element={<Admin />} />
                    </Routes>
                </ForceRefresh>
            </Router>
        </ProductProvider>
    );
};

export default App;
