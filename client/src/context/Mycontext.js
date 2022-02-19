import React ,{createContext, useState} from 'react'
export const myContext = createContext();


export const Mycontext = ({children}) => {

    const [products, setProducts] = useState([]);


    const removeFromDom = productID => {
        setProducts(products.filter(product => product._id !== productID))
      }
    

  return (

    

    <myContext.Provider value = {{removeFromDom, products, setProducts}}>
    {children}
    </myContext.Provider>

  )
}
