import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cartItems } from '../../data/selector/cart.selector'
import classes from './cart.module.css'
import { useNavigate } from 'react-router'
import Button from '../Button/button'
import { clearCart } from '../../data/reducer/cartSlice'
import CartList from './cartList'
const Cart = () => {
    const cartItem = useSelector(cartItems)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const cartList = useMemo(() => {
        if (cartItem.length > 0) {
            return cartItem.map((item) => {
                return (
                    <div key={item.id} className={classes.cartItems}>
                        <CartList item={item} />
                    </div>
                )
            })
        }

        return <div className={classes.emptyCart}>Cart is Empty</div>
    }, [cartItem])

    return (
        <div className={classes.cartWrapper}>
            <div className={classes.btnContainer}>
                <div className={classes.shippingBtn}>
                    <Button
                        className={classes.action}
                        priority="high"
                        type="submit"
                        onClick={() => {
                            navigate('/')
                        }}
                    >
                        Continue Shopping
                    </Button>
                </div>
                <div className={classes.clearCartBtn}>
                    <Button
                        className={classes.action}
                        priority="high"
                        type="submit"
                        onClick={() => {
                            dispatch(clearCart(cartItem))
                        }}
                    >
                        Empty Cart
                    </Button>
                </div>
            </div>
            <div className={classes.cartcontent}>{cartList}</div>
        </div>
    )
}

export default Cart
