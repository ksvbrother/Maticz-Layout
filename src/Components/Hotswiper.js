import React from 'react'

import "swiper/css";
import "swiper/css/navigation";
import Png from "../Images/transparent.png"
import { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
const Hotswiper = () => {
    const card = [{
        image: Png,
        text: "Lorem ipsum"
    }, {
        image: Png,
        text: "Lorem ipsum"
    }, {
        image: Png,
        text: "Lorem ipsum"
    }, {
        image: Png,
        text: "Lorem ipsum"
    },
    {
        image: Png,
        text: "Lorem ipsum"
    }, {
        image: Png,
        text: "Lorem ipsum"
    }, {
        image: Png,
        text: "Lorem ipsum"
    }]
    return (
        <div>
            <h1 className='smallHeading'>Hot Collections</h1>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: true,
                }}

                breakpoints={{

                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    991: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                    },
                }}
                // loop={true}
                navigation={true}
                modules={[Navigation, Autoplay]}
                className="HotSwiper"
            >

                {card.map((data) => {
                    return (
                        <SwiperSlide>
                            <div className='hotCard'>
                                <img src={data.image} className='hotImage' alt='Gallery' />
                                <p className='hotText'>{data.text}</p>
                            </div>
                        </SwiperSlide>
                    )
                })}



            </Swiper>

        </div>
    )
}

export default Hotswiper