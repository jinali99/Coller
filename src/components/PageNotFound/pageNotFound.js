import React from 'react'
import classes from './pageNotFound.module.css'

const PageNotFound = () => {
    return (
        <div className={classes.notFound}>
            <h2>404</h2>
            <p>Page Not Found</p>
        </div>
    )
}

export default PageNotFound
