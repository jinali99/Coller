import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer/footer'
import Header from './Components/Header/header'
import Contactus from './Components/ContactUs/contactus'
import Aboutus from './Components/AboutUs/aboutus'
import Dashboard from './Components/Dashboard/dashboard'
import { BrowserRouter } from 'react-router-dom'
import Product from './Components/Products/product'

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
            </Routes>
        </BrowserRouter>
    )
}

export default App
