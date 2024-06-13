const Hero = () => {
  return (
    <section id="Hero">
      <div className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-yatra font-bold">TechInsight Hub</h2>
          <p className="text-base text-gray-200 pt-3">
            Explore the Authentic Tech Blogs
          </p>
          <div className="flex justify-center items-center pt-10 gap-5">
            <input
              className="max-w-[400px] w-full bg-[#030317] border border-white/20 py-2.5 px-4 rounded-md focus:outline-none focus:border-indigo-500"
              type="text"
              placeholder="Search Blogs"
            />
            <input
              className="bg-indigo-600 text-white px-6 py-2 md:py-3 rounded-md hover:bg-indigo-700 transition-all duration-200"
              type="submit"
              value="Search"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
