import { useRouter } from "next/router";
import FavouritesButton from "../favouritesButton/FavouritesButton";
import Form from "../form/Form";

const Details = ({
  imageSource,
  name,
  artist,
  year,
  genre,
  slug,
  isFavourite,
  handleFavouritesToggle,
  handleCommentsInput,
}) => {
  const router = useRouter();

  return (
    <>
      <FavouritesButton
        slug={slug}
        isFavourite={isFavourite}
        handleFavouritesToggle={handleFavouritesToggle}
      />

      <figure className="art-detail-figure">
        <img className="art-detail-image" src={imageSource} alt={name} />
        <figcaption className="art-detail-figCaption">{name}</figcaption>
        <p className="art-detail-paragraph-artist">by {artist}</p>
        <p className="art-detail-paragraph-year">{year}</p>
        <p className="art-detail-paragraph-genre">{genre}</p>
      </figure>
      <button
        className="art-return-button"
        type="button"
        onClick={() => router.back()}
      >
        Return
      </button>

      <ul className="art-comments-list-container">
        <li className="art-comments-list">Comments</li>
        <li className="art-comments-list">Comments</li>
        <li className="art-comments-list">Comments</li>
      </ul>

      <aside className="art-input-container">
        <Form onHandleCommentsInput={handleCommentsInput} slug={slug} />
      </aside>
    </>
  );
};

export default Details;
