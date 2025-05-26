import { useDispatch, useSelector } from "react-redux";
import SingleConnectedRow from "../components/game-board/SingleConnectedRow";
import type { storeType } from "../store/store";
import { useEffect } from "react";
import { updateGameStateData } from "../store/gameStateSlice";
import { toggleUserTurn } from "../store/userStateSlice";
const getRandomItems = (gameBoardLength: number) => {
  const randomRowIndex = Math.floor(Math.random() * gameBoardLength);
  const randomColIndex = Math.floor(Math.random() * gameBoardLength);
  //@ts-ignore
  let randomSide: "l" | "d" | "r" | "t" = ["l", "r", "d", "t"][
    Math.floor(Math.random() * 4)
  ];
  if (randomRowIndex >= 1 && randomSide === "t") randomSide = "d";
  if (randomColIndex >= 1 && randomSide === "l") randomSide = "r";
  return { randomColIndex, randomRowIndex, randomSide };
};
const GameBoard = () => {
  const dispatch = useDispatch();
  const gameBoardState = useSelector((state: storeType) => state.gameState);
  const { isUserTurn } = useSelector((state: storeType) => state.userState);

  useEffect(() => {
    if (!isUserTurn) {
      let validMove = false;
      while (!validMove) {
        const { randomRowIndex, randomColIndex, randomSide } = getRandomItems(
          gameBoardState.length
        );
        if (gameBoardState[randomRowIndex][randomColIndex][randomSide] === -1) {
          dispatch(
            updateGameStateData({
              rowIndex: randomRowIndex,
              colIndex: randomColIndex,
              side: randomSide,
              value: 0,
            })
          );
          dispatch(toggleUserTurn());
          validMove = true;
        }
      }
    }
  }, [isUserTurn]);

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <h1 className="text-center text-5xl font-bold text-shadow-md/30 text-shadow-black text-[#1D3557] uppercase mb-8">
        Dots & Boxes
      </h1>
      {gameBoardState.map((row, index) => (
        <SingleConnectedRow key={index} rowState={row} rowIndex={index} />
      ))}
    </div>
  );
};

export default GameBoard;
