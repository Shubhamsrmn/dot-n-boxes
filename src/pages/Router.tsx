import { Route, Routes } from "react-router";
import OnBoarding from "./OnBoarding";
import App from "../App";
import GameBoard from "./GameBoard";

const Router = () => {
  return (
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<OnBoarding />} />
        <Route path="/game-board" element={<GameBoard />} />
      </Route>
    </Routes>
  );
};

export default Router;
