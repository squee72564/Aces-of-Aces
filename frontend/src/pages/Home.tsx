import SignIn from "@/components/SignIn";
import SignUp from "@/components/SignUp";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link, useNavigate } from "react-router-dom";
import { useSession } from "@/lib/auth-client";
import { useEffect } from "react";
import { toast } from "sonner";

function Home() {
  const navigate = useNavigate();
  const { data: session } = useSession();
  useEffect(() => {
    if (session) {
      toast("Welcome!");
      navigate("/dashboard", { replace: true });
    }
  }, [session, navigate]);
  return (
    <div className="flex flex-col min-w-full min-h-screen w-full font-sans">
      <header className="flex justify-between mx-10">
        <h1 className="text-bold font-xl">Ace of Aces</h1>
        <nav className="flex justify-center items-center gap-10">
          <Link to="/about">
            <Button variant={"secondary"}>About</Button>
          </Link>
        </nav>
      </header>
      <main className="flex w-full justify-center">
        <Tabs defaultValue="signin" className="w-full max-w-md p-4">
          <TabsList className="flex flex-row w-full gap-5 bg-transparent">
            <TabsTrigger value="signin" className="">
              SignIn
            </TabsTrigger>
            <TabsTrigger value="signup" className="">
              SignUp
            </TabsTrigger>
          </TabsList>
          <TabsContent value="signin">
            <SignIn />
          </TabsContent>
          <TabsContent value="signup">
            <SignUp />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}

export default Home;
