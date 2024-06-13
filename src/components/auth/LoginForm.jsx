import axios from "axios";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const LoginForm = () => {
  // Navigate From React Router
  const navigate = useNavigate();

  // Get Auth from Context
  const { setAuth } = useAuth();

  // React Hook Form Config
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  // Submit Form Function

  const submitForm = async (formData) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/auth/login`,
        formData
      );

      if (response.status === 200) {
        const { token, user } = response.data;

        if (token) {
          const accessToken = token.accessToken;
          const refreshToken = token.refreshToken;
          setAuth({ user, accessToken, refreshToken });
          navigate("/");
        }
      }
    } catch (error) {
      console.error(error);
      setError("root.random", {
        type: "random",
        message: `Login error ${error.message}`,
      });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="mb-6">
          <label htmlFor="email" className="text-white block mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            {...register("email", { required: "Email Address is required" })}
            className={`w-full p-3 bg-[#030317] border rounded-md focus:outline-none ${
              errors.email
                ? "border-red-500 focus:border-red-500"
                : "border-white/20 focus:border-indigo-500"
            }`}
          />
          {errors.email && (
            <div role="alert" className="text-red-600 pt-2">
              {errors?.email?.message}
            </div>
          )}
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="text-white block mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            {...register("password", { required: "Password is required" })}
            className={`w-full p-3 bg-[#030317] border rounded-md focus:outline-none ${
              errors.password
                ? "border-red-500 focus:border-red-500"
                : "border-white/20 focus:border-indigo-500"
            }`}
          />
          {errors.password && (
            <div role="alert" className="text-red-600 pt-2">
              {errors?.password?.message}
            </div>
          )}
        </div>
        <p className="text-red-600 pb-3">{errors?.root?.random?.message}</p>
        <div className="mb-6">
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white p-3 rounded-md hover:bg-indigo-700 transition-all duration-200"
          >
            Login
          </button>
        </div>
        <p className="text-white text-center">
          Do not have an account?{" "}
          <Link to="/register" className="text-indigo-600 hover:underline">
            Register
          </Link>
        </p>
      </form>
    </>
  );
};

export default LoginForm;
