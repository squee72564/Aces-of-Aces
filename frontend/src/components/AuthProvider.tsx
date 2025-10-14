import { createContext, useContext, useEffect } from "react";
import { useSession } from "@/lib/auth-client";
import { Loader2 } from "lucide-react";
import { useNavigate } from "react-router";

type AuthContextValue = ReturnType<typeof useSession> | null;
const AuthContext = createContext<AuthContextValue>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const sessionState = useSession();
  const navigate = useNavigate();

  useEffect(() => {
    if (!sessionState.isPending && !sessionState.data) {
      navigate("/", { replace: true });
    }
  }, [sessionState.isPending, sessionState.data, navigate]);

  if (sessionState.isPending) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 size={24} className="animate-spin text-muted-foreground" />
      </div>
    );
  }

  // Optionally, you can render nothing while redirecting
  if (!sessionState.data) return null;

  return <AuthContext.Provider value={sessionState}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within an <AuthProvider>");
  }
  return ctx;
}
