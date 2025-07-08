import Cards from "@/components/gallery/Cards";

//As this is a page we receive all our props from the main parent. _app.js.
//We then send all this to our Cards component.
const Gallery = ({
  data,
  handleFavouritesToggle,
  handleCommentsInput,
  handleDeleteComments,
}) => {
  return (
    <Cards
      data={data}
      handleFavouritesToggle={handleFavouritesToggle}
      handleCommentsInput={handleCommentsInput}
      handleDeleteComments={handleDeleteComments}
    />
  );
};

export default Gallery;
