import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { gameStateType } from "./store";

const initialState: gameStateType = {
  boardData: [
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
  ],
  linesCount: 60,
  userBoxesCount: 0,
  botBoxesCount: 0,
  playerTurn: "red",
};
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
      if (state.boardData[rowIndex][colIndex][side] === 1) return;
      let boxFilled = false;
      if (side === "l" || side === "t") {
        state.boardData[rowIndex][colIndex][side] = value;
      } else if (side === "d" || side === "r") {
        state.boardData[rowIndex][colIndex][side] = value;
        if (side === "d") {
          if (rowIndex + 1 < state.boardData.length) {
            state.boardData[rowIndex + 1][colIndex]["t"] = value;
            if (
              state.boardData[rowIndex + 1][colIndex].l !== -1 &&
              state.boardData[rowIndex + 1][colIndex].r !== -1 &&
              state.boardData[rowIndex + 1][colIndex].t !== -1 &&
              state.boardData[rowIndex + 1][colIndex].d !== -1
            ) {
              state.boardData[rowIndex + 1][colIndex].box = value;
              boxFilled = true;
              if (value === 1) state.userBoxesCount++;
              if (value === 0) state.botBoxesCount++;
            }
          }
        } else if (side === "r") {
          if (colIndex + 1 < state.boardData[rowIndex].length) {
            state.boardData[rowIndex][colIndex + 1]["l"] = value;
            if (
              state.boardData[rowIndex][colIndex + 1].l !== -1 &&
              state.boardData[rowIndex][colIndex + 1].r !== -1 &&
              state.boardData[rowIndex][colIndex + 1].t !== -1 &&
              state.boardData[rowIndex][colIndex + 1].d !== -1
            ) {
              state.boardData[rowIndex][colIndex + 1].box = value;
              boxFilled = true;
              if (value === 1) state.userBoxesCount++;
              if (value === 0) state.botBoxesCount++;
            }
          }
        }
      }
      if (
        state.boardData[rowIndex][colIndex].l !== -1 &&
        state.boardData[rowIndex][colIndex].r !== -1 &&
        state.boardData[rowIndex][colIndex].t !== -1 &&
        state.boardData[rowIndex][colIndex].d !== -1
      ) {
        state.boardData[rowIndex][colIndex].box = value;
        boxFilled = true;
        if (value === 1) state.userBoxesCount++;
        if (value === 0) state.botBoxesCount++;
      }
      state.linesCount--;
      if (!boxFilled) {
        state.playerTurn = state.playerTurn === "red" ? "blue" : "red";
      }
    },
  },
});
export default gameStateReducer.reducer;
export const { updateGameStateData } = gameStateReducer.actions;
