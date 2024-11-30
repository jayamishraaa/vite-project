import { configureStore } from '@reduxjs/toolkit';
import userReducer from './Reducers/userReducer';

const store = configureStore({
  reducer: {
    userReducer, // Pass in the reducer here
  },
});

export default store;