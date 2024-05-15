
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Add from './pages/Add';
import Detail from './pages/Detail';
import Basket from './pages/Basket';
import MainProvider from './context/MainProvider';
import Update from './pages/Update';
import WishListProvider from './context/WishListProvider';
import WishList from './pages/WishList';
function App() {


  return (
    <>
    <MainProvider>
      <WishListProvider>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/add" element={<Add />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/update/:id" element={<Update/>} />
          <Route path="/wishlist" element={<WishList/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </WishListProvider>
    </MainProvider>
    </>
  )
}

export default App
