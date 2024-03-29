import React, { useCallback, useMemo, useState } from 'react'
import classes from './productCard.module.css'
import Button from '../Button/button'
import { FaIndianRupeeSign } from 'react-icons/fa6'
import { FaRegHeart } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../data/reducer/cartSlice'
import { cartItems } from '../../data/selector/cart.selector'
import { useNavigate } from 'react-router'
import ReactStars from 'react-rating-stars-component'
import AddToCartBtn from '../AddToCartButton/addToCartBtn'
const ProductCard = (props) => {
    const { rating, sku, name, price, image, stock, qty, id, categoryName } =
        props
    // const cartItem = useSelector(cartItems)
    const navigate = useNavigate()
    const [wishlist, setWishlist] = useState(null)
    const [wishlistIds, setWishlistIds] = useState(null)
    const dispatch = useDispatch()
    const product = {
        id,
        name,
        price,
        qty,
        sku,
        stock,
        image,
        categoryName,
        rating,
    }

    const handleAddToCart = useCallback(() => {
        dispatch(addToCart(product))
    }, [dispatch, product])

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
            <img
                onClick={() => navigate(`/category/${categoryName}`)}
                src={image}
                alt={name}
                height={200}
                width={200}
            />
            <div className={classes.productName}>
                {name}
                <span>
                    <div className={classes.productPrice}>
                        <FaIndianRupeeSign size={13} color={'#161a30'} />
                        {price}
                    </div>
                </span>
            </div>
            <div className={classes.sku}>{sku}</div>

            <div>
                <ReactStars
                    value={rating}
                    size={24}
                    activeColor="#161a30"
                    edit={false}
                />
            </div>
            <AddToCartBtn
                isInStock={stock}
                handleAddToCart={handleAddToCart}
                sku={sku}
            />
        </div>
    )
}

export default ProductCard
