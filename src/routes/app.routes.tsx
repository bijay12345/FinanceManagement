import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoutes from "../components/ProtectedRoutes";
import PublicRoutes from "../components/PublicRoutes";
import { AuthenticatedRoutes, NonAuthenticatedRoutes } from "./RoutesConfigs";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {NonAuthenticatedRoutes.map((item) => {
          const Component = item.element;
          return (
            <Route
              key={item.path}
              path={item.path}
              element={
                <PublicRoutes>
                  <Component />
                </PublicRoutes>
              }
            />
          );
        })}

        {/* PROTECTED ROUTES */}
        {AuthenticatedRoutes.map((item) => {
          const Component = item.element;
          return (
            <Route
              key={item.path}
              path={item.path}
              element={
                <ProtectedRoutes>
                  <Component />
                </ProtectedRoutes>
              }
            />
          );
        })}

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
