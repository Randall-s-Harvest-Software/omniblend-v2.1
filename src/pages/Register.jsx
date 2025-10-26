import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Bottom from "../components/Bottom.jsx";

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        password: '',
        confirmPassword: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle registration logic here
        console.log('Registration attempt:', formData);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <div className="min-h-screen bg-black relative" style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(/Loginbg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
            {/* Navbar positioned 60px from top and centered */}
            <Navbar />

            {/* Main Register Section */}
            <section className="flex justify-center items-center py-24 lg:py-40">
                <div className="w-full max-w-[1500px] flex flex-col lg:flex-row gap-24">
                    {/* Left Section - Information */}
                    <div className="w-full lg:w-[60%] bg-transparent animate-float-y rounded-xl shadow-lg flex flex-col items-center justify-center px-12 py-10 space-y-4 leading-[1.5rem]">
                        <h1 className="text-white text-4xl font-bold mb-2 font-andika">Let's get Started</h1>
                        <p className="relative w-[372px] text-center h-auto text-white font-andika text-[18px]">
                            Ready to join the flavor revolution? Create <br /> your account to unlock exclusive updates,<br /> delicious inspiration, and insider access<br /> to all things Randell's Harvest. It only<br /> takes a moment to register—and your next <br />kitchen masterpiece starts here.
                        </p>
                    </div>

                    {/* Right Section - Registration Form */}
                    <div className="lg:w-[1400px] w-[370px] h-auto bg-black/70 rounded-xl shadow-lg px-12 py-10 flex flex-col items-center leading-10 mx-auto lg:mx-0">
                        <h1 className="text-white text-3xl font-bold mb-2 font-andika">Join Us</h1>
                        <p className="text-gray-300 text-lg mb-7 font-andika text-center">Create your account and start your journey with us.</p>

                        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4 mb-6">
                            {/* Name Input */}
                            <input
                                placeholder="Your Name"
                                className="w-full font-andika border-b border-gray-500 bg-transparent text-white placeholder-gray-400 px-2 py-2 focus:outline-none"
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />

                            {/* Email Input */}
                            <input
                                placeholder="Your Email"
                                className="w-full font-andika border-b border-gray-500 bg-transparent text-white placeholder-gray-400 px-2 py-2 focus:outline-none"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />

                            {/* Mobile Number Input */}
                            <input
                                placeholder="Mobile Number"
                                className="w-full font-andika border-b border-gray-500 bg-transparent text-white placeholder-gray-400 px-2 py-2 focus:outline-none"
                                type="tel"
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleInputChange}
                                required
                            />

                            {/* Password Input */}
                            <div className="relative">
                                <input
                                    placeholder="Create a Password"
                                    className="w-full font-andika border-b border-gray-500 bg-transparent text-white placeholder-gray-400 px-2 py-2 focus:outline-none"
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    className="absolute font-andika right-2 top-2 text-gray-400 text-sm hover:text-white transition"
                                >
                                    {showPassword ? "Hide" : "Show"}
                                </button>
                            </div>

                            {/* Confirm Password Input */}
                            <div className="relative">
                                <input
                                    placeholder="Confirm Password"
                                    className="w-full font-andika border-b border-gray-500 bg-transparent text-white placeholder-gray-400 px-2 py-2 focus:outline-none"
                                    type={showConfirmPassword ? "text" : "password"}
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleInputChange}
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={toggleConfirmPasswordVisibility}
                                    className="absolute font-andika right-2 top-2 text-gray-400 text-sm hover:text-white transition"
                                >
                                    {showConfirmPassword ? "Hide" : "Show"}
                                </button>
                            </div>
                        </form>

                        {/* Register Button */}
                        <button
                            type="submit"
                            className="w-full font-andika bg-[#396021] text-white py-3 mt-8 rounded-md font-semibold hover:bg-[#265B06] transition mb-6"
                        >
                            Register
                        </button>

                        {/* Divider */}
                        <div className="flex items-center w-full mt-8 mb-6">
                            <div className="flex-1 h-px bg-gray-500"></div>
                            <p className="mx-3 text-gray-300">OR</p>
                            <div className="flex-1 h-px bg-gray-500"></div>
                        </div>

                        {/* Google Sign In Button */}
                        <button className="w-full flex items-center justify-center gap-3 bg-white text-gray-700 py-3 rounded-md font-semibold hover:bg-gray-100 transition mb-6">
                            <svg className="w-5 h-5" viewBox="0 0 533.5 544.3">
                                <path d="M533.5 278.4c0-17.2-1.5-34.1-4.5-50.4H272v95.5h146.9c-6.4 34.5-25.8 63.7-54.8 83.4v69.4h88.6c51.7-47.7 81.8-118 81.8-197.9z" fill="#4285F4"></path>
                                <path d="M272 544.3c73.2 0 134.7-24.3 179.6-66.2l-88.6-69.4c-24.5 16.4-55.8 26-91 26-69.9 0-129.2-47.1-150.3-110.1H29.2v69.1C74.2 486 167.2 544.3 272 544.3z" fill="#34A853"></path>
                                <path d="M121.7 326.8c-10.3-30.9-10.3-64.8 0-95.7v-69.1H29.2c-43.3 85.3-43.3 187.4 0 272.7l92.5-69.1z" fill="#FBBC05"></path>
                                <path d="M272 107.7c37.2-.6 72.8 13.5 100 39.7l74.9-74.9C406.7 28.3 344.2 0 272 0 167.2 0 74.2 58.3 29.2 145.5l92.5 69.1c21.1-63 80.4-110.1 150.3-110.1z" fill="#EA4335"></path>
                            </svg>
                            <span>Sign in with Google</span>
                        </button>

                        {/* Login Link */}
                        <p className="text-gray-300 font-andika text-sm text-center">
                            Already a member?{' '}
                            <Link
                                to="/login"
                                className="text-white font-andika font-semibold hover:underline"
                            >
                                Sign In
                            </Link>
                        </p>
                    </div>
                </div>
            </section>

            <Bottom />
        </div>
    )
}

export default Register
