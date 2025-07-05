const Card = ({ imageSource, name, artist }) => {
  return (
    <aside className="art-card=container">
      <figure className="art-figure">
        <img className="art-image" src={imageSource} alt={name} />
        <figcaption className="art-figCaption">{name}</figcaption>
        <p className="art-paragraph-artist">by {artist}</p>
      </figure>
    </aside>
  );
};

export default Card;
