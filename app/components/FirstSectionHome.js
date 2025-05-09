import React from 'react'
import { FaMobileAlt, FaFileInvoiceDollar, FaTags } from "react-icons/fa";
import { FaTv } from "react-icons/fa6";

const FirstSectionHome = () => {
  return (
    <>
      <div className='flex relative'>
        <img
          src="/home pic.jpg"
          alt="smiling woman"
          className="h-auto w-full"
        />

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#000000] opacity-40 z-0"></div>

        <div className="absolute z-10 flex w-full justify-end pt-28 pr-52">
          <div className='grid grid-cols-2 gap-16'>
            {/* 4 equal-sized blocks */}

            <div className='p-6 border-2 border-[#d1cfcf] text-center w-64 h-64 rounded-2xl flex flex-col items-center space-y-3 bg-[#ffffff3d] hover:scale-105 transform duration-300 hover:shadow-2xl hover:border-[#b81818]'>
              <FaMobileAlt className='text-[#b81818] text-5xl' />
              <p className='font-semibold text-xl text-[#b81818]'>Mobile Recharge</p>
              <p className='text-[#424141]'>Instant mobile recharges with top providers</p>
              <button className='text-white outline-2 outline-[#b81818] rounded-3xl pt-2 pb-2 pr-3 pl-3 hover:scale-110 transform duration-300 hover:bg-[#b81818] hover:text-white cursor-pointer'>Recharge Now</button>
            </div>

            <div className='p-6 border-2 border-[#d1cfcf] text-center w-64 h-64 rounded-2xl flex flex-col items-center space-y-3 bg-[#ffffff3d] hover:scale-105 transform duration-300 hover:shadow-2xl hover:border-[#b81818]'>
              <FaTv className='text-[#b81818] text-5xl' />
              <p className='font-semibold text-xl text-[#b81818]'>DTH Recharge</p>
              <p className='text-[#424141]'>Top-up your favorite DTH services hassle-free</p>
              <button className='text-white outline-2 outline-[#b81818] rounded-3xl pt-2 pb-2 pr-3 pl-3 hover:scale-110 transform duration-300 hover:bg-[#b81818] hover:text-white cursor-pointer'>Recharge Now</button>
            </div>

            <div className='p-6 border-2 border-[#d1cfcf] text-center w-64 h-64 rounded-2xl flex flex-col items-center space-y-3 bg-[#ffffff3d] hover:scale-105 transform duration-300 hover:shadow-2xl hover:border-[#b81818]'>
              <FaFileInvoiceDollar className='text-[#b81818] text-5xl' />
              <p className='font-semibold text-xl text-[#b81818]'>Bill Payments</p>
              <p className='text-[#424141]'>Quick and secure utility bill payments</p>
              <button className='text-white outline-2 outline-[#b81818] rounded-3xl pt-2 pb-2 pr-3 pl-3 hover:scale-110 transform duration-300 hover:bg-[#b81818] hover:text-white cursor-pointer'>Pay Now</button>
            </div>

            <div className='p-6 border-2 border-[#d1cfcf] text-center w-64 h-64 rounded-2xl flex flex-col items-center space-y-3 bg-[#ffffff3d] hover:scale-105 transform duration-300 hover:shadow-2xl hover:border-[#b81818]'>
              <FaTags className='text-[#b81818] text-5xl' />
              <p className='font-semibold text-xl text-[#b81818]'>Big Sale Deals</p>
              <p className='text-[#424141]'>Grab amazing discounts and cashback offers</p>
              <button className='text-white outline-2 outline-[#b81818] rounded-3xl pt-2 pb-2 pr-3 pl-3 hover:scale-110 transform duration-300 hover:bg-[#b81818] hover:text-white cursor-pointer'>Shop Now</button>
            </div>


          </div>
        </div>

      </div>
    </>
  )
}

export default FirstSectionHome