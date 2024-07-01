import axios from "axios";
import React, { useState } from "react";
import swal from "sweetalert";
import { useBlog } from "../../hooks/useBlog";


const BlogEdit = ({ existingBlog, onclose }) => {
  //   Get Blogs from Context
  const { blogs, setBlogs } = useBlog();

  // Initialize local state for form inputs
  const [formData, setFormData] = useState({
    title: existingBlog?.title || "",
    content: existingBlog?.content || "",
    tags: existingBlog?.tags || "",
    thumbnail: existingBlog?.thumbnail || "",
  });

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(
        `${import.meta.env.VITE_SERVER_URL}/blogs/${existingBlog._id}`,
        formData
      );
      const updatedBlogs = blogs.map((blog) =>
        blog._id === existingBlog._id ? { ...blog, ...response.data } : blog
      );
      setBlogs(updatedBlogs);
      onclose();
      swal("Edited!", "Successfully Edited a blog", "success");
    } catch (error) {
      swal("Something went wrong!", `${error}`, "error");
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="create-blog-modal shadow-2xl">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto py-12">
          <h2 className="text-2xl text-white font-bold mb-8">Update Blog</h2>
          <form onSubmit={submitForm}>
            <div className="mb-6">
              <label htmlFor="title" className="text-white block mb-2">
                Blog Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Enter your blog title"
                className="w-full p-3 bg-[#030317] border rounded-md focus:outline-none"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="content" className="text-white block mb-2">
                Blog Content
              </label>
              <textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleInputChange}
                placeholder="Write your blog content"
                rows={5}
                className="w-full p-3 bg-[#030317] border rounded-md focus:outline-none"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="tags" className="text-white block mb-2">
                Tags
              </label>
              <input
                type="text"
                id="tags"
                name="tags"
                value={formData.tags}
                onChange={handleInputChange}
                placeholder="Your Comma Separated Tags Ex. JavaScript, React, Node, Express,"
                className="w-full p-3 bg-[#030317] border rounded-md focus:outline-none"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="thumbnail" className="text-white block mb-2">
                Blog Thumbnail
              </label>
              <input
                type="text"
                id="thumbnail"
                name="thumbnail"
                value={formData.thumbnail}
                onChange={handleInputChange}
                placeholder="Enter an image link"
                className="w-full p-3 bg-[#030317] border rounded-md focus:outline-none"
              />
            </div>
            <div className="mb-6">
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white p-3 rounded-md hover:bg-indigo-700 transition-all duration-200"
              >
                Update Blog
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BlogEdit;
