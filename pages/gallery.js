import Cards from "@/components/gallery/Cards";

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
