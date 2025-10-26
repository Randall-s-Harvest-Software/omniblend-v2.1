import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useProducts } from '../context/ProductContext'

const Admin = () => {
    const navigate = useNavigate();
    const { products, addProduct, updateProduct, deleteProduct } = useProducts();
    const [activeSection, setActiveSection] = useState('dashboard');
    const [showAddModal, setShowAddModal] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [newProduct, setNewProduct] = useState({
        name: '',
        price: '',
        category: '',
        description: '',
        tagline: '',
        image: '',
        status: 'active'
    });

    // Check if admin is logged in
    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isAdminLoggedIn');
        if (!isLoggedIn) {
            navigate('/login');
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('isAdminLoggedIn');
        navigate('/');
    };

    const handleAddProduct = (e) => {
        e.preventDefault();
        if (editingProduct) {
            // Update existing product
            updateProduct(editingProduct.id, newProduct);
            setEditingProduct(null);
        } else {
            // Add new product
            addProduct(newProduct);
        }

        // Reset form
        setNewProduct({ name: '', price: '', category: '', description: '', tagline: '', image: '', status: 'active' });
        setShowAddModal(false);
    };

    const handleEditProduct = (product) => {
        setEditingProduct(product);
        setNewProduct({
            name: product.name,
            price: product.price.toString(),
            category: product.category,
            description: product.description,
            tagline: product.tagline,
            image: product.image,
            status: product.status
        });
        setShowAddModal(true);
    };

    const handleDeleteProduct = (productId) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            deleteProduct(productId);
        }
    };

    const Dashboard = () => (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-6">Dashboard Overview</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <div className="bg-black/40 backdrop-blur-md border border-white/20 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-white mb-2">Total Users</h3>
                    <p className="text-3xl font-bold text-[#4C9B1D]">1,247</p>
                    <p className="text-gray-400 text-sm">+12% from last month</p>
                </div>
                <div className="bg-black/40 backdrop-blur-md border border-white/20 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-white mb-2">Total Orders</h3>
                    <p className="text-3xl font-bold text-[#4C9B1D]">856</p>
                    <p className="text-gray-400 text-sm">+8% from last month</p>
                </div>
                <div className="bg-black/40 backdrop-blur-md border border-white/20 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-white mb-2">Revenue</h3>
                    <p className="text-3xl font-bold text-[#4C9B1D]">₹45,231</p>
                    <p className="text-gray-400 text-sm">+15% from last month</p>
                </div>
                <div className="bg-black/40 backdrop-blur-md border border-white/20 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-white mb-2">Products</h3>
                    <p className="text-3xl font-bold text-[#4C9B1D]">{products.length}</p>
                    <p className="text-gray-400 text-sm">{products.filter(p => p.status === 'active').length} active</p>
                </div>
            </div>
        </div>
    );

    const Products = () => (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h2 className="text-xl sm:text-2xl font-bold text-white">Product Management</h2>
                <button
                    onClick={() => {
                        setEditingProduct(null);
                        setNewProduct({ name: '', price: '', category: '', description: '', tagline: '', image: '', status: 'active' });
                        setShowAddModal(true);
                    }}
                    className="w-full sm:w-auto bg-[#4C9B1D] text-white px-4 py-2 rounded-md hover:bg-[#3A7B1A] transition text-sm sm:text-base"
                >
                    Add New Product
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.map((product) => (
                    <div key={product.id} className="bg-black/30 rounded-lg p-4 border border-white/10">
                        <div className="flex justify-between items-start mb-3">
                            <div>
                                <h4 className="text-white font-semibold text-lg">{product.name}</h4>
                                <p className="text-gray-400 text-sm">{product.category}</p>
                            </div>
                            <span className={`px-2 py-1 rounded text-xs ${product.status === 'active' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                                {product.status}
                            </span>
                        </div>

                        <p className="text-gray-300 text-sm mb-3">{product.description}</p>

                        <div className="flex justify-between items-center mb-3">
                            <p className="text-white font-semibold">₹{product.price.toFixed(2)}</p>
                            <div className="space-x-2">
                                <button
                                    onClick={() => handleEditProduct(product)}
                                    className="text-[#4C9B1D] hover:text-[#3A7B1A] text-sm px-2 py-1 rounded transition"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDeleteProduct(product.id)}
                                    className="text-red-400 hover:text-red-300 text-sm px-2 py-1 rounded transition"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Add/Edit Product Modal */}
            {showAddModal && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
                    <div className="bg-black/90 rounded-xl p-4 sm:p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
                        <h3 className="text-xl font-bold text-white mb-4">
                            {editingProduct ? 'Edit Product' : 'Add New Product'}
                        </h3>

                        <form onSubmit={handleAddProduct} className="space-y-4">
                            <div>
                                <label className="block text-white text-sm font-semibold mb-1">Product Name</label>
                                <input
                                    type="text"
                                    value={newProduct.name}
                                    onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                                    className="w-full bg-white/10 border border-white/20 rounded-md px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-[#4C9B1D]"
                                    placeholder="Enter product name"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-white text-sm font-semibold mb-1">Tagline</label>
                                <input
                                    type="text"
                                    value={newProduct.tagline}
                                    onChange={(e) => setNewProduct({...newProduct, tagline: e.target.value})}
                                    className="w-full bg-white/10 border border-white/20 rounded-md px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-[#4C9B1D]"
                                    placeholder="Enter catchy tagline"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-white text-sm font-semibold mb-1">Price (₹)</label>
                                <input
                                    type="number"
                                    step="0.01"
                                    value={newProduct.price}
                                    onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                                    className="w-full bg-white/10 border border-white/20 rounded-md px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-[#4C9B1D]"
                                    placeholder="Enter price"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-white text-sm font-semibold mb-1">Category</label>
                                <select
                                    value={newProduct.category}
                                    onChange={(e) => setNewProduct({...newProduct, category: e.target.value})}
                                    className="w-full bg-white/10 border border-white/20 rounded-md px-3 py-2 text-white focus:outline-none focus:border-[#4C9B1D]"
                                    required
                                >
                                    <option value="">Select category</option>
                                    <option value="Signature Spices">Signature Spices</option>
                                    <option value="Gentle Seasonings">Gentle Seasonings</option>
                                    <option value="Bold Spices">Bold Spices</option>
                                    <option value="Premium Spices">Premium Spices</option>
                                    <option value="Herbal Blends">Herbal Blends</option>
                                    <option value="Exotic Spices">Exotic Spices</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-white text-sm font-semibold mb-1">Image Path</label>
                                <input
                                    type="text"
                                    value={newProduct.image}
                                    onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
                                    className="w-full bg-white/10 border border-white/20 rounded-md px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-[#4C9B1D]"
                                    placeholder="Enter image path (e.g., /product.jpg) or leave blank for default"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-white text-sm font-semibold mb-1">Description</label>
                                <textarea
                                    value={newProduct.description}
                                    onChange={(e) => setNewProduct({...newProduct, description: e.target.value})}
                                    className="w-full bg-white/10 border border-white/20 rounded-md px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-[#4C9B1D]"
                                    placeholder="Enter product description"
                                    rows="4"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-white text-sm font-semibold mb-1">Status</label>
                                <select
                                    value={newProduct.status}
                                    onChange={(e) => setNewProduct({...newProduct, status: e.target.value})}
                                    className="w-full bg-white/10 border border-white/20 rounded-md px-3 py-2 text-white focus:outline-none focus:border-[#4C9B1D]"
                                >
                                    <option value="active">Active</option>
                                    <option value="inactive">Inactive</option>
                                </select>
                            </div>

                            <div className="flex flex-col sm:flex-row justify-end gap-3 mt-6">
                                <button
                                    type="button"
                                    onClick={() => setShowAddModal(false)}
                                    className="px-4 py-2 text-sm text-gray-300 hover:text-white border border-gray-600 rounded-md"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-[#4C9B1D] text-white rounded-md hover:bg-[#3A7B1A] transition text-sm sm:text-base"
                                >
                                    {editingProduct ? 'Update' : 'Add'} Product
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );

    const Users = () => (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-6">User Management</h2>
            <div className="bg-black/40 backdrop-blur-md border border-white/20 rounded-xl p-6">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-white">Registered Users</h3>
                    <button className="bg-[#4C9B1D] text-white px-4 py-2 rounded-md hover:bg-[#3A7B1A] transition">
                        Add New User
                    </button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-white">
                        <thead>
                            <tr className="border-b border-gray-600">
                                <th className="text-left py-2">ID</th>
                                <th className="text-left py-2">Name</th>
                                <th className="text-left py-2">Email</th>
                                <th className="text-left py-2">Status</th>
                                <th className="text-left py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-gray-700">
                                <td className="py-2">1</td>
                                <td className="py-2">John Doe</td>
                                <td className="py-2">john@example.com</td>
                                <td className="py-2"><span className="bg-green-500 text-white px-2 py-1 rounded text-sm">Active</span></td>
                                <td className="py-2">
                                    <button className="text-[#4C9B1D] hover:text-[#3A7B1A] mr-2">Edit</button>
                                    <button className="text-red-400 hover:text-red-300">Delete</button>
                                </td>
                            </tr>
                            <tr className="border-b border-gray-700">
                                <td className="py-2">2</td>
                                <td className="py-2">Jane Smith</td>
                                <td className="py-2">jane@example.com</td>
                                <td className="py-2"><span className="bg-green-500 text-white px-2 py-1 rounded text-sm">Active</span></td>
                                <td className="py-2">
                                    <button className="text-[#4C9B1D] hover:text-[#3A7B1A] mr-2">Edit</button>
                                    <button className="text-red-400 hover:text-red-300">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );

    const Orders = () => (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-6">Order Management</h2>
            <div className="bg-black/40 backdrop-blur-md border border-white/20 rounded-xl p-6">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-white">Recent Orders</h3>
                    <button className="bg-[#4C9B1D] text-white px-4 py-2 rounded-md hover:bg-[#3A7B1A] transition">
                        View All Orders
                    </button>
                </div>
                <div className="space-y-3">
                    <div className="bg-black/30 rounded-lg p-4 flex justify-between items-center">
                        <div>
                            <h4 className="text-white font-semibold">Order #001</h4>
                            <p className="text-gray-400 text-sm">John Doe - 2 items</p>
                        </div>
                        <div className="text-right">
                            <p className="text-white font-semibold">₹358.00</p>
                            <span className="bg-green-500 text-white px-2 py-1 rounded text-sm">Delivered</span>
                        </div>
                    </div>
                    <div className="bg-black/30 rounded-lg p-4 flex justify-between items-center">
                        <div>
                            <h4 className="text-white font-semibold">Order #002</h4>
                            <p className="text-gray-400 text-sm">Jane Smith - 1 item</p>
                        </div>
                        <div className="text-right">
                            <p className="text-white font-semibold">₹179.00</p>
                            <span className="bg-yellow-500 text-white px-2 py-1 rounded text-sm">Processing</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderContent = () => {
        switch (activeSection) {
            case 'dashboard':
                return <Dashboard />;
            case 'users':
                return <Users />;
            case 'products':
                return <Products />;
            case 'orders':
                return <Orders />;
            default:
                return <Dashboard />;
        }
    };

    return (
        <div className="min-h-screen bg-black relative" style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9))'}}>
            {/* Mobile Header */}
            <div className="lg:hidden fixed top-0 left-0 right-0 bg-black/90 border-b border-white/10 p-4 z-20 flex justify-between items-center">
                <button 
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="text-white p-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                <h1 className="text-xl font-bold text-white">Admin Panel</h1>
                <div className="w-6"></div> {/* Spacer for alignment */}
            </div>

            {/* Mobile Sidebar Overlay */}
            {sidebarOpen && (
                <div 
                    className="fixed inset-0 bg-black/80 z-30 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                ></div>
            )}

            {/* Sidebar */}
            <div className={`fixed left-0 top-0 h-full w-64 bg-black/90 border-r border-white/10 p-6 z-40 transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:block`}>
                <h1 className="text-2xl font-bold text-white mb-10">Admin Panel</h1>
                <nav className="space-y-2">
                    <button
                        onClick={() => {
                            setActiveSection('dashboard');
                            setSidebarOpen(false);
                        }}
                        className={`w-full text-left px-4 py-3 rounded-lg transition ${activeSection === 'dashboard' ? 'bg-[#4C9B1D] text-white' : 'text-gray-300 hover:bg-white/5'}`}
                    >
                        Dashboard
                    </button>
                    <button
                        onClick={() => {
                            setActiveSection('products');
                            setSidebarOpen(false);
                        }}
                        className={`w-full text-left px-4 py-3 rounded-lg transition ${activeSection === 'products' ? 'bg-[#4C9B1D] text-white' : 'text-gray-300 hover:bg-white/5'}`}
                    >
                        Products
                    </button>
                    <button
                        onClick={() => {
                            setActiveSection('orders');
                            setSidebarOpen(false);
                        }}
                        className={`w-full text-left px-4 py-3 rounded-lg transition ${activeSection === 'orders' ? 'bg-[#4C9B1D] text-white' : 'text-gray-300 hover:bg-white/5'}`}
                    >
                        Orders
                    </button>
                    <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-3 rounded-lg text-red-400 hover:bg-red-500/10 transition mt-6"
                    >
                        Logout
                    </button>
                </nav>
            </div>

            {/* Main Content */}
            <div className="pt-32 px-8 pb-8 lg:pl-64">
                <div className="max-w-7xl mx-auto">
                    {/* Admin Header */}
                    <div className="hidden lg:flex justify-between items-center mb-8">
                        <h1 className="text-3xl font-bold text-white">Admin Panel</h1>
                        <button
                            onClick={handleLogout}
                            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
                        >
                            Logout
                        </button>
                    </div>

                    <div className="flex gap-8">
                        {/* Main Content */}
                        <div className="flex-1">
                            {renderContent()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admin
