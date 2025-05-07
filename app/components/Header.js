import React from 'react'

const Header = () => {
    return (
        <>
            <div className='flex flex-row justify-center gap-x-52 h-20 items-center bg-[#EBF2FB]'>
                <div className='bg-[#d10f0f] cursor-pointer'>Riu Charge</div>

                <div className='flex flex-row text-black gap-14 text-md'>
                    <span className='hover:text-[#d10f0f] hover:scale-110 transform duration-300 cursor-pointer'>Home</span> 

                    <span className='hover:text-[#d10f0f] hover:scale-110 transform duration-300 cursor-pointer'>Mobile Recharge</span> 

                    <span className='hover:text-[#d10f0f] hover:scale-110 transform duration-300 cursor-pointer'>DTH Recharge</span>              

                    <span className='hover:text-[#d10f0f] hover:scale-110 transform duration-300 cursor-pointer'>Bill Payments</span>

                    <span className='hover:text-[#d10f0f] hover:scale-110 transform duration-300 cursor-pointer'>Big Sale Deals</span>

                    <span className='hover:text-[#d10f0f] hover:scale-110 transform duration-300 cursor-pointer'>About</span>

                </div>

                <button className='bg-[#d10f0f] rounded-3xl pt-2 pb-2 pl-6 pr-6 hover:scale-110 transform duration-300 font-bold cursor-pointer'>Login</button>
            </div>
        </>
    )
}

export default Header