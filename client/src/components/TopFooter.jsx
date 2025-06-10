import React from 'react'
// import logo from '../assets/DiavetsLogo.png'
import server_url from '../services/serverUrl'
function TopFooter({headerLogo}) {
    return (
        <>
        <div className='bg-[#DCEBF8]'>

            <div className="container py-10 flex flex-col items-center  text-center font-[Tahoma] ">
                
                <img src={`${server_url}${headerLogo?.image}`} alt="Dia-Vets Logo" className="w-[150px] sm:w-[180px] md:w-[200px] lg:w-[230px] mb-6" />


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
