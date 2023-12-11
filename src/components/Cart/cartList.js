import React from 'react'
import classes from './cartList.module.css'
import { FaIndianRupeeSign } from 'react-icons/fa6'
import { MdDelete } from 'react-icons/md'
import { useNavigate } from 'react-router'
import { removeFromCart } from '../../data/reducer/cartSlice'
import { useDispatch } from 'react-redux'

const CartList = (item) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    return (
        <div className={classes.cartListWrapper}>
            <div
                className={classes.leftContain}
                onClick={() => navigate(`/category/${item.item.categoryName}`)}
            >
                <img
                    src={item.item.image}
                    alt={item.sku}
                    height={110}
                    width={110}
                />
            </div>
            <div className={classes.middleContain}>
                <div className={classes.productName}>{item.item.name}</div>
                <div className={classes.productPrice}>
                    <FaIndianRupeeSign size={12} color="#161a30" />
                    {item.item.price}
                </div>
                <div className={classes.cartQuntity}>
                    {item.item.cartQuntity}
                </div>
            </div>
            <div
                className={classes.rightcontain}
                onClick={() => {
                    dispatch(removeFromCart(item.item.id))
                    console.log('cartlist -->', item.item.id)
                }}
            >
                <MdDelete size={24} color="#161a30" />
            </div>
        </div>
    )
}

export default CartList
