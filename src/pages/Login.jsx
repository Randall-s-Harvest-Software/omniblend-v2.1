import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Bottom from "../components/Bottom.jsx";

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Admin credentials
        const ADMIN_ID = 'omniblend';
        const ADMIN_EMAIL = 'omniblend@admin.com';
        const ADMIN_PASSWORD = '12345';

        if ((formData.email === ADMIN_ID || formData.email === ADMIN_EMAIL) && formData.password === ADMIN_PASSWORD) {
            // Admin login successful
            localStorage.setItem('isAdminLoggedIn', 'true');
            localStorage.setItem('adminId', formData.email);
            navigate('/admin');
        } else {
            // Regular user login logic (placeholder)
            console.log('Regular user login attempt:', formData);
            // For now, show a message - replace with actual authentication
            setError('User login functionality coming soon! Use admin credentials to test: omniblend or omniblend@admin.com / 12345');
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="min-h-screen bg-black relative" style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(/Loginbg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
            {/* Navbar positioned 60px from top and centered */}
            <Navbar />

            {/* Main Login Section */}
            <section className="flex justify-center items-center py-0 lg:py-44">
                <div className="w-[786px] h-[800px] bg-black/50 rounded-xl shadow-lg flex flex-col items-center justify-center px-12">
                    <h1 className="text-white font-andika text-3xl font-bold mb-6 animate-float-y">Welcome back</h1>
                    <p className="text-gray-300 text-lg font-andika mb-14 animate-float-y">Please enter your details</p>
                    <p className="text-gray-400 text-sm font-andika mb-4 text-center">Admin Access: omniblend@admin.com / 12345</p>

                    <form onSubmit={handleSubmit} className="w-full mt-10 lg:mt-0">
                        {error && (
                            <div className="w-full mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-md">
                                <p className="text-red-400 text-sm font-andika text-center">{error}</p>
                            </div>
                        )}
                        {/* Email/Number Input */}
                        <div className="w-full mb-6">
                            <label className="block font-andika text-white font-semibold mb-2">Email / Number</label>
                            <input
                                placeholder="Enter your Email/Number"
                                className="w-full border-b border-gray-500 bg-transparent text-white placeholder-gray-400 px-2 py-2 focus:outline-none"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        {/* Password Input */}
                        <div className="w-full mb-2 relative">
                            <label className="block font-andika text-white font-semibold mb-2">Password</label>
                            <input
                                placeholder="************"
                                className="w-full border-b border-gray-500 bg-transparent text-white placeholder-gray-400 px-2 py-2 focus:outline-none"
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                required
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute font-andika right-2 top-9 text-gray-400 hover:text-white transition"
                            >
                                {showPassword ? "Hide" : "Show"}
                            </button>
                        </div>

                        {/* Forgot Password */}
                        <div className="w-full flex justify-end mb-6">
                            <button type="button" className="text-gray-300 font-andika text-sm hover:underline">
                                Forgot your Password?
                            </button>
                        </div>

                        {/* Login Button */}
                        <button
                            type="submit"
                            className="w-full font-andika bg-[#396021] text-white py-3 rounded-md font-semibold hover:bg-[#265B06] transition mb-6"
                        >
                            Log In
                        </button>

                        {/* Divider */}
                        <div className="flex items-center w-full mb-6">
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

                        {/* Register Link */}
                        <p className="text-gray-300 font-andika text-sm text-center">
                            Don't have an Account?{' '}
                            <Link
                                to="/register"
                                className="text-white font-andika font-semibold hover:underline"
                            >
                                Register here
                            </Link>
                        </p>
                    </form>
                </div>
            </section>

            <Bottom />
        </div>
    )
}

export default Login
