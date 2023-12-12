import React, { useMemo } from 'react'
import Button from '../Button/button'
import classes from './addToCartBtn.module.css'

const AddToCartBtn = ({ isInStock, handleAddToCart }) => {
    const addCartBtn = useMemo(() => {
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
    }, [])

    return <div>add to cart BTN</div>
}

export default AddToCartBtn
