
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import MainLayout from './layout/mainLayout'
import Add from './pages/add'
import Admin from './pages/admin'
import Basket from './pages/basket'
import Home from './pages/home'
import Detail from './pages/Detail'
import BasketProvider from "./context/basketProvider";
import Update from "./pages/update";
import { HelmetProvider } from 'react-helmet-async';

function App() {

  return (
    <>
     <HelmetProvider >
    <BasketProvider>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home/>} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/add" element={<Add />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/update/:id" element={<Update/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </BasketProvider>
    </HelmetProvider>
    </>
  )
}

export default App
