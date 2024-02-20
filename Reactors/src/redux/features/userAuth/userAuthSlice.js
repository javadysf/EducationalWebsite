import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: false,
};

const userAuthSlice = createSlice({
  name: "userAuthSlice",
  initialState,
  reducers: {
    setUser: (state, action) => {state.token = action.payload.token},
    RemoveUser: (state, action) => {state.token = action.payload.token},
  },
});

export const { setUser, RemoveUser } = userAuthSlice.actions;
export default userAuthSlice.reducer;