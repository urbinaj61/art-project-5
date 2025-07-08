import { useRouter } from "next/router";
import Details from "@/components/details/Details";

//We use the [slug].js file to render our dynamic routes. As we are using the key slug to distinguish each art peice
//it makes sense to call our file [slug]. We could have called it fred if we wanted to.
const ArtPiece = ({
  handleFavouritesToggle,
  handleCommentsInput,
  handleDeleteComments,
  data,
}) => {
  const router = useRouter();
  const { slug } = router.query; //We retrieve the slug from the URL passed to us by the dynamic route.

  const {
    comments,
    colors,
    isFavourite,
    imageSource,
    name,
    artist,
    year,
    genre,
  } = data?.find((item) => item.slug === slug); //Here we need to find the specific slug and deconstruct the object.

  //We pass all functions and data to our details page. The details page has extra functionality.
  //All this is handled by our super parent _app.js
  return (
    <section className="art-list-container">
      <ul className="art-list">
        <li key={slug} className="art-listItem">
          <Details
            imageSource={imageSource}
            name={name}
            artist={artist}
            year={year}
            genre={genre}
            slug={slug}
            comments={comments}
            colors={colors}
            isFavourite={isFavourite}
            handleFavouritesToggle={handleFavouritesToggle}
            handleCommentsInput={handleCommentsInput}
            handleDeleteComments={handleDeleteComments}
          />
        </li>
      </ul>
    </section>
  );
};

export default ArtPiece;
