import { Outlet } from "react-router";

function App() {
  return (
    <main className="h-screen font-[Inter] bg-[var(--primaryColor)] p-4 text-[var(--primaryText)] flex flex-col justify-between">
      <h1 className="text-center text-5xl font-bold text-shadow-md/30 text-shadow-black uppercase">
        Dots & Boxes
      </h1>
      <div className="flex-1">
        <Outlet />
      </div>
    </main>
  );
}

export default App;
