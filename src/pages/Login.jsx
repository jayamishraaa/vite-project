// pages/Login.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Import `useDispatch` from Redux
import Signup from '../components/Signup'; // Signup component
import { userdata } from '../Redux/Actions'; // Import the action


const Login = () => {
  const [newData, setNewData] = useState(null); // State to hold form data

  const dispatch = useDispatch(); // Hook to dispatch actions
  const userReducer = useSelector(state => state.userReducer)
  const {user, users} = userReducer

  // const setUser = () => {
  //   if (newData) {
  //     dispatch(userdata( newData)); // Dispatch the action with form data
  //   }
  // };

  console.log(users)

  return (
    <div>
      <Signup setNewData={setNewData} newData={newData} />
      {/* <button onClick={setUser}>Submit</button> */}
    </div>
  );
};

export default Login;
