import React, { useState } from 'react'
import classes from './productCard.module.css'
import Button from '../Button/button'
import { FaIndianRupeeSign } from 'react-icons/fa6'
import { FaRegHeart } from 'react-icons/fa'

const ProductCard = (props) => {
    const {
        rating,
        sku,
        name,
        price,
        image,
        stock,
        qty,
        categoryName,
        description,
        id,
    } = props
    const [wishlist, setWishlist] = useState(null)
    const [wishlistIds, setWishlistIds] = useState(null)
    const [addCart, setAddCart] = useState(null)

    console.log('wishlistIds', wishlistIds)
    return (
        <div className={classes.productCard}>
            <div
                className={classes.wishlist}
                onClick={() => {
                    console.log('id', id)
                    setWishlist(!wishlist)
                    setWishlistIds(id)
                }}
            >
                <FaRegHeart size={20} color={'#161a30'} />
            </div>
            <img src={image} alt={name} height={200} width={200} />
            <div className={classes.productName}>{name}</div>
            <div className={classes.sku}>{sku}</div>
            <div className={classes.productPrice}>
                <FaIndianRupeeSign size={13} color={'#161a30'} />
                {price}
            </div>
            {stock === 'IN_STOCK' ? (
                <Button
                    className={classes.action}
                    priority="high"
                    type="submit"
                    onClick={() => {
                        console.log('clicked')
                        setAddCart(id)
                    }}
                >
                    ADD TO CARD
                </Button>
            ) : (
                <Button
                    className={classes.action}
                    priority="high"
                    type="submit"
                    disabled
                >
                    OUT OF STOCK
                </Button>
            )}
        </div>
    )
}

export default ProductCard
