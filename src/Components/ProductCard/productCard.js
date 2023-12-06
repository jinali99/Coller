import React from 'react'
import classes from './productCard.module.css'

const ProductCard = (props) => {
    return (
        <div className={classes.productCard}>
            <img src={props.image} alt={props.name} height={200} width={200} />
            <div className={classes.productName}>{props.name}</div>
            <div>{props.price}</div>
        </div>
    )
}

export default ProductCard
