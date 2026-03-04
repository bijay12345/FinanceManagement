import { useEffect } from "react";
import { useAppDispatch } from "./app/hooks";
import AppRoutes from "./routes/app.routes";
import { loginSuccess, logout } from "./features/auth/AuthSlice";

function App() {

  const dispatch = useAppDispatch();
  const refreshToken = localStorage.getItem("refreshToken");

  useEffect(() => {
    const restoreSession = async () => {
      try {
        if (!refreshToken) throw new Error("Refresh token not found");
        dispatch(loginSuccess({ isAuthenticated: true, refreshToken: refreshToken }));
      } catch (err: unknown) {
        console.log(err)
        dispatch(logout());
      }
    };
    restoreSession();
  }, []);
  return <AppRoutes />;
}

export default App;
