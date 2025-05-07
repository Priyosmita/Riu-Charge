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

      {/* second section */}
      <div className='flex flex-row justify-center items-center bg-[#EBF2FB] h-24'>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Reliance_Jio_Logo_%28October_2015%29.svg/768px-Reliance_Jio_Logo_%28October_2015%29.svg.png"
          alt="jio logo"
          className="h-14 w-auto"
        />

        <img
          src="https://upload.wikimedia.org/wikipedia/commons/f/f4/D2h_logo_Brand.png?20181112043612"
          alt="d2h logo"
          className="h-14 w-auto"
        />

<img
          src="https://m.media-amazon.com/images/I/31BDVWh-9ZL.png"
          alt="tata play binge logo"
          className="h-26 w-auto"
        />

<img
          src="https://cdn.freelogovectors.net/wp-content/uploads/2023/05/airtel-logo-01-freelogovectors.net_.png"
          alt="airtel logo"
          className="h-14 w-auto"
        />

<img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Vodafone_Idea_logo.svg/80px-Vodafone_Idea_logo.svg.png"
          alt="vi logo"
          className="h-14 w-auto"
        />

      </div>
    </>
  )
}

export default page