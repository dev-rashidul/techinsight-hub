import { useEffect, useRef, useState } from "react";
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
          <div className="blog">
            <div className="container mx-auto">
              {/* Blog Contents */}
              <div className="blog-wrapper">
                <h3 className="text-3xl text-white font-semibold">Blogs</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-6">
                  {blogs?.map((blog) => (
                    <Blog key={blog.id} blog={blog} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container mx-auto">
          {hasMore ? (
            <h2 ref={loaderRef}>Loading more Blogs...</h2>
          ) : (
            <p className="text-indigo-600 text-center text-xl font-medium pt-5">
              Data fetched successfully
            </p>
          )}
        </div>
      </main>
    </>
  );
};

export default HomePage;
