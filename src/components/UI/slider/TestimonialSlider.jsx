import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper';

import "swiper/css";
import "swiper/css/pagination";

import quote from '../../../assets/images/quote.png'


import avat1 from '../../../assets/images/ava-1.jpg'
import avat2 from '../../../assets/images/ava-2.jpg'
import avat3 from '../../../assets/images/ava-3.jpg'



const TestimonialSlider = () => {
    const fakeRatting = [
        {
            title: 'mohammed el hansaly',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis adipisci ipsum quasi pariatur libero perspiciatis? Rem temporibus nemo, modi velit amet quisquam corporis suscipit sequi eos deserunt rerum dolorum praesentium.",
            img: avat1
        },
        {
            title: 'amal ',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis adipisci ipsum quasi pariatur libero perspiciatis? Rem temporibus nemo, modi velit amet quisquam corporis suscipit sequi eos deserunt rerum dolorum praesentium.",
            img: avat2
        },
        {
            title: 'abdeRahman',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis adipisci ipsum quasi pariatur libero perspiciatis? Rem temporibus nemo, modi velit amet quisquam corporis suscipit sequi eos deserunt rerum dolorum praesentium.",
            img: avat3
        }
    ]

    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                loop={true}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                modules={Autoplay}
                className="mySwiper">
                {
                    fakeRatting.map((item, index) => {
                        return (
                            <SwiperSlide key={index} className="swiperTest ">
                                <p className="review__text">{item.desc}</p>
                                <div className="testimonail__user-info">
                                    <img src={item.img} alt="" />
                                    <div>
                                        <h5>{item.title}</h5>
                                        <div className='ratt'>
                                            <i className="ri-star-fill"></i>
                                            <i className="ri-star-fill"></i>
                                            <i className="ri-star-line"></i>
                                            <i className="ri-star-line"></i>
                                            <i className="ri-star-line"></i>
                                        </div>
                                    </div>
                                    <img src={quote} alt="" className='quote' />
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>

        </>
    )
}

export default TestimonialSlider
