import { useRouter } from "next/router";
import Details from "@/components/details/Details";

const ArtPiece = ({ data, handleFavouritesToggle, handleCommentsInput }) => {
  const router = useRouter();
  const { slug, imageSource, name, artist, year, genre, isFavourite } =
    router.query;

  // const { imageSource, name, artist, year, genre, isFavourite } = data.find(
  //   (item) => item.slug === slug
  // );

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
            isFavourite={isFavourite}
            handleFavouritesToggle={handleFavouritesToggle}
            handleCommentsInput={handleCommentsInput}
          />
        </li>
      </ul>
    </section>
  );
};

export default ArtPiece;
