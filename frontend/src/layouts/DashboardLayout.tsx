import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { Link, Outlet } from "react-router-dom";
import { signOut } from "@/lib/auth-client";
import { toast } from "sonner";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { useAuth } from "@/components/AuthProvider";

function AppSidebar() {
  const { data } = useAuth();
  return (
    <Sidebar collapsible={"offcanvas"} variant={"inset"} side={"right"}>
      <SidebarHeader>Welcome {`${data?.user.name}`}</SidebarHeader>
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
    </Sidebar>
  );
}

function DashboardLayout() {
  return (
    <SidebarProvider defaultChecked={false} defaultOpen={false}>
      <div className="min-w-full min-h-screen font-sans flex flex-row">
        <div className="w-full">
          <header className="flex justify-between mx-10">
            <h1 className="text-bold font-xl">Ace of Aces </h1>
            <nav className="flex justify-center items-center gap-10">
              <Link to="/dashboard">
                <Button variant={"secondary"}>Profile</Button>
              </Link>
              <Link to="/dashboard">
                <Button variant={"secondary"}>About</Button>
              </Link>
              <Button
                variant="secondary"
                onClick={async () => {
                  const res = await signOut();
                  if (res.data?.success) {
                    toast.message(`You have been logged out.`);
                  } else {
                    toast.error(`${res.error?.message}`);
                  }
                }}
              >
                <LogOut className="w-4 h-4 mr-2" /> Logout
              </Button>
              <SidebarTrigger variant={"outline"} />
            </nav>
          </header>

          <main>
            <Outlet />
          </main>
        </div>
        <AppSidebar />
      </div>
    </SidebarProvider>
  );
}

export default DashboardLayout;
