import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { fullName: "", phone: "", email: "", password: "", username: "" },
  reducers: {
    addUser(state, action) {
      return {
        ...state,
        fullName: action.payload.fullName,
        phone: action.payload.phone,
        email: action.payload.email,
        password: action.payload.password,
      }
    },
    addUsername(state, action) {
      return {
        ...state,
        username: action.payload.username,
      }
    }
  }
})

export const userActions = userSlice.actions;

export default userSlice.reducer;
