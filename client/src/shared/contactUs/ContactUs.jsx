import React from 'react';


function ContactUs({handleChange,handleSubmit,formData,data}) {
  return (
    <>
    <div className=' bg-white py-19 ' >

    <div id='contact' className="container  flex flex-col md:flex-row justify-center gap-5 lg:gap-15  font-[Tahoma]">
      {/* Left Section */}
      <div className=" md:w-2/3 xl:w-1/3 flex flex-col gap-4 md:gap-1 mb-3">
        <h2 className="text-[24px] md:text-[40px] font-bold ">
          <span className="text-[#1FAF38]">Contact </span>
          <span className="text-[#2867B4] font-extralight">Us</span>
        </h2>
        <p className="text-[16px] md:text-[18px] leading-relaxed md:leading-[30px] lg:leading-[36px]">
          {data?.description}
        </p>
        <div className="flex items-center gap-3 ">
          <i className="fa-solid fa-phone-volume text-[#2867B4]"></i>
          <a href="tel:+919111116483">

          <span className="text-[13px] md:text-[18px] leading-relaxed md:leading-[36px] hover:text-[#1FAF38]">+91 9111116483</span>
          </a>
        </div>
        <div className="flex items-center gap-3 ">
          <i className="fa-solid fa-envelope text-[#2867B4]"></i> 
          <a href="mailto:info@diavets.com"><span className="text-[13px] md:text-[18px] leading-relaxed md:leading-[36px] hover:text-[#1FAF38]">info@diavets.com</span></a>
         
        </div>
        <div className="flex items-start gap-3">
          <i className="fa-solid fa-location-dot text-[#2867B4] mt-1"></i>
          <a href="https://g.co/kgs/bis71Kb">

          <span className="text-[13px] md:text-[18px] leading-relaxed md:leading-[36px] hover:text-[#1FAF38]">
            Door no:201, Sukh Apartment, 188 Anoop Nagar, Indore, Madhya Pradesh - 452008.
          </span>
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className=" bg-[#E6F3FC] p-7  rounded-md  border-1">
        <h2 className="text-[24px] md:text-[34px] lg:text-[38px] font-bold leading-tight mb-4">
          <span className="text-[#1FAF38]">We’re here to</span><br />
          <span className="text-[#2867B4] font-light">assist </span>
          <span className="text-[#1FAF38]">you!</span>
        </h2>
        <p className="text-[] text-gray-700   mb-6">
          Fill out the form below, and we’ll get back to you at the earliest.
        </p>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input type="text" placeholder="Full Name" name="name" value={formData.name} onChange={handleChange} className="p-2 border-b border-gray-400 bg-transparent outline-none" />
          <input type="text" placeholder="Phone No." name="phone" value={formData.phone} onChange={handleChange} className="p-2 border-b border-gray-400 bg-transparent outline-none" />
          <input type="text" placeholder="Email Address" name="email" value={formData.email} onChange={handleChange} className="p-2 border-b border-gray-400 bg-transparent outline-none" />
          <input placeholder="How Can we Help You*" name="help" value={formData.help} onChange={handleChange} className="p-2 border-b border-gray-400 bg-transparent outline-none resize-none" rows={3}/>
          <button type="submit" className="mt-4 bg-[#2867B4] text-white  py-2 rounded hover:bg-[#1FAF38] transition md:w-2/3 ">
            Send Message
          </button>
        </form>
      </div>
    </div>
    </div>
    </>
  );
}

export default ContactUs;
