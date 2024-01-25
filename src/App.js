import { Route, Routes, redirect } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/footer'
import Header from './components/Header/header'
import Contactus from './components/ContactUs/contactus'
import Aboutus from './components/AboutUs/aboutus'
import Dashboard from './components/Dashboard/dashboard'
import { BrowserRouter } from 'react-router-dom'
import Product from './components/Products/product'
import Category from './components/Category/category'
import Account from './components/Account/account'
import Wishlist from './components/Wishlist/wishlist'
import Cart from './components/Cart/cart'
import PageNotFound from './components/PageNotFound/pageNotFound'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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
            <ToastContainer />
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
