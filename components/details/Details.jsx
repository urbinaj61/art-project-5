import { useRouter } from "next/router";

const Details = ({ imageSource, name, artist, year, genre }) => {
  const router = useRouter();
  return (
    <section className="art-detail-outer-container">
      <figure className="art-detail-figure">
        <img className="art-detail-image" src={imageSource} alt={name} />
        <figcaption className="art-detail-figCaption">{name}</figcaption>
        <p className="art-detail-paragraph-artist">by {artist}</p>
        <p className="art-detail-paragraph-year">{year}</p>
        <p className="art-detail-paragraph-genre">{genre}</p>
        <button
          className="art-return-button"
          type="button"
          onClick={() => router.back()}
        >
          Return
        </button>
        <article className="art-comments-main-container">
          <ul className="art-comments-list-container">
            <li className="art-comments-list">Comments</li>
            <li className="art-comments-list">Comments</li>
            <li className="art-comments-list">Comments</li>
          </ul>
        </article>

        <aside className="art-input-container">
          <input
            className="art-comments-input"
            type="text"
            placeholder="Please enter your comment"
            id="art-comments-input"
          />
          <button className="art-comments-button" type="button">
            Add
          </button>
        </aside>
      </figure>
    </section>
  );
};

export default Details;
