import { useEffect } from "react";
import Loading from "../components/common/Loading";
import PageTitle from "../components/common/PageTitle";
import MyBlogs from "../components/profile/MyBlogs";
import ProfileInfo from "../components/profile/ProfileInfo";
import { useFetchProfile } from "../hooks/useFetchProfile";

const ProfilePage = () => {
  // Get user from hook
  const { user, fetchProfile, loading } = useFetchProfile();

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <>
      <PageTitle title="Profile" />
      {loading ? (
        <Loading />
      ) : (
        <main className="container mx-auto">
          <div className="lg:flex">
            <div className="w-full lg:w-1/3">
              {/* profile info */}
              <ProfileInfo user={user} />
              {/* end profile info */}
            </div>

            <div className="w-full lg:w-2/3 px-3 lg:px-0">
              <h4 className="mt-6 text-xl lg:mt-8 lg:text-2xl pb-5">
                My Blogs
              </h4>
              {/* My Blogs */}
              {user?.blogs?.length === 0 ? (
                <p>No Blogs found</p>
              ) : (
                <MyBlogs blogs={user?.blogs} />
              )}
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default ProfilePage;
