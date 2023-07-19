import React from 'react';
import '../index.css';
import logo from '../images/logo.png'

const Navbar = () => {
    return(

        <nav className='main-nav flex bg-white shadow-md h-24 items-center py-4 px-8 '  >
            <div className='px-6 py-3'> 
                <a href='../index.js'>
                <img className='h-12 w-50' src={logo} alt="MRlogo"/>
                </a>
            </div>
            <div className='ml-auto'>
                    <button
                    className='  bg-[#94221f] rounded-md font-bold uppercase text-sm px-6 py-3 text-white
                    active:bg-rose-600 hover:bg-rose-700 rounded shadow-md 
                    mr-1 mb-1 '>Log Out</button>
            </div>    
        </nav>
    )
}

export default Navbar
