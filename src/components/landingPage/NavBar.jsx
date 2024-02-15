import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { animateScroll } from 'react-scroll';
import logo from '../../assets/logo.svg';

const NavBar = () => {
    const [navbar, setNavbar] = useState(false);

    return (
        <nav className="w-screen top-0 left-0 z-50 mx-auto shadow">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <img src={logo} className="h-6" logo alt="logo" />
                        <div className="md:hidden">
                            <button className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border" onClick={() => setNavbar(!navbar)}>
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-white hover:text-secondaryColor">
                                <a href="#" className='text-white font-kumbh hover:text-secondaryColor'>Home</a>
                            </li>
                            <li className="text-white hover:text-indigo-200">
                                <Link to="features" scroll={true} duration={500} smooth={true} className='text-white font-karla hover:text-secondaryColor'>Features</Link>
                            </li>
                            <li className="text-white hover:text-indigo-200">
                                <a href="javascript:void(0)" className='text-white font-karla hover:text-secondaryColor'>How it works</a>
                            </li>
                            <li className="text-white hover:text-indigo-200">
                                <a href="javascript:void(0)" className='text-white font-karla hover:text-secondaryColor'>Sign up</a>
                            </li>
                            <li className="text-white hover:text-indigo-200">
                                <a href="javascript:void(0)" className='text-white font-karla hover:text-secondaryColor'>About us</a>
                            </li>
                            <li className="text-white hover:text-indigo-200">
                                <a href="javascript:void(0)" className='text-white font-karla hover:text-secondaryColor'>Others</a>
                            </li>
                        </ul>

                        <div className="mt-3 space-y-2 lg:hidden md:inline-block">
                    <a
                        href="javascript:void(0)"
                        className="inline-block w-full px-4 py-2 text-center text-white bg-secondaryColor rounded-full shadow hover:bg-secondaryHoverColor hover:text-white font-karla"
                    >
                        Login
                    </a>
                </div>
                    </div>
                </div>
                <div className="hidden space-x-2 md:inline-block">
                    <a
                        href="javascript:void(0)"
                        className="px-4 py-2 text-white bg-secondaryColor rounded-full shadow hover:bg-secondaryHoverColor hover:text-white font-karla"
                    >
                        Login
                    </a>

                </div>
            </div>
        </nav>
    );
}


export default NavBar;