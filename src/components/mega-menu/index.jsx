import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function MegaMenu({ className, onMouseEnter, onMouseLeave }) {
    // console.log(isOpen);
    return (
        <div onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave} className={`bg-white p-4 shadow flex absolute top-[100%] left-0 right-0 flex-wrap ${className}`}>
            <div className='w-1/3'>
                <Link to='/shop'>
                    <h4 className='text-[#282828] font-medium mb-4 hover:text-[#ffae00] duration-200'>CHAIR</h4>
                </Link>
                <ul className='list-none'>
                    <li className='text-[#666666]  text-[14px] my-2 duration-200'>
                        <Link className='hover:text-[#ffae00] hover:translate-x-4 inline-block duration-150'>Tops</Link>
                    </li>
                    <li className='text-[#666666]  text-[14px] my-2 duration-200'>
                        <Link className='hover:text-[#ffae00] hover:translate-x-4 inline-block duration-150'>Tops</Link>
                    </li>
                    <li className='text-[#666666]  text-[14px] my-2 duration-200'>
                        <Link className='hover:text-[#ffae00] hover:translate-x-4 inline-block duration-150'>Tops</Link>
                    </li>
                    <li className='text-[#666666]  text-[14px] my-2 duration-200'>
                        <Link className='hover:text-[#ffae00] hover:translate-x-4 inline-block duration-150'>Tops</Link>
                    </li>
                    <li className='text-[#666666]  text-[14px] my-2 duration-200'>
                        <Link className='hover:text-[#ffae00] hover:translate-x-4 inline-block duration-150'>Tops</Link>
                    </li>
                </ul>
            </div>
            <div className='w-1/3'>
                <Link to='/shop'>
                    <h4 className='text-[#282828] font-medium mb-4 hover:text-[#ffae00] duration-200'>CHAIR</h4>
                </Link>
                <ul className='list-none'>
                    <li className='text-[#666666]  text-[14px] my-2 duration-200'>
                        <Link className='hover:text-[#ffae00] hover:translate-x-4 inline-block duration-150'>Tops</Link>
                    </li>
                    <li className='text-[#666666]  text-[14px] my-2 duration-200'>
                        <Link className='hover:text-[#ffae00] hover:translate-x-4 inline-block duration-150'>Tops</Link>
                    </li>
                    <li className='text-[#666666]  text-[14px] my-2 duration-200'>
                        <Link className='hover:text-[#ffae00] hover:translate-x-4 inline-block duration-150'>Tops</Link>
                    </li>
                    <li className='text-[#666666]  text-[14px] my-2 duration-200'>
                        <Link className='hover:text-[#ffae00] hover:translate-x-4 inline-block duration-150'>Tops</Link>
                    </li>
                    <li className='text-[#666666]  text-[14px] my-2 duration-200'>
                        <Link className='hover:text-[#ffae00] hover:translate-x-4 inline-block duration-150'>Tops</Link>
                    </li>
                </ul>
            </div>
            <div className='w-1/3'>
                <Link to='/shop'>
                    <h4 className='text-[#282828] font-medium mb-4 hover:text-[#ffae00] duration-200'>CHAIR</h4>
                </Link>
                <ul className='list-none'>
                    <li className='text-[#666666]  text-[14px] my-2 duration-200'>
                        <Link className='hover:text-[#ffae00] hover:translate-x-4 inline-block duration-150'>Tops</Link>
                    </li>
                    <li className='text-[#666666]  text-[14px] my-2 duration-200'>
                        <Link className='hover:text-[#ffae00] hover:translate-x-4 inline-block duration-150'>Tops</Link>
                    </li>
                    <li className='text-[#666666]  text-[14px] my-2 duration-200'>
                        <Link className='hover:text-[#ffae00] hover:translate-x-4 inline-block duration-150'>Tops</Link>
                    </li>
                    <li className='text-[#666666]  text-[14px] my-2 duration-200'>
                        <Link className='hover:text-[#ffae00] hover:translate-x-4 inline-block duration-150'>Tops</Link>
                    </li>
                    <li className='text-[#666666]  text-[14px] my-2 duration-200'>
                        <Link className='hover:text-[#ffae00] hover:translate-x-4 inline-block duration-150'>Tops</Link>
                    </li>
                </ul>
            </div>

        </div>
    )
}
