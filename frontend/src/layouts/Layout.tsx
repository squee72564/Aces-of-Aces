import { Outlet, Link } from "react-router-dom";
import { Button } from "../components/ui/button";

export default function Layout() {
  return (
    <div className="min-w-full min-h-screen bg-secondary font-sans">
      <header className="flex justify-between mx-10">
        <h1 className="text-bold font-xl text-foreground">Ace of Aces</h1>
        <nav className="flex justify-center items-center gap-10">
          <Link to="/"><Button variant={"outline"}>Home</Button></Link>
          <Link to="/about"><Button variant={"outline"}>About</Button></Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
