import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

import classes from './dashboard.module.css'

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules'
import CategorySlider from '../CategorySlider/categorySlider'

const sliderData = [
    { image: 'https://swiperjs.com/demos/images/nature-1.jpg' },
    { image: 'https://swiperjs.com/demos/images/nature-2.jpg' },
    { image: 'https://swiperjs.com/demos/images/nature-3.jpg' },
    { image: 'https://swiperjs.com/demos/images/nature-4.jpg' },
    { image: 'https://swiperjs.com/demos/images/nature-5.jpg' },
    { image: 'https://swiperjs.com/demos/images/nature-6.jpg' },
    { image: 'https://swiperjs.com/demos/images/nature-7.jpg' },
    { image: 'https://swiperjs.com/demos/images/nature-8.jpg' },
    { image: 'https://swiperjs.com/demos/images/nature-9.jpg' },
]

function Dashboard() {
    return (
        <div>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                autoplay={true}
                loop={true}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className={classes.mySwiper}
            >
                {sliderData.map((item, index) => (
                    <SwiperSlide key={index}>
                        <img src={item.image} alt={index} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <CategorySlider />
        </div>
    )
}

export default Dashboard
