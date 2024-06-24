import { useProfile } from "../../hooks/useProfile";
import Blog from "../blog/Blog";

const MyBlogs = () => {
  // Get Profile info from Profile Context

  const { state } = useProfile();

  // Get Blogs from state object

  const myBlogs = state?.blogs;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      {myBlogs?.map((blog) => (
        <Blog key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default MyBlogs;
