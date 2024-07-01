import axios from "axios";
import { useState } from "react";
import { createPortal } from "react-dom";
import swal from "sweetalert";
import threeDots from "../../assets/icons/3dots.svg";
import deleteIcon from "../../assets/icons/delete.svg";
import editIcon from "../../assets/icons/edit.svg";
import { useBlog } from "../../hooks/useBlog";
import BlogEdit from "./BlogEdit";

const BlogActions = ({ blog }) => {
  // State for Handle the actions popup
  const [isOpen, setIsOpen] = useState(false);

  // State for Handle Edit Modal
  const [isOpenModal, setIsOpenModal] = useState(false);

  // State to Hold Existing Blog
  const [existingBlog, setExistingBlog] = useState({});

  // Get Blogs Array from Context
  const { blogs, setBlogs } = useBlog();

  // Delete Handler Function
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_SERVER_URL}/blogs/${id}`);
      const newBlogs = blogs.filter((item) => item._id !== id);
      setIsOpenModal(false);
      setBlogs(newBlogs);
      swal("Deleted!", "Blog deleted successfully", "success");
    } catch (err) {
      console.error("Error deleting blog:", err);
    }
  };

  const handleEdit = (blog) => {
    setIsOpenModal(true);
    setIsOpen(false);
    setExistingBlog(blog);
  };

  return (
    <>
      {isOpenModal &&
        createPortal(
          <BlogEdit
            onclose={() => setIsOpenModal(false)}
            existingBlog={existingBlog}
          />,
          document.body
        )}

      <div className="absolute right-0 top-2 flex justify-center items-center bg-[#030317] p-2 rounded-full shadow-lg">
        <button onClick={() => setIsOpen(!isOpen)}>
          <img src={threeDots} alt="3dots of Action" />
        </button>

        {isOpen && (
          <div className="action-modal-container">
            <button
              onClick={() => handleEdit(blog)}
              className="action-menu-item hover:text-lwsGreen"
            >
              <img src={editIcon} alt="Edit" />
              Edit
            </button>
            <button
              onClick={() => handleDelete(blog._id)}
              className="action-menu-item hover:text-red-500"
            >
              <img src={deleteIcon} alt="Delete" />
              Delete
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default BlogActions;
