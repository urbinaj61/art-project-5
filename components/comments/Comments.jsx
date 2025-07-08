//Show and delete comments
const Comments = ({ comments, slug, onHandleDeleteComments }) => {
  if (comments.length === 0)
    return (
      <h2 className="art-comment-no-data">There are no comments to show</h2>
    );
  return (
    <>
      {comments.map((comment) => (
        <li key={comment.id} className="art-comments-list">
          <p className="art-comment">{comment.comments}</p>
          <p className="art-comment-time">{comment.time}</p>

          <button
            type="button"
            className="art-comments-delete-button"
            onClick={() => onHandleDeleteComments(comment.id, slug)}
          >
            Del
          </button>
        </li>
      ))}
    </>
  );
};

export default Comments;
