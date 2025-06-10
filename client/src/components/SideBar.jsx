import React, { useEffect, useState } from 'react';
import logo from '../assets/DiavetsLogo.png';
import { IoClose } from "react-icons/io5";
import { HashLink } from 'react-router-hash-link';

function SideBar({ isOpen, toggleSidebar }) {
    const [activeSection, setActiveSection] = useState('#home');

    useEffect(() => {
        const sectionIds = ['home', 'about', 'products', 'testimonials', 'contact'];
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(`#${entry.target.id}`);
                    }
                });
            },
            { threshold: 0.5 }
        );

        sectionIds.forEach(id => {
            const section = document.getElementById(id);
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    const links = [
        { to: "#home", label: "Home" },
        { to: "#about", label: "About Us" },
        { to: "#products", label: "Our Products" },
        { to: "#testimonials", label: "Testimonials" },
        { to: "#contact", label: "Contact Us" },
    ];

    return (
        <div className={`fixed top-0 left-0 h-full w-[300px] bg-[#E4F0FB] shadow-lg z-50 transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#2867B4]">
                <img src={logo} alt="Dia-Vets Logo" className="w-[150px]" />
                <IoClose size={28} onClick={toggleSidebar} className="text-[#2867B4] cursor-pointer" />
            </div>

            <ul className="flex flex-col text-[18px] font-[Tahoma]">
                {links.map(({ to, label }) => (
                    <li
                        key={label}
                        onClick={toggleSidebar}
                        className={`px-5 py-4 border-t border-[#2867B4] transition-all duration-300 ${
                            activeSection === to
                                &&  'hover:bg-gradient-to-r hover:from-[#2867B4] hover:to-[#1FAF38] hover:text-white'
                        }`}
                    >
                        <HashLink smooth to={to}>{label}</HashLink>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SideBar;
