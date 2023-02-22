import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const NavBar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className='flex text-white justify-between items-center mx-auto px-4 max-w-[1240px] h-24'>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>NEXT.</h1>
            <ul className='hidden md:flex'>
                <li className='p-4'>Home</li>
                <li className='p-4'>Home</li>
                <li className='p-4'>Home</li>
                <li className='p-4'>Home</li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {!nav ? <AiOutlineMenu size={20} className='hover:cursor-pointer' /> : <AiOutlineClose size={20} className='hover:cursor-pointer' />}
            </div>
            <div className={nav ? 'md:hidden fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%] ease-in duration-500'}>
                <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>NEXT.</h1>
                <ul className='uppercase'>
                    <li className='p-4 border-b border-gray-600'>Home</li>
                    <li className='p-4 border-b border-gray-600'>Home</li>
                    <li className='p-4 border-b border-gray-600'>Home</li>
                    <li className='p-4'>Home</li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar