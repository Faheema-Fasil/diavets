import React from 'react';
import about from '../../assets/aboutus.png';

function AboutUs() {
    return (
        <div className="bg-[#F9F9F9] py-6">
            <div id="about" className="container  flex flex-col sm:flex-row items-center justify-center ">
                
                {/* Image Section */}
              

                {/* Text Section */}
                <div className="w-full md:w-3/5 lg:w-1/3  text-left content-center flex flex-col">
                    <h2 className="text-[24px] md:text-[40px] font-[Tahoma] font-bold leading-[40px] mb-6">
                        <span className="text-[#1FAF38] border-b-4 border-[#1FAF38] pb-2">About</span>
                        <span className="text-[#2867B4] font-light ml-2">Us</span>
                    </h2>
                    <p className="text-gray-700 text-[16px] md:text-[18px] lg:text-[18px] md:leading-[30px] lg:leading-[36px]">
                        Dia-Vets is a science-first healthcare company dedicated to enhancing diagnostic and therapeutic outcomes across human and veterinary sectors. Whether in labs, clinics, or farms, our products are designed to meet the evolving health challenges of today’s world with accuracy, affordability, and reliability.
                     
                        Rooted in deep scientific research and guided by empathy, we serve healthcare professionals, veterinarians, pet owners, and caregivers alike.
                    </p>
                </div>
                <div className="imgabout flex justify-center ">
                    <img
                        src={about}
                        alt="About Dia-Vets"
                        className="rounded-lg object-cover "
                    />
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
