import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSidebarOpen:false
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    isShowingSidebar: (state) => {
      state.isSidebarOpen  = !state.isSidebarOpen
    },
  },
});

export const { isShowingSidebar } = sidebarSlice.actions;

export default sidebarSlice.reducer;
