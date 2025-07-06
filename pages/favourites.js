import Cards from "@/components/gallery/Cards";

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
