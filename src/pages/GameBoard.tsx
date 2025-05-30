import { useDispatch, useSelector } from "react-redux";
import SingleConnectedRow from "../components/game-board/SingleConnectedRow";
import type { storeType } from "../store/store";
import { useEffect } from "react";
import { updateGameStateData } from "../store/gameStateSlice";

import { useNavigate } from "react-router";
import ScoreBoardContainer from "../components/game-board/ScoreBoardContainer";
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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { boardData, linesCount, botBoxesCount, userBoxesCount, playerTurn } =
    useSelector((state: storeType) => state.gameState);

  useEffect(() => {
    let timeoutId: any;

    if (playerTurn === "blue" && linesCount !== 0) {
      const makeBotMove = () => {
        let validMove = false;
        let tries = 0;
        while (!validMove && tries < 100) {
          const { randomRowIndex, randomColIndex, randomSide } = getRandomItems(
            boardData.length
          );
          if (boardData[randomRowIndex][randomColIndex][randomSide] === -1) {
            dispatch(
              updateGameStateData({
                rowIndex: randomRowIndex,
                colIndex: randomColIndex,
                side: randomSide,
                value: 0,
              })
            );
            validMove = true;
            tries++;
          }
        }
      };

      timeoutId = setTimeout(makeBotMove, 300);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [playerTurn, boardData, dispatch]);

  // useEffect(() => {
  //   if (linesCount === 0 && botBoxesCount !== 0 && userBoxesCount !== 0) {
  //     const winner =
  //       botBoxesCount === userBoxesCount
  //         ? -1
  //         : botBoxesCount > userBoxesCount
  //         ? 1
  //         : userBoxesCount > botBoxesCount
  //         ? 0
  //         : null;
  //     dispatch(updateGameWinner({ type: winner }));
  //     if (winner !== null) {
  //       setTimeout(() => {
  //         return navigate("/winner-page");
  //       }, 1000);
  //     }
  //   }
  // }, [linesCount, botBoxesCount, userBoxesCount]);

  return (
    <div className="relative h-full flex flex-col items-center justify-center">
      {boardData.map((row, index) => (
        <SingleConnectedRow key={index} rowState={row} rowIndex={index} />
      ))}
      <ScoreBoardContainer />
    </div>
  );
};

export default GameBoard;
