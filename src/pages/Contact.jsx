import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Bottom from "../components/Bottom.jsx";

// Responsive container component
const ResponsiveContainer = ({ children, className = '' }) => (
  <div className={`w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

const Contact = () => {
    // Form state management
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation - Check if required fields are filled
        if (!formData.fullName.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
            alert('Please fill in all the required fields before submitting.');
            return;
        }

        // Handle form submission here
        console.log('Form submitted:', formData);
        // You can add your form submission logic here
        alert('Thank you for your message! We will get back to you soon.');
    };
    return (
        <div className="min-h-screen bg-black relative" style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(/about.webp)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
            {/* Navbar positioned 60px from top and centered */}
            <Navbar />

            {/* Main Contact Section - Fixed height to fit in one screen */}
            <div className="flex flex-col items-center justify-between px-4 py-8 md:py-0" style={{ minHeight: 'calc(100vh - 120px - 250px)' }}>
                {/* Contact Us Heading */}
                <div className="mb-8 md:mb-4 mt-16 md:mt-36">
                    <h1 className="text-white font-pethra text-4xl md:text-[54px] leading-tight text-center underline decoration-2 underline-offset-8">
                        Contact Us
                    </h1>
                </div>

                {/* Two Main Sections with Line Between */}
                <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 flex-1 px-4">
                    {/* Left Section - Send Message */}
                    <div className="w-full md:w-[1000px] h-auto md:h-[500px] bg-black/40 backdrop-blur-[10px] border border-white/20 rounded-2xl shadow-lg flex flex-col items-center p-6 md:px-8 md:py-12">
                        {/* Name and Email Row */}
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 mb-8 md:mb-14 w-full">
                            {/* Full Name Input */}
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleInputChange}
                                placeholder="Enter full name"
                                className="w-full md:w-[450px] h-[40px] bg-black/30 backdrop-blur-[8px] border border-white/20 rounded-xl px-4 text-white font-afacad font-normal text-[16px] placeholder-white/70"
                                style={{fontFamily: 'Afacad, sans-serif'}}
                            />

                            {/* Email Input */}
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Email address"
                                className="w-full md:w-[450px] h-[40px] bg-black/30 backdrop-blur-[8px] border border-white/20 rounded-xl px-4 text-white font-afacad font-normal text-[16px] placeholder-white/70"
                                style={{fontFamily: 'Afacad, sans-serif'}}
                            />
                        </div>

                        {/* Subject Box */}
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            placeholder="Subject"
                            className="w-full md:w-[935px] h-[40px] bg-black/30 backdrop-blur-[8px] border border-white/20 rounded-xl px-4 text-white font-afacad font-normal text-[16px] placeholder-white/70 mb-8 md:mb-14"
                            style={{fontFamily: 'Afacad, sans-serif'}}
                        />

                        {/* Message Box */}
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Message"
                            rows="3"
                            className="w-full md:w-[935px] h-[120px] md:h-[90px] bg-black/30 backdrop-blur-[8px] border border-white/20 rounded-xl px-4 py-3 text-white font-afacad font-normal text-[16px] placeholder-white/70 mb-8 md:mb-14 resize-none"
                            style={{fontFamily: 'Afacad, sans-serif'}}
                        ></textarea>

                        {/* Submit Button */}
                        <button
                            onClick={handleSubmit}
                            className="w-[250px] h-[40px] bg-white/20 backdrop-blur-[8px] border border-white/30 rounded-[25px] flex items-center justify-center cursor-pointer hover:bg-white/30 transition-all duration-300"
                        >
                            <span className="text-white font-afacad font-semibold text-[16px]" style={{fontFamily: 'Afacad, sans-serif'}}>
                                Submit
                            </span>
                        </button>
                    </div>

                    {/* Horizontal Line - Visible only on mobile */}
                    <div className="w-full h-[3px] bg-white/40 my-8 md:hidden"></div>

                    {/* Vertical Line Between Sections - Visible only on desktop */}
                    <div className="hidden md:flex items-center justify-center">
                        <div className="w-0.5 h-[445px] bg-white/40"></div>
                    </div>

                    {/* Right Section - Get in Touch */}
                    <div className="w-full md:w-[380px] h-auto md:h-[500px] bg-black/40 backdrop-blur-[10px] border border-white/20 rounded-2xl shadow-lg flex flex-col p-6 md:px-8 md:py-8">
                        {/* Get in Touch Heading */}
                        <div className="mb-6">
                            <h2 className="text-white underline underline-offset-4 decoration-1 font-afacad font-bold text-[27px] flex justify-center  leading-tight" style={{fontFamily: 'Afacad, sans-serif'}}>
                                Get in Touch
                            </h2>
                        </div>

                        {/* Location Info */}
                        <div className="flex items-start gap-4 mb-4 w-full">
                            {/* Logo */}
                            <div className="w-[40px] h-[40px] bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg className="w-[24px] h-[24px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                </svg>
                            </div>

                            {/* Text Content */}
                            <div className="flex-1">
                                <h3 className="text-white font-afacad font-semibold text-[18px] mb-2" style={{fontFamily: 'Afacad, sans-serif'}}>
                                    Our Location
                                </h3>
                                <p className="text-white font-afacad font-normal text-[16px] leading-relaxed" style={{fontFamily: 'Afacad, sans-serif'}}>
                                    123 Randell's harvest, Abc, Abc, Abc
                                </p>
                            </div>
                        </div>

                        {/* Phone Info */}
                        <div className="flex items-start gap-4 mb-4 w-full">
                            {/* Logo */}
                            <div className="w-[40px] h-[40px] bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg className="w-[24px] h-[24px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                </svg>
                            </div>

                            {/* Text Content */}
                            <div className="flex-1">
                                <h3 className="text-white font-afacad font-semibold text-[18px] mb-2" style={{fontFamily: 'Afacad, sans-serif'}}>
                                    Phone Number
                                </h3>
                                <p className="text-white font-afacad font-normal text-[16px] leading-relaxed" style={{fontFamily: 'Afacad, sans-serif'}}>
                                    +91 12345 6789
                                </p>
                            </div>
                        </div>

                        {/* Email Info */}
                        <div className="flex items-start gap-4 mb-6 w-full">
                            {/* Logo */}
                            <div className="w-[40px] h-[40px] bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg className="w-[24px] h-[24px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                </svg>
                            </div>

                            {/* Text Content */}
                            <div className="flex-1">
                                <h3 className="text-white font-afacad font-semibold text-[18px] mb-2" style={{fontFamily: 'Afacad, sans-serif'}}>
                                    Email Address
                                </h3>
                                <p className="text-white font-afacad font-normal text-[16px] leading-relaxed" style={{fontFamily: 'Afacad, sans-serif'}}>
                                    randellsharvest@gmail.com
                                </p>
                            </div>
                        </div>

                        <div className="w-full max-w-[300px] h-[125px] rounded-[10px] shadow-lg overflow-hidden mt-4 mx-auto">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.12345!2d77.5945669!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjgiTiA3N8KwMzUnNDEuMyJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Our Location"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative mt-16 md:mt-6 md:top-[75px]">
                <Bottom />
            </div>

        </div>
    )
}

export default Contact
