import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = () => {
  // Get User Info from Context
  const { auth } = useAuth();

  // Get route location using useLocation
  const location = useLocation();

  return (
    <>
      {auth?.user ? (
        <>
          <Outlet />
        </>
      ) : (
        <Navigate to="/login" state={location.pathname}/>
      )}
    </>
  );
};

export default PrivateRoute;
