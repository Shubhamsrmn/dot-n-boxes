import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { gameStateType } from "./store";

const initialState: gameStateType = [
  [
    {
      l: -1,
      t: -1,
      r: -1,
      d: -1,
      box: -1,
    },
    {
      l: -1,
      t: -1,
      r: -1,
      d: -1,
      box: -1,
    },
    {
      l: -1,
      t: -1,
      r: -1,
      d: -1,
      box: -1,
    },
    {
      l: -1,
      t: -1,
      r: -1,
      d: -1,
      box: -1,
    },
    {
      l: -1,
      t: -1,
      r: -1,
      d: -1,
      box: -1,
    },
  ],
  [
    {
      l: -1,
      t: -1,
      r: -1,
      d: -1,
      box: -1,
    },
    {
      l: -1,
      t: -1,
      r: -1,
      d: -1,
      box: -1,
    },
    {
      l: -1,
      t: -1,
      r: -1,
      d: -1,
      box: -1,
    },
    {
      l: -1,
      t: -1,
      r: -1,
      d: -1,
      box: -1,
    },
    {
      l: -1,
      t: -1,
      r: -1,
      d: -1,
      box: -1,
    },
  ],
  [
    {
      l: -1,
      t: -1,
      r: -1,
      d: -1,
      box: -1,
    },
    {
      l: -1,
      t: -1,
      r: -1,
      d: -1,
      box: -1,
    },
    {
      l: -1,
      t: -1,
      r: -1,
      d: -1,
      box: -1,
    },
    {
      l: -1,
      t: -1,
      r: -1,
      d: -1,
      box: -1,
    },
    {
      l: -1,
      t: -1,
      r: -1,
      d: -1,
      box: -1,
    },
  ],
  [
    {
      l: -1,
      t: -1,
      r: -1,
      d: -1,
      box: -1,
    },
    {
      l: -1,
      t: -1,
      r: -1,
      d: -1,
      box: -1,
    },
    {
      l: -1,
      t: -1,
      r: -1,
      d: -1,
      box: -1,
    },
    {
      l: -1,
      t: -1,
      r: -1,
      d: -1,
      box: -1,
    },
    {
      l: -1,
      t: -1,
      r: -1,
      d: -1,
      box: -1,
    },
  ],
  [
    {
      l: -1,
      t: -1,
      r: -1,
      d: -1,
      box: -1,
    },
    {
      l: -1,
      t: -1,
      r: -1,
      d: -1,
      box: -1,
    },
    {
      l: -1,
      t: -1,
      r: -1,
      d: -1,
      box: -1,
    },
    {
      l: -1,
      t: -1,
      r: -1,
      d: -1,
      box: -1,
    },
    {
      l: -1,
      t: -1,
      r: -1,
      d: -1,
      box: -1,
    },
  ],
];
const gameStateReducer = createSlice({
  name: "gameState",
  initialState: initialState,
  reducers: {
    updateGameStateData: (
      state,
      action: PayloadAction<{
        rowIndex: number;
        colIndex: number;
        side: "l" | "d" | "r" | "t";
        value: 0 | 1;
      }>
    ) => {
      const { rowIndex, colIndex, side, value } = action.payload;
      if (state[rowIndex][colIndex][side] === 1) return;
      if (side === "l" || side === "t") {
        state[rowIndex][colIndex][side] = value;
      } else if (side === "d" || side === "r") {
        state[rowIndex][colIndex][side] = value;
        if (side === "d") {
          if (rowIndex + 1 < state.length)
            state[rowIndex + 1][colIndex]["t"] = value;
        } else if (side === "r") {
          if (colIndex + 1 < state[rowIndex].length)
            state[rowIndex][colIndex + 1]["l"] = value;
        }
      }
      if (
        state[rowIndex][colIndex].l !== -1 &&
        state[rowIndex][colIndex].r !== -1 &&
        state[rowIndex][colIndex].t !== -1 &&
        state[rowIndex][colIndex].d !== -1
      ) {
        state[rowIndex][colIndex].box = value;
      }
    },
  },
});
export default gameStateReducer.reducer;
export const { updateGameStateData } = gameStateReducer.actions;
