
const ProfileInfo = ({user}) => {
  return (
    <>
      <div className="flex flex-col items-center py-8 text-center">
        <div className="user-letter flex justify-center items-center w-24 h-24 text-3xl text-white font-bold bg-orange-600  rounded-full mb-5">
          {/* User's first name initial */}
          <span>{user?.firstName?.slice(0, 1)}</span>
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
            <p className="leading-[188%] text-gray-400 lg:text-lg">
              {user?.bio}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileInfo;
