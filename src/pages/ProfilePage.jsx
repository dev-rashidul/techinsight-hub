import { useEffect } from "react";
import { actions } from "../actions";
import PageTitle from "../components/common/PageTitle";
import MyBlogs from "../components/profile/MyBlogs";
import ProfileInfo from "../components/profile/ProfileInfo";
import useAuth from "../hooks/useAuth";
import { useAxios } from "../hooks/useAxios";
import { useProfile } from "../hooks/useProfile";

const ProfilePage = () => {
  // Get Profile info from Context

  const { state, dispatch } = useProfile();

  const { api } = useAxios();
  const { auth } = useAuth();

  useEffect(() => {
    dispatch({
      type: actions.profile.DATA_FETCHING,
    });

    const fetchProfile = async () => {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_URL}/profile/${auth?.user?.id}`
        );
        if (response.status === 200) {
          dispatch({
            type: actions.profile.DATA_FETCHED,
            data: response.data,
          });
        }
      } catch (error) {
        dispatch({
          type: actions.profile.DATA_FETCH_ERROR,
          error: error.message,
        });
      }
    };
    fetchProfile();
  }, [auth?.user?.id, api, dispatch]);

  if (state?.loading) {
    <h2>Profile data Fetching....</h2>;
  }

  return (
    <>
      <PageTitle title="Profile" />
      <main className="container mx-auto">
        <div className="lg:flex">
          <div className="w-full lg:w-1/3">
            {/* profile info */}
            <ProfileInfo />
            {/* end profile info */}
          </div>

          <div className="w-full lg:w-2/3 px-3 lg:px-0">
            <h4 className="mt-6 text-xl lg:mt-8 lg:text-2xl pb-5">My Blogs</h4>
            {/* My Blogs */}
            <MyBlogs />
          </div>
        </div>
      </main>
    </>
  );
};

export default ProfilePage;
