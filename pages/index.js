import { useState, useEffect } from "react";
import Card from "@/components/gallery/Card";

const Homepage = ({ data, handleFavouritesToggle }) => {
  const [randomIndex, setRandomIndex] = useState(0);

  const getRandomIndex = () => {
    return Math.floor(Math.random() * data.length);
  };

  useEffect(() => {
    if (!data || data.length === 0) return;
    const interval = setInterval(() => {
      setRandomIndex(getRandomIndex());
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [data]);

  const currentArtwork = data?.[randomIndex];
  if (!currentArtwork || !currentArtwork.imageSource) return null;
  const { imageSource, name, artist, slug, isFavourite } = currentArtwork;

  if (!data || data.length === 0 || !data[randomIndex]?.imageSource)
    return null;

  return (
    <section className="art-list-container">
      <ul className="art-list">
        <li key={slug} className="art-listItem">
          <Card
            imageSource={imageSource}
            name={name}
            artist={artist}
            isFavourite={isFavourite}
            slug={slug}
            handleFavouritesToggle={handleFavouritesToggle}
          />
        </li>
      </ul>
    </section>
  );
};

export default Homepage;
