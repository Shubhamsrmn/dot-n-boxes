import { createSlice } from "@reduxjs/toolkit";
export type userStateType = {
  isUserTurn: boolean;
  userBoxesCount: number;
  botBoxesCount: number;
};
const initialState: userStateType = {
  isUserTurn: true,
  userBoxesCount: 0,
  botBoxesCount: 0,
};
const gameStateReducer = createSlice({
  name: "gameState",
  initialState: initialState,
  reducers: {
    increamentUserBoxesCount: (state) => {
      state.userBoxesCount++;
    },
    increamentBotBoxesCount: (state) => {
      state.userBoxesCount++;
    },
    toggleUserTurn: (state) => {
      state.isUserTurn = !state.isUserTurn;
    },
  },
});
export default gameStateReducer.reducer;
export const {
  increamentBotBoxesCount,
  increamentUserBoxesCount,
  toggleUserTurn,
} = gameStateReducer.actions;
