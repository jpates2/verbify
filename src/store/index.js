import { configureStore } from "@reduxjs/toolkit";

import buddyReducer from "./buddy-slice";
import userReducer from "./user-slice";

const store = configureStore({
  reducer: { user: userReducer, buddy: buddyReducer },
  devTools: process.env.NODE_ENV !== 'production'
})

export default store;
