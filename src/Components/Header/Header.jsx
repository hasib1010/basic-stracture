import React from 'react';
import logo from '/Projects/car-doctor-client/src/assets/logo.svg'
import { Link, NavLink } from 'react-router-dom';
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
function Header() {
    return (
        <div className='container mx-auto mt-2 flex items-center justify-between'>
            <div>
                <Link to={'/'}>
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div>
                <div className='flex gap-4 text-xl font-semibold'>
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink to={'/about'}>About</NavLink>
                    <NavLink to={'/services'}>Services</NavLink>
                    <NavLink to={'/blog'}>Blog</NavLink>
                    <NavLink to={'/contact'}>Contact</NavLink>
                </div>
            </div>
            <div className='flex gap-4'>
                <div className='flex gap-3 items-center justify-center'>
                <MdOutlineShoppingBag className='text-3xl'/>
                <IoSearchOutline  className='text-3xl'/>
                </div>
                <div>
                    <p className='text-xl text-[#FF3811] font-semibold border-2 p-3 rounded-md border-[#FF3811]'>Appointment</p>
                </div>
            </div>
        </div>
    )
}

export default Header;