import React from 'react';
// import about from '../../assets/aboutus.png';
import server_url from '../../services/serverUrl';

function AboutUs({data}) {
    return (
        <div className="bg-[#F9F9F9] py-15">
            <div id="about" className="container scroll-mt-20 flex flex-col sm:flex-row items-center justify-center ">
                
                <div className="w-full md:w-3/5   text-left content-center flex flex-col">
                    <h2 className="text-[24px] md:text-[40px] font-[Tahoma] font-bold leading-[40px] mb-6">
                        <span className="text-[#1FAF38] border-b-4 border-[#1FAF38] pb-2">About</span>
                        <span className="text-[#2867B4] font-light ml-2">Us</span>
                    </h2>
                    <p className="text-gray-700 text-[16px] md:text-[18px] lg:text-[18px] md:leading-[30px] lg:leading-[36px]">
                       {data?.description}
                    </p>
                </div>
                <div className="imgabout flex justify-center mt-7 sm:mt-0 ">
                    <img
                        src={`${server_url}${data?.image}`}
                        alt="About Dia-Vets"
                        className="rounded-lg object-cover "
                    />
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
