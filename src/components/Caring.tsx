import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import Image from 'next/image';
const Caring = () => {
  return (
    <div className='w-full flex flex-col gap-8 items-center py-8'>
      {/* Top Section */}
      <div className='w-auto sm:w-[530px] m-auto text-center px-4 sm:px-0'>
        <h1 className='font-semibold text-2xl text-[#4D4D4D]'>Caring is the new marketing</h1>
        <p className='text-[14px] sm:text-auto'>The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
      </div>



      {/* Bottom Section */}
      {/* Cards */}
      <div className='lg:w-[800px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:mx-auto sm:gap-8'>
        {/* Card 1 */}
        <div className='flex flex-col items-center w-[200px]'>
          <div>
            <Image src={"/c1.png"} width={200} height={200} alt=''></Image>
          </div>
          <div className='flex flex-col items-center justify-center h-full gap-4 relative bottom-14  bg-[#F5F7FA] rounded-md p-2'>
            <h1 className='w-[150px] text-center text-[12px]'>
              Creating Streamlined Safeguarding Processes with OneRen
            </h1>
            <button className='flex items-center justify-between w-[130px] h-[15px] text-[#4CAF4F] text-[16px]'>
              Read More
              <FaArrowRight />
            </button>
          </div>
        </div>
        {/* Card 2 */}
        <div className='flex flex-col items-center w-[200px]'>
          <div>
            <Image src={"/c2.png"} width={200} height={200} alt=''></Image>
          </div>
          <div className='flex flex-col items-center justify-center h-full gap-4 relative bottom-14  bg-[#F5F7FA] rounded-md p-2'>
            <h1 className='w-[150px] text-center text-[12px]'>
            What are your safeguarding responsibilities and how can you manage them?
            </h1>
            <button className='flex items-center justify-between w-[130px] h-[15px] text-[#4CAF4F] text-[16px]'>
              Read More
              <FaArrowRight />
            </button>
          </div>
        </div>
        {/* Card 3 */}
        <div className='flex flex-col items-center  w-[200px]'>
          <div>
            <Image src={"/c3.png"} width={200} height={200} alt=''></Image>
          </div>
          <div className='flex flex-col items-center justify-center h-full gap-4 relative bottom-14  bg-[#F5F7FA] rounded-md p-2'>
            <h1 className='w-[150px] text-center text-[12px]'>
            Revamping the Membership Model with Triathlon Australia
            </h1>
            <button className='flex items-center justify-between w-[130px] h-[15px] text-[#4CAF4F] text-[16px]'>
              Read More
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Caring
