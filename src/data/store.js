import { combineReducers, configureStore } from '@reduxjs/toolkit'
import cartReducer from './reducer/cartSlice'
import storage from 'redux-persist/lib/storage'
import {
    FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    REHYDRATE,
    persistReducer,
    persistStore,
} from 'redux-persist'

const persistConfig = {
    key: 'root',
    storage,
}
const reducer = combineReducers({
    cart: cartReducer,
})

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})
export const persistor = persistStore(store)

export default store
