import './App.css';
import React from 'react'
// import { BrowserRouter, Route } from 'react-router-dom'
// import UserHome from "./components/User/Page/User_Home"
// import AdminHome from "./components/Admin/Pages/Admin_Home"
import UserHeader from "./components/User/Header/User_Header";
import Booking from "./components/User/Page/Booking";

function App() {
  return (
    // <BrowserRouter>
    //   <Route path='/' components={UserHome} exact />
    //   <Route path='/Admin' components={AdminHome} />
    // </BrowserRouter>
    <>
      <UserHeader />
      <Booking />
    </>

  );
}

export default App;
