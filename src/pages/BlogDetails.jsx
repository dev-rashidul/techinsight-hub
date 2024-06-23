// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { useAxios } from "../hooks/useAxios";

// const BlogDetails = () => {
//   // State for single blog
//   const [blog, setBlog] = useState({});

//   // Get corresponding blog id using useParams()
//   const blogId = useParams();

//   // Get Axios Instance from Hooks
//   const { api } = useAxios();

//   // Make Array from tags string
//   let tags = blog?.tags?.split(",");

//   // Fetch Single Blog Data
//   useEffect(() => {
//     const fetchBlog = async () => {
//       try {
//         const response = await api.get(
//           `${import.meta.env.VITE_SERVER_URL}/blogs/${blogId.id}`
//         );

//         if (response.status === 200) {
//           setBlog({ ...response.data });
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     // Call function
//     fetchBlog();
//   }, [api, blogId]);

//   return (
//     <>
//       <main>
//         {/* Begin Blogs */}
//         <section>
//           <div className="container mx-auto text-center py-8">
//             <h1 className="font-bold text-3xl md:text-5xl">{blog?.title}</h1>
//             <div className="flex justify-center items-center my-4 gap-4">
//               <div className="flex items-center capitalize space-x-2">
//                 <div className="avater-img bg-indigo-600 text-white">
//                   <span className="">S</span>
//                 </div>
//                 <h5 className="text-slate-500 text-sm">
//                   {blog?.author?.firstName} {blog?.author?.lastName}
//                 </h5>
//               </div>
//               <span className="text-sm text-slate-700 dot">June 28, 2018</span>
//               <span className="text-sm text-slate-700 dot">100 Likes</span>
//             </div>
//             <img
//               className="mx-auto w-full md:w-8/12 object-cover h-80 md:h-96"
//               src={`${import.meta.env.VITE_SERVER_URL}/uploads/blog/${blog?.thumbnail}`}
//               alt=""
//             />

//             {/* Tags */}
//             <ul className="tags">
//               {tags?.map((tag, index) => (
//                 <span
//                   key={index}
//                   className="text-sm text-[#4B6BFB] bg-[#4B6BFB0D] py-1 px-2 rounded-md"
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </ul>

//             {/* Content */}
//             <div className="mx-auto w-full md:w-10/12 text-slate-300 text-base md:text-lg leading-8 py-2 !text-left">
//               {blog?.content}
//             </div>
//           </div>
//         </section>
//         {/* End Blogs */}

//         {/* Begin Comments */}
//         <section id="comments">
//           <div className="mx-auto w-full md:w-10/12 container">
//             <h2 className="text-3xl font-bold my-8">Comments (3)</h2>
//             <div className="flex items -center space-x-4">
//               <div className="avater-img bg-indigo-600 text-white">
//                 <span className="">S</span>
//               </div>
//               <div className="w-full">
//                 <textarea
//                   className="w-full bg-[#030317] border border-slate-500 text-slate-300 p-4 rounded-md focus:outline-none"
//                   placeholder="Write a comment"
//                 ></textarea>
//                 <div className="flex justify-end mt-4">
//                   <button className="bg-indigo-600 text-white px-6 py-2 md:py-3 rounded-md hover:bg-indigo-700 transition-all duration-200">
//                     Comment
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Comment One */}
//             <div className="flex items-start space-x-4 my-8">
//               <div className="avater-img bg-orange-600 text-white">
//                 <span className="">S</span>
//               </div>
//               <div className="w-full">
//                 <h5 className="text-slate -500 font-bold">Saad Hasan</h5>
//                 <p className="text-slate-300">
//                   Today I was mob programming with Square's Mobile & Performance
//                   Reliability team and we toyed with an interesting idea. Our
//                   codebase has classes that represent screens a user can
//                   navigate to. These classes are defined in modules, and these
//                   modules have an owner team defined. When navigating to a
//                   screen, we wanted to have the owner team information
//                   available, at runtime. We created a build tool that looks at
//                   about 1000 Screen classes, determines the owner team, and
//                   generates a class to do the lookup at runtime. The generated
//                   code looked like this:
//                 </p>
//               </div>
//             </div>

//             {/* Comment Two */}
//             <div className="flex items-start space-x-4 my-8">
//               <div className="avater-img bg-green-600 text-white">
//                 <span className="">S</span>
//               </div>
//               <div className="w-full">
//                 <h5 className="text-slate -500 font-bold">Saad Hasan</h5>
//                 <p className="text-slate-300">
//                   Today I was mob programming with Square's Mobile & Performance
//                   Reliability team and we toyed with an interesting idea. Our
//                   codebase has classes that represent screens a user can
//                   navigate to. These classes are defined in modules, and these
//                   modules have an owner team defined. When navigating to a
//                   screen, we wanted to have the owner team information
//                   available, at runtime. We created a build tool that looks at
//                   about 1000 Screen classes, determines the owner team, and
//                   generates a class to do the lookup at runtime. The generated
//                   code looked like this:
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//     </>
//   );
// };

// export default BlogDetails;
