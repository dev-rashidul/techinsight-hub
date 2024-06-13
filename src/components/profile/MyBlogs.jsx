import { useProfile } from "../../hooks/useProfile";
import MyBlogsCard from "./MyBlogsCard";

const MyBlogs = () => {
  // Get Profile info from Profile Context

  const { state } = useProfile();

  // Get Blogs from state object

  const myBlogs = state?.blogs;

  return (
    <>
      {myBlogs.map((blog) => (
        <MyBlogsCard key={blog.id} blog={blog} />
      ))}
    </>
  );
};

export default MyBlogs;
