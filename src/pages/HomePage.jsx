import { useEffect } from "react";
import Blog from "../components/blog/Blog";
import Loading from "../components/common/Loading";
import PageTitle from "../components/common/PageTitle";
import Hero from "../components/home/Hero";
import { useFetchBlogs } from "../hooks/useFetchBlogs";

const HomePage = () => {
  // Blogs array from hooks
  const { blogs, fetchBlogs, loading } = useFetchBlogs();

  useEffect(() => {
    fetchBlogs();
  }, []);

  if (loading) return <Loading />;

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
              <div className="blog-wrapper relative">
                <h3 className="text-3xl text-white font-semibold">Blogs</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-6">
                  {blogs?.map((blog) => (
                    <Blog key={blog._id} blog={blog} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;
