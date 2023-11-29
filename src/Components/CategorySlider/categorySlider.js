import React from 'react'
import classes from './categorySlider.module.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// import categoryImage from '/Images/category.png'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/grid'
import 'swiper/css/pagination'

// import required modules
import { Grid, Pagination } from 'swiper/modules'

const categorySlider = [
    { name: 'SLIM DRAWER BOX' },
    { name: 'TANDOM DRAWER BOX' },
    { name: 'PULL OUT' },
    { name: 'CORNER SOLUTION' },
    { name: 'TALL UNIT' },
    { name: 'PANTRY UNIT' },
    { name: 'ELEVATOR BASKET' },
    { name: 'CUTLERY' },
    { name: 'QUADRO CHANNEL' },
    { name: 'KITCHEN ACCESORIES' },
    { name: 'HINGE SERIES UNIT' },
    { name: 'ROLLING SHUTTER BASKET' },
    { name: 'DOOR CLOSER' },
    { name: 'ACCESORIES' },
]

const CategorySlider = () => {
    return (
        <div className={classes.categoryWrapper}>
            <div className={classes.title}>CATEGORY</div>
            {categorySlider && (
                <div className={classes.swiperContain}>
                    <Swiper
                        slidesPerView={4}
                        grid={{
                            rows: 2,
                            fill: 'row',
                        }}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Grid, Pagination]}
                        className={classes.categorySwipper}
                    >
                        {categorySlider.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div>
                                    <img
                                        src={'/Images/categoryImage.jpeg'}
                                        alt={index}
                                        height={60}
                                        width={60}
                                    />
                                    <div className={classes.categoryName}>
                                        {item.name}
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            )}
        </div>
    )
}

export default CategorySlider
