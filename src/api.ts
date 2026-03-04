import axios from "axios";
import { useAppSelector } from "./app/hooks";
import { refreshAuthToken } from "./features/auth/authApi";
import { useDispatch } from "react-redux";
import { loginSuccess, logout } from "./features/auth/AuthSlice";

const api = axios.create({
  baseURL: import.meta.env.BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  },
});

api.interceptors.request.use((config) => {
  const accessToken = useAppSelector((state) => state.auth.accessToken);
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const dispatch = useDispatch();
      try {
        const refreshToken = localStorage.getItem("refreshToken");
        if (!refreshToken) {
          throw Error("Refresh token not found");
        }
        const response = await refreshAuthToken(refreshToken);

        const access = response.AccessToken;
        dispatch(loginSuccess({
          accessToken: access,
          refreshToken: refreshToken,
          user: {
            sub: "",
            email: ""
          },
          isAuthenticated: true,
        }))

        api.defaults.headers.common['Authorization'] = `Bearer ${access}`;
        originalRequest.headers['Authorization'] = `Bearer ${access}`;
        return api(originalRequest);

      } catch (err) {
        localStorage.removeItem("accessToken");
        dispatch(logout());
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  });


export default api;
