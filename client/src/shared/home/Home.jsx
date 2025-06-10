import React from 'react'
import TopHeader from '../../components/TopHeader'
import BottomHeader from '../../components/BottomHeader'
// import banner from '../../assets/homepageimage.png'
// import whatsapp from '../../assets/whatsapp-icon.png'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import server_url from '../../services/serverUrl'
function Home({ data, headerLogo }) {
    console.log(data);

    return (
        <>
            <TopHeader />
            <BottomHeader headerLogo={headerLogo} />
            <div className=' bg-[#DCEBF8]'>

                <div id='home' className='scroll-mt-20 flex flex-col pt-9 pb-19 md:flex-row  justify-between items-center container'>

                    <div className='flex flex-col sm:w-[480px] gap-8 justify-center mb-2 lg:mt-9 content-center '>


                    <h1
  className="inline-block font-bold text-[24px] md:text-[36px] lg:text-[40px] leading-[33px] sm:leading-[48px] font-[Tahoma] text-[#753899] hover:text-transparent hover:bg-gradient-to-r hover:from-[#753899] hover:to-[#2867B4] hover:bg-clip-text transition-none "
>
  Transforming Lives<br />
  Through Science
</h1>
                      
                        <p className='text-[16px] md:text-[18px] leading-[26px] md:leading-[36px] tracking-[0] font-[Tahoma] font-extralight content-center'>
                            {data?.description}
                        </p>
                        <div className='btn flex gap-4 flex-col sm:flex-row '>
                            <HashLink smooth to='#about'>

                                <button className='bg-[#2867B4] px-15 md:px-7 lg:px-13 w-full font-[Tahoma] py-2 rounded-sm  text-white hover:bg-green-600'>
                                    Who We Are
                                </button>
                            </HashLink>
                            <HashLink smooth to='#contact'>

                                <button className='border-1 px-15 md:px-9 lg:px-13 py-2 w-full font-[Tahoma] hover:bg-green-600 hover:border-1-white hover:text-white rounded-sm ' >
                                    Contact Us
                                </button>
                            </HashLink>
                        </div>
                    </div>
                    <div className='mt-7 sm:mt-0' >
                        <img width={50} height={50} src={`${server_url}${data?.image}`} className=' object-contain imghome' alt="" />

                        {/* <div style={{ position: "fixed", bottom: "15%", right: "5%" }}> */}

                        <Link style={{ position: "fixed", bottom: "5%", right: "5%" }} to='https://api.whatsapp.com/send?phone=+91%209111116483'>


                            <img src="https://logodownload.org/wp-content/uploads/2015/04/whatsapp-logo-1.png" width="60px" alt="" />
                        </Link>
                        {/* </div> */}
                    </div>

                    {/* <div className=' flex-1/12'></div> */}

                </div>
            </div>
        </>
    )
}

export default Home
