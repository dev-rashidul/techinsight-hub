import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

export const useSinglBlogFetch = () => {
  // State for single blog
  const [blog, setBlog] = useState({});

  // Get corresponding blog id using useParams()
  const blogId = useParams();

  // Fetch Single Blog Data
  const fetchBlog = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/blogs/${blogId.id}`
      );

      if (response.status === 200) {
        setBlog({ ...response.data });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { blog, fetchBlog };
};
