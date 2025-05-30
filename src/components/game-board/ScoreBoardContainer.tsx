import { faRobot, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import type { storeType } from "../../store/store";
const ScoreBoardContainer = () => {
  const { botBoxesCount, userBoxesCount } = useSelector(
    (state: storeType) => state.gameState
  );
  return (
    <div>
      <ScoreCard type="left" icon={faRobot} count={botBoxesCount} />
      <ScoreCard type="right" icon={faUser} count={userBoxesCount} />
    </div>
  );
};

export default ScoreBoardContainer;
type props = {
  type: "left" | "right";
  icon: any;
  count: number;
};
const ScoreCard: React.FC<props> = ({ type, icon, count }) => {
  return (
    <div
      className="absolute bottom-0 border-2 border-gray-400 bg-white rounded-xl shadow-xl p-4"
      style={{
        [type]: "0px",
      }}
    >
      <FontAwesomeIcon
        icon={icon}
        size="xl"
        color={type === "left" ? "" : ""}
      />
      <div>{count}</div>
    </div>
  );
};
