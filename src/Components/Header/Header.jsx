import React from 'react';
import logo from '/Projects/car-doctor-client/src/assets/logo.svg'
import { Link, NavLink } from 'react-router-dom';
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
function Header() {
    return (

        <div className="container mx-auto mt-5 flex items-center justify-between">
            <div className="navbar-start flex">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>

                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-fit">
                        <div>
                            <div className='flex   gap-2  font-semibold'>
                                <NavLink to={'/'}>Home</NavLink>
                                <NavLink to={'/about'}>About</NavLink>
                                <NavLink to={'/services'}>Services</NavLink>
                                <NavLink to={'/blog'}>Blog</NavLink>
                                <NavLink to={'/contact'}>Contact</NavLink>
                            </div>
                        </div>
                    </ul>
                </div>
                <div>
                    <Link to={'/'}>
                        <img src={logo} alt="" />
                    </Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <div className='flex  gap-2  font-semibold'>
                        <NavLink to={'/'}>Home</NavLink>
                        <NavLink to={'/about'}>About</NavLink>
                        <NavLink to={'/services'}>Services</NavLink>
                        <NavLink to={'/blog'}>Blog</NavLink>
                        <NavLink to={'/contact'}>Contact</NavLink>
                    </div>
                </ul>
            </div>
            <div className='flex gap-4'>
                <div className='flex gap-3 items-center justify-center'>
                    <MdOutlineShoppingBag className='text-3xl' />
                    <IoSearchOutline className='text-3xl' />
                </div>
                <div className=''>
                    <p className='btn  lg:text-xl text-[#FF3811] font-semibold border-2 w-fit h-full lg:py-4  rounded-md border-[#FF3811]'>Appointment</p>
                </div>
            </div>
        </div>
    )
}

export default Header; 