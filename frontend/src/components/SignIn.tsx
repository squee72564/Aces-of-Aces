"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { signIn } from "@/lib/auth-client";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { useNavigate } from "react-router";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  return (
    <Card className="max-w-lg">
      <CardHeader>
        <CardTitle className="text-lg md:text-xl">Sign In</CardTitle>
        <CardDescription className="text-xs md:text-sm">
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
          </div>

          <div className="grid">
            <div className="flex items-center gap-10">
              <Label htmlFor="password">Password</Label>
              <a href="#" className="ml-auto inline-block text-sm underline">
                Forgot your password?
              </a>
            </div>

            <Input
              id="password"
              type="password"
              placeholder="password"
              autoComplete="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button
            type="submit"
            className={cn("w-full")}
            variant={"secondary"}
            disabled={loading}
            onClick={async () => {
              try {
                await signIn.email(
                  {
                    email,
                    password,
                  },
                  {
                    onRequest: (ctx) => {
                      console.log(ctx);
                      setLoading(true);
                    },
                    onResponse: (ctx) => {
                      console.log("ctx:", ctx);
                      if (ctx.response.status !== 200) {
                        toast.error(ctx.response.statusText);
                      } else {
                        // Redirect or update UI on successful sign-in
                        navigate("/dashboard");
                        toast.success(ctx.response.statusText);
                      }
                      setLoading(false);
                    },
                  }
                );
              } catch (error) {
                console.error("Error during sign-in:", error);
              }
            }}
          >
            {loading ? <Loader2 size={16} className="animate-spin" /> : <p> Login </p>}
          </Button>

          <div className={cn("w-full gap-2 flex items-center", "justify-between flex-col")}>
            <Button
              className={cn("w-full")}
              variant={"secondary"}
              disabled={loading}
              onClick={async () => {
                await signIn.social(
                  {
                    provider: "github",
                    callbackURL: "/dashboard",
                  },
                  {
                    onRequest: (_ctx) => {
                      setLoading(true);
                    },
                    onResponse: (_ctx) => {
                      console.log("ctx:", _ctx);
                      setLoading(false);
                    },
                  }
                );
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                ></path>
              </svg>
              Sign in with Github
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
