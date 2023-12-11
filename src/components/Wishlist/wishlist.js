import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cartItems } from '../../data/selector/cart.selector'
import classes from './wishlist.module.css'
import { useNavigate } from 'react-router'
import Button from '../Button/button'
import { clearCart } from '../../data/reducer/cartSlice'
const Wishlist = () => {
    const cartItem = useSelector(cartItems)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    // const WishlistItem = useMemo(() => {
    //     if (!cartItem.length) {
    //         return <div className={classes.emptyCart}>Wishlist is Empty</div>
    //     } else {
    //         return cartItem.map((item) => {
    //             return (
    //                 <div
    //                     className={classes.cartWrapper}
    //                     key={item.id}
    //                     onClick={() =>
    //                         navigate(`/category/${item.categoryName}`)
    //                     }
    //                 >
    //                     <ProductCard
    //                         key={item.sku}
    //                         categoryName={item.categoryName}
    //                         name={item.name}
    //                         price={item.price}
    //                         sku={item.sku}
    //                         image={item.image}
    //                         id={item.id}
    //                         qty={item.qty}
    //                         stock={item.stock}
    //                         rating={item.rating}
    //                     />
    //                 </div>
    //             )
    //         })
    //     }
    // }, [cartItem, navigate])

    return (
        <div className={classes.cartContainer}>
            <div>
                <div>
                    <Button
                        onClick={() => {
                            navigate('/')
                        }}
                    >
                        Continue Shopping
                    </Button>
                </div>
                <div>
                    <Button
                        onClick={() => {
                            dispatch(clearCart(cartItem))
                        }}
                    >
                        Empty Wishlist
                    </Button>
                </div>
            </div>
            {/* <div className={classes.container}>{cartList}</div> */}
        </div>
    )
}

export default Wishlist
