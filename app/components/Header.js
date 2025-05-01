import React from 'react'
import { GrDown } from "react-icons/gr";

const Header = () => {
    return (
        <>
            <div className='flex flex-row justify-center gap-x-52 h-20 items-center bg-[#EBF2FB]'>
                <div className='bg-[#F16122] cursor-pointer'>Riu Charge</div>

                <div className='flex flex-row text-black gap-14 text-md'>
                    <span className='hover:text-[#F16122] transform duration-300 cursor-pointer'>Home</span>

                    <span className='cursor-pointer relative group'>
                        <span className='flex flex-row gap-2 hover:text-[#F16122] transform duration-300'>Consumer Payments <GrDown className='pt-1 text-xl' /></span>
                        {/* Dropdown box */}
                        <div className="absolute top-8 group-hover:block bg-white shadow-xl p-4 rounded-xl z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-500">
                            options
                        </div>
                    </span>

                    <span className='hover:text-[#F16122] transform duration-300 cursor-pointer'>Credit Score</span>

                    <span className='cursor-pointer relative group'>
                        <span className='flex flex-row gap-2 hover:text-[#F16122] transform duration-300'>Business <GrDown className='pt-1 text-xl' /></span>
                        {/* Dropdown box */}
                        <div className="absolute top-8 group-hover:block bg-white shadow-xl p-4 rounded-xl z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-500">
                            options
                        </div>
                    </span>

                    <span className='hover:text-[#F16122] transform duration-300 cursor-pointer'>About</span>

                    <span className='hover:text-[#F16122] transform duration-300 cursor-pointer'>Career</span>
                </div>

                <button className='bg-[#F16122] rounded-3xl pt-2 pb-2 pl-6 pr-6 font-bold cursor-pointer'>Login</button>
            </div>
        </>
    )
}

export default Header