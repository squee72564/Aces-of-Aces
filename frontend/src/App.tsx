import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout, DashboardLayout } from "./layouts";
import { Home, Dashboard } from "@/pages";
import { AuthRoute } from "./Auth";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="dashboard" element={
            <AuthRoute>
              <DashboardLayout/>
            </AuthRoute>
          }>
            <Route index element={<Dashboard />}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
