import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";

export const PublicRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();
  console.log("Public: " + isLoggedIn);
  if (isLoggedIn) {
    return <Navigate to="/" replace />;
  }
  return children;
};
