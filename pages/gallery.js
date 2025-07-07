import Cards from "@/components/gallery/Cards";

const Gallery = ({ data, handleFavouritesToggle, handleCommentsInput }) => {
  return (
    <Cards
      data={data}
      handleFavouritesToggle={handleFavouritesToggle}
      handleCommentsInput={handleCommentsInput}
    />
  );
};

export default Gallery;
