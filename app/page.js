import React from 'react'
import Header from './components/Header'

const page = () => {
  return (
    <>
      <Header />

      {/* first section */}
      <div className='bg-[#EBF2FB] h-auto w-full flex justify-center'>
        <div className='bg-[#ffffff] h-40 w-7xl rounded-4xl mt-9 mb-9'>
          <div className='flex flex-row justify-center space-x-44'>
            <div className='text-black'>fast</div>
            <div>animation</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default page