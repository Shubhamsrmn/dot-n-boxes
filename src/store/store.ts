import { configureStore } from "@reduxjs/toolkit";
import gameStateReducer from "./gameStateSlice";

export type storeType = {
  gameState: gameStateType;
};
export type gameStateType = {
  boardData: boxStateType[][];
  linesCount: number;
  userBoxesCount: number;
  botBoxesCount: number;
  playerTurn: "blue" | "red";
};
export type boxStateType = {
  l: -1 | 0 | 1;
  r: -1 | 0 | 1;
  t: -1 | 0 | 1;
  d: -1 | 0 | 1;
  box: -1 | 0 | 1;
};
const store = configureStore({
  reducer: {
    gameState: gameStateReducer,
  },
});
export default store;
