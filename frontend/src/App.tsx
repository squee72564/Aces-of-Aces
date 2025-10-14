import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardLayout } from "./layouts";
import { Home, Dashboard, About } from "@/pages";
import { AuthProvider } from "./components/AuthProvider";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="dashboard"
            element={
              <AuthProvider>
                <DashboardLayout />
              </AuthProvider>
            }
          >
            <Route index element={<Dashboard />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
