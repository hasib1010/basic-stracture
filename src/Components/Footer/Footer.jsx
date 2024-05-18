import React from 'react';
import logo from "../../assets/logo.svg"
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer p-10 bg-black  flex lg:flex-row flex-col  justify-around items-center  text-xl  text-white">
            <aside>
               <img className='text-white' src={logo} alt="" />
                <p className='max-w-60'>Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial .</p>
            <div className='flex gap-4 text-2xl mt-3'>
            <FaGoogle  className='p-2 bg-gray-600 text-4xl rounded-full cursor-pointer hover:bg-gray-300 hover:shadow-2xl' />
            <FaTwitter className='p-2 bg-gray-600 text-4xl rounded-full cursor-pointer hover:bg-gray-300 hover:shadow-2xl' />
            <FaInstagram  className='p-2 bg-gray-600 text-4xl rounded-full cursor-pointer hover:bg-gray-300 hover:shadow-2xl'></FaInstagram>
            <FaLinkedin className='p-2 bg-gray-600 text-4xl rounded-full cursor-pointer hover:bg-gray-300 hover:shadow-2xl' />
            </div>
            </aside>
            <nav>
                <h6 className="footer-title">About</h6>
                <a className="link link-hover">Home</a>
                <a className="link link-hover">Service</a>
                <a className="link link-hover">Contact</a> 
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">Why Car Doctor</a>
                <a className="link link-hover">About</a> 
            </nav>
            <nav>
                <h6 className="footer-title">Support</h6>
                <a className="link link-hover">Support Center</a>
                <a className="link link-hover">Feedback</a>
                <a className="link link-hover">Accessability</a>
            </nav>
        </footer>
    );
};

export default Footer;