import './App.css';
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UserHome from "./components/User/Page/User_Home"
import AdminHome from "./components/Admin/Pages/Admin_Home"
import Booking from "./components/User/Page/Booking";
import UserOrderDetails from "./components/Admin/Pages/UserOrderDetails";
import Login from "./components/Admin/Pages/Login"

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<UserHome />}> </Route>
          <Route path='/Carbook' element={<Booking />}> </Route>
          <Route path='/Admin/Login' element={<Login />}>   </Route>
          <Route path='/Admin/AdminHome' element={<AdminHome />}>   </Route>
          <Route path='/Admin/OrderDetails' element={<UserOrderDetails />}>   </Route>
        </Routes>
      </Router>
    </div >

  );
}

export default App;
