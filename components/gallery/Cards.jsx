import Card from "./Card";

const Cards = ({ data, handleFavouritesToggle }) => {
  return (
    <section className="art-list-container">
      <ul className="art-list">
        {data?.map(
          ({ slug, imageSource, name, artist, year, genre, isFavourite }) => {
            return (
              <li key={slug} className="art-listItem">
                <Card
                  imageSource={imageSource}
                  name={name}
                  artist={artist}
                  slug={slug}
                  year={year}
                  genre={genre}
                  isFavourite={isFavourite}
                  handleFavouritesToggle={handleFavouritesToggle}
                />
              </li>
            );
          }
        )}
      </ul>
    </section>
  );
};

export default Cards;
