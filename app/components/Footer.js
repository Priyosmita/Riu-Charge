import React from 'react'
import Link from 'next/link'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


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

                        <span className='flex flex-row space-x-2 hover:text-[#d10f0f] transform duration-300 cursor-default'><FaPhoneAlt className='text-2xl'/><p>123456789</p></span>

                        <span className='flex flex-row space-x-2 hover:text-[#d10f0f] transform duration-300 cursor-default'><IoMail className='text-2xl'/><p>abc@gmail</p></span>
                    </div>


                    {/*  col 2 */}
                    <div className='flex flex-col space-y-9'>
                        <span className='text-xl font-semiboldbold cursor-default'>
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
                        <span className="inline-block">
                            <Link href="/" className="hover:text-[#d10f0f] transition duration-300">
                            <FaFacebook className='text-3xl' />
                            </Link>
                        </span>
                        
                        <span className="inline-block">
                            <Link href="/" className="hover:text-[#d10f0f] transition duration-300">
                            <FaLinkedin className='text-3xl' />
                            </Link>
                        </span>
                        
                        <span className="inline-block">
                            <Link href="/" className="hover:text-[#d10f0f] transition duration-300">
                            <FaXTwitter className='text-3xl' />
                            </Link>
                        </span>
                        
                        <span className="inline-block">
                            <Link href="/" className="hover:text-[#d10f0f] transition duration-300">
                            <FaInstagram className='text-3xl' />
                            </Link>
                        </span>

                        <span className="inline-block">
                            <Link href="/" className="hover:text-[#d10f0f] transition duration-300">
                            <FaYoutube className='text-3xl' />
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer