const Form = ({ onHandleCommentsInput, slug }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onHandleCommentsInput(data, slug);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="art-comments-label" htmlFor="comments">
        Add Comments
      </label>
      <input
        className="art-comments-input"
        id="comments"
        aria-label="comments-input"
        type="text"
        name="comments"
        placeholder="Please enter your comment"
      />
      <button type="submit" className="art-comments-button">
        Send
      </button>
    </form>
  );
};

export default Form;
