import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicLayout from "@/layouts/public-layout";
import HomePage from "@/routes/Home";
import MainLayout from "@/layouts/main-layout";
import ProtectRoutes from "@/layouts/protected-routes";
import AuthenticateLayout from "@/layouts/auth-layout";
import SigninPage from "./routes/signin";
import SignupPage from "./routes/signup";

function App() {
  return (
    <Router>
      <Routes>
        {/* public routes */}
        <Route element={<PublicLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        {/* authentication layout */}
        <Route element={<AuthenticateLayout />}>
          <Route path="/signin/*" element={<SigninPage />} />
          <Route path="/signup/*" element={<SignupPage />} />
        </Route>
        {/* protected routes */}
        <Route
          element={
            <ProtectRoutes>
              <MainLayout />
            </ProtectRoutes>
          }
        >
          {/* add protected routes here */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
