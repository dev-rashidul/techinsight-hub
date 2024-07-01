import Blog from "../blog/Blog";

const MyBlogs = ({blogs}) => {

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
      {blogs?.map((blog) => (
        <Blog key={blog._id} blog={blog} />
      ))}
    </div>
  );
};

export default MyBlogs;
