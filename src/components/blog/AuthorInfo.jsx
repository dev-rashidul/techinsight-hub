/* eslint-disable react/prop-types */
import { getDateDifferenceFromNow } from "../../util/index.js";

const AuthorInfo = ({ author, likes, createdAt }) => {
  // Destructuring author object
  const { firstName, lastName, avatar } = author;

  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex items-center capitalize space-x-2">
          <div className="avater-img bg-indigo-600 text-white">
            <span>{firstName.slice(0, 1)}</span>
          </div>

          <div>
            <h5 className="text-gray-200 text-sm">
              {firstName} {lastName}
            </h5>
            <div className="flex items-center text-xs text-gray-400">
              <span>{getDateDifferenceFromNow(createdAt)}</span>
            </div>
          </div>
        </div>

        <div className="text-sm px-2 py-1 text-gray-400">
          <span>
            {likes?.length} Like{likes?.length > 1 && "s"}
          </span>
        </div>
      </div>
    </>
  );
};

export default AuthorInfo;
