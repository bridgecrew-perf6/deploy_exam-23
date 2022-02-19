import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Mycontext } from "./context/Mycontext";
import Detail from "./views/Detail";
import {Main} from "./views/Main";
import { Update } from "./views/Update";


function App() {


  return (

    <div className="d-flex justify-content-center">

      <BrowserRouter>

      <Mycontext>
        <Routes>

          <Route path='/' element = {<Main />}/>    
          <Route path='/:id' element = {<Detail/>}/>  
          <Route path='/:id/edit' element = {<Update/>}/>  
          

        </Routes>

      </Mycontext>

      </BrowserRouter>
    </div>
   

  );
}

export default App;
