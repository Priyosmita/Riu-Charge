import React from 'react'
import { FaMobileAlt,FaFileInvoiceDollar,FaTags } from "react-icons/fa";
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

        <div className="absolute z-10 flex w-full justify-end p-44">
          <div className='grid grid-cols-2 gap-6'>
            {/* 4 equal-sized blocks */}
            <div className='p-6 border-2 border-[#d1cfcf] text-center w-52 h-56 rounded-2xl flex flex-col items-center bg-[#ffffff3d]'>
              <FaMobileAlt className='text-[#d10f0f] text-4xl' />
              <p>Mobile Recharge</p>
              <p>Instant mobile recharges with top providers</p>
              <button>Recharge Now</button>
            </div>

            <div className='p-4 border-2 border-[#d10f0f] text-center w-60 h-64 rounded-2xl flex flex-col'>
              <FaTv />
              <p>DTH Recharge</p>
              <p>Top-up your favorite DTH services hassle-free</p>
              <button>Recharge Now</button>
            </div>

            <div className='p-4 border-2 border-[#d10f0f] text-center w-40 rounded-2xl flex flex-col'>
              <FaFileInvoiceDollar />
              <p>Bill Payments</p>
              <p>Quick and secure utility bill payments</p>
              <button>Pay Now</button>
            </div>

            <div className='p-4 border-2 border-[#d10f0f] text-center w-40 rounded-2xl flex flex-col'>
              <FaTags />
              <p>Big Sale Deals</p>
              <p>Grab amazing discounts and cashback offers</p>
              <button>Shop Now</button>
            </div>

          </div>
        </div>

      </div>
    </>
  )
}

export default FirstSectionHome