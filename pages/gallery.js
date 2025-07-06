import Cards from "@/components/gallery/Cards";

const Gallery = ({ data, handleFavouritesToggle }) => {
  return <Cards data={data} handleFavouritesToggle={handleFavouritesToggle} />;
};

export default Gallery;
