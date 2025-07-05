import Card from "./Card";

const Cards = ({ data }) => {
  return (
    <section className="art-list-container">
      <ul className="art-list">
        {data?.map(({ slug, imageSource, name, artist, year, genre }) => {
          return (
            <li key={slug} className="art-listItem">
              <Card
                imageSource={imageSource}
                name={name}
                artist={artist}
                slug={slug}
                year={year}
                genre={genre}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Cards;
