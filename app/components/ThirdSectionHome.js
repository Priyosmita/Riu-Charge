import React from 'react'
import { FaMobileAlt, FaTv, FaTrafficLight } from "react-icons/fa";
import { BsGooglePlay } from "react-icons/bs";

const ThirdSectionHome = () => {
    return (
        <>
            <div
                style={{
                    background: '#B81818',
                    background: 'linear-gradient(106deg, rgba(184, 24, 24, 1) 0%, rgba(212, 40, 40, 1) 52%, rgba(252, 159, 159, 1) 100%)',
                }}
                className='h-48 flex justify-center'
            >
                {/* Recharge */}
                <span className='flex flex-col'>
                    <p className='text-[#ffffff] text-5xl pt-12 pb-9 flex justify-center'>Recharge</p>
                    <div className='flex flex-row space-x-60'>
                        <FaMobileAlt className='text-5xl transform duration-300 hover:scale-125' />
                        <FaTv className='text-5xl' />
                        <FaTrafficLight className='text-5xl' />
                        <BsGooglePlay className='text-5xl' />
                    </div>
                </span>


            </div>
        </>
    )
}

export default ThirdSectionHome