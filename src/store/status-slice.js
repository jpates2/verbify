import { createSlice } from "@reduxjs/toolkit";

const statusSlice = createSlice({
  name: "status",
  initialState: { loggedInStatus: false },
  reducers: {
    updateLoggedInStatus(state, action) {
      return {
        loggedInStatus: action.payload.loggedInStatus,
      }
    }
  }
})

export const statusActions = statusSlice.actions;

export default statusSlice.reducer;
