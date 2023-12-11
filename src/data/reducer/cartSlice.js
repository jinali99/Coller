import { createSlice } from '@reduxjs/toolkit'

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
            return initialState
        },
        removeFromCart(state, action) {
            const removeItem = state.cartItem.filter(
                (item) => item.id !== action.payload,
            )
            state.cartItem = removeItem
        },
    },
})
export const { addToCart, clearCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer
