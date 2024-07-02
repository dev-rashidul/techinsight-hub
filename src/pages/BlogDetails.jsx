import { useEffect } from "react";
import BlogDetailsBlog from "../components/blog/BlogDetailsBlog";
import { useSinglBlogFetch } from "../hooks/useSingleBlogFetch";

const BlogDetails = () => {
  // Get blog and fetchBlog from hook
  const { blog, fetchBlog } = useSinglBlogFetch();

  // Fetch Single Blog Data
  useEffect(() => {
    fetchBlog();
  }, []);

  return (
    <>
      <main>
        <BlogDetailsBlog blog={blog} />
      </main>
    </>
  );
};

export default BlogDetails;
