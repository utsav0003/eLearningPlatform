import React from 'react'
import {BsFacebook, BsInstagram, BsTwitter, BsLinkedin} from 'react-icons/bs'
import Link from 'next/link';

const Footer = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();

  return (
    <>
        <h1 className='text-red-500 '>Jai Shree Ram</h1>
        <footer className='relative left-0 bottom-0 h-[10vh] py-5 flex flex-col sm:flex-row items-center justify-between text-white bg-gray-800 sm:px-20'>
            <section className='text-lg text-red'>
                Copyright {year} | All Rights Reserved
            </section>

            <section className=" flex items-center justify-center gap-5 text-2xl text-white">
              <Link href="#"
               className="hover:text-yellow-400 transition-all ease-in-out duration-300">
                <BsFacebook/>
              </Link>
              <Link href="#"
               className='hover:text-yellow-400 transition-all ease-in-out duration-300'>
                <BsInstagram/>
              </Link>
              <Link href="#"
               className='hover:text-yellow-400 transition-all ease-in-out duration-300'>
                <BsTwitter/>
              </Link>
              <Link href="https://www.linkedin.com/in/utsav-jha-37271b194/" 
                className='hover:text-yellow-400 transition-all ease-in-out duration-300'>
                <BsLinkedin/>
              </Link>
            </section>

        </footer>
    </>
  )
}

export default Footer