import React from 'react'
import Typed from 'react-typed';

const Hero = () => {
    return (
        <div className='text-white'>
            <div className='max-w-[800px] flex flex-col justify-center items-center w-full h-screen mx-auto mt-[-96px]'>
                <p className='uppercase text-[#00df9a] font-bold p-2'>growing with data analytics</p>
                <p className='font-bold sm:text-6xl md:text-7xl text-4xl'>Grow with data</p>
                <div className='flex py-4'>
                    <p className='sm:text-4xl md:text-5xl text-xl'>Fast, flexible financing for</p>
                    <Typed className='text-gray-500 font-bold sm:text-4xl md:text-5xl text-xl pl-2'
                        strings={['BTB', 'SAAS', 'BTC']}
                        typeSpeed={120}
                        backSpeed={140}
                        loop
                    />
                </div>
                <p className='text-gray-500 font-bold md:text-2xl text-xl pl-2 text-center'>Monitor your data with us, make decsions, increase your revenue exponentially.</p>
                <button className='text-[#000300] hover:brightness-75 hover:cursor-pointer bg-[#00df9a] py-3 px-6 rounded my-4'>Get Started</button>
            </div>
        </div>
    )
}

export default Hero