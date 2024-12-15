import React from 'react'
import Image from 'next/image'
const Customers = () => {
    return (
        <div>
            <div className='bg-[#F5F7FA] w-full lg:h-[550px] lg:my-8 '>
                <div className='grid grid-cols-1 lg:grid-cols-2 lg:w-[800px] sm:w-auto h-auto lg:h-[250px] mx-auto py-8 gap-8'>
                    {/* left side */}
                    <div className='m-auto'>
                        <Image src={"/image 9.png"} width={250} height={250} alt=''></Image>
                    </div>
                    {/* right Side */}
                    <div className='w-[270px] sm:w-[350px] md:w-[457px] m-auto space-y-4'>
                        <p className='lg:w-[350px] text-[12px] md:text-[16px] font-inter font-normal'>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                        <p className='text-[#3b943e] font-semibold'>Tim Smith</p>
                        <p>British Dragon Boat Racing Association</p>
                        <div className='flex lg:flex-row flex-col gap-4'>
                        <div className='w-full mx-auto flex justify-between sm:gap-4'>
                            <Image className='cursor-pointer' src={"/Logo.png"} width={33.41} height={33.41} alt=''></Image>
                            <Image className='cursor-pointer' src={"/Logo (1).png"} width={33.41} height={33.41} alt=''></Image>
                            <Image className='cursor-pointer' src={"/Logo (2).png"} width={33.41} height={33.41} alt=''></Image>
                            <Image className='cursor-pointer' src={"/Logo (3).png"} width={33.41} height={33.41} alt=''></Image>
                            <Image className='cursor-pointer' src={"/Logo (4).png"} width={33.41} height={33.41} alt=''></Image>
                            <Image className='cursor-pointer' src={"/Logo (5).png"} width={33.41} height={33.41} alt=''></Image>
                            <Image className='cursor-pointer' src={"/Logo (6).png"} width={33.41} height={33.41} alt=''></Image>
                        </div>
                        <div>
                            <p className='text-[#3b943e] cursor-pointer px-2 w-full visible font-semibold'>Meet all customers</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Customers
