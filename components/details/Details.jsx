import { useRouter } from "next/router";

const Details = ({ imageSource, name, artist, year, genre }) => {
  const router = useRouter();
  return (
    <section className="art-detail-outer-container">
      <aside className="art-detail-container">
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
          <p className="art-comments-list">Comments</p>

          <label className="art-comments-label" htmlFor="comments-input">
            Add comments
          </label>
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
      </aside>
    </section>
  );
};

export default Details;
