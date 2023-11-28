import React from 'react'
import classes from './categorySlider.module.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

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
        <div className="category">
            <div className={classes.title}>CATEGORY</div>
            {categorySlider && (
                <Swiper
                    slidesPerView={3}
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
                            <div>{item.name}</div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </div>
    )
}

export default CategorySlider
