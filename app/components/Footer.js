import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <>
            <div className='w-full h-auto bg-[#2e3136]'>
                <div className='flex flex-row justify-between pt-16 pl-36 pr-36 pb-16'>
                    
                    {/* col 1 */}
                    <div className='flex flex-col space-y-9'>
                        <span>
                        <div className='bg-[#d10f0f] inline-block'>
                            Riucharge logo
                        </div>
                        </span>

                        <span>
                        <Link href="" className='inline-block'>
                            <div className=''>
                                About Us
                            </div>
                        </Link>
                        </span>
                        
                        <span>
                        <Link href="" className='inline-block'>
                            <div className=''>
                                Contact Us
                            </div>
                        </Link>
                        </span>
                        
                        <span>
                        <Link href="" className='inline-block'>
                            <div className=''>
                                Privacy Policy
                            </div>
                        </Link>
                        </span>

                        <span>
                        <Link href="" className='inline-block'>
                            <div className=''>
                            Terms and Conditions
                            </div>
                        </Link>
                        </span>
                    </div>


                    {/*  col 2 */}
                    <div className='flex flex-col space-y-9'>
                        <div>
                            Our Services
                        </div>
                        <Link href="">
                            <div className='inline-block'>
                            Mobile Recharge
                            </div>
                        </Link>
                        <Link href="">
                            <div className='inline-block'>
                            DTH Recharge
                            </div>
                        </Link>
                        <Link href="">
                            <div className='inline-block'>
                            Bill Payments
                            </div>
                        </Link>
                        <Link href="">
                            <div className='inline-block'>
                            Big Sale Deals
                            </div>
                        </Link>
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