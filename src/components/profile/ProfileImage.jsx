import { useRef } from "react";
import { actions } from "../../actions";
import editIcon from "../../assets/icons/edit.svg";
import { useAxios } from "../../hooks/useAxios";
import { useProfile } from "../../hooks/useProfile";

const ProfileImage = () => {
  // Getting profile information from Context
  const { state, dispatch } = useProfile();

  // Destructuring state object
  const user = state?.user;

  // Axios instance
  const { api } = useAxios();

  // Ref to get file
  const fileUploadRef = useRef();

  const handleImageUpload = (event) => {
    event.preventDefault();
    fileUploadRef.current.click();
    fileUploadRef.current.addEventListener("change", handleFileChange);
  };

  const handleFileChange = async () => {
    const formData = new FormData();

    for (const file of fileUploadRef.current.files) {
      formData.append("avatar", file);
    }

    try {
      const response = await api.post(
        `${import.meta.env.VITE_SERVER_URL}/profile/avatar`,
        formData
      );

      if (response.status === 200) {
        dispatch({
          type: actions.profile.IMAGE_UPDATED,
          data: response.data.user,
        });
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <>
      {user?.avatar ? (
        <>
          <img
            className="w-full h-full rounded-full"
            src={`${import.meta.env.VITE_SERVER_URL}/uploads/avatar/${
              user?.avatar
            }`}
            alt="avatar"
          />
        </>
      ) : (
        <div className="w-full h-full bg-orange-600 text-white grid place-items-center text-5xl rounded-full">
          {/* User's first name initial */}
          <span>{user?.firstName?.slice(0, 1)}</span>
        </div>
      )}
      <form>
        <button
          onClick={handleImageUpload}
          className="grid place-items-center absolute bottom-0 right-0 h-7 w-7 rounded-full bg-slate-700 hover:bg-slate-700/80"
        >
          <img src={editIcon} alt="Edit" />
        </button>
        <input type="file" ref={fileUploadRef} hidden />
      </form>
    </>
  );
};

export default ProfileImage;
