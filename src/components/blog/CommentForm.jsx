import axios from "axios";
import React, { useState } from "react";
import { useSinglBlogFetch } from "../../hooks/useSingleBlogFetch";

const CommentForm = ({ userId, blogId }) => {
  // State to hold comment text
  const [comment, setComment] = useState("");

  // Get blog and fetchBlog from hook
  const { fetchBlog, setBlog } = useSinglBlogFetch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/blogs/${blogId}/comment`,
        { userId, comment }
      );
      setComment("");
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/blogs/${blogId}`
      );
      if (response.status === 200) {
        setBlog({...response.data});
        console.log(response.data)
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        className="w-full bg-[#030317] border border-slate-500 text-slate-300 p-4 rounded-md focus:outline-none"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write a comment"
      ></textarea>
      <div className="flex justify-end mt-4">
        <button className="bg-indigo-600 text-white px-6 py-2 md:py-3 rounded-md hover:bg-indigo-700 transition-all duration-200">
          Comment
        </button>
      </div>
    </form>
  );
};

export default CommentForm;
