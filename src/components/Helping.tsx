import React from 'react'
import Image from 'next/image'
const Helping = () => {
  return (
    <div className='w-full bg-[#F5F7FA]'>
      <div className='grid grid-cols-1 gap-8 lg:grid-cols-2 lg:w-[700px] py-16 mx-auto'>
        {/* left side */}
        <div className='flex flex-col items-center lg:whitespace-break-spaces'>
          <h1 className='text-2xl w-auto lg:w-[273px] font-semibold sm:px-0 px-4 text-[#18191F]'>Helping a local              <span className=' text-[#4CAF4F]'> business reinvent itself</span></h1>
          <p className='text-[12px] text-[#4D4D4D]'>We reached here with our hard work and dedication</p>
        </div>
        {/* right side */}
        <div className='grid grid-cols-2 mx-auto gap-10'>
          {/* left side */}
          <div className='space-y-4'>
            <div className='flex items-center gap-4'>
              <Image src={"/V1.png"} width={30} height={30} alt=''></Image>
              <div>
                <h1 className='font-bold'>2,245,341</h1>
                <p className='text-[12px]'>Members</p>
              </div>
            </div>
            <div className='flex items-center gap-4'>
              <Image src={"/V3.png"} width={30} height={30} alt=''></Image>
              <div>
                <h1 className='font-bold'>828,867</h1>
                <p className='text-[12px]'>Event Bookings</p>
              </div>
            </div>
          </div>
          {/* right side */}
          <div className='space-y-4'>
            <div className='flex items-center gap-4'>
              <Image src={"/V2.png"} width={30} height={30} alt=''></Image>
              <div>
                <h1 className='font-bold'>46,328</h1>
                <p className='text-[12px]'>Clubs</p>
              </div>
            </div>
            <div className='flex items-center gap-4'>
              <Image src={"/V4.png"} width={30} height={30} alt=''></Image>
              <div>
                <h1 className='font-bold'>1,926,436</h1>
                <p className='text-[12px]'>Payments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Helping
