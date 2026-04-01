import React from 'react';
const NavBar = (cartCount) => {
    const count = cartCount.add2Cart;
    return (
        <div className='sticky top-0 z-10 '>
            <div className="navbar shadow-sm w-full bg-white/70 backdrop-blur-md">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a href="">Products</a></li>
                            <li><a href="">Features</a></li>
                            <li><a href="">Pricing</a></li>
                            <li><a href="">Testimonials</a></li>
                            <li><a href="">FAQ</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-2xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-black">DigiTools</a>
                </div>
                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a href="">Products</a></li>
                        <li><a href="">Features</a></li>
                        <li><a href="">Pricing</a></li>
                        <li><a href="">Testimonials</a></li>
                        <li><a href="">FAQ</a></li>
                    </ul>
                </div>
                <div className="navbar-end flex gap-4">
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
                        {count > 0 && (
                            <span className="badge badge-sm indicator-item bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full">{count}</span>
                        )}
                    </div>
                    <a className='cursor-pointer text-[15px] text-neutral/80'>Login</a>
                    <a className="btn rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">Get Started</a>
                </div>
            </div>

        </div>
    );
};

export default NavBar;