import React from 'react'
import classes from './header.module.css'
import { headerMenuList } from '../../constant'
import { useNavigate } from 'react-router'
import { IoIosHeartEmpty } from 'react-icons/io'
import { MdAccountCircle } from 'react-icons/md'
import { FaCartShopping } from 'react-icons/fa6'

// import { useWindowSize } from "../../hooks/useWindowSize";

const Header = () => {
    // const { isMobile } = useWindowSize();
    const navigate = useNavigate()

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
                </div>
                <div onClick={() => navigate('/account')}>
                    <MdAccountCircle size={40} color="#F0ECE5" />
                </div>
            </div>
        </div>
    )
}

export default Header
