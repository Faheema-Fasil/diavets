import React from 'react'
import logo from '../assets/DiavetsLogo.png'
function TopFooter() {
    return (
        <>
        <div className='bg-[#DCEBF8]'>

            <div className="container py-12 flex flex-col items-center  text-center font-[Tahoma] ">
                
                <img src={logo} alt="Dia-Vets Logo" className="w-[200px] md:w-[290px] mb-6" />


                <p className="max-w-2xl text-[16px] md:text-[18px] font-extralight leading-relaxed font-[Tahoma]">
                    Dia-Vets is dedicated to advancing both human and animal healthcare through
                    science-driven innovation. We strive to deliver reliable, accessible, and
                    impactful solutions that make a real difference.
                </p>
            </div>
        </div>
        </>
    )
}

export default TopFooter
