import winnerIcon from "../assets/Winners-amico.svg";
import { Link } from "react-router";
const WinnerPage = () => {
  return (
    <div>
      <div className="flex items-center justify-center flex-col gap-4">
        <img src={winnerIcon} width={400} height={400} />
        <div>
          {/* {winnerType === "blue"
            ? "Bot Win"
            : winnerType === "red"
            ? "You Win"
            : winnerType === "draw"
            ? "Draw"
            : ""} */}
        </div>
        <Link to={"/game-board"} className="mt-2 inline-block w-max">
          <p className="bg-blue-700 p-2 px-8 text-white font-semibold rounded-lg">
            Play Again
          </p>
        </Link>
      </div>
    </div>
  );
};

export default WinnerPage;
