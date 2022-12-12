import React from 'react';
import { Zoom } from 'react-awesome-reveal';

const Comments = ({
  comments,
  commentInput,
  setCommentInput,
  handleAddComment,
}) => {
  return (
    <div className="w-[90%] mt-10">
      <Zoom>
        <h1 className="text-3xl font-marck font-bold text-amber-500">
          Aspirasi
        </h1>
      </Zoom>

      <form
        onSubmit={handleAddComment}
        className="flex flex-col mt-5 p-3 bg-[#0F1744] rounded-md"
      >
        <textarea
          type="text"
          onChange={(e) => setCommentInput(e.target.value)}
          className="text-black outline-none p-2 rounded-md"
          placeholder="Tulis Aspirasi"
          rows="4"
        />
        <button
          type="submit"
          className="outline-none text-md text-white font-medium py-2 px-3 bg-amber-500  mt-4 rounded-md"
        >
          Submit
        </button>
      </form>

      <div>
        {comments.map((comment) => (
          <Zoom key={comment.id}>
            <div className="text-start bg-[#0F1744] rounded-md p-3 mt-2">
              <h1 className="text-xl font-marck font-bold text-amber-500">
                {comment.owner}
              </h1>
              <p className="text-sm">{comment.comment}</p>
            </div>
          </Zoom>
        ))}
      </div>
    </div>
  );
};

export default Comments;
