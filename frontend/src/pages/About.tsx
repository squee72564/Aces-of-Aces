import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";
export default function About() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col  gap-5 max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4 text-center">About Aces of Aces Online</h1>
      <p className="mb-4">
        Welcome to <strong>Aces of Aces Online</strong>, a digital version of the classic World War
        I aerial combat game designed by Al Leonardi. Here, you take the role of a daring fighter
        pilot, facing off against friends or opponents from around the world.
      </p>
      <p className="mb-4">
        Each turn, you choose your plane’s next maneuver from a selection of tactical moves. Once
        both players have chosen, the results are revealed: your position, your opponent’s position,
        and the outcome of your daring maneuvers. Will you outsmart your opponent and come out on
        top?
      </p>
      <p className="mb-4">
        The game captures the thrill of dogfighting without requiring complicated rules or heavy
        calculations. You’ll focus on strategy, timing, and anticipation – just like the original
        paper version of Aces of Aces.
      </p>
      <p className="mb-4">
        Whether you’re a fan of historical games, tactical duels, or just looking for a fun
        turn-based challenge, <strong>Aces of Aces Online</strong> brings the excitement of WWI
        aerial combat to your browser.
      </p>
      <p className="text-gray-600 italic">
        Gather your wits, choose your maneuvers, and take to the skies – victory awaits!
      </p>

      <Button className="mx-auto" onClick={() => navigate(-1)}>
        Go Back
      </Button>
    </div>
  );
}
