import React from 'react'
import classes from './header.module.css'
import { headerMenuList } from '../../constant'
import { useNavigate } from 'react-router'
// import { useWindowSize } from "../../hooks/useWindowSize";

const Header = () => {
    // const { isMobile } = useWindowSize();
    const navigate = useNavigate()

    return (
        <div className={classes.header}>
            <div className={classes.logo}>Logo goes here...</div>
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
                            {menu.name}
                        </div>
                    )
                })}
            </div>
            <div className={classes.account}>account</div>
        </div>
    )
}

export default Header
