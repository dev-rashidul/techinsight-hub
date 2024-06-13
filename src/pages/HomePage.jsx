import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../api";
import Blog from "../components/blog/Blog";
import PageTitle from "../components/common/PageTitle";
import Hero from "../components/home/Hero";

const HomePage = () => {
  // State for store Blogs data
  const [blogs, setBlogs] = useState([]);

  // State for Page
  const [page, setPage] = useState(1);

  // Check the blogs remain or not
  const [hasMore, setHasMore] = useState(true);

  // Ref for loader
  const loaderRef = useRef(null);

  // Fetch blogs

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_URL}/blogs?page=${page}`
        );
        const data = response.data;
        if (data.blogs.length === 0) {
          setHasMore(false);
        } else {
          setBlogs((prevBlogs) => [...prevBlogs, ...data.blogs]);
          setPage((prevPage) => prevPage + 1);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    const onIntersection = (items) => {
      const loaderItem = items[0];

      if (loaderItem.isIntersecting && hasMore) {
        fetchBlogs();
      }
    };

    const observer = new IntersectionObserver(onIntersection);

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    // cleanup
    return () => {
      if (observer && loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [page, hasMore]);

  return (
    <>
      <PageTitle title="Home" />
      <main>
        {/* Hero Section Start */}

        <Hero />

        {/* Hero Section End */}

        {/* Begin Blogs */}
        <section>
          <div className="container mx-auto">
            <div className="lg:flex gap-4">
              {/* Blog Contents */}

              <div className="w-full lg:w-2/3">
                {blogs?.map((blog) => (
                  <Blog key={blog.id} blog={blog} />
                ))}
              </div>

              {/* Sidebar */}
              <div className="w-full lg:w-1/3">
                <div className="sidebar-card">
                  <h3 className="text-slate-300 text-xl lg:text-2xl font-semibold">
                    Most Popular 👍️
                  </h3>

                  <ul className="space-y-5 my-5">
                    <li>
                      <h3 className="text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer">
                        How to Auto Deploy a Next.js App on Ubuntu from GitHub
                      </h3>
                      <p className="text-slate-600 text-sm">
                        by
                        <Link to="./profile.html">Saad Hasan</Link>
                        <span>·</span> 100 Likes
                      </p>
                    </li>
                  </ul>
                </div>

                <div className="sidebar-card mt-5">
                  <h3 className="text-slate-300 text-xl lg:text-2xl font-semibold">
                    Your Favourites ❤️
                  </h3>

                  <ul className="space-y-5 my-5">
                    <li>
                      <h3 className="text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer">
                        How to Auto Deploy a Next.js App on Ubuntu from GitHub
                      </h3>
                      <p className="text-slate-600 text-sm">
                        #tailwindcss, #server, #ubuntu
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container mx-auto">
          {hasMore ? (
            <h2 ref={loaderRef}>Loading more Blogs...</h2>
          ) : (
            <p className="text-indigo-600 text-center text-xl font-medium pt-5">Data fetched successfully</p>
          )}
        </div>
      </main>
    </>
  );
};

export default HomePage;
