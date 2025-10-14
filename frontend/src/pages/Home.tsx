import SignIn from "@/components/SignIn";
import SignUp from "@/components/SignUp";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-w-full">
      <Tabs defaultValue="signin" className="w-full max-w-md p-4 bg-transparent">
        <TabsList className="flex flex-row w-full gap-5 bg-transparent">
          <TabsTrigger value="signin" className="text-primary-background">
            SignIn
          </TabsTrigger>
          <TabsTrigger value="signup" className="text-primary-background">
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

export default Home;
