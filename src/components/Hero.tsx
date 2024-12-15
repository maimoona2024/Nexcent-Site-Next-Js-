import React from 'react'
import Image from 'next/image'
import OurClients from '@/components/OurClients'
import Manage from '@/components/Manage'
import Unseen from './Unseen'
import Helping from './Helping'
import Design from './Design'
import Customers from '@/components/Customers'
import Caring from '@/components/Caring'

const Hero = () => {
  return (
    <div>
      <div className='bg-[#E0E0E0] w-full'>
        <div className='grid grid-cols-1 lg:grid-cols-2 lg:w-[800px] sm:w-auto h-auto lg:h-[416px] mx-auto py-4 gap-8'>
          {/* Left Side */}
          <div className='w-[270px] sm:w-[350px] md:w-[457px] m-auto space-y-4'>
            <p className='leading-tight text-[25px] sm:text-[35px] md:text-[44.45px] font-semibold font-inter'>Lessons and insights <span className=' text-accent'>from 8 years</span></p>
            <p className='text-[12px] md:text-[16px] font-inter font-normal'>Where to grow your business as a photographer: site or social media?</p>
            <button className='w-[90px] h-[39px] bg-accent text-white rounded-sm hover:bg-[#62b264]'>Register</button>
          </div>
          {/* right side */}
          <div className='m-auto'>
            <Image src={"/Illustration.png"} width={272} height={283} alt=''></Image>
          </div>
        </div>
      </div>
      <OurClients />
      <Manage />
      <Unseen />
      <Helping />
      <Design/>
      <Customers />
      <Caring/>
    </div>
  )
}

export default Hero
