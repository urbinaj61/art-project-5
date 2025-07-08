import { useState, useEffect } from "react";
import Card from "@/components/gallery/Card";

const Homepage = ({
  data,
  handleFavouritesToggle,
  handleCommentsInput,
  handleDeleteComments,
}) => {
  const [randomIndex, setRandomIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const getRandomIndex = () => {
    return Math.floor(Math.random() * data.length);
  };

  // useEffect(() => {
  //   if (!data || data.length === 0) return;
  //   const interval = setInterval(() => {
  //     setRandomIndex(getRandomIndex());
  //   }, 4000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [data]);

  useEffect(() => {
    if (!data || data.length === 0) return;

    const interval = setInterval(() => {
      setOpacity(0);

      setTimeout(() => {
        setRandomIndex(getRandomIndex());
        requestAnimationFrame(() => {
          setTimeout(() => {
            setOpacity(1);
          }, 50);
        });
      }, 1000);
    }, 4000);
    return () => clearInterval(interval);
  }, [data]);

  const currentArtwork = data?.[randomIndex];
  if (!currentArtwork || !currentArtwork.imageSource) return null;
  const { imageSource, name, artist, slug, isFavourite } = currentArtwork;

  if (!data || data.length === 0 || !data[randomIndex]?.imageSource)
    return null;

  return (
    <section
      className="art-list-container"
      style={{ opacity: opacity, transition: "opacity 1s ease-in-out" }}
    >
      <ul className="art-list">
        <li key={slug} className="art-listItem">
          <Card
            imageSource={imageSource}
            name={name}
            artist={artist}
            isFavourite={isFavourite}
            slug={slug}
            handleFavouritesToggle={handleFavouritesToggle}
            handleCommentsInput={handleCommentsInput}
            handleDeleteComments={handleDeleteComments}
          />
        </li>
      </ul>
    </section>
  );
};

export default Homepage;
