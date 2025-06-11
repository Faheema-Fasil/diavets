import React from 'react';
import server_url from '../../services/serverUrl';
// import a from '../../assets/img1.png';
// import b from '../../assets/img2.png';
// import c from '../../assets/img3.jpg';
function Testimonial({ partnerImages,testimonials }) {
    
    return (
        <>
            {/* Testimonials Section */}
            <div id='testimonials' className='scroll-mt-20 container py-24'>
                <h2 className="text-left md:text-center relative font-bold text-[24px] sm:text-[40px] leading-[40px] font-[Tahoma] mb-16">
                    <span className="text-[#1FAF38]">What </span>
                    <span className="text-[#2867B4] font-extralight">Others Say</span>
                    <span className="absolute bottom-[-10px] left-1/4 md:left-1/2 -translate-x-1/2 w-[100px] sm:w-[132px] h-1 bg-[#1FAF38]"></span>
                </h2>

                <div className='flex flex-col md:flex-row justify-center items-center gap-3'>
                    {testimonials.map((item, idx) => (
                        <div key={idx} className={`hover:bg-green-100 hover:border hover:border-[#2867B4] duration-700 ${item.bg} p-5 border-1 border-[#DCEBF8] lg:p-7 flex flex-col gap-4 w-full max-w-md font-[Tahoma] h-auto  md:h-[450px] lg:h-[450px] `}>
                            <div className="text-end text-[40px] text-black">&#x275E;</div>
                            <div>
                                <h3 className="text-[#2867B4] font-bold text-[18px]">{item.name}</h3>
                                <p className="text-[#1FAF38] text-[16px]">{item.title}</p>
                            </div>
                            <p className="text-black text-[16px] sm:text-[18px] leading-[28px]">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Partners Section */}
            <div className='bg-[#F9F9F9] py-24'>
                <div className='container '>
                    <h2 className="text-start sm:text-center relative font-bold text-[24px] sm:text-[40px] font-[Tahoma] mb-16">
                        <span className="text-[#2867B4]"> We Partner With</span>
                        {/* <span className="text-[#2867B4] font-extralight"></span> */}
                        <span className="absolute bottom-[-7px] left-1/4 sm:left-1/2  -translate-x-1/2 w-[100px] sm:w-[160px] h-1 bg-[#1FAF38]"></span>
                    </h2>

                    <div className='flex flex-col sm:flex-row justify-center items-center gap-2 '>
                        {partnerImages?.map((item, idx) =>
                            item.images?.map((img, imgIdx) => (
                                <img
                                    key={`${idx}-${imgIdx}`}
                                    src={`${server_url}${img}`}
                                    alt={`Partner ${imgIdx + 1}`}
                                    className='object-contain h-auto md:h-[112px] lg:h-[140px] w-[185px] md:w-[300px] lg:w-[500px]'
                                />
                            ))
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}


export default Testimonial;
