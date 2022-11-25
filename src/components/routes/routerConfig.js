import { Route, Routes } from "react-router-dom";
import React  from 'react'
import Login from "../connexion";
import Products from  "../Products/Products"
import MoviesDisplay from "../moviesDisplay";

const RouterConfig = () => {
  return (
    <Routes>
        <Route path={'/login'} element={<Login/>}/>
        <Route path={'/movies'} element={<MoviesDisplay/>}/>
        <Route path={'/products'} element={<Products/>}/>
    </Routes>
   
  )
}

export default RouterConfig