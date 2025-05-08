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

        <div className="absolute flex items-center justify-center">
          <div className='flex flex-col'>
            {/* first 2 */}
            <div className='flex flex-row'>
              <div>mobile recharge</div>
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