import React from "react";
import { Link } from "react-router-dom";
import notFound from "../../assets/not-found-img.svg";

const NotFound = () => {
  return (
    <>
      <section id="NotFound">
        <div className="container mx-auto">
          <div className="not-found max-w-3xl mx-auto text-center">
            <img src={notFound} alt="not found image" />
            <Link to="/" className="bg-indigo-600 text-white px-6 py-2 md:py-3 rounded-md hover:bg-indigo-700 transition-all duration-200">Back Home</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
