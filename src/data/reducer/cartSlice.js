import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const initialState = {
    cartItem: [],
    cartTotalQuantity: 0,
    cartTotalAmmount: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const itemIndex = state.cartItem.findIndex(
                (item) => item.id === action.payload.id,
            )
            if (itemIndex >= 0) {
                state.cartItem[itemIndex].cartQuntity += 1
            } else {
                const temProduct = { ...action.payload, cartQuntity: 1 }
                state.cartItem.push(temProduct)
            }
        },
        clearCart(state) {
            toast.info('Clear cart', { position: 'bottom-left' })
            return initialState
        },
        removeFromCart(state, action) {
            const removeItem = state.cartItem.filter(
                (item) => item.id !== action.payload,
            )
            state.cartItem = removeItem
        },
        addcartQuntity(state, action) {
            const itemIndex = state.cartItem.findIndex(
                (item) => item.sku === action.payload.sku,
            )
            console.log('itemIndex', itemIndex)
        },
    },
})
export const { addToCart, clearCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer
