
import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Layout from './components/Layout/Layout'
import SingleProduct from './pages/SingleProduct'
import Addproduct from './pages/Addproduct'
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <>
      <Layout>
        <ToastContainer/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:id' element={<Home />} />
          <Route path='/add-product' element={<Addproduct />} />
          <Route path='/product/:id' element={<SingleProduct />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/product' element={<Product />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
