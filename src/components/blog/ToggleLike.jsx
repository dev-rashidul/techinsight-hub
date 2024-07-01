import axios from "axios";
import React, { useEffect, useState } from "react";
import { HiHandThumbUp, HiOutlineHandThumbUp } from "react-icons/hi2";

const ToggleLike = ({id, user, likes }) => {
  // State for Like
  const [like, setLike] = useState(likes?.includes(user?._id));

  useEffect(() => {
    setLike(likes?.includes(user?._id));
  }, [likes, user?._id]);

  console.log(user, likes)

  // handle toggle Like Function
  const handleLike = async () => {
    try {
      await axios.post(`${import.meta.env.VITE_SERVER_URL}/blogs/${id}/like`, {
        userId: user?._id,
        like: !like,
      });
      setLike(!like);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <button onClick={handleLike} className="flex items-center">
      {like ? (
        <>
          <HiHandThumbUp className="text-2xl mr-2" />
          <span>Liked</span>
        </>
      ) : (
        <>
          <HiOutlineHandThumbUp className="text-2xl mr-2" /> Like{" "}
          {!user && <> : Login to like</>}
        </>
      )}
    </button>
  );
};

export default ToggleLike;
