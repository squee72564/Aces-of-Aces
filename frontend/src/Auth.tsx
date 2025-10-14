import { Navigate } from "react-router-dom";
import {useSession} from "@/lib/auth-client";
import type { JSX } from "react";

export function AuthRoute({ children }: { children: JSX.Element }) {
  const { data: session, isPending } = useSession();

  if (isPending) return <div>Loading...</div>; // show spinner while fetching session
  if (!session) return <Navigate to="/" replace />; // redirect if not logged in

  return children;
}