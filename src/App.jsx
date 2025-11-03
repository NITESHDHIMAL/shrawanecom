
import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Layout from './components/Layout/Layout'
import SingleProduct from './pages/SingleProduct'
import Addproduct from './pages/Addproduct'
import { ToastContainer } from 'react-toastify'
import Signin from './pages/Signin'
import ProtectedRoute from './components/ProtectedRoute'
import Profile from './pages/Profile'

function App() {

  return (
    <>
      <Layout>
        <ToastContainer/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Signin />} />
          <Route path='/:id' element={<Home />} />

          <Route path='/profile' element={<Profile />} />


          <Route path='/add-product' element={ <ProtectedRoute><Addproduct /></ProtectedRoute>} />
          <Route path='/product/:id' element={<SingleProduct />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/product' element={<Product />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
