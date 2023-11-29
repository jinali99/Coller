import React from 'react'
import classes from './footer.module.css'
const Footer = () => {
    return (
        <div className={classes.footerWrapper}>
            <div className={classes.footerLeft}>
                <div>
                    <img
                        src={'/Images/logo.png'}
                        alt="logo"
                        height={80}
                        width={240}
                    />
                </div>
                <div className={classes.contain}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                </div>
            </div>

            <div className={classes.footerMiddle}>
                <div>CUSTOMER CARE</div>
            </div>

            <div className={classes.footerRight}>TOP CATEGORIES</div>
        </div>
    )
}

export default Footer
