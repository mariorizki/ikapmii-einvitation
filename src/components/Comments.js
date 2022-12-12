import { map } from '@firebase/util';
import React from 'react';

const Comments = ({
  comments,
  commentInput,
  setCommentInput,
  handleAddComment,
}) => {
  return (
    <div>
      <form onSubmit={handleAddComment}>
        <textarea
          type="text"
          onChange={(e) => setCommentInput(e.target.value)}
          className="text-black outline-none"
          placeholder="Tulis Aspirasi"
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
          <div key={comment.id}>
            <p>{comment.owner}</p>
            <p>{comment.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
