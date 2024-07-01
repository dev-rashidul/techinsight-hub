const CommentCard = ({ comment }) => {
  return (
    <div className="flex items-start space-x-4 my-8">
      <div className="avater-img bg-orange-600 text-white">
        <span className="">{comment?.user?.firstName?.slice(0,1)}</span>
      </div>
      <div className="w-full">
        <h5 className="text-slate -500 font-bold">{comment?.user?.firstName} {comment?.user?.lastName}</h5>
        <p className="text-slate-300">{comment?.comment}</p>
      </div>
    </div>
  );
};

export default CommentCard;
