import { getDateDifferenceFromNow } from "../../util";

/* eslint-disable react/prop-types */
const MyBlogsCard = ({ blog }) => {
  // Destructuring Blog
  const { thumbnail, title, content, author, createdAt, likes } = blog;

  //   Checking Contents length

  const maxLength = 200;
  const contentToShow =
    content.length > maxLength ? `${content.slice(0, maxLength)}...` : content;

  return (
    <div className="my-6 space-y-4">
      {/* Blog Card Start */}
      <div className="blog-card">
        <img
          className="blog-thumb"
          src={`${import.meta.env.VITE_SERVER_URL}/uploads/blog/${thumbnail}`}
          alt="blog thumbnail"
        />
        <div className="mt-2">
          <h3 className="text-slate-300 text-xl lg:text-2xl">{title}</h3>
          <p className="mb-6 text-base text-slate-500 mt-1">{contentToShow}</p>

          {/* Meta Informations */}
          <div className="flex justify-between items-center">
            <div className="flex items-center capitalize space-x-2">
              <div className="avater-img bg-indigo-600 text-white">
                {author?.avatar ? (
                  <img className="rounded-full"
                    src={`${import.meta.env.VITE_SERVER_URL}/uploads/avatar/${author?.avatar}`}
                    alt="avatar"
                  />
                ) : (
                  <span className="">{author?.firstName.slice(0, 1)}</span>
                )}
              </div>

              <div>
                <h5 className="text-slate-500 text-sm">
                  {author?.firstName} {author?.lastName}
                </h5>
                <div className="flex items-center text-xs text-slate-700">
                  <span>{getDateDifferenceFromNow(createdAt)}</span>
                </div>
              </div>
            </div>

            <div className="text-sm px-2 py-1 text-slate-700">
              <span>
                {likes?.length} Like{likes?.length > 1 && "s"}{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Blog Card End */}
    </div>
  );
};

export default MyBlogsCard;
