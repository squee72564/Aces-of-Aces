import { useAuth } from "@/components/AuthProvider";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function Dashboard() {
  const { data: session } = useAuth();

  return (
    <section className="flex flex-col w-full p-6 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Account Details</CardTitle>
        </CardHeader>
        <CardContent className="flex gap-10">
          <div>
            <strong>Name:</strong> {session?.user.name}
          </div>
          <div>
            <strong>Email:</strong> {session?.user.email}
          </div>
          <div>
            <strong>Joined:</strong> {new Date(session?.user.createdAt || "").toLocaleDateString()}
          </div>
        </CardContent>
      </Card>
      <div className="flex flex-col sm:flex-row gap-5">
        <Card className="flex-2">
          <CardHeader>
            <CardTitle className="mx-auto">Matchmaking</CardTitle>
          </CardHeader>
          <CardContent className="flex w-full justify-around items-center gap-2">
            <Button>Play Classic</Button>
            <Button>Play Ranked</Button>
            <Button>Play Offline</Button>
          </CardContent>
        </Card>

        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Game History</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Your analytics will appear here soon.</p>
          </CardContent>
        </Card>
      </div>
      <div className="flex flex-col sm:flex-row gap-5">
        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Wall Of Fame</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Your analytics will appear here soon.</p>
          </CardContent>
        </Card>
        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Wall Of Shame</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Your analytics will appear here soon.</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default Dashboard;
