import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shoppingItems: [
    { id: 0, title: "hi", tutor: "bye", price: 2000, thumbnail: null },
  ],
  total: 0,
  totalPrice: 0,
};

const shoppingCardSlice = createSlice({
  name: "shoppingCard",
  initialState,
  reducers: {
    addToCard: (state, action) => {
      const course = { ...action.payload };
      const existedItem = state.shoppingItems.find(
        (item) => item.id === course.id
      );

      if (existedItem === undefined) {
        state.total = state.total + 1;
        state.totalPrice = state.totalPrice + course.price;
        state.shoppingItems.push(course);
      }
    },
    removeCourse: (state, action) => {
      state.total = state.total - 1;
      const item = state.shoppingItems.find(
        (item) => item.id === action.payload
      );
      state.totalPrice = state.totalPrice - item.price;
      state.shoppingItems = state.shoppingItems.filter((item) => {
        return item.id !== action.payload;
      });
    },
  },
});

export const { addToCard, removeCourse } = shoppingCardSlice.actions;
export default shoppingCardSlice.reducer;
