import { useEffect, useState } from "react";
import { actions } from "../../actions";
import checkIcon from "../../assets/icons/check.svg";
import editIcon from "../../assets/icons/edit.svg";
import { useAxios } from "../../hooks/useAxios";
import { useProfile } from "../../hooks/useProfile";
import ProfileImage from "./ProfileImage";

const ProfileInfo = () => {
  // Get user Profile info from Context
  const { state, dispatch } = useProfile();

  // get api for authenticated api call
  const { api } = useAxios();

  // Get User from State Object
  const user = state?.user;

  // State to handle edit
  const [isEdit, setIsEdit] = useState(false);

  // State to store bio
  const [bio, setBio] = useState(user?.bio);

  useEffect(() => {
    setBio(user?.bio);
  }, [user]);

  // Function for handleBioEdit
  const handleBioEdit = async () => {
    dispatch({
      type: actions.profile.DATA_FETCHING,
    });

    try {
      const response = await api.patch(
        `${import.meta.env.VITE_SERVER_URL}/profile`,
        { bio }
      );

      if (response.status === 200) {
        dispatch({
          type: actions.profile.USER_DATA_EDITED,
          data: response.data.user,
        });
      }
      setIsEdit(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center py-8 text-center">
        {/* profile image */}
        <div className="relative mb-8 max-h-[180px] max-w-[180px] h-[120px] w-[120px] rounded-full lg:mb-11 lg:max-h-[218px] lg:max-w-[218px]">
          {/* Profile Image */}
          <ProfileImage />
        </div>
        {/* name , email */}
        <div>
          <h3 className="text-2xl font-semibold text-white lg:text-[28px]">
            {user?.firstName} {user?.lastName}
          </h3>
          <p className="leading-[231%] lg:text-lg">{user?.email}</p>
        </div>

        {/* bio */}
        <div className="mt-4 flex items-start gap-2 lg:mt-6">
          <div>
            {isEdit ? (
              <textarea
                className="max-w-[300px]  bg-[#030317] border border-white/20 py-2.5 px-4 rounded-md focus:outline-none focus:border-indigo-500"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              />
            ) : (
              <p className="leading-[188%] text-gray-400 lg:text-lg">
                {user?.bio}
              </p>
            )}
          </div>
          {/* Edit Bio button. The Above bio will be editable when clicking on the button */}
          <button
            onClick={() => setIsEdit(true)}
            className="flex-center h-7 w-7 rounded-full"
          >
            {isEdit ? (
              <img onClick={handleBioEdit} src={checkIcon} alt="Edit" />
            ) : (
              <img src={editIcon} alt="Edit" />
            )}
          </button>
        </div>
        <div className="w-3/4 border-b border-[#3F3F3F] py-6 lg:py-8"></div>
      </div>
    </>
  );
};

export default ProfileInfo;
