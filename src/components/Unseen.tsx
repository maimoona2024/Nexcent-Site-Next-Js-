import React from 'react'
import Image from 'next/image'
const Unseen = () => {
  return (
    <div>
      <div className='bg-white w-full lg:h-[350.7px] lg:my-8'>
              <div className='grid grid-cols-1 lg:grid-cols-2 lg:w-[800px] sm:w-auto h-auto lg:h-[250px] mx-auto py-4 gap-8'>
                {/* left side */}
                <div className='m-auto'>
                  <Image src={"/Frame 35.png"} width={250} height={250} alt=''></Image>
                </div>
                {/* right Side */}
                <div className='w-[270px] sm:w-[350px] md:w-[457px] m-auto space-y-4'>
                  <p className='lg:w-[350px] leading-tight text-[25px] sm:text-[35px] md:text-[22px] font-semibold font-inter'>The unseen of spending three years at Pixelgrade</p>
                  <p className='lg:w-[350px] text-[12px] md:text-[16px] font-inter font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                  <button className='w-[120px] h-[39px] bg-accent text-white rounded-sm hover:bg-[#62b264]'>Learn More</button>
                </div>
              </div>
            </div>
    </div>
  )
}

export default Unseen
