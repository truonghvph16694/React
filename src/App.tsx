import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/Website/HomePage'
import Product from './pages/Website/Product'
import Admin from './pages/Admin/Admin'
import AddCategory from './pages/Admin/category/AddCategory'
import UpdateCategory from './pages/Admin/category/UpdateCategory'
import AddProduct from './pages/Admin/products/AddProduct'
import UpdateProduct from './pages/Admin/products/UpdateProduct'
import NotFound from './pages/notFound'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='product' element={<Product />} />
        <Route path='admin' element={<Admin />} />
        <Route path='admin/category/add' element={<AddCategory />} />
        <Route path='admin/category/edit' element={<UpdateCategory />} />
        <Route path='admin/product/add' element={<AddProduct />} />
        <Route path='admin/product/edit' element={<UpdateProduct />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
