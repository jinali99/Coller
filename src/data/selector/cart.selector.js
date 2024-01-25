import { createSelector } from '@reduxjs/toolkit'

export const cartItems = (store) => store.cart.cartItem
