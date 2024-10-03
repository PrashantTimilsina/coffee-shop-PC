import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./components/cardSlice"; // Assuming you have cardSlice in your features folder

const store = configureStore({
  reducer: {
    card: cardReducer,
  },
});

export default store;
