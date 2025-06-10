import React from 'react';
// import a from '../../assets/img1.png';
// import b from '../../assets/img2.png';
// import c from '../../assets/img3.jpg';
function Testimonial({ partnerImages }) {
    return (
        <>
            {/* Testimonials Section */}
            <div id='testimonials' className='container py-24'>
                <h2 className="text-left md:text-center relative font-bold text-[24px] sm:text-[40px] leading-[40px] font-[Tahoma] mb-16">
                    <span className="text-[#1FAF38]">What </span>
                    <span className="text-[#2867B4] font-extralight">Others Say</span>
                    <span className="absolute bottom-[-10px] left-1/4 sm:left-1/2 -translate-x-1/2 w-[132px] h-1 bg-[#1FAF38]"></span>
                </h2>

                <div className='flex flex-col md:flex-row justify-center gap-3'>
                    {[
                        {
                            name: "Dr. Ramesh Varma",
                            title: "Senior Veterinarian",
                            bg: "bg-[#F7E4FD]",
                            text: "Dia-Vets has become a name we trust in veterinary care. Their rapid diagnostic kits are not only accurate but also easy to use on the field—saving us valuable time and effort."
                        },
                        {
                            name: "Mr. Joseph Mathew",
                            title: "Medicine Supplier",
                            bg: "bg-[#FFE6DD]",
                            text: "From product quality to support, the Dia-Vets team has exceeded our expectations. Their solutions for both animal and human healthcare reflect a deep understanding of real-world needs."
                        },
                        {
                            name: "Dr. Shahira Salim",
                            title: "Veterinary Consultant & Researcher",
                            bg: "bg-[#DEE8FF]",
                            text: "Dia-Vets brings the best of innovation and accessibility. Their team is responsive, knowledgeable, and genuinely invested in improving lives—both human and animal."
                        }
                    ].map((item, idx) => (
                        <div key={idx} className={`hover:bg-green-100 hover:border border-[#2867B4] duration-700 ${item.bg} p-6 lg:p-8 flex flex-col gap-4 w-full max-w-md font-[Tahoma]`}>
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
                <div className='container'>
                    <h2 className="text-start sm:text-center relative font-bold text-[24px] sm:text-[40px] font-[Tahoma] mb-16">
                        <span className="text-[#1FAF38]">We </span>
                        <span className="text-[#2867B4] font-extralight">Partner With</span>
                        <span className="absolute bottom-[-7px] left-1/3 sm:left-1/2 -translate-x-1/2 w-[160px] h-1 bg-[#1FAF38]"></span>
                    </h2>

                    <div className='flex flex-wrap justify-center items-center gap-4'>
                        {partnerImages?.map((item, idx) =>
                            item.images?.map((img, imgIdx) => (
                                <img
                                    key={`${idx}-${imgIdx}`}
                                    src={`http://localhost:5000/uploads/${img}`}
                                    alt={`Partner ${imgIdx + 1}`}
                                    className='w-[250px] h-[110px] object-contain'
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
