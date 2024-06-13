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
      <main className="mx-auto max-w-[1020px] py-8">
        <div className="container">
          {/* profile info */}
          <ProfileInfo />
          {/* end profile info */}

          <h4 className="mt-6 text-xl lg:mt-8 lg:text-2xl">My Blogs</h4>

          {/* My Blogs */}
          <MyBlogs />
        </div>
      </main>
    </>
  );
};

export default ProfilePage;
