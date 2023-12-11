import React from 'react'
import classes from './footer.module.css'
const Footer = () => {
    return (
        <div className={classes.footerWrapper}>
            <div className={classes.footerTopRow}>
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
                <div className={classes.footerRight}>
                    <div className={classes.footerMiddle}>
                        <ul className={classes.linksItem}>
                            <li className={classes.title}>Return & Exchange</li>
                            <li className={classes.title}>Quality Guarantee</li>
                            <li className={classes.title}>Customer Service</li>
                            <li className={classes.title}>Privacy Policy</li>
                            <li className={classes.title}>
                                Terms & Conditions
                            </li>
                        </ul>
                    </div>

                    <div className={classes.footerMiddlecontent}>
                        <div>About Us</div>
                        <div>Contact Us</div>
                    </div>

                    <div className={classes.footerRight}>TOP CATEGORIES</div>
                </div>
            </div>
        </div>
    )
}

export default Footer
