import { useRouter } from "next/router";
import Details from "@/components/details/Details";

const ArtPiece = ({
  handleFavouritesToggle,
  handleCommentsInput,
  handleDeleteComments,
  data,
}) => {
  const router = useRouter();
  const { slug } = router.query;

  const {
    comments,
    colors,
    isFavourite,
    imageSource,
    name,
    artist,
    year,
    genre,
  } = data?.find((item) => item.slug === slug);

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
