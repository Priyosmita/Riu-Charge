import React from 'react'
import { FaMobileAlt } from "react-icons/fa";
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
            <div className='p-4 border-2 border-[#d10f0f] text-center w-40 rounded-2xl flex flex-col'>
              <FaMobileAlt />
              <p>Mobile Recharge</p>
              <p>Instant mobile recharges with top providers</p>
              <button>Recharge Now</button>
            </div>

            <div className='p-4 border-2 border-[#d10f0f] text-center w-40 rounded-2xl flex flex-col'>
              <FaTv />
              <p>DTH Recharge</p>
              <p>Instant mobile recharges with top providers</p>
              <button>Recharge Now</button>
            </div>

            <div className='p-4 border-2 border-[#d10f0f] text-center w-40 rounded-2xl flex flex-col'>
              <FaTv />
              <p>Bill Payments</p>
              <p>Instant mobile recharges with top providers</p>
              <button>Recharge Now</button>
            </div>

            <div className='p-4 border-2 border-[#d10f0f] text-center w-40 rounded-2xl flex flex-col'>
              <FaTv />
              <p>Big Sale Deals</p>
              <p>Instant mobile recharges with top providers</p>
              <button>Recharge Now</button>
            </div>

          </div>
        </div>

      </div>
    </>
  )
}

export default FirstSectionHome