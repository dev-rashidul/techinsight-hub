import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import PageTitle from "../components/common/PageTitle";
import useAuth from "../hooks/useAuth";

const CreateBlog = () => {
  // Get logged in User using useAuth

  const { auth } = useAuth();

  // Navigate From React Router
  const navigate = useNavigate();

  // React Hook Form Config
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const submitForm = async (formData) => {
    const userId = auth?.user?._id;

    // Add userId to formData
    formData.author = userId;

    try {
      await axios.post(`${import.meta.env.VITE_SERVER_URL}/blog`, formData);
      swal("Added!", "Successfully added a blog", "success");
      navigate("/");
    } catch (error) {
      swal("Something went wrong!", `${error}`, "error");
      setError("root.random", {
        type: "random",
        message: `Something went wrong ${error.message}`,
      });
    }
  };
  return (
    <>
      <PageTitle title="Create Blog" />
      <section>
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto py-12">
            <h2 className="text-2xl text-white font-bold mb-8">Create Blog</h2>
            <form onSubmit={handleSubmit(submitForm)}>
              <div className="mb-6">
                <label htmlFor="title" className="text-white block mb-2">
                  Blog Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Enter your blog title"
                  {...register("title", {
                    required: "Blog Title is required",
                  })}
                  className={`w-full p-3 bg-[#030317] border rounded-md focus:outline-none ${
                    errors.title
                      ? "border-red-500 focus:border-red-500"
                      : "border-white/20 focus:border-indigo-500"
                  }`}
                />
                {errors.title && (
                  <div role="alert" className="text-red-600 pt-2">
                    {errors?.title?.message}
                  </div>
                )}
              </div>
              <div className="mb-6">
                <label htmlFor="content" className="text-white block mb-2">
                  Blog Content
                </label>
                <textarea
                  id="content"
                  name="lastNcontentame"
                  placeholder="Write your blog content"
                  rows={5}
                  {...register("content", {
                    required: "Blog Content is required",
                  })}
                  className={`w-full p-3 bg-[#030317] border rounded-md focus:outline-none ${
                    errors.content
                      ? "border-red-500 focus:border-red-500"
                      : "border-white/20 focus:border-indigo-500"
                  }`}
                />
                {errors.content && (
                  <div role="alert" className="text-red-600 pt-2">
                    {errors?.content?.message}
                  </div>
                )}
              </div>
              <div className="mb-6">
                <label htmlFor="tags" className="text-white block mb-2">
                  Tags
                </label>
                <input
                  type="text"
                  id="tags"
                  name="tags"
                  placeholder="Your Comma Separated Tags Ex. JavaScript, React, Node, Express,"
                  {...register("tags", { required: "Tags is required" })}
                  className={`w-full p-3 bg-[#030317] border rounded-md focus:outline-none ${
                    errors.tags
                      ? "border-red-500 focus:border-red-500"
                      : "border-white/20 focus:border-indigo-500"
                  }`}
                />
                {errors.tags && (
                  <div role="alert" className="text-red-600 pt-2">
                    {errors?.tags?.message}
                  </div>
                )}
              </div>
              <div className="mb-6">
                <label htmlFor="thumbnail" className="text-white block mb-2">
                  Blog Thumbnail
                </label>
                <input
                  type="text"
                  id="thumbnail"
                  name="thumbnail"
                  placeholder="Enter an image link"
                  {...register("thumbnail", {
                    required: "Blog thumbnail is required",
                  })}
                  className={`w-full p-3 bg-[#030317] border rounded-md focus:outline-none ${
                    errors.thumbnail
                      ? "border-red-500 focus:border-red-500"
                      : "border-white/20 focus:border-indigo-500"
                  }`}
                />
                {errors.thumbnail && (
                  <div role="alert" className="text-red-600 pt-2">
                    {errors?.thumbnail?.message}
                  </div>
                )}
              </div>
              <p className="text-red-600 pb-3">
                {errors?.root?.random?.message}
              </p>
              <div className="mb-6">
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white p-3 rounded-md hover:bg-indigo-700 transition-all duration-200"
                >
                  Create Blog
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default CreateBlog;
