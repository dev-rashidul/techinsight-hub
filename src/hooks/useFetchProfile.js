import axios from "axios";
import { useState } from "react";
import useAuth from "./useAuth";

export const useFetchProfile = () => {
  // User State
  const [user, setUser] = useState({});

  // Loading State
  const [loading, setLoading] = useState(false)

  // Get User info From Context
  const { auth } = useAuth();

  const fetchProfile = async () => {
    setLoading(true)
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/profile/${auth?.user?._id}`
      );
      if (response.status === 200) {
        setUser({ ...response.data });
        setLoading(false)
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {user, fetchProfile, loading};
};
