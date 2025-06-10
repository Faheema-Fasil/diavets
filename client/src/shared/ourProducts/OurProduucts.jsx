import React from 'react';

function OurProduucts() {
    return (
        <>
        <div>

            <div id='products' className="scroll-mt-20 pt-[60px] container pb-15">
                <h2 className="text-left sm:text-center relative pb-2 font-bold  sm:ml-0 text-[24px]  sm:w-full md:text-[40px] leading-[40px] tracking-[0] font-[Tahoma] mb-12">
                    <span className="text-[#1FAF38] mb-4">Our Product</span>
                    <span className="text-[#2867B4] font-extralight"> Categories</span>
                    <span className="absolute bottom-0 left-1/4 sm:left-1/2 -translate-x-1/2 w-[120px] h-1 bg-[#1FAF38]"></span>
                </h2>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 p-0 sm:p-6">
                    {/* Card 1 */}
                    <div className="group hover:bg-pink-100 hover:border-[#2867B4] hover:border duration-700  bg-[#DCEBF8] border-1 border-[#DCEBF8]  md:w-2/3  max-w-md flex flex-col h-auto  sm:h-[360px] lg:h-[350px] gap-5 p-5 py-16">
                        <i className="group-hover:text-[#2867B4] duration-700 fa-solid fa-prescription-bottle-medical fa-2xl"></i>
                        <h6 className="text-[#2867B4] font-bold md:text-[20px] leading-[36px] tracking-[0] font-[Tahoma]">
                            Veterinary Healthcare
                        </h6>
                        <p className="leading-[25px] text-[16px]font-[Tahoma] md:text-[18px] sm:leading-[30px]">
                            Innovative diagnostic and therapeutic solutions tailored for livestock, pets, and veterinary professionals — supporting healthier animals and sustainable farming.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="group hover:bg-pink-100 hover:border-[#2867B4] hover:border duration-700 border-1 border-[#DCEBF8] bg-[#FFE6DD] h-auto  sm:h-[360px] md:w-2/3 lg:h-[350px] max-w-md flex flex-col gap-5 p-5 py-16">
                        <i className="group-hover:text-[#2867B4] duration-700 fa-solid fa-magnifying-glass fa-2xl"></i>
                        <h6 className="text-[#2867B4] font-bold md:text-[20px] leading-[36px] tracking-[0] font-[Tahoma]">
                            Specialized Products
                        </h6>
                        <p className="leading-[25px] text-[16px] font-[Tahoma] md:text-[18px] sm:leading-[30px]">
                            Custom-developed, research-based tools for public health programs, institutional needs, and niche healthcare requirements across sectors.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default OurProduucts;
