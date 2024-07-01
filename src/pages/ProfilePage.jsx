import axios from "axios";
import { useEffect } from "react";
import PageTitle from "../components/common/PageTitle";
import MyBlogs from "../components/profile/MyBlogs";
import ProfileInfo from "../components/profile/ProfileInfo";
import useAuth from "../hooks/useAuth";
import { useProfile } from "../hooks/useProfile";

const ProfilePage = () => {
  // Get Profile info from Context
  const { user, setUser } = useProfile();

  // Get User info From Context
  const { auth } = useAuth();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVER_URL}/profile/${auth?.user?._id}`
        );
        if (response.status === 200) {
          setUser({ ...response.data });
        }
      } catch (error) {
        console.log(error)
      }
    };
    fetchProfile();
  }, [auth?.user?._id, setUser]);

  return (
    <>
      <PageTitle title="Profile" />
      <main className="container mx-auto">
        <div className="lg:flex">
          <div className="w-full lg:w-1/3">
            {/* profile info */}
            <ProfileInfo user={user} />
            {/* end profile info */}
          </div>

          <div className="w-full lg:w-2/3 px-3 lg:px-0">
            <h4 className="mt-6 text-xl lg:mt-8 lg:text-2xl pb-5">My Blogs</h4>
            {/* My Blogs */}
            {user?.blogs?.length === 0 ? (
              <p>No Blogs found</p>
            ) : (
              <MyBlogs blogs={user?.blogs} />
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default ProfilePage;
