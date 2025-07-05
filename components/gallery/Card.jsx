import Link from "next/link";

const Card = ({ imageSource, name, artist, slug, year, genre }) => {
  return (
    <aside className="art-card-container">
      <figure className="art-figure">
        <Link
          href={{
            pathname: `/details/${slug}`,
            query: { imageSource, name, artist, year, genre },
          }}
        >
          <img className="art-image" src={imageSource} alt={name} />
        </Link>

        <figcaption className="art-figCaption">{name}</figcaption>
        <p className="art-paragraph-artist">by {artist}</p>
      </figure>
    </aside>
  );
};

export default Card;
