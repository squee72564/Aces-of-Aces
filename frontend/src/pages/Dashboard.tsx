import { useAuth } from "@/components/AuthProvider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function Dashboard() {
  const { data: session } = useAuth();

  return (
    <section className="flex flex-row w-full p-6 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">No recent activity yet.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Analytics</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">Your analytics will appear here soon.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Account Details</CardTitle>
        </CardHeader>
        <CardContent className="text-sm space-y-1">
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
    </section>
  );
}

export default Dashboard;
