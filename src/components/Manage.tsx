import React from 'react'
import Image from 'next/image'
const Manage = () => {
    return (
        <div className='w-full h-auto md:h-[298px] flex flex-col gap-4'>
            <div className='text-center'>
                <h1 className='px-4 md:px-0 sm:mx-auto w-full sm:w-[500px] md:w-[377.27px] text-[20px] sm:text-[25.60px] font-semibold text-[#4D4D4D]'>Manage your entire community in a single system</h1>
                <p className='text-[12px] sm:text-[16px] font-normal'>Who is Nextcent suitable for?
                </p>
            </div>
            {/* Lower Section */}
            <div className='h-auto md:h-[94.73px] grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-14 mx-auto py-4'>
                {/* card 1 */}
                <div className='w-[150px] h-auto md:h-[94.73px] flex flex-col items-center'>
                    <Image src={"/icon3.png"} width={21.7} height={18.7} alt=''></Image>
                    <div className='text-center'>
                        <h1 className='font-inter text-[16px] font-bold'>Membership Organisations</h1>
                        <p className='text-[12px]'>Our membership management software provides full automation of membership renewals and payments</p>
                    </div>
                </div>
                {/* Card 2 */}
                <div className='w-[150px] h-auto md:h-[94.73px] flex flex-col items-center'>
                    <Image src={"/icon3.png"} width={21.7} height={18.7} alt=''></Image>
                    <div className='text-center'>
                        <h1 className='font-inter text-[16px] font-bold'>National Associations</h1>
                        <p className='text-[12px]'>Our membership management software provides full automation of membership renewals and payments</p>
                    </div>
                </div>
                {/* card 3 */}
                <div className='w-[150px] h-auto md:h-[94.73px] flex flex-col items-center'>
                    <Image src={"/icon3.png"} width={21.7} height={18.7} alt=''></Image>
                    <div className='text-center'>
                        <h1 className='font-inter text-[18px] font-bold'>Clubs And Groups</h1>
                        <p className='text-[12px]'>Our membership management software provides full automation of membership renewals and payments</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Manage
