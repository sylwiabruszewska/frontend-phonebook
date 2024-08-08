import { useAuth } from "@hooks/useAuth";
import { Navigate } from "react-router-dom";
import { RouteProps } from "@typings/components";

export const RestrictedRoute: React.FC<RouteProps> = ({
  component: Component,
  redirectTo = "/",
}) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
