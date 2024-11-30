import { useState } from 'react'
import Login from './pages/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { userdata } from './Redux/Actions';
import Users from './pages/Users';

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/"> 
        <Route index element={<Login />} /> 

        <Route path="/users" element={<Users />} />
        </Route>
        </Routes>
      </BrowserRouter>
        {/* <Login /> */}
    </>
  )
}

export default App
