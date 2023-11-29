import React from 'react'
import classes from './bannerSlider.module.css'

const BannerSlider = () => {
    return (
        <div className={classes.bannerWrapper}>
            <img
                src={`/Images/bannerImage.jpg`}
                alt="bannerImage"
                height={400}
                width={700}
            />

            <img
                src={`/Images/bannerImage1.jpg`}
                alt="bannerImage"
                height={400}
                width={700}
            />
        </div>
    )
}

export default BannerSlider
