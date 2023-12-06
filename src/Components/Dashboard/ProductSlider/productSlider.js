import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

import classes from './productSlider.module.css'

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules'

const sliderData = [
    { image: '/Images/product.jpg' },
    { image: '/Images/product2.jpg' },
    { image: '/Images/product3.jpg' },
    { image: '/Images/product4.jpg' },
    { image: '/Images/product5.jpg' },
    { image: '/Images/product6.jpg' },
    { image: '/Images/product7.jpg' },
    { image: '/Images/product8.jpg' },
    { image: '/Images/product3.jpg' },
]
const ProductSlider = () => {
    return (
        <div className={classes.productWrapper}>
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
        </div>
    )
}

export default ProductSlider
