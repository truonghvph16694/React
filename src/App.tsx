import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Product from "./pages/layout/Website/Product";

import NotFound from "./pages/notFound";

import { createCate, listCate, removeCate, updateCate } from "./api/category";
import { add, list, remove, update } from "./api/product";
import { ICategory } from "./interfaces/category";
import { IProduct } from "./interfaces/products";
import Admin from "./pages/layout/Admin/Admin";
import AddCategory from "./pages/layout/Admin/category/AddCategory";
import CateManager from "./pages/layout/Admin/category/CateManager";
import UpdateCategory from "./pages/layout/Admin/category/UpdateCategory";
import AddProduct from "./pages/layout/Admin/products/AddProduct";
import ProductAdmin from "./pages/layout/Admin/products/ProductManager";
import UpdateProduct from "./pages/layout/Admin/products/UpdateProduct";

function App() {
  // const [count, setCount] = useState(0);

  const [products, setProducts] = useState<IProduct[]>([]);
  const [category, setCategory] = useState<ICategory[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await list();
      setProducts(data);
    };
    getProducts();
  }, []);
  useEffect(() => {
    const getCategory = async () => {
      const { data } = await listCate();
      setCategory(data);
    }
    getCategory()
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
  const onHandleUpdate = async (product: IProduct) => {
    try {
      // api
      const { data } = await update(product);
      // reREnder - 
      // Tạo ra 1 vòng lặp, nếu item._id == _id sản phẩm vừa cập nhật (data), thì cập nhật ngược lại giữ nguyên
      setProducts(products.map(item => item.id === data._id ? product : item))
    } catch (error) {

    }
  }
  //category
  const onHandleAddCate = async (category: any) => {
    const { data } = await createCate(category)
    setCategory([...category, data])
  }
  const onHandRemoveCate = async (_id: number) => {
    removeCate(_id);
    setCategory(category.filter(item => item.id !== _id))
  }
  const onHandleUpdateCategory = async (category: ICategory) => {
    try {
      // api
      const { data } = await updateCate(category);
      // reREnder - 
      // Tạo ra 1 vòng lặp, nếu item._id == _id sản phẩm vừa cập nhật (data), thì cập nhật ngược lại giữ nguyên
      setCategory(category.map(cate => cate.id === data._id ? category : cate))
    } catch (error) {

    }
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Admin />} />
        <Route path="product" element={<Product />} />
        <Route path="admin" element={<Admin />}>
          <Route path="products" element={<ProductAdmin products={products} onRemove={onHandleRemove} />} />
          <Route path="products/add" element={<AddProduct onAdd={onHandleAdd} />} />
          <Route path="products/:_key/update" element={<UpdateProduct onUpdate={onHandleUpdate} />} />
          <Route path="category" element={<CateManager onRemoveCate={onHandRemoveCate} category={category} />} />
          <Route path="category/add" element={<AddCategory onAddCate={onHandleAddCate} />} />
          <Route path="category/:_key/update" element={<UpdateCategory onUpdateCategory={onHandleUpdateCategory} />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
