import React from 'react'
import { NavLink } from 'react-router-dom'
function Navbar() {
    return (
        <header className='w-[85%] m-auto border-b-[1px] border-black'>
            <ul className='w-full m-auto flex justify-evenly p-5'>
                <li>
                    <span className='p-4 bg-orange-400 font-mono font-bold text-white rounded-full'>
                        E-Com
                    </span>
                </li>
                <li className='w-10 text-center bg-blue-600 font-mono font-bold text-white hover:shadow-lg hover:bg-orange-400 duration-500 rounded'>
                    <NavLink to="add"> Add </NavLink>
                </li>
                <li className='w-12 text-center bg-blue-600 font-mono font-bold text-white hover:shadow-lg hover:bg-orange-400 duration-500 rounded'>
                    <NavLink to="/"> View </NavLink>
                </li>
            </ul>
        </header>
    )
}

export default Navbar