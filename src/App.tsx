import { useDispatch } from "react-redux";
import AppRoutes from "./routes/app.routes";
import { useEffect } from "react";
import { logout, setAccessToken } from "./features/auth/AuthSlice";
import { refreshAuthToken } from "./features/auth/authApi";

function App() {
  const dispatch = useDispatch();
  const refreshToken = localStorage.getItem("refreshToken");

  useEffect(() => {
    const restoreSession = async () => {
      if (!refreshToken) return;
      try {
        const result = await refreshAuthToken(refreshToken);
        dispatch(setAccessToken({ accessToken: result.AccessToken ?? "" }));
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
