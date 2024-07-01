import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BlogDetailsBlog from "../components/blog/BlogDetailsBlog";

const BlogDetails = () => {
  // State for single blog
  const [blog, setBlog] = useState({});

  // Get corresponding blog id using useParams()
  const blogId = useParams();


  // Fetch Single Blog Data
  useEffect(() => {
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

    // Call function
    fetchBlog();
  }, [blogId]);

  return (
    <>
      <main>
        <BlogDetailsBlog blog={blog} />
      </main>
    </>
  );
};

export default BlogDetails;
