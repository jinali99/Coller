import React from 'react'
import classes from './header.module.css'
import { headerMenuList } from '../../constant'
import { useNavigate } from 'react-router'
import { IoIosHeartEmpty } from 'react-icons/io'
import { MdAccountCircle } from 'react-icons/md'
import { FaCartShopping } from 'react-icons/fa6'
import { useSelector } from 'react-redux'
import { cartCounter } from '../../data/selector/cart.selector'

// import { useWindowSize } from "../../hooks/useWindowSize";

const Header = () => {
    // const { isMobile } = useWindowSize();
    const navigate = useNavigate()
    const counter = useSelector(cartCounter)
    console.log('🚀 ~ file: header.js:17 ~ Header ~ counter:', counter)
    const cartItemCounter = counter.reduce(
        (accumulator, currentValue) => accumulator + currentValue.cartQuntity,
        0,
    )

    return (
        <div className={classes.pageWrapper}>
            <div className={classes.logo}>
                <img
                    src={'/Images/logo.png'}
                    alt="logo"
                    height={70}
                    width={240}
                />
            </div>
            <div className={classes.menuWrapper}>
                {headerMenuList.map((menu, index) => {
                    return (
                        <div
                            key={index}
                            className={classes.menuList}
                            onClick={() => {
                                navigate(menu.path)
                            }}
                        >
                            <div>{menu.name}</div>
                        </div>
                    )
                })}
            </div>
            <div className={classes.accountwrapper}>
                <div onClick={() => navigate('/wishlist')}>
                    <IoIosHeartEmpty size={40} color="#F0ECE5" />
                </div>
                <div onClick={() => navigate('/cart')}>
                    <FaCartShopping size={40} color="#F0ECE5" />
                    <span className={classes.cartCounter}>
                        {cartItemCounter}
                    </span>
                </div>
                <div onClick={() => navigate('/account')}>
                    <MdAccountCircle size={40} color="#F0ECE5" />
                </div>
            </div>
        </div>
    )
}

export default Header
