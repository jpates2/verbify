import { createSlice } from "@reduxjs/toolkit";

const statusSlice = createSlice({
  name: "status",
  initialState: { status: false },
  reducers: {
    updateLoggedInStatus(state, action) {
      return {
        status: action.payload.loggedInStatus,
      }
    }
  }
})

export const statusActions = statusSlice.actions;

export default statusSlice.reducer;
