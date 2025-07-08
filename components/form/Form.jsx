import { useRef } from "react";

//This form handles the comment entries
const Form = ({ onHandleCommentsInput, slug }) => {
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    data.comments !== ""
      ? onHandleCommentsInput(data, slug)
      : inputRef.current.focus();
    event.target.reset();
    inputRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="art-comments-label" htmlFor="comments">
        Add Comments
      </label>
      <input
        autoFocus
        ref={inputRef}
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
