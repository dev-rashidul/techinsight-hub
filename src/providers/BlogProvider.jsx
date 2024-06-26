import React, { useState } from "react";
import { BlogContext } from "../context";

const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  return (
    <BlogContext.Provider value={{ blogs, setBlogs }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogProvider;
