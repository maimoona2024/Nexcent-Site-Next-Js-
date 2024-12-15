import React from 'react'
import Image from 'next/image'
const OurClients = () => {
  return (
    <div className='w-full m-auto'>
      <div className='w-[300px] md:w-[600px] lg:w-[801.87px] h-auto lg:h-[132px] my-8 flex flex-col gap-4 mx-auto'>
        <div className='text-center'>
          <h1 className='text-[25.60px] font-semibold text-[#4D4D4D]'>Our Clients</h1>
          <p className='text-[11.14px] font-normal'>We have been working with some Fortune 500+ clients</p>
        </div>
        <div className='w-full mx-auto flex justify-between'>
          <Image className='cursor-pointer' src={"/Logo.png"} width={33.41} height={33.41} alt=''></Image>
          <Image className='cursor-pointer' src={"/Logo (1).png"} width={33.41} height={33.41} alt=''></Image>
          <Image className='cursor-pointer' src={"/Logo (2).png"} width={33.41} height={33.41} alt=''></Image>
          <Image className='cursor-pointer' src={"/Logo (3).png"} width={33.41} height={33.41} alt=''></Image>
          <Image className='cursor-pointer' src={"/Logo (4).png"} width={33.41} height={33.41} alt=''></Image>
          <Image className='cursor-pointer' src={"/Logo (5).png"} width={33.41} height={33.41} alt=''></Image>
          <Image className='cursor-pointer' src={"/Logo (6).png"} width={33.41} height={33.41} alt=''></Image>
        </div>
      </div>
    </div>
  )
}

export default OurClients
