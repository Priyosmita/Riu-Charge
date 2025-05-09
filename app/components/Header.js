'use client'
import React, { useEffect, useState, useRef } from 'react';

const Header = () => {
    const [showHeader, setShowHeader] = useState(true);
    const lastScrollY = useRef(0);
    const timeoutRef = useRef(null);

    // Scroll and inactivity detection
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Clear any pending timeout
            clearTimeout(timeoutRef.current);

            if (currentScrollY > lastScrollY.current) {
                // scrolling down
                setShowHeader(false);
            } else {
                // scrolling up
                setShowHeader(true);
            }

            // Save scroll position
            lastScrollY.current = currentScrollY;

            // After 5 seconds of inactivity, show header again
            timeoutRef.current = setTimeout(() => {
                setShowHeader(true);
            }, 5000);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(timeoutRef.current);
        };
    }, []);

    return (
        <div
            className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 ease-in-out 
        ${showHeader ? 'translate-y-0' : '-translate-y-full'}
        bg-[#ebf2fbc3] shadow-md`}
        >
            <div className='flex flex-row justify-center gap-x-52 h-20 items-center'>
                <div className='bg-[#d10f0f] text-white font-bold px-4 py-2 rounded cursor-pointer'>
                    Riu Charge
                </div>

                <div className='flex flex-row text-black gap-14 text-md'>
                    <span className='hover:text-[#d10f0f] hover:scale-110 transform duration-300 cursor-pointer'>Home</span>
                    <span className='hover:text-[#d10f0f] hover:scale-110 transform duration-300 cursor-pointer'>Mobile Recharge</span>
                    <span className='hover:text-[#d10f0f] hover:scale-110 transform duration-300 cursor-pointer'>DTH Recharge</span>
                    <span className='hover:text-[#d10f0f] hover:scale-110 transform duration-300 cursor-pointer'>Bill Payments</span>
                    <span className='hover:text-[#d10f0f] hover:scale-110 transform duration-300 cursor-pointer'>Big Sale Deals</span>
                </div>

                <button className='text-black outline-2 outline-[#d10f0f] rounded-3xl pt-2 pb-2 pl-6 pr-6 hover:scale-110 transform duration-300 hover:bg-[#d10f0f] hover:text-white font-bold cursor-pointer'>
                    Login
                </button>
            </div>
        </div>
    );
};

export default Header;
