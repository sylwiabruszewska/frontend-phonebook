import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import { useEffect } from "react";

import { SharedLayout } from "@components/SharedLayout/SharedLayout";
import { Loader } from "@components/Loader/Loader";
import { RestrictedRoute } from "@components/RestrictedRoute/RestrictedRoute";
import { PrivateRoute } from "@components/PrivateRoute/PrivateRoute";

import { refreshUser } from "@redux/auth/operations";
import { useAuth } from "@hooks/useAuth";
import { useAppDispatch } from "@hooks/useAppDispatch";

const Home = lazy(() => import("@pages/Home/HomePage"));
const LoginPage = lazy(() => import("@pages/AuthPages/LoginPage"));
const RegisterPage = lazy(() => import("@pages/AuthPages/RegisterPage"));
const ContactsPage = lazy(() => import("@pages/Contacts/Contacts"));
const NotFound = lazy(() => import("@pages/NotFound/NotFound"));

export const App = () => {
  const dispatch = useAppDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) {
    return <Loader />;
  }

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route
          path="login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={LoginPage} />
          }
        />

        <Route
          path="register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={RegisterPage} />
          }
        />

        <Route
          index
          element={<RestrictedRoute redirectTo="/contacts" component={Home} />}
        />

        <Route
          path="contacts"
          element={
            <PrivateRoute redirectTo="/login" component={ContactsPage} />
          }
        />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
