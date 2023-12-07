import React from 'react'
import classes from './productCard.module.css'
import Button from '../Button/button'
import { FaIndianRupeeSign } from 'react-icons/fa6'

const ProductCard = (props) => {
    return (
        <div className={classes.productCard}>
            <img src={props.image} alt={props.name} height={200} width={200} />
            <div className={classes.productName}>{props.name}</div>
            <div className={classes.productPrice}>
                <FaIndianRupeeSign size={13} />
                {props.price}
            </div>
            <Button
                className={classes.action}
                priority="high"
                type="submit"
                onClick={() => console.log('clicked')}
            >
                Add To Card
            </Button>
        </div>
    )
}

export default ProductCard
