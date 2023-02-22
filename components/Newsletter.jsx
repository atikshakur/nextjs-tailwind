import React from 'react'

const Newsletter = () => {
    return (
        <div className='w-full py-16 text-white bg-[#000300] px-4'>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
                <div className='lg:col-span-2'>
                    <h1 className='text-xl sm:text-2xl lg:text-4xl font-bold'
                    >Want to know latest data analytics tricks?</h1>
                    <p className='py-2'>Sign up to our newsletter to get the latest updates.</p>
                </div>
                <div className=''>
                    <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                        <input type="email" placeholder='Enter your email' className='flex w-full p-4 text-black rounded-md mt-4 sm:mt-0 ' />
                        <button className=' text-[#000300] w-[200px] hover:brightness-75 hover:cursor-pointer bg-[#00df9a] py-4 px-6 rounded my-4 sm:ml-4'>Notify me</button>

                    </div>
                    <p>We care about the privacy of your data. Read our <span className='text-green-500 underline hover:cursor-pointer'>Privacy Policy</span></p>
                </div>
            </div>
        </div>
    )
}

export default Newsletter