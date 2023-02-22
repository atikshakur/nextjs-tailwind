import React from 'react'
import Image from 'next/image'
import laptop from '../assets/laptop.jpg'
import lap from '../assets/lap.jpeg'
import sq from '../assets/sq.jpeg'

const Tests = () => {
    return (
        <div>
            <div>
                <Image
                    src={lap}
                />
            </div>
            <div className=''>
                <Image
                    className='mx-auto w-full h-48 object-cover lg:h-96'
                    src={sq}
                />
            </div>
            <div className='h-64 bg-white'>

            </div>
        </div>

    )
}

export default Tests