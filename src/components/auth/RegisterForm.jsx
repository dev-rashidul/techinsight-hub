import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const RegisterForm = () => {
  // Navigate From React Router
  const navigate = useNavigate();

  // React Hook Form Config
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();
  const [avatar, setAvatar] = useState(null); // State to store selected file

  // Handle file selection
  const handleFileChange = (e) => {
    setAvatar(e.target.files[0]);
  };

  const submitForm = async (formData) => {
    try {
      const data = new FormData();
      data.append("avatar", avatar); // Append the selected file to FormData

      // Append other form data to FormData
      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      });

      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/register`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 201) {
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
      setError("root.random", {
        type: "random",
        message: `Something went wrong ${error.message}`,
      });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="mb-6">
          <label htmlFor="firstName" className="text-white block mb-2">
            Fist Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            {...register("firstName", { required: "First Name is required" })}
            className={`w-full p-3 bg-[#030317] border rounded-md focus:outline-none ${
              errors.firstName
                ? "border-red-500 focus:border-red-500"
                : "border-white/20 focus:border-indigo-500"
            }`}
          />
          {errors.firstName && (
            <div role="alert" className="text-red-600 pt-2">
              {errors?.firstName?.message}
            </div>
          )}
        </div>
        <div className="mb-6">
          <label htmlFor="lastName" className="text-white block mb-2">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            {...register("lastName", { required: "Last Name is required" })}
            className={`w-full p-3 bg-[#030317] border rounded-md focus:outline-none ${
              errors.lastName
                ? "border-red-500 focus:border-red-500"
                : "border-white/20 focus:border-indigo-500"
            }`}
          />
          {errors.lastName && (
            <div role="alert" className="text-red-600 pt-2">
              {errors?.lastName?.message}
            </div>
          )}
        </div>
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
        {/* File upload field for avatar */}
        <div className="mb-6">
          <label htmlFor="avatar" className="text-white block mb-2">
            Avatar
          </label>
          <input
            type="file"
            id="avatar"
            name="avatar"
            onChange={handleFileChange}
            accept=".jpg,.jpeg,.png"
            className="w-full p-3 bg-[#030317] border rounded-md focus:outline-none"
          />
        </div>
        <p className="text-red-600 pb-3">{errors?.root?.random?.message}</p>
        <div className="mb-6">
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white p-3 rounded-md hover:bg-indigo-700 transition-all duration-200"
          >
            Register
          </button>
        </div>
        <p className="text-white text-center">
          Already have an account?{" "}
          <Link to="/Login" className="text-indigo-600 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </>
  );
};

export default RegisterForm;
