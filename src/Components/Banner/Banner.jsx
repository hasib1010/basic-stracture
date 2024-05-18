import React from 'react';
import img1 from "../../assets/images/banner/1.jpg"
import img2 from "../../assets/images/banner/2.jpg"
import img3 from "../../assets/images/banner/3.jpg"
import img4 from "../../assets/images/banner/4.jpg"
import img5 from "../../assets/images/banner/5.jpg"
import img6 from "../../assets/images/banner/6.jpg"
function Banner() {
    return (
        <div className='relative'>
            <div className="carousel w-full mt-20 ">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className='h-full w-full absolute bg-gradient-to-l opacity-55' >

                    </div>
                    <img src={img1} className=" w-full lg:h-[800px] rounded-lg" />
                    <div className="absolute flex gap-5  bottom-0 right-5  transform -translate-y-1/2    ">
                        <a href="#slide6" className=" p-5 bg-[#FF3811] rounded-full ">
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.5 12.7755L4.5 12.7755M4.5 12.7755L11.25 19.5255M4.5 12.7755L11.25 6.02551" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </a>
                        <a href="#slide2" className=" p-5 bg-[#FF3811] rounded-full ">
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.5 12.7755H19.5M19.5 12.7755L12.75 6.02551M19.5 12.7755L12.75 19.5255" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className='h-full w-full absolute bg-gradient-to-l opacity-55' >

                    </div>
                    <img src={img2} className="w-full lg:h-[800px] rounded-lg" />
                    <div className="absolute flex gap-5  bottom-0 right-5  transform -translate-y-1/2    ">
                        <a href="#slide1" className=" p-5 bg-[#FF3811] rounded-full ">
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.5 12.7755L4.5 12.7755M4.5 12.7755L11.25 19.5255M4.5 12.7755L11.25 6.02551" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </a>
                        <a href="#slide3" className=" p-5 bg-[#FF3811] rounded-full ">
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.5 12.7755H19.5M19.5 12.7755L12.75 6.02551M19.5 12.7755L12.75 19.5255" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className='h-full w-full absolute bg-gradient-to-l opacity-55' >

                    </div>
                    <img src={img3} className="w-full lg:h-[800px] rounded-lg" />
                    <div className="absolute flex gap-5  bottom-0 right-5  transform -translate-y-1/2    ">
                        <a href="#slide2" className=" p-5 bg-[#FF3811] rounded-full ">
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.5 12.7755L4.5 12.7755M4.5 12.7755L11.25 19.5255M4.5 12.7755L11.25 6.02551" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </a>
                        <a href="#slide4" className=" p-5 bg-[#FF3811] rounded-full ">
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.5 12.7755H19.5M19.5 12.7755L12.75 6.02551M19.5 12.7755L12.75 19.5255" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <div className='h-full w-full absolute bg-gradient-to-l opacity-55' >

                    </div>
                    <img src={img4} className="w-full lg:h-[800px] rounded-lg" />
                    <div className="absolute flex gap-5  bottom-0 right-5  transform -translate-y-1/2    ">
                        <a href="#slide2" className=" p-5 bg-[#FF3811] rounded-full ">
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.5 12.7755L4.5 12.7755M4.5 12.7755L11.25 19.5255M4.5 12.7755L11.25 6.02551" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </a>
                        <a href="#slide5" className=" p-5 bg-[#FF3811] rounded-full ">
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.5 12.7755H19.5M19.5 12.7755L12.75 6.02551M19.5 12.7755L12.75 19.5255" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full">
                    <div className='h-full w-full absolute bg-gradient-to-l opacity-55' >

                    </div>
                    <img src={img6} className="w-full lg:h-[800px] rounded-lg" />
                    <div className="absolute flex gap-5  bottom-0 right-5  transform -translate-y-1/2    ">
                        <a href="#slide3" className=" p-5 bg-[#FF3811] rounded-full ">
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.5 12.7755L4.5 12.7755M4.5 12.7755L11.25 19.5255M4.5 12.7755L11.25 6.02551" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </a>
                        <a href="#slide6" className=" p-5 bg-[#FF3811] rounded-full ">
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.5 12.7755H19.5M19.5 12.7755L12.75 6.02551M19.5 12.7755L12.75 19.5255" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div id="slide6" className="carousel-item relative w-full">
                    <div className='h-full w-full absolute bg-gradient-to-l opacity-55' >

                    </div>
                    <img src={img5} className="w-full lg:h-[800px] rounded-lg" />
                    <div className="absolute flex gap-5  bottom-0 right-5  transform -translate-y-1/2    ">
                        <a href="#slide5" className=" p-5 bg-[#FF3811] rounded-full ">
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.5 12.7755L4.5 12.7755M4.5 12.7755L11.25 19.5255M4.5 12.7755L11.25 6.02551" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </a>
                        <a href="#slide1" className=" p-5 bg-[#FF3811] rounded-full ">
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.5 12.7755H19.5M19.5 12.7755L12.75 6.02551M19.5 12.7755L12.75 19.5255" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </a>
                    </div>
                </div>

            </div>
            <div className='absolute lg:top-56 bottom-0 lg:left-12 text-white'>
                <h3 className='lg:text-7xl w-[463px]   '>
                    Affordable Price For Car Servicing
                </h3>
                <p className='lg:mt-10 lg:text-base text-sm'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>

                <div className='flex gap-10 mt-8'>
                    <button className='lg:p-3 border-2 rounded-md bg-[#FF3811] font-bold'>Latest Project</button>
                    <button className='lg:p-3 border-2 rounded-md font-bold'>Discover More</button>
                </div>
            </div>
        </div>

    )
}

export default Banner;