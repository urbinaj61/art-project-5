import Card from "./Card";

const Cards = ({ data }) => {
  return (
    <section className="art-list-container">
      <ul className="art-list">
        {data?.map(({ slug, imageSource, name, artist }) => {
          return (
            <li key={slug} className="art-listItem">
              <Card imageSource={imageSource} name={name} artist={artist} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Cards;
