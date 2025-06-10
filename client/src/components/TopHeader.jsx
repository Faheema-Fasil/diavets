import React from 'react';

function TopHeader() {
    return (
        <div className="bg-[#2867B4] py-2 ">
            <div className="container flex flex-row sm:flex-row items-center justify-between text-white text-[15px] font-[Tahoma]">
                
                {/* Contact Info */}
                <div className="flex flex-row  items-center gap-3">
                    <div >
                        <a href="tel:+919111116483" className="flex items-center gap-2">

                        <i className="fa-solid fa-phone-volume fa-sm" />
                        <span className='text-sm'>+91 9111116483</span>
                        </a>
                    </div>
                    <div className="hidden sm:flex items-center gap-2">
                        <a href="mailto:info@diavets.com" className='sm:flex items-center gap-2'>

                        <i className="fa-solid fa-envelope fa-sm" />
                        <span>info@diavets.com</span>
                        </a>
                    </div>
                </div>

                {/* Social Icons */}
                <div className="flex items-center gap-2 md:gap-4  sm:mt-0">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-square-facebook hover:text-[#d4d4d4] transition" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-instagram hover:text-[#d4d4d4] transition" />
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-youtube hover:text-[#d4d4d4] transition" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-linkedin-in hover:text-[#d4d4d4] transition" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default TopHeader;
