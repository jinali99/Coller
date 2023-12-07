import React, { useState } from 'react'
import classes from './productCard.module.css'
import Button from '../Button/button'
import { FaIndianRupeeSign } from 'react-icons/fa6'
import { FaRegHeart } from 'react-icons/fa'

const ProductCard = (props) => {
    const [wishlist, setWishlist] = useState(null)
    const [wishlistIds, setWishlistIds] = useState(null)

    console.log('wishlistIds', wishlistIds)
    return (
        <div className={classes.productCard}>
            <div
                className={classes.wishlist}
                onClick={() => {
                    console.log('id', props.id)
                    setWishlist(!wishlist)
                    setWishlistIds(props.id)
                }}
            >
                <FaRegHeart size={20} color={'#161a30'} />
            </div>
            <img src={props.image} alt={props.name} height={200} width={200} />
            <div className={classes.productName}>{props.name}</div>
            <div className={classes.productPrice}>
                <FaIndianRupeeSign size={13} color={'#161a30'} />
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
