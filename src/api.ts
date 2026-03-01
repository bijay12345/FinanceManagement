import axios from "axios";
import { useAppSelector } from "./app/hooks";

const api = axios.create({
  baseURL: import.meta.env.BASE_URL,
});

api.interceptors.request.use(async (config) => {
  const AccessToken = useAppSelector((state) => state.auth.accessToken);
  // const RefreshToken = useAppSelector((state) => state.auth.refreshToken);

  if (AccessToken) {
    config.headers.Authorization = `Bearer ${AccessToken}`;
  }
  return config;
});

export default api;
