import { useState, useEffect } from "react";
import Card from "@/components/gallery/Card";
import Header from "../components/header/Header";

const Spotlight = ({ data }) => {
  const [randomIndex, setRandomIndex] = useState(0);

  const getRandomIndex = () => {
    const minCeiled = Math.ceil(0);
    const maxFloored = Math.floor(data.length);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomIndex(getRandomIndex());
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [data]);

  const { imageSource, name, artist, slug } = data[randomIndex] || {};

  if (imageSource === undefined) return null;

  return (
    <>
      <Header />
      <section className="art-list-container">
        <ul className="art-list">
          <li key={slug} className="art-listItem">
            <Card imageSource={imageSource} name={name} artist={artist} />
          </li>
        </ul>
      </section>
    </>
  );
};

export default Spotlight;
