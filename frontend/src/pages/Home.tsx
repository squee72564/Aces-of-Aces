import SignIn from "@/components/SignIn";
import SignUp from "@/components/SignUp";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link, useNavigate } from "react-router-dom";
import { useSession } from "@/lib/auth-client";
import { useEffect, useState, useRef, useLayoutEffect } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";

function Home() {
  const navigate = useNavigate();
  const { data: session } = useSession();
  const [activeTab, setActiveTab] = useState<"signin" | "signup">("signin");
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (session) {
      toast("Welcome!");
      navigate("/dashboard", { replace: true });
    }
  }, [session, navigate]);

  useLayoutEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.offsetHeight);
    }
  }, [activeTab]);

  return (
    <div className="flex flex-col min-w-full min-h-screen w-full font-sans gap-5">
      <header className="flex justify-between mx-10 mt-10">
        <h1 className="text-bold font-xl mx-auto">Ace of Aces</h1>
        <nav className="flex justify-center items-center gap-10">
          <Link to="/about">
            <Button variant={"secondary"}>About</Button>
          </Link>
        </nav>
      </header>

      <motion.div
        layout
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="flex flex-row w-full justify-center items-center gap-8"
      >
        <motion.img
          src="./aoa_banner.png"
          className="max-w-[400px] hidden lg:block w-full object-cover rounded-xl"
          layout
        />

        <motion.div
          animate={{ height: contentHeight }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="w-full max-w-md"
        >
          <Tabs value={activeTab}>
            <TabsList className="flex flex-row w-full gap-5 bg-transparent">
              <TabsTrigger value="signin" onClick={() => setActiveTab("signin")}>
                SignIn
              </TabsTrigger>
              <TabsTrigger value="signup" onClick={() => setActiveTab("signup")}>
                SignUp
              </TabsTrigger>
            </TabsList>

            <div ref={contentRef}>
              {activeTab === "signin" && <SignIn />}
              {activeTab === "signup" && <SignUp />}
            </div>
          </Tabs>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Home;
