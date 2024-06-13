/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import AuthorInfo from "./AuthorInfo";
import BlogActions from "./BlogActions";

const Blog = ({blog}) => {

  // Destructuring Data
  const {title, content, thumbnail, author, likes, createdAt} = blog;

  return (
    <>
        {/* Blog Card Start */}
        <div className="blog-card mb-5">
          <img className="blog-thumb" src={`${import.meta.env.VITE_SERVER_URL}/uploads/blog/${thumbnail}`} alt="" />
          <div className="mt-2 relative">
            <Link to="./single-blog.html">
              <h3 className="text-slate-300 text-xl lg:text-2xl">
              {title}
              </h3>
            </Link>
            <p className="mb-6 text-base text-slate-500 mt-1">
              {content}
            </p>

            {/* Author Informations */}
            <AuthorInfo author={author} likes={likes} createdAt={createdAt} />

            {/* Blog Actions */}
            <BlogActions />
          </div>
        </div>
    </>
  );
};

export default Blog;
