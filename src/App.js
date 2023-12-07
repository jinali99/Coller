import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer/footer'
import Header from './Components/Header/header'
import Contactus from './Components/ContactUs/contactus'
import Aboutus from './Components/AboutUs/aboutus'
import Dashboard from './Components/Dashboard/dashboard'
import { BrowserRouter } from 'react-router-dom'
import Product from './Components/Products/product'
import Category from './Components/Category/category'
import Account from './Components/Account/account'
import Wishlist from './Components/Wishlist/wishlist'
import Cart from './Components/Cart/cart'

const Layout = (props) => {
    return (
        <>
            <Header />
            <main className="main">{props.children}</main>
            <Footer />
        </>
    )
}

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Layout>
                            <Dashboard />
                        </Layout>
                    }
                    index
                />
                <Route
                    path="/about"
                    element={
                        <Layout>
                            <Aboutus />
                        </Layout>
                    }
                />
                <Route
                    path="/contact"
                    element={
                        <Layout>
                            <Contactus />
                        </Layout>
                    }
                />
                <Route
                    path="/products"
                    element={
                        <Layout>
                            <Product />
                        </Layout>
                    }
                />
                <Route
                    path="/category/:categoryname"
                    element={
                        <Layout>
                            <Category />
                        </Layout>
                    }
                />
                <Route
                    path="/wishlist"
                    element={
                        <Layout>
                            <Wishlist />
                        </Layout>
                    }
                />
                <Route
                    path="/cart"
                    element={
                        <Layout>
                            <Cart />
                        </Layout>
                    }
                />
                <Route
                    path="/account"
                    element={
                        <Layout>
                            <Account />
                        </Layout>
                    }
                />
            </Routes>
        </BrowserRouter>
    )
}

export default App
