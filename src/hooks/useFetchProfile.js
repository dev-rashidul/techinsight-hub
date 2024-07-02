import axios from "axios";
import useAuth from "./useAuth";
import { useProfile } from "./useProfile";

export const useFetchProfile = () => {
  // Get Profile info from Context
  const { user, setUser, loading, setLoading } = useProfile();

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

  return {user, fetchProfile};
};
