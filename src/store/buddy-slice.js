import { createSlice } from "@reduxjs/toolkit";

const buddySlice = createSlice({
  name: "buddy",
  initialState: { buddyName: "", buddyImg: "" },
  reducers: {
    addBuddy(state, action) {
      return {
        ...state,
        buddyName: action.payload.buddyName,
        buddyImg: action.payload.buddyImg,
      }
    }
  }
})

export const buddyActions = buddySlice.actions;

export default buddySlice.reducer;
