import { useState, useEffect } from "react";
import Card from "@/components/gallery/Card";

//Receive props from _app.js
const Homepage = ({
  data,
  handleFavouritesToggle,
  handleCommentsInput,
  handleDeleteComments,
}) => {
  const [randomIndex, setRandomIndex] = useState(0); //Setup our randomizer
  const [opacity, setOpacity] = useState(1); //Setup the fader

  //Get random index from 0 to array length received from API
  const getRandomIndex = () => {
    return Math.floor(Math.random() * data.length);
  };

  //Deals with displaying a random art piece and transition.
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

  //Keep the current display art piece details
  const currentArtwork = data?.[randomIndex];
  if (!currentArtwork || !currentArtwork.imageSource) return null;
  const { imageSource, name, artist, slug, isFavourite } = currentArtwork;

  //Only render if all data available
  if (!data || data.length === 0 || !data[randomIndex]?.imageSource)
    return null;

  //Send all relevant data and functions to the Card component. All functions and state are stored in _app.js
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
