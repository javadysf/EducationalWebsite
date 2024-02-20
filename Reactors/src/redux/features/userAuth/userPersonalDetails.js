import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  phoneNumber: "",
};

const PersonalDetailsSlice = createSlice({
  name: "PersonalDetailsSlice",
  initialState,
  reducers: {
    setNum: (state, action) => {state.phoneNumber = action.payload.phoneNumber},
  },
});

export const { setNum } = PersonalDetailsSlice.actions;
export default PersonalDetailsSlice.reducer;