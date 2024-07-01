import { useState } from "react";
import { HiChatBubbleLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { getDateDifferenceFromNow } from "../../util";
import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";
import ToggleFavourite from "./ToggleFavourite";
import ToggleLike from "./ToggleLike";

const BlogDetailsBlog = ({ blog }) => {
  // Destructure Blog Object
  const {
    _id,
    title,
    content,
    thumbnail,
    tags,
    comments,
    likes,
    author,
    favouritedBy,
    createdAt,
  } = blog;

  // Make Array from tags string
  let stringTags = tags?.split(",");

  // Get Auth using useAuth Hook
  const { auth } = useAuth();

  // State to handle comments form
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Begin Blogs */}
      <section>
        <div className="container mx-auto text-center py-8">
          <h1 className="font-bold text-3xl md:text-5xl">{title}</h1>
          <div className="flex justify-center items-center my-4 gap-4">
            <div className="flex items-center capitalize space-x-2">
              <div className="user-letter flex justify-center items-center w-10 h-10 bg-indigo-600 text-white rounded-full">
                <span className="">{author?.firstName?.slice(0, 1)}</span>
              </div>
              <h5 className="text-slate-500 text-sm">
                {author?.firstName} {author?.lastName}
              </h5>
            </div>
            <span className="text-sm text-slate-700 dot">
              {getDateDifferenceFromNow(createdAt)}
            </span>
            <span className="text-sm text-slate-700 dot">
              {likes?.length} Like{likes?.length > 1 ? "s" : ""}
            </span>
          </div>
          <img
            className="mx-auto w-full md:w-8/12 object-cover h-80 md:h-96"
            src={thumbnail}
            alt="thumbnail"
          />

          {/* Tags */}
          <ul className="tags">
            {stringTags?.map((tag, index) => (
              <span
                key={index}
                className="text-sm text-[#4B6BFB] bg-[#4B6BFB0D] py-1 px-2 rounded-md"
              >
                {tag}
              </span>
            ))}
          </ul>
          {/* Content */}
          <div className="mx-auto w-full md:w-10/12 text-slate-300 text-base md:text-lg leading-8 py-2 !text-left">
            {content}
            <div className="blog-details-footer">
              <div className="flex justify-between items-center border border-[#20293A] p-3 mt-10 rounded-md ">
                {/* Like Component */}
                <ToggleLike id={_id} user={auth?.user} likes={likes} />

                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="flex items-center"
                >
                  <HiChatBubbleLeft className="text-2xl mr-2" /> Comment (
                  {comments?.length})
                </button>

                {/* Favourite Component */}
                <ToggleFavourite
                  id={_id}
                  user={auth?.user}
                  favouritedBy={favouritedBy}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Blogs */}

      {/* Begin Comments */}
      <section id="comments">
        <div className="mx-auto w-full md:w-10/12 container">
          <h2 className="text-3xl font-bold my-8">
            Comments ({comments?.length})
          </h2>
          {isOpen && (
            <>
              {auth?.user ? (
                <div className="flex items -center space-x-4">
                  <div className="user-letter flex justify-center items-center w-10 h-10 bg-indigo-600 text-white rounded-full">
                    <span className="">
                      {auth.user?.firstName?.slice(0, 1)}
                    </span>
                  </div>

                  <div className="w-full">
                    <CommentForm userId={auth?.user?._id} blogId={_id} />
                  </div>
                </div>
              ) : (
                <p>
                  You have to login to comment{" "}
                  <Link className="text-indigo-600 underline" to="/login">
                    Login
                  </Link>
                </p>
              )}
            </>
          )}

          {comments?.map((comment) => (
            <CommentCard key={comment._id} comment={comment}></CommentCard>
          ))}
        </div>
      </section>
    </>
  );
};

export default BlogDetailsBlog;
