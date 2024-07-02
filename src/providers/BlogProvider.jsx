import React, { useState } from "react";
import { BlogContext } from "../context";

const BlogProvider = ({ children }) => {
  // Blogs State
  const [blogs, setBlogs] = useState([]);

  // Loading State
  const [loading, setLoading] = useState(false)

  return (
    <BlogContext.Provider value={{ blogs, setBlogs, loading, setLoading }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogProvider;
