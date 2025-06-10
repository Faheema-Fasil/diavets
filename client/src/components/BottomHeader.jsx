import React, { useState } from 'react'
// import logo from '../assets/DiavetsLogo.png'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import SideBar from './SideBar';
import server_url from '../services/serverUrl';

function BottomHeader({headerLogo}) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleSidebar = () => setIsOpen(!isOpen);
    return (
        <div className="bg-[#DCEBF8] border-b border-[#2867B4] sticky top-0 z-50">
            <div className="container flex flex-row justify-between items-center py-5">
                <Link to="/">
                    <img className="w-[120px] md:w-[160px] lg:w-[180px] m-0 p-0" src={`${server_url}${headerLogo?.image}`} alt="Diavets Logo" />
                </Link>

                <div className="hidden sm:flex flex-row items-center gap-2 md:gap-4 text-[13px] lg:text-[17px]">
                    <HashLink smooth to="#home" className="font-[Tahoma] hover:text-[#753899]">Home</HashLink>
                    <span>|</span>
                    <HashLink smooth to="#about" className="font-[Tahoma] hover:text-[#753899]">About Us</HashLink>
                    <span>|</span>
                    <HashLink smooth to="#products" className="font-[Tahoma] hover:text-[#753899]">Our Products</HashLink>
                    <span>|</span>
                    <HashLink smooth to="#testimonials" className="font-[Tahoma] hover:text-[#753899]">Testimonials</HashLink>
                    <span>|</span>
                    <HashLink smooth to="#contact" className="font-[Tahoma] hover:text-[#753899]">Contact Us</HashLink>
                </div>

                <button onClick={toggleSidebar} className="flex sm:hidden items-center justify-center">
                    <i className="fa-solid fa-bars fa-2xl" style={{ color: "#2867B4" }}></i>
                </button>
            </div>
            <SideBar headerLogo={headerLogo} isOpen={isOpen} toggleSidebar={toggleSidebar} />
        </div>

    )
}

export default BottomHeader;
