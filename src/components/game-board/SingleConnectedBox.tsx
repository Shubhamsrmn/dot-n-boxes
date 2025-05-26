import { useDispatch, useSelector } from "react-redux";
import type { boxStateType, storeType } from "../../store/store";
import { updateGameStateData } from "../../store/gameStateSlice";
import { toggleUserTurn } from "../../store/userStateSlice";

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
  const { isUserTurn } = useSelector((state: storeType) => state.userState);
  const { l, r, d, t } = boxState;
  const dispatch = useDispatch();
  const onLineClickHandler = (
    rowIndex: number,
    colIndex: number,
    side: "l" | "r" | "d" | "t"
  ) => {
    if (isUserTurn) {
      dispatch(updateGameStateData({ rowIndex, colIndex, side, value: 1 }));
      dispatch(toggleUserTurn());
    } else {
      console.log("bot turn");
    }
  };
  const getColor = (value: 1 | 0 | -1) =>
    value === 1 ? "#E55050" : value === 0 ? "#143D60" : "#B7B7B7";
  const getFilledColor = (value: 1 | 0 | -1) =>
    value === 1 ? "#FF8282" : value === 0 ? "#648DB3" : "transparent";

  return (
    <div
      className="w-24 h-24 relative"
      style={{
        backgroundColor: getFilledColor(boxState.box),
      }}
    >
      {colIndex < 1 && (
        <button
          type="button"
          onClick={() => onLineClickHandler(rowIndex, colIndex, "l")}
          className="h-full w-2 absolute top-0 left-0 cursor-pointer"
          style={{
            backgroundColor: getColor(l),
          }}
        ></button>
      )}
      {rowIndex < 1 && (
        <button
          type="button"
          onClick={() => onLineClickHandler(rowIndex, colIndex, "t")}
          className="w-full h-2 absolute top-0 left-0 cursor-pointer"
          style={{
            backgroundColor: getColor(t),
          }}
        ></button>
      )}
      <button
        type="button"
        onClick={() => onLineClickHandler(rowIndex, colIndex, "r")}
        className="h-full w-2 absolute top-0 right-0 cursor-pointer"
        style={{
          backgroundColor: getColor(r),
        }}
      ></button>
      <button
        type="button"
        onClick={() => onLineClickHandler(rowIndex, colIndex, "d")}
        className="w-full h-2 absolute bottom-0 right-0 cursor-pointer"
        style={{
          backgroundColor: getColor(d),
        }}
      ></button>
    </div>
  );
};

export default SingleConnectedBox;
