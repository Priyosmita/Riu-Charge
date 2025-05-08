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
                                <div className='hover:text-[#d10f0f] transform duration-300'>
                                    About Us
                                </div>
                            </Link>
                        </span>

                        <span>
                            <Link href="" className='inline-block'>
                                <div className='hover:text-[#d10f0f] transform duration-300'>
                                    Contact Us
                                </div>
                            </Link>
                        </span>

                        <span>
                            <Link href="" className='inline-block'>
                                <div className='hover:text-[#d10f0f] transform duration-300'>
                                    Privacy Policy
                                </div>
                            </Link>
                        </span>

                        <span>
                            <Link href="" className='inline-block'>
                                <div className='hover:text-[#d10f0f] transform duration-300'>
                                    Terms and Conditions
                                </div>
                            </Link>
                        </span>
                    </div>


                    {/*  col 2 */}
                    <div className='flex flex-col space-y-9'>
                        <span className='text-xl font-semiboldbold'>
                            OUR SERVICES
                        </span>
                        <span className="inline-block">
                            <Link href="/" className="hover:text-[#d10f0f] transition duration-300">
                            Mobile Recharge
                            </Link>
                        </span>
                        
                        <span className="inline-block">
                            <Link href="/" className="hover:text-[#d10f0f] transition duration-300">
                            DTH Recharge
                            </Link>
                        </span>
                        
                        <span className="inline-block">
                            <Link href="/" className="hover:text-[#d10f0f] transition duration-300">
                            Bill Payments
                            </Link>
                        </span>
                        
                        <span className="inline-block">
                            <Link href="/" className="hover:text-[#d10f0f] transition duration-300">
                            Big Sale Deals
                            </Link>
                        </span>
                    </div>


                    {/* col 3 */}
                    <div className='flex flex-col space-y-9'>
                        <span className='text-xl font-semiboldbold'>
                            OUR SOCIALS
                        </span>
                        <span className="inline-block">
                            <Link href="/" className="hover:text-[#d10f0f] transition duration-300">
                            Mobile Recharge
                            </Link>
                        </span>
                        
                        <span className="inline-block">
                            <Link href="/" className="hover:text-[#d10f0f] transition duration-300">
                            DTH Recharge
                            </Link>
                        </span>
                        
                        <span className="inline-block">
                            <Link href="/" className="hover:text-[#d10f0f] transition duration-300">
                            Bill Payments
                            </Link>
                        </span>
                        
                        <span className="inline-block">
                            <Link href="/" className="hover:text-[#d10f0f] transition duration-300">
                            Big Sale Deals
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer