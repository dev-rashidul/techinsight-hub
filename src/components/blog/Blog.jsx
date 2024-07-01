/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import AuthorInfo from "./AuthorInfo";
import BlogActions from "./BlogActions";

const Blog = ({ blog }) => {
  // Get User from Auth
  const { auth } = useAuth();

  // Destructuring Data
  const {
    title,
    content,
    thumbnail,
    tags: stringTags,
    author,
    likes,
    createdAt,
  } = blog;

  // Calculate Blog Autor
  const blog_author = auth?.user?._id === author?._id;

  // Make Array from tags string
  let tags = stringTags?.split(",");

  return (
    <>
      {/* Blog Card Start */}
      <div className="relative p-3 border border-[#242534] rounded-md transition-all duration-300 hover:bg-[#12131b]">
        <Link to={`/blog/${blog._id}`}>
          <img
            className="w-full max-h-60 object-cover rounded-md"
            src={thumbnail}
            alt="thumbnail"
          />
        </Link>
        <div className="blog__tags flex flex-wrap gap-3 pt-5">
          {tags?.map((tag, index) => (
            <span
              key={index}
              className="text-sm text-[#4B6BFB] bg-[#4B6BFB0D] py-1 px-2 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-2 pt-2">
          <Link to={`/blog/${blog._id}`}>
            <h3 className="text-white text-xl lg:text-2xl font-semibold">
              {title}
            </h3>
          </Link>
          <p className="mb-6 text-base text-gray-300 mt-1">
            {content?.slice(0, 200)}...
          </p>

          {/* Author Informations */}
          <AuthorInfo author={author} likes={likes} createdAt={createdAt} />

          {/* Blog Actions */}
          {blog_author && <BlogActions blog={blog} />}
        </div>
      </div>
    </>
  );
};

export default Blog;
