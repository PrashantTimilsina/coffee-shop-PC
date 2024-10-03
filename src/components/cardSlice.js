import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  card: [],
  price: 0,
};
const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addCard(state, action) {
      state.card.push(action.payload);
    },
    deleteCard(state, action) {
      state.card = state.card.filter((cards) => cards.id !== action.payload);
    },
    totalPrice(state) {
      state.price = state.card.reduce((acc, card) => {
        const priceString = card.price.replace("$", "");
        const validPrice = Number(priceString);
        return acc + (isNaN(validPrice) ? 0 : validPrice);
      }, 0);
    },
  },
});
export const { addCard, deleteCard, totalPrice } = cardSlice.actions;
export default cardSlice.reducer;
