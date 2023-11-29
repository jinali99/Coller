import React from 'react'
import CategorySlider from '../CategorySlider/categorySlider'
import ProductSlider from './ProductSlider/productSlider'

import classes from './dashboard.module.css'
import BannerSlider from './BannerSlider/bannerSlider'

function Dashboard() {
    return (
        <div className={classes.mainWrapper}>
            <ProductSlider />
            <CategorySlider />
            <BannerSlider />
        </div>
    )
}

export default Dashboard
