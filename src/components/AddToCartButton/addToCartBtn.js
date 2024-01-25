import React, { useMemo } from 'react'
import Button from '../Button/button'
import classes from './addToCartBtn.module.css'
import { useSelector } from 'react-redux'
import { cartItems } from './../../data/selector/cart.selector'
const AddToCartBtn = ({ sku, handleAddToCart }) => {
    const cartItem = useSelector(cartItems)

    const addCartBtn = useMemo(() => {
        console.log('sku--->', sku)
        // cartItem.map((item) =>){
        //     const isSkuSame = item.sku
        // }

        // if (isInStock === 'IN_STOCK') {
        //     return (
        //         <Button
        //             className={classes.action}
        //             priority="high"
        //             type="submit"
        //             onClick={() => {
        //                 handleAddToCart()
        //             }}
        //         >
        //             ADD TO CART
        //         </Button>
        //     )
        // }
        // if (isInStock === 'OUT_OF_STOCK') {
        //     return (
        //         <Button
        //             className={classes.action}
        //             priority="high"
        //             type="submit"
        //             disabled
        //         >
        //             OUT OF STOCK
        //         </Button>
        //     )
        // }
        return null
    }, [cartItem, sku])

    return <div>{addCartBtn}</div>
}

export default AddToCartBtn
