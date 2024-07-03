import useAuth from "../../hooks/useAuth";
import { getDateDifferenceFromNow } from "../../util";
import ToggleFavourite from "./ToggleFavourite";

const BlogDetailsBlog = ({ blog }) => {
  // Destructure Blog Object
  const {
    _id,
    title,
    content,
    thumbnail,
    tags,
    author,
    favouritedBy,
    createdAt,
  } = blog;

  // Make Array from tags string
  let stringTags = tags?.split(",");

  // Get Auth using useAuth Hook
  const { auth } = useAuth();

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
            <div>
              <ToggleFavourite
                id={_id}
                user={auth?.user}
                favouritedBy={favouritedBy}
              />
            </div>
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
          </div>
        </div>
      </section>
      {/* End Blogs */}
    </>
  );
};

export default BlogDetailsBlog;
