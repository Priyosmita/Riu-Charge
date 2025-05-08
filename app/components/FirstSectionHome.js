import React from 'react'

const FirstSectionHome = () => {
  return (
    <>
      <div className='flex justify-center relative'>
        <img
          src="/home pic.jpg"
          alt="smiling woman"
          className="h-auto w-full"
        />

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#000000] opacity-40 z-0"></div>

        <div className="absolute z-10 flex items-center justify-center">
          <div className='flex flex-col'>
            {/* first 2 */}
            <div className='flex flex-row'>
              <div className='p-4 outline-2 outline-[#d10f0f]'>mobile recharge</div>
              <div>dth recharge</div>
            </div>
            {/* next 2 */}
            <div className='flex flex-row'>
              <div>big payments</div>
              <div>big sale deals</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FirstSectionHome