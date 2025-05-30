import { Link } from "react-router";
import welcomeImage from "../assets/Welcome-rafiki.svg";
const OnBoarding = () => {
  return (
    <div className="">
      <div className="flex items-center justify-center gap-8">
        <div className="bg-white w-[40rem] p-4 rounded-md space-y-2 font-medium text-md">
          <h2>
            In this game, two players take turns drawing a single horizontal or
            vertical line between adjacent dots on a grid. The objective is to
            complete squares by placing the fourth and final side of a box. When
            a player completes a box, it is filled with their color to signify
            ownership, and they earn an extra turn. The game continues with
            players alternating moves unless a box is completed, allowing the
            same player to continue.
          </h2>
          <h2>
            Strategy is key—while it might be tempting to fill in lines quickly,
            sometimes it's smarter to hold back and avoid giving your opponent
            the opportunity to finish multiple boxes in a row. The game ends
            when all possible lines have been drawn and every box is claimed.
            The player who owns the most boxes at the end of the game is
            declared the winner.
          </h2>

          <Link to={"/game-board"} className="mt-2 inline-block w-max">
            <p className="bg-blue-600 p-2 px-8 text-white font-semibold rounded-lg">
              Play
            </p>
          </Link>
        </div>
        <div className="">
          <img
            src={welcomeImage}
            alt=""
            width={600}
            height={600}
            className="w-[36rem] h-[36rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default OnBoarding;
