import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

const page = () => {
  return (
    <>
      <Header />

      {/* first section */}
      <div className='flex justify-center relative'>
        <img
          src="/home pic.jpg"
          alt="smiling woman"
          className="h-auto w-full"
        />

        <div className="absolute right-0 flex items-center justify-center">
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

      {/* second section */}
      <div className='flex flex-row justify-center items-center bg-[#EBF2FB] h-24 space-x-16'>
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
          src="https://images.seeklogo.com/logo-png/43/2/vodafone-idea-logo-png_seeklogo-431500.png"
          alt="vi logo"
          className="h-14 w-auto"
        />

        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Tata_Power_Logo.svg/1200px-Tata_Power_Logo.svg.png"
          alt="tata power logo"
          className="h-6 w-auto"
        />

        <img
          src="https://www.pinpng.com/pngs/m/613-6130497_sun-direct-dth-247-customer-care-toll-free.png"
          alt="sun direct logo"
          className="h-12 w-auto"
        />

      </div>

      <Footer/>
    </>
  )
}

export default page