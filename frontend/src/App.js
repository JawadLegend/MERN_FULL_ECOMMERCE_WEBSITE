import "./App.css";
import React, { useState,useEffect } from "react";
import Header from "./component/Layout/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WebFont from "webfontloader";
import { Footer } from "./component/Layout/Footer/Footer";
import Home from "./component/Home/Home";
import ProductDetails from "./component/Product/ProductDetails";
import Products from "./component/Product/Products";
import Search from "./component/Product/Search";
import Profile from "./component/User/Profile";
import UpdatePassword from "./component/User/UpdatePassword";
import UpdateProfile from "./component/User/UpdateProfile";
import LoginSignUp from "./component/User/LoginSignUp";
import { loadUser } from "./actions/userAction";
import store from "./store";
import { UserOptions } from "./component/Layout/Header/UserOptions";
import { useSelector } from "react-redux";
import ProtectedRoute from "./component/Route/ProtectedRoute";
import ForgotPassword from "./component/User/ForgotPassword";
import ResetPassword from "./component/User/ResetPassword";
import Cart from "./component/Cart/Cart";
import Shipping from "./component/Cart/Shipping";
import Payment from "./component/Cart/Payment";
import ConfirmOrder from "./component/Cart/ConfirmOrder";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import OrderSuccess from "./component/Cart/OrderSuccess";
import MyOrders from "./component/Order/MyOrders";
import OrderDetails from "./component/Order/OrderDetails";
import Dashboard from "./component/Admin/Dashboard";
import NewProduct   from "./component/Admin/NewProduct";
import UpdateProduct   from "./component/Admin/UpdateProduct";
import OrderList   from "./component/Admin/OrderList";
import ProcessOrder   from "./component/Admin/ProcessOrder";
import ProductList from "./component/Admin/ProductList";
import UsersList from "./component/Admin/UsersList";
import UpdateUser from "./component/Admin/UpdateUser";
import ProductReviews from "./component/Admin/ProductReviews";
import NotFound from "./component/Layout/NotFound/NotFound";
import Contact from "./component/Layout/Contact/Contact";
import About from "./component/Layout/About/About";

import axios from "axios";

function StripeWrapper({ children }) {
  const [stripeApiKey, setStripeApiKey] = useState("");

  useEffect(() => {
    async function getStripeApiKey() {
      const { data } = await axios.get("/api/v1/stripeapikey");
      setStripeApiKey(data.stripeApiKey);
    }
    getStripeApiKey();
  }, []);

    window.addEventListener("contextmenu", (e) => e.preventDefault());


  if (!stripeApiKey) {
    return <div>Loading...</div>;
  }

  const stripePromise = loadStripe(stripeApiKey);

  return <Elements stripe={stripePromise}>{children}</Elements>;
}
function App() {

  const { isAuthenticated, user } = useSelector((state) => 
  state.user);

  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  }


  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
    store.dispatch(loadUser());
    getStripeApiKey();
  }, []);

  return (
    <Router>
      <Header />
      {isAuthenticated && <UserOptions user={user} />}
      <Routes>

        <Route element={<ProtectedRoute />}>

        {
            stripeApiKey && (<Route path="/payment/process"  element={ <StripeWrapper>
                  <Payment/>
                </StripeWrapper>
              } 
            />
            )
          }

          <Route path="/account" element={<Profile />} />
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:keyword" element={<Products />} />
          <Route path="/search" element={<Search />} />
          <Route path="/me/update" element={<UpdateProfile />} />
          <Route path="/password/update" element={<UpdatePassword />} />
          <Route path="/cart/shipping" element={<Shipping />} />
          <Route path="/order/confirm" element={<ConfirmOrder />} />
          <Route path="/success" element={<OrderSuccess />} />
          <Route path="/orders" element={<MyOrders />} />
          <Route path="/order/:id" element={<OrderDetails/>} />
          <Route isAdmin={true} path="/admin/dashboard" element={<Dashboard />} />
          <Route isAdmin={true} path="/admin/products" element={<ProductList />} />
          <Route isAdmin={true} path="/admin/product" element={<NewProduct />} />
          <Route isAdmin={true} path="/admin/product/:id" element={<UpdateProduct />} />
          <Route isAdmin={true} path="/admin/orders" element={<OrderList />} />
          <Route isAdmin={true} path="/admin/order/:id" element={<ProcessOrder />} />
          <Route isAdmin={true} path="/admin/users" element={<UsersList />} />
          <Route isAdmin={true} path="/admin/user/:id" element={<UpdateUser />} />
          <Route isAdmin={true} path="/admin/reviews" element={<ProductReviews />} />
        </Route>


        <Route path="/password/forgot" element={<ForgotPassword />} />
        <Route path="/password/reset/:token" element={<ResetPassword />} />

        <Route path="/register" element={<LoginSignUp />} />
        <Route path="/login" element={<LoginSignUp />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />


        <Route path="/cart" element={<Cart />} />

        <Route path="*" element={<NotFound/>}/>
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
