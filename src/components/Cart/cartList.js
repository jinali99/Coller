import React from 'react'
import classes from './cartList.module.css'
import { FaIndianRupeeSign } from 'react-icons/fa6'

const CartList = (item) => {
    return (
        <div className={classes.cd}>
            <div>{item.item.name}</div>
            <div>
                <FaIndianRupeeSign size={12} color={'#f0ece5'} />
                {item.item.price}
            </div>
            <div>{item.item.cartQuntity}</div>
        </div>
    )
}

export default CartList
