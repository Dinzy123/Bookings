import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

function Header() {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-1g px-6 md:px-10 1g:px-5'>
      
      {/*--------Left Side-----------*/}
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-6 m-auto md:py-[5vw] md:mb-[-20px]'>
        <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
            Rent a room easily <br /> with trusted local landlords from your community!
        </p>
        <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
            <p>
            Browse our extensive list of trusted local landlords <br className='hidden sm:block' /> and find a better place to stay!
            </p>
        </div>
        <a href="#speciality" className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'>
          Rent a Room 
          <img className='w-2 h-2' src={assets.arrow_icon} alt="" /> {/* Reduced logo size */}
        </a>
      </div>

      {/*--------Right Side-----------*/}
      <div className='md:w-1/2 flex justify-center items-center'>
          <img className='w-full md:h-[400px] h-auto rounded-lg object-cover' src={assets.header_img} alt="Header Image" />
      </div>
    </div>
  )
}

export default Header
