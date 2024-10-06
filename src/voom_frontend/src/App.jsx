import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { voom_backend } from 'declarations/voom_backend';
import Home from './pages/home/Home';
import Nav from './componentss/nav/Nav';
import Register from './pages/register/Register';
import SignIn from './pages/signIn/SignIn';
import CartPage from './pages/cart/Cart';
import Categories from './pages/categories/Categories';
import NotificationPage from './pages/notifications/Notifications';
import Orders from './pages/orders/Orders';
import ProductPage from './pages/product-page/ProductPage';
import Profile from './pages/profile/Profile';

const App = () => {
  return (
    <Router>
        <div className="max-w-[390px] border-2 border-red-500 h-full px-3 pt-3 relative mx-auto relative">

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/notification" element={<NotificationPage />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/product-page" element={<ProductPage />} />
                <Route path="/Profile" element={<Profile />} />
            </Routes>

            <Nav />
        </div>
    </Router>
  );
}

export default App