import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa'; // Optional: npm install react-icons

const Footer = () => {
    return (
        <footer className="bg-[#0B1221] text-white pt-20 pb-10 px-6 md:px-20">
            <div className="max-w-7xl mx-auto">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16">
                    
                    {/* Brand Section */}
                    <div className="md:col-span-4">
                        <h2 className="text-3xl font-bold mb-6">DigiTools</h2>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Premium digital tools for creators, professionals, and businesses. 
                            Work smarter with our suite of powerful tools.
                        </p>
                    </div>

                    {/* Links Sections */}
                    <div className="md:col-span-2">
                        <h3 className="font-semibold mb-6">Product</h3>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li className="hover:text-white cursor-pointer transition">Features</li>
                            <li className="hover:text-white cursor-pointer transition">Pricing</li>
                            <li className="hover:text-white cursor-pointer transition">Templates</li>
                            <li className="hover:text-white cursor-pointer transition">Integrations</li>
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h3 className="font-semibold mb-6">Company</h3>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li className="hover:text-white cursor-pointer transition">About</li>
                            <li className="hover:text-white cursor-pointer transition">Blog</li>
                            <li className="hover:text-white cursor-pointer transition">Careers</li>
                            <li className="hover:text-white cursor-pointer transition">Press</li>
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h3 className="font-semibold mb-6">Resources</h3>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li className="hover:text-white cursor-pointer transition">Documentation</li>
                            <li className="hover:text-white cursor-pointer transition">Help Center</li>
                            <li className="hover:text-white cursor-pointer transition">Community</li>
                            <li className="hover:text-white cursor-pointer transition">Contact</li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div className="md:col-span-2">
                        <h3 className="font-semibold mb-6">Social Links</h3>
                        <div className="flex gap-4">
                            <div className=" p-2 w-fit bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 cursor-pointer transition">
                                <FaInstagram size={20} />
                            </div>
                            <div className=" p-2 w-fit bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 cursor-pointer transition">
                                <FaFacebookF size={20} />
                            </div>
                            <div className=" p-2 w-fit bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 cursor-pointer transition">
                                <span className="font-bold text-lg italic">X</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
                    <p>© 2026 Digitools. All rights reserved.</p>
                    <div className="flex gap-8">
                        <span className="hover:text-white cursor-pointer transition">Privacy Policy</span>
                        <span className="hover:text-white cursor-pointer transition">Terms of Service</span>
                        <span className="hover:text-white cursor-pointer transition">Cookies</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;