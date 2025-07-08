import Cards from "@/components/gallery/Cards";

//Here we filter out any art pieces that are not favourites and re-use the Cards component.
const Favourites = ({ data, handleFavouritesToggle }) => {
  const favouritesData = data.filter((item) => item.isFavourite);
  let emptyArray = false;
  favouritesData.length === 0 ? (emptyArray = true) : (emptyArray = false);
  return (
    <Cards
      emptyArray={emptyArray}
      data={favouritesData}
      handleFavouritesToggle={handleFavouritesToggle}
    />
  );
};

export default Favourites;
