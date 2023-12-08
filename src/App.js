import { Route, Routes, redirect } from 'react-router-dom'
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
import PageNotFound from './Components/PageNotFound/pageNotFound'

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
                    exact
                    element={
                        <Layout>
                            <Aboutus />
                        </Layout>
                    }
                />
                <Route
                    path="/contact"
                    exact
                    element={
                        <Layout>
                            <Contactus />
                        </Layout>
                    }
                />
                <Route
                    path="/products"
                    exact
                    element={
                        <Layout>
                            <Product />
                        </Layout>
                    }
                />
                <Route
                    path="/category/:categoryName"
                    exact
                    element={
                        <Layout>
                            <Category />
                        </Layout>
                    }
                />
                <Route
                    path="/wishlist"
                    exact
                    element={
                        <Layout>
                            <Wishlist />
                        </Layout>
                    }
                />
                <Route
                    path="/cart"
                    exact
                    element={
                        <Layout>
                            <Cart />
                        </Layout>
                    }
                />
                <Route
                    path="/account"
                    exact
                    element={
                        <Layout>
                            <Account />
                        </Layout>
                    }
                />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
