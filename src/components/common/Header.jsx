import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  // Get User info from Context
  const { auth } = useAuth();

  // Get User from auth
  const user = auth?.user;

  return (
    <>
      <header>
        <nav className="container mx-auto flex justify-between py-4 px-0">
          {/* Logo */}
          <div>
            <Link className="flex items-center" to="/">
              <img className="w-10" src={logo} alt="logo" />
              <span className="text-base text-white font-yatra ps-2 pt-2 leading-5">
                TechInsight <br /> Hub
              </span>
            </Link>
          </div>
          <div>
            <ul className="flex items-center space-x-5">
              <li>
                <Link
                  to="/create-blog"
                  className="bg-indigo-600 text-white px-6 py-2 md:py-3 rounded-md hover:bg-indigo-700 transition-all duration-200"
                >
                  Create Blog
                </Link>
              </li>
              {!auth?.user && (
                <li>
                  <Link
                    to="/login"
                    className="text-white/50 hover:text-white transition-all duration-200"
                  >
                    Login
                  </Link>
                </li>
              )}
              {auth?.user && (
                <li className="flex items-center">
                  <div className="user-letter flex justify-center items-center w-10 h-10 bg-orange-600 text-white rounded-full">
                    <span className="">{user?.firstName?.slice(0, 1)}</span>
                  </div>
                  <Link to="/profile">
                    <span className="text-white ml-2">
                      {user?.firstName} {user?.lastName}
                    </span>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
