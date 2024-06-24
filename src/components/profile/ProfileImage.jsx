import { useProfile } from "../../hooks/useProfile";

const ProfileImage = () => {
  // Getting profile information from Context
  const { state } = useProfile();

  // Destructuring state object
  const user = state?.user;

  return (
    <>
      {user?.avatar ? (
        <>
          <img
            className="w-full h-full rounded-full"
            src={`${import.meta.env.VITE_SERVER_URL}/${user?.avatar}`}
            alt="avatar"
          />
        </>
      ) : (
        <div className="w-full h-full bg-orange-600 text-white grid place-items-center text-5xl rounded-full">
          {/* User's first name initial */}
          <span>{user?.firstName?.slice(0, 1)}</span>
        </div>
      )}
    </>
  );
};

export default ProfileImage;
