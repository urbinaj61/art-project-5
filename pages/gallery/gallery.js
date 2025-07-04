const Gallery = ({ data }) => {
  return (
    <section className="art-list-container">
      <ul className="art-list">
        {data?.map(({ slug, imageSource, name, artist }) => {
          return (
            <li key={slug} className="art-lisItem">
              <img className="art-image" src={imageSource} />
              <h3 className="art-title">{name}</h3>
              <h4 className="art-artist">{artist}</h4>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Gallery;
