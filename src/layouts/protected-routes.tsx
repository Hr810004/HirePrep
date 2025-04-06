import Loaderpage from "@/routes/Loaderpage";
import { useAuth } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }: { children: React.ReactNode }) => {
  const { isLoaded, isSignedIn } = useAuth();
  if (!isLoaded) {
    return <Loaderpage />;
  }

  if (!isSignedIn) {
    return <Navigate to="/signin" replace={true} />;
  }
  return children;
};

export default ProtectedRoutes;
