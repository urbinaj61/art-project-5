import Link from "next/link";
import FavouritesButton from "../favouritesButton/FavouritesButton";
import Image from "next/image";

const Card = ({
  imageSource,
  name,
  artist,
  slug,
  year,
  genre,
  isFavourite,
  handleFavouritesToggle,
}) => {
  return (
    <>
      <FavouritesButton
        slug={slug}
        isFavourite={isFavourite}
        onHandleFavouritesToggle={handleFavouritesToggle}
      />
      <aside className="art-card-container">
        <figure className="art-figure">
          <Link
            href={{
              pathname: `/details/${slug}`,
            }}
          >
            <Image
              className="art-image"
              width="500"
              height="400"
              src={imageSource}
              alt={name}
            />
          </Link>
          <figcaption className="art-figCaption">{name}</figcaption>
          <p className="art-paragraph-artist">by {artist}</p>
        </figure>
      </aside>
    </>
  );
};

export default Card;
