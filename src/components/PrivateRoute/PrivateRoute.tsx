import { Navigate } from "react-router-dom";
import { useAuth } from "@hooks/useAuth";
import { RouteProps } from "@typings/components";

export const PrivateRoute: React.FC<RouteProps> = ({
  component: Component,
  redirectTo = "/",
}) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};
