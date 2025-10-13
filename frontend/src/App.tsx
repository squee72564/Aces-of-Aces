import "./App.css";
import SignIn from "./components/signIn";
import SignUp from "./components/signUp";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-w-full">
      <h1>Aces of Aces</h1>
      <Tabs defaultValue="signin" className="w-full max-w-md p-4 bg-transparent">
        <TabsList className="flex flex-row w-full gap-5 bg-transparent">
          <TabsTrigger value="signin" className="text-white">
            SignIn
          </TabsTrigger>
          <TabsTrigger value="signup" className="text-white">
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
    </div>
  );
}

export default App;
