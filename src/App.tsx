import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/layout/Website/HomePage";
import Product from "./pages/layout/Website/Product";

import NotFound from "./pages/notFound";

import AddCategory from "./pages/layout/Admin/category/AddCategory";
import UpdateCategory from "./pages/layout/Admin/category/UpdateCategory";
import AddProduct from "./pages/layout/Admin/products/AddProduct";
import UpdateProduct from "./pages/layout/Admin/products/UpdateProduct";
import { IProduct } from "./interfaces/products";
import { add, list, remove } from "./api/product";
import ProductAdmin from "./pages/layout/Admin/products/ProductAdmin";
import Admin from "./pages/layout/Admin/Admin";

function App() {
  // const [count, setCount] = useState(0);

  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await list();
      setProducts(data);
    };
    getProducts();
  }, []);

  const onHandleAdd = async (product: any) => {
    const { data } = await add(product);
    setProducts([...products, data]);
  }

  const onHandleRemove = async (_id: number) => {
    remove(_id);
    // rerender
    setProducts(products.filter(item => item.id !== _id));
  }
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Admin />} />
        <Route path="product" element={<Product />} />
        <Route path="admin" element={<Admin />}>
          <Route
            path="products"
            element={<ProductAdmin products={products} onRemove={onHandleRemove} />}
          />
          <Route path="category/add" element={<AddCategory />} />
          <Route path="admin/category/edit" element={<UpdateCategory />} />
          <Route
            path="products/add"
            element={<AddProduct onAdd={onHandleAdd} />}
          />
          <Route path="admin/product/edit" element={<UpdateProduct  />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
