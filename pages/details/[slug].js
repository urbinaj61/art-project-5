import { useRouter } from "next/router";
import Details from "@/components/details/Details";
import Card from "@/components/gallery/Card";

const ArtPiece = ({ data, handleFavouritesToggle }) => {
  const router = useRouter();
  const { slug } = router.query;

  const { imageSource, name, artist, year, genre, isFavourite } = data.find(
    (item) => item.slug === slug
  );

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
          />
        </li>
      </ul>
    </section>
  );
};

export default ArtPiece;
