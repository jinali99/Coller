import React from 'react'
import classes from './productCard.module.css'

const ProductCard = (props) => {
    return (
        <div className={classes.productCard}>
            <img src={props.image} alt={props.name} height={200} width={200} />
            <div className={classes.productName}>
                <span className={classes.name}>Name : </span>
                {props.name}
            </div>
            <div className={classes.des}>{props.description}</div>
            <div>
                <span className={classes.price}>Price</span> :{props.price}
            </div>
        </div>
    )
}

export default ProductCard
