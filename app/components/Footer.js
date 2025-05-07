import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <>
            <div className='w-full h-auto bg-[#2e3136]'>
                <div className='flex flex-row justify-between pt-10 pl-36 pr-36 pb-10'>
                    
                    {/* col 1 */}
                    <div className='flex flex-col space-y-9'>
                        <div className='bg-[#d10f0f] inline-block'>
                            Riucharge logo
                        </div>
                        <Link href="">
                            <div className='inline-block'>
                                About Us
                            </div>
                        </Link>
                        <Link href="">
                            <div className='inline-block'>
                                Privacy Policy
                            </div>
                        </Link>
                        <Link href="">
                            <div className='inline-block'>
                                Terms and Conditions
                            </div>
                        </Link>
                    </div>

                    {/*  col 2 */}
                    <div className='text-amber-300'>
                        services
                    </div>

                    {/* col 3 */}
                    <div className='text-amber-300'>
                        social
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer