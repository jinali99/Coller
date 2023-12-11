import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { cartItems } from '../../data/selector/cart.selector'
import classes from './cart.module.css'
import ProductCard from '../ProductCard/productCard'
const Cart = () => {
    const cartItem = useSelector(cartItems)

    const cartList = useMemo(() => {
        if (!cartItem.length) {
            return <div className={classes.emptyCart}>Cart is Empty</div>
        } else {
            return cartItem.map((item) => {
                return (
                    <div className={classes.cartWrapper} key={item.id}>
                        <ProductCard
                            key={item.sku}
                            categoryName={item.categoryName}
                            name={item.name}
                            price={item.price}
                            sku={item.sku}
                            image={item.image}
                            id={item.id}
                            qty={item.qty}
                            stock={item.stock}
                            rating={item.rating}
                        />
                    </div>
                )
            })
        }
    }, [cartItem])

    return (
        <div className={classes.cartContainer}>
            <div className={classes.container}>{cartList}</div>
        </div>
    )
}

export default Cart
