import React from 'react'
import classes from './pageNotFound.module.css'
import { TbError404 } from 'react-icons/tb'

const PageNotFound = () => {
    return (
        <div className={classes.notfound}>
            <TbError404 color="#161a30" size={100} />
            <p>Page Not Found</p>
        </div>
    )
}

export default PageNotFound
