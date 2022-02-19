import axios from 'axios';
import React, { useContext, useEffect,useState } from 'react'
import { ProductForm } from '../components/ProductForm'
import { ProductList } from '../components/ProductList';
import { myContext } from '../context/Mycontext';

export const Main = () => {

  // const [products, setProducts] = useState([]);
  const {products,setProducts} = useContext(myContext);

  console.log(products);

  useEffect(()=>{
    axios.get('http://localhost:8000/api/allproducts')
      .then(res=>{
          // setProducts(res.data);
          setProducts(res.data);
          // setLoaded(true);
      })
  },[])

  // const removeFromDom = productID => {
  //   setProducts(products.filter(product => product._id !== productID))
  // }
 
  return (

    <div>

        <ProductForm  />

        {products.length > 0 && <ProductList />}

{/*         
        <ProductForm products = {products} setProducts = {setProducts} />

{<ProductList  products = {products} removeFromDom = {removeFromDom} />} */}
    </div>

  )
}
