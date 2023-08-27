import React, { useState } from 'react';

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };
    const IconButton = ({ iconPath, label }) => (
        <button
            type="button"
            className="ml-3 text-gray-300 hover:text-white focus:outline-none flex flex-col justify-center text-center items-center"
        >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d={iconPath} />
            </svg>
            <span>{label}</span>
        </button>
    );

    return (
        <nav className="bg-gray-800 h-[12vh] flex items-center justify-around w-full">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 relative flex h-16 items-center justify-end w-full">
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <IconButton iconPath="M12 6v6m0 0v6m0-6h6m-6 0H6" label="Add Object" />
                    <IconButton iconPath="M13 10V3L4 14h7v7l9-11h-7z" label="Adjust" />
                    <IconButton iconPath="M15 12a3 3 0 11-6 0 3 3 0 016 0z M21 22H3M16 2V8M8 2v6" label="Hotspots" />
                    <IconButton iconPath="M12 15c1.93 0 3.769-.7 5.177-1.98.41-.41.41-1.07 0-1.48C15.769 9.7 13.93 9 12 9c-1.93 0-3.769.7-5.177 1.98-.41.41-.41 1.07 0 1.48C8.231 14.3 10.07 15 12 15zm0 0l-2.582-3.526A2 2 0 0112 10a2 2 0 112.582 1.474L12 15zm-2 0h4" label="Preview" />
                </div>
            </div>

            <div className={`sm:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    <a href="#" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</a>
                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>
                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>
                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
