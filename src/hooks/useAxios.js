import axios from "axios";
import { useEffect } from "react";
import { api } from "../api";
import useAuth from "../hooks/useAuth";

export const useAxios = () => {
  // Get Auth
  const { auth, setAuth } = useAuth();

  useEffect(() => {
    // Add a request interceptor

    const requestIntercept = api.interceptors.request.use(
      (config) => {
        const accessToken = auth?.accessToken;

        if (accessToken) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        }

        return config;
      },
      (error) => Promise.reject(error)
    );

    // Add a response interceptor
    const responseIntercept = api.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;

        if (error.response.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;

          try {
            const refreshToken = auth?.refreshToken;
            const response = await axios.post(
              `${import.meta.env.VITE_SERVER_URL}/auth/refresh-token`,
              { refreshToken }
            );
            const token = response.data;

            console.log(`New Token ${token}`);
            setAuth({ ...auth, accessToken: token });

            originalRequest.headers.Authorization = `Bearer ${token}`;

            return axios(originalRequest);
          } catch (error) {
            console.error(error);
          }
        }
        return Promise.reject(error);
      }
    );

    return () => {
      api.interceptors.request.eject(requestIntercept);
      api.interceptors.response.eject(responseIntercept);
    };
  }, [auth, setAuth]);

  return { api };
};
