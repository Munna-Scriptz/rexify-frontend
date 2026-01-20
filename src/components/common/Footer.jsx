import React from 'react';
import logo from '../../assets/Logo.png'
import { Link } from 'react-router';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="pt-20 pb-10 border-t border-gray-200 relative overflow-hidden">
            <div className="container">
                <div className="flex justify-between">
                    {/* Support Column */}
                    <div>
                        <h4 className="mb-4 text-lg font-semibold text-text-primary">Support</h4>
                        <ul className="list-none p-0 text-sm leading-7">
                            <li><Link to={'/'} className="text-gray-800 no-underline hover:text-gray-600 transition-colors">Help Center</Link></li>
                            <li><Link to={'/'} className="text-gray-800 no-underline hover:text-gray-600 transition-colors">Shipping</Link></li>
                            <li><Link to={'/'} className="text-gray-800 no-underline hover:text-gray-600 transition-colors">Returns</Link></li>
                            <li><Link to={'/'} className="text-gray-800 no-underline hover:text-gray-600 transition-colors">Report Fraud</Link></li>
                            <li><Link to={'/'} className="text-gray-800 no-underline hover:text-gray-600 transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* About Column */}
                    <div>
                        <h4 className="mb-4 text-lg font-semibold text-text-primary">About</h4>
                        <ul className="list-none p-0 text-sm leading-7">
                            <li><Link to={'/'} className="text-gray-800 no-underline hover:text-gray-600 transition-colors">About Us</Link></li>
                            <li><Link to={'/'} className="text-gray-800 no-underline hover:text-gray-600 transition-colors">Sustainability</Link></li>
                            <li><Link to={'/'} className="text-gray-800 no-underline hover:text-gray-600 transition-colors">Our Materials</Link></li>
                            <li><Link to={'/'} className="text-gray-800 no-underline hover:text-gray-600 transition-colors">Careers</Link></li>
                        </ul>
                    </div>

                    {/* Sales Column */}
                    <div>
                        <h4 className="mb-4 text-lg font-semibold text-text-primary">Sales</h4>
                        <ul className="list-none p-0 text-sm leading-7">
                            <li><Link to={'/'} className="text-gray-800 no-underline hover:text-gray-600 transition-colors">Press & Affiliates</Link></li>
                            <li><Link to={'/'} className="text-gray-800 no-underline hover:text-gray-600 transition-colors">Where We're Sold</Link></li>
                            <li><Link to={'/'} className="text-gray-800 no-underline hover:text-gray-600 transition-colors">Wholesale</Link></li>
                            <li><Link to={'/'} className="text-gray-800 no-underline hover:text-gray-600 transition-colors">Discounted Gear</Link></li>
                        </ul>
                    </div>

                    {/* Explore Column */}
                    <div>
                        <h4 className="mb-4 text-lg font-semibold text-text-primary">Explore</h4>
                        <ul className="list-none p-0 text-sm leading-7">
                            <li><Link to={'/'} className="text-gray-800 no-underline hover:text-gray-600 transition-colors">Become an Ambassador</Link></li>
                            <li><Link to={'/'} className="text-gray-800 no-underline hover:text-gray-600 transition-colors">The Rexify Blog</Link></li>
                            <li><Link to={'/'} className="text-gray-800 no-underline hover:text-gray-600 transition-colors">Wallpapers</Link></li>
                            <li><Link to={'/'} className="text-gray-800 no-underline hover:text-gray-600 transition-colors">Limited Editions</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter Signup */}
                    <div className="md:col-span-1 md:justify-self-end max-w-md">
                        <h4 className="mb-2 text-lg font-semibold text-text-primary">Explore with us!</h4>
                        <p className="text-sm mb-4">Sign up to receive exclusive access to product drops, company news, and more.</p>
                        <form className="flex items-center">
                            <input
                                type="email"
                                placeholder="Email"
                                className="p-2.5 border border-gray-300 rounded-l-md flex-1 text-sm focus:outline-none focus:border-gray-500"
                            />
                            <button
                                type="submit"
                                className="p-2.5 bg-gray-800 text-white border-none rounded-r-md cursor-pointer text-sm hover:bg-gray-700 transition-colors"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>

                <div className="mt-8 flex justify-between items-center flex-wrap gap-5">
                    {/* Logo */}
                    <Link to={'/'}><img src={logo} className='invert w-40' alt="Rexify logo" /></Link>

                    {/* ----- Middle  */}
                    <div className="mt-5 text-center text-sm text-gray-600">
                        Developed by <Link to={'https://munna-scriptz.vercel.app/'} target='_blank' className='underline underline-offset-3'>Munna-Scriptz</Link> 
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-4 text-text-primary text-xl">
                        <Link to={'/'} className="hover:text-accent duration-300"><FaInstagram /></Link>
                        <Link to={'/'} className="hover:text-accent duration-300"><FaFacebookF /></Link>
                        <Link to={'/'} className="hover:text-accent duration-300"><FaTwitter /></Link>
                        <Link to={'/'} className="hover:text-accent duration-300"><FaYoutube /></Link>
                        <Link to={'/'} className="hover:text-accent duration-300"><FaLinkedinIn /></Link>
                    </div>

                </div>

                <div className="mt-5 text-center text-xs text-gray-500">
                    © 2026 Rexify Goods, Inc. All rights reserved.
                </div>

                <div className="mt-2.5 flex justify-center gap-4 text-xs flex-wrap text-gray-500">
                    <select className="border-none bg-transparent cursor-pointer">
                        <option>$ USD 🇺🇸</option>
                    </select>
                    <Link to={'/'} className="text-gray-500 no-underline hover:text-gray-700">Manage Cookies</Link>
                    <Link to={'/'} className="text-gray-500 no-underline hover:text-gray-700">Privacy</Link>
                    <Link to={'/'} className="text-gray-500 no-underline hover:text-gray-700">Terms</Link>
                    <Link to={'/'} className="text-gray-500 no-underline hover:text-gray-700">Payment</Link>
                    <Link to={'/'} className="text-gray-500 no-underline hover:text-gray-700">Accessibility</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;