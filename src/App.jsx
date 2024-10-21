import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Hometemplate } from './components/Hometemplate/Hometemplate'
import React, { lazy } from 'react'

import { Login } from "./components/Login/Login"
// import { Content } from './components/Content/Content'
import { Register } from './components/Register/Register'
// import { Detail } from './components/Detail/Detail'
// import { ProductByCate } from './components/Category/ProductByCate'
import { Cart } from './components/Cart/Cart'
import { InforUser } from './components/InforUser/InforUser'


const Detail = React.lazy(() => import('./components/Detail/Detail'));
const Content = React.lazy(() => import('./components/Content/Content'));
const ProductByCate = React.lazy(() => import('./components/Category/ProductByCate'));
function App() {
  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hometemplate />}>
            <Route path='' index element={<Content />} />
            <Route path='/detail'>
              <Route path=':id' element={<Detail />} />
            </Route>
            <Route path='/category'>
              <Route path=':id' element={<ProductByCate />} />
              <Route path='/category:id/detail'>
                <Route path=':id' element={<Detail /> } />
              </Route>
            </Route>
          </Route>
            <Route path='/cart' element={<Cart />}/>
            <Route path='/user' element={<InforUser />}/>
            <Route path='login' element={<Login />} />
            <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App
