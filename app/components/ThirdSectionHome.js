import React from 'react'
import { FaMobileAlt,FaTv } from "react-icons/fa";

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
                <p className='text-[#ffffff] text-4xl p-9'>Recharge</p>
                <div className='flex flex-row'>
                    <FaMobileAlt />
                    <FaTv />

                </div>
            </div>
        </>
    )
}

export default ThirdSectionHome