import { useState } from "react";
import threeDots from "../../assets/icons/3dots.svg";
import deleteIcon from "../../assets/icons/delete.svg";
import editIcon from "../../assets/icons/edit.svg";

const BlogActions = () => {
  // State for Handle the actions popup
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="absolute right-0 top-2 flex justify-center items-center bg-[#030317] p-2 rounded-full shadow-lg">
      <button onClick={()=> setIsOpen(!isOpen)}>
        <img src={threeDots} alt="3dots of Action" />
      </button>

      {isOpen && (
        <div className="action-modal-container">
          <button className="action-menu-item hover:text-lwsGreen">
            <img src={editIcon} alt="Edit" />
            Edit
          </button>
          <button className="action-menu-item hover:text-red-500">
            <img src={deleteIcon} alt="Delete" />
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogActions;
