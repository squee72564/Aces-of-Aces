import { Outlet, Link } from "react-router-dom";
import { Button } from "../components/ui/button";

export default function Layout() {
  return (
    <div className="min-w-full min-h-screen font-sans">
      <header className="flex justify-between mx-10">
        <h1 className="text-bold font-xl">Ace of Aces</h1>
        <nav className="flex justify-center items-center gap-10">
          <Link to="/">
            <Button variant={"secondary"}>Home</Button>
          </Link>
          <Link to="/about">
            <Button variant={"secondary"}>About</Button>
          </Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
