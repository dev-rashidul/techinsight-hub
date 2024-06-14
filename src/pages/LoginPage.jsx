import { Helmet } from "react-helmet-async";
import LoginForm from "../components/auth/LoginForm";

const LoginPage = () => {
  return (
    <>
      <Helmet>
        <title>Login | A professional Blog Website</title>
      </Helmet>

      <section>
        <div className="container mx-auto px-5 lg:px-0">
          {/* Login Form into a box center of the page */}
          <div className="w-full md:w-1/2 mx-auto bg-[#030317] p-4 lg:p-8 rounded-md mt-12">
            <h2 className="text-2xl text-white font-bold mb-6">Login</h2>
            {/* Login Form */}
            <LoginForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
