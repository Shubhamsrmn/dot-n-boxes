import { useDispatch, useSelector } from "react-redux";
import type { boxStateType, storeType } from "../../store/store";
import { updateGameStateData } from "../../store/gameStateSlice";

type props = {
  boxState: boxStateType;
  rowIndex: number;
  colIndex: number;
};
const SingleConnectedBox: React.FC<props> = ({
  boxState,
  rowIndex,
  colIndex,
}) => {
  const { playerTurn } = useSelector((state: storeType) => state.gameState);
  const { l, r, d, t } = boxState;
  const dispatch = useDispatch();
  const onLineClickHandler = (
    rowIndex: number,
    colIndex: number,
    side: "l" | "r" | "d" | "t"
  ) => {
    if (playerTurn === "red") {
      dispatch(updateGameStateData({ rowIndex, colIndex, side, value: 1 }));
    } else {
      console.log("bot turn");
    }
  };
  const getColor = (value: 1 | 0 | -1) =>
    value === 1
      ? "var(--primaryPlayer)"
      : value === 0
      ? "var(--secondaryPlayer)"
      : "var(--primaryGray)";
  const getFilledColor = (value: 1 | 0 | -1) =>
    value === 1
      ? "var(--primaryLightPlayer)"
      : value === 0
      ? "var(--secondaryLightPlayer)"
      : "transparent";

  return (
    <div
      className="w-26 h-26 relative"
      style={{
        backgroundColor: getFilledColor(boxState.box),
      }}
    >
      {colIndex < 1 && (
        <button
          type="button"
          onClick={() => onLineClickHandler(rowIndex, colIndex, "l")}
          className="h-full w-3 absolute top-0 left-0 cursor-pointer"
          style={{
            backgroundColor: getColor(l),
          }}
        ></button>
      )}
      {rowIndex < 1 && (
        <button
          type="button"
          onClick={() => onLineClickHandler(rowIndex, colIndex, "t")}
          className="w-full h-3 absolute top-0 left-0 cursor-pointer"
          style={{
            backgroundColor: getColor(t),
          }}
        ></button>
      )}
      <button
        type="button"
        onClick={() => onLineClickHandler(rowIndex, colIndex, "r")}
        className="h-full w-3 absolute top-0 right-0 cursor-pointer"
        style={{
          backgroundColor: getColor(r),
        }}
      ></button>
      <button
        type="button"
        onClick={() => onLineClickHandler(rowIndex, colIndex, "d")}
        className="w-full h-3 absolute bottom-0 right-0 cursor-pointer"
        style={{
          backgroundColor: getColor(d),
        }}
      ></button>

      {rowIndex === 0 && colIndex === 0 && (
        <div className="h-5 w-5 absolute -top-1 -left-1 cursor-pointer rounded-full bg-[var(--secondaryColor)] z-10"></div>
      )}
      {rowIndex < 1 && (
        <div className="h-5 w-5 absolute -top-1 -right-1 cursor-pointer rounded-full bg-[var(--secondaryColor)] z-10"></div>
      )}
      {colIndex < 1 && (
        <div className="h-5 w-5 absolute -bottom-1 -left-1 cursor-pointer rounded-full bg-[var(--secondaryColor)] z-10"></div>
      )}
      <div className="h-5 w-5 absolute -bottom-1 -right-1 cursor-pointer rounded-full bg-[var(--secondaryColor)] z-10"></div>
    </div>
  );
};

export default SingleConnectedBox;
