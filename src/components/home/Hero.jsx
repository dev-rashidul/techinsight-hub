import axios from "axios";
import { useState } from "react";
import { useBlog } from "../../hooks/useBlog";

const Hero = () => {
  // State to hold search query
  const [query, setQuery] = useState("");

  // Get blogs from BlogContext
  const { setBlogs } = useBlog();

  // handleSearch Function
  const handleSearchChange = async (e) => {
    setQuery(e.target.value);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/search?query=${query}`
      );
      setBlogs(response.data);
    } catch (error) {
      console.error("Error searching blogs:", error);
    }
  };

  return (
    <section id="Hero">
      <div className="py-20 px-5 lg:px-0">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-yatra font-bold">
            TechInsight Hub
          </h2>
          <p className="text-base text-gray-200 pt-3">
            Explore the Authentic Tech Blogs
          </p>
          <div className="flex justify-center items-center pt-10 gap-5">
            <input
              className="max-w-[400px] w-full bg-[#191A29] border border-white/20 py-2.5 px-4 rounded-md focus:outline-none focus:border-indigo-500"
              type="text"
              placeholder="Search Blogs"
              onChange={handleSearchChange}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
