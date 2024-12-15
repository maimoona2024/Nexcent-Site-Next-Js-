import React from 'react'
import Image from 'next/image'
const Design = () => {
  return (
    <div>
      <div className='bg-white w-full lg:h-[400.7px] lg:my-8'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 lg:w-[800px] sm:w-auto h-auto lg:h-[250px] mx-auto py-4 gap-8'>
                      {/* left side */}
                      <div className='m-auto'>
                        <Image src={"/pana.png"} width={250} height={250} alt=''></Image>
                      </div>
                      {/* right Side */}
                      <div className='w-[270px] sm:w-[350px] md:w-[457px] m-auto space-y-4'>
                        <p className='lg:w-[350px] leading-tight text-[25px] sm:text-[35px] md:text-[22px] font-semibold font-inter'>How to design your site footer like we did</p>
                        <p className='lg:w-[350px] text-[12px] md:text-[16px] font-inter font-normal'>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
                        <button className='w-[120px] h-[39px] bg-accent text-white rounded-sm hover:bg-[#62b264]'>Learn More</button>
                      </div>
                    </div>
                  </div>
    </div>
  )
}

export default Design
