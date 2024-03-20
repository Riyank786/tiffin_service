import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import EditMenu from "./sellercomponent/EditMenu"
import Home from "./component/Home";
import About from "./component/About";
import ContactUs from "./component/ContactUs";
import MenuPage from "./sellercomponent/MenuPage";
import Base from "./component/Base";
import Orders from "./sellercomponent/Orders"
import MyOrder from "./component/MyOrder";
import MenuManagement from "./sellercomponent/MenuManagement"
import Dashboard from "./sellercomponent/Dashboard"
import Login from "./component/Login";
import SignUp from "./component/SignUp";
import PrivateComponent from "./component/PrivateComponent";
import Profile from "./sellercomponent/Profile"
import MyProfile from "./component/MyProfile";
import MenuItemDetail from "./component/MenuItemDetails";

import Header from "./sellercomponent/Header"


function App() {
  const data=JSON.parse(localStorage.getItem("data"));
 
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Base />} />
    <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      {data && data.role==='customer' &&
      <>
      <Route element={<PrivateComponent/>}>
         
        <Route path="/home" element={<Home />} />
        <Route path="/menu/:itemId" element={<MenuItemDetail/>} />
        <Route path="/about" element={<About />} />{" "}
        <Route path="/contact" element={<ContactUs />} /> 
        <Route path="/myorder" element={<MyOrder />} />
        <Route path="/myprofile" element={<MyProfile />} />
       
</Route>
      </> }
      {   data && data.role==='seller' &&   <>
       <Route path="/dashboard" element={<Dashboard />} />
           <Route path="/menu" element={<MenuPage />} />
           <Route path="menu/addmenu" element={<MenuManagement />} />
           <Route path="menu/editmenu" element={<EditMenu />} />
           <Route path="/orders" element={<Orders />} />
           <Route path="/profile" element={<Profile />} />
</>}
      
      
      </Routes></BrowserRouter>

  )}
export default App;
