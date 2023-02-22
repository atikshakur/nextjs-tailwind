import React from 'react'

const Pricing = () => {
    return (
        <div className='py-20 bg-white px-4'>
            <div className='flex flex-col md:flex-row mx-auto max-w-[1240px] gap-8'>
                <div className='w-full shadow-xl border-gray-200 rounded-lg text-center py-8 px-8'>
                    <h1 className='py-2 font-bold'>Hobby</h1>
                    <p className='py-2 text-2xl md:text-3xl font-bold'>$0</p>
                    <p className='py-2 border-b-2'>Best for students & hobby projects</p>
                    <p className='py-2 border-b-2'>Single user</p>
                    <p className='py-2 border-b-2'>One project</p>
                    <p className='py-2 border-b-2'>Delayed response</p>
                </div>
                <div className='w-full shadow-xl border-gray-200 bg-green-100 hover:scale-105 rounded-lg text-center py-8 px-8'>
                    <h1 className='py-2 font-bold'>Pro</h1>
                    <p className='py-2 text-2xl md:text-3xl font-bold'>$20</p>
                    <p className='py-2 border-b-2'>Best for teams</p>
                    <p className='py-2 border-b-2'>10 user</p>
                    <p className='py-2 border-b-2'>10 project</p>
                    <p className='py-2 border-b-2'>Instant response</p>
                </div>
                <div className='w-full shadow-xl border-gray-200 rounded-lg text-center py-8 px-8'>
                    <h1 className='py-2 font-bold'>Enterprise</h1>
                    <p className='py-2 text-2xl md:text-3xl font-bold'>$300</p>
                    <p className='py-2 border-b-2'>Best for enterprises</p>
                    <p className='py-2 border-b-2'>Unlimited user</p>
                    <p className='py-2 border-b-2'>Unlimited project</p>
                    <p className='py-2 border-b-2'>Instatant response</p>
                </div>
            </div>
        </div>
    )
}

export default Pricing