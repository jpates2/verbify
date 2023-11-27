import { configureStore } from "@reduxjs/toolkit";

import buddyReducer from "./buddy-slice";
import userReducer from "./user-slice";
import statusReducer from "./status-slice";

const store = configureStore({
  reducer: { user: userReducer, buddy: buddyReducer, status: statusReducer },
  devTools: process.env.NODE_ENV !== 'production'
})

export default store;
