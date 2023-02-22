import React from 'react'
import Laptop from '../assets/laptop.jpg'
import Image from 'next/image'

const Analytics = () => {
    return (
        <div className='w-full py-16 px-4 bg-white'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <Image className='w-[500px] mx-auto' src={Laptop} alt="/" />
                <div className='flex flex-col justify-center'>
                    <p className='uppercase text-[#00df9a] font-bold'>Data analytics dashboard</p>
                    <p className='uppercase text-[#000300] font-bold pt-4'>Manage data analytics centrally</p>
                    <p className='pt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sit officiis nobis animi saepe. Ducimus consectetur molestias aperiam debitis, ipsa recusandae. Architecto consequatur provident rerum delectus distinctio sunt repellat exercitationem!</p>
                    <button className='text-white w-[200px] hover:text-[#000300] hover:border-2  hover:border-black border-2  border-black  hover:bg-white hover:cursor-pointer bg-[#000300] py-3 px-6 rounded my-4'>Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Analytics