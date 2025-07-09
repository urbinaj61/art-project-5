import { useRouter } from "next/router";
import FavouritesButton from "../favouritesButton/FavouritesButton";
import Form from "../form/Form";
import Comments from "../comments/Comments";
import Palette from "../palette/Palette";

//The details component receives most of our props as this component has the most functionality
const Details = ({
  imageSource,
  name,
  artist,
  year,
  genre,
  slug,
  isFavourite,
  comments,
  colors,
  handleFavouritesToggle,
  handleCommentsInput,
  handleDeleteComments,
}) => {
  const router = useRouter();

  return (
    <>
      <FavouritesButton
        slug={slug}
        isFavourite={isFavourite}
        onHandleFavouritesToggle={handleFavouritesToggle}
      />
      <button
        className="art-return-button"
        type="button"
        onClick={() => router.back()}
      >
        Return
      </button>

      <figure className="art-detail-figure">
        <img className="art-detail-image" src={imageSource} alt={name} />
        <figcaption className="art-detail-figCaption">{name}</figcaption>
        <p className="art-detail-paragraph-artist">by {artist}</p>
        <p className="art-detail-paragraph-year">{year}</p>
        <p className="art-detail-paragraph-genre">{genre}</p>
      </figure>

      <Palette colors={colors} />

      <aside className="art-input-container">
        <Form onHandleCommentsInput={handleCommentsInput} slug={slug} />
      </aside>

      <ul className="art-comments-list-container">
        <Comments
          comments={comments}
          slug={slug}
          onHandleDeleteComments={handleDeleteComments}
        />
      </ul>
    </>
  );
};

export default Details;
