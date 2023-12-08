import React, { useMemo, useState } from 'react'
import classes from './productCard.module.css'
import Button from '../Button/button'
import { FaIndianRupeeSign } from 'react-icons/fa6'
import { FaRegHeart } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../data/reducer/cartSlice'

const ProductCard = (props) => {
    const { rating, sku, name, price, image, stock, qty, id } = props
    const [wishlist, setWishlist] = useState(null)
    const [wishlistIds, setWishlistIds] = useState(null)
    const dispatch = useDispatch()
    const product = { id, name, price, qty, sku, stock, image }

    const handleAddToCart = () => {
        dispatch(addToCart(product))
    }

    const button = useMemo(() => {
        if (stock === 'IN_STOCK') {
            return (
                <Button
                    className={classes.action}
                    priority="high"
                    type="submit"
                    onClick={() => {
                        handleAddToCart()
                    }}
                >
                    ADD TO CARD
                </Button>
            )
        }
        if (stock === 'OUT_OF_STOCK') {
            return (
                <Button
                    className={classes.action}
                    priority="high"
                    type="submit"
                    disabled
                >
                    OUT OF STOCK
                </Button>
            )
        }
    }, [handleAddToCart, stock])

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
            <div>{rating}</div>
            {button}
        </div>
    )
}

export default ProductCard
