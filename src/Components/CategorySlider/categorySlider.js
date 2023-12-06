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
import { useNavigate } from 'react-router'

const categorySlider = [
    { name: 'SLIM DRAWER BOX', url: '/category/slimdrawerbox' },
    { name: 'TANDOM DRAWER BOX', url: '/category/tandomdrawerbox' },
    { name: 'PULL OUT', url: '/category/pulldown' },
    { name: 'CUTLERY', url: '/category/cutlery' },
    { name: 'PANTRY UNIT', url: '/category/pantry' },
    { name: 'ELEVATOR BASKET', url: '/category/elevator' },
    { name: 'CUTLERY', url: '/category/cutlery' },
    { name: 'QUADRO CHANNEL', url: '/category/quadrochannel' },
    { name: 'KITCHEN ACCESORIES', url: '/category/kitchenaccesories' },
    { name: 'HINGE SERIES UNIT', url: '/category/hingeseriesunit' },
    { name: 'ROLLING SHUTTER BASKET', url: '/category/rollingshutterbasket' },
    { name: 'DOOR CLOSER', url: '/category/doorcloser' },
    { name: 'ACCESORIES', url: '/category/accesories' },
    { name: 'CORNER SOLUTION', url: '/category/cornersolution' },
    { name: 'TALL UNIT', url: '/category/tallunit' },
]

const CategorySlider = () => {
    const navigate = useNavigate()
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
                                <div onClick={() => navigate(item.url)}>
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
