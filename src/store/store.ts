import { configureStore } from "@reduxjs/toolkit";
import gameStateReducer from "./gameStateSlice";
import userStateReducer, { type userStateType } from "./userStateSlice";
export type storeType = {
  gameState: gameStateType;
  userState: userStateType;
};
export type gameStateType = boxStateType[][];
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
    userState: userStateReducer,
  },
});
export default store;
