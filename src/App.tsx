import { Outlet } from "react-router";

function App() {
  return (
    <main className="h-screen font-[Inter] bg-[#F4F1DE] p-8 text-[#393E46]">
      <Outlet />
    </main>
  );
}

export default App;
