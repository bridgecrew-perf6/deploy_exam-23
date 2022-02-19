import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductForm } from "./components/ProductForm";
import { Mycontext } from "./context/Mycontext";
import Detail from "./views/Detail";
import {Main} from "./views/Main";
import { Update } from "./views/Update";


function App() {


  return (

    <div className="container">

      <BrowserRouter>

      <Mycontext>
        <Routes>

          <Route index element = {<Main />}/>   
          <Route path='/pet/new' element = {<ProductForm/>}/>   
           
          <Route path='/pets/:id' element = {<Detail/>}/>  
          <Route path='/pets/:id/edit' element = {<Update/>}/>  
          

        </Routes>

      </Mycontext>

      </BrowserRouter>
    </div>
   

  );
}

export default App;
