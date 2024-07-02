import axios from "axios";
import { useBlog } from "./useBlog";

export const useFetchBlogs = () => {
  // Get state and Dispatch from Blog Context
  const { blogs, setBlogs, loading, setLoading } = useBlog();

  const fetchBlogs = async () => {
    setLoading(true)
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/blogs`
      );
      if (response.status === 200) {
        setBlogs([...response.data]);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  return { blogs, fetchBlogs, loading };
};
