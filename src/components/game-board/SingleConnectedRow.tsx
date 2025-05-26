import type { boxStateType } from "../../store/store";
import SingleConnectedBox from "./SingleConnectedBox";
type props = {
  rowState: boxStateType[];
  rowIndex: number;
};
const SingleConnectedRow: React.FC<props> = ({ rowState, rowIndex }) => {
  return (
    <div className="flex items-center justify-center">
      {rowState.map((box, index) => (
        <SingleConnectedBox
          key={rowIndex + "" + index}
          boxState={box}
          rowIndex={rowIndex}
          colIndex={index}
        />
      ))}
    </div>
  );
};

export default SingleConnectedRow;
