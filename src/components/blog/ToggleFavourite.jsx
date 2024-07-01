import axios from "axios";
import React, { useEffect, useState } from "react";
import { HiHeart, HiOutlineHeart } from "react-icons/hi2";

const ToggleFavourite = ({ id, user, favouritedBy }) => {
  // State for Favourite
  const [isFavourite, setIsFavourite] = useState(
    favouritedBy?.includes(user?._id)
  );

  useEffect(() => {
    setIsFavourite(favouritedBy?.includes(user?._id));
  }, [favouritedBy, user?._id]);

  const handleFavourite = async () => {
    try {
      await axios.patch(
        `${import.meta.env.VITE_SERVER_URL}/blogs/${id}/favourite`,
        {
          userId: user?._id,
          isFavourite: !isFavourite,
        }
      );
      setIsFavourite(!isFavourite);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <button onClick={handleFavourite} className="flex items-center">
      {isFavourite ? (
        <HiHeart />
      ) : (
        <>
          <HiOutlineHeart className="text-2xl mr-2" />
          Favourite
        </>
      )}
    </button>
  );
};

export default ToggleFavourite;
