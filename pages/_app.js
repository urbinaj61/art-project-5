import { useState, useEffect } from "react";
import { uid } from "uid";
import "../styles/main.css";
import useSWR from "swr";
import Header from "../components/header/Header.jsx";
import Footer from "../components/footer-navigation/Footer.jsx";

//Setup the SWR fetcher
const fetcher = (...args) => fetch(...args).then((response) => response.json());

const App = ({ Component, pageProps }) => {
  const [apiData, setApiData] = useState([]);

  //Favourite artists button functionality
  const handleFavouritesToggle = (slug) => {
    const updatedArray = apiData.map((item) =>
      item.slug === slug ? { ...item, isFavourite: !item.isFavourite } : item
    );

    setApiData(updatedArray);
  };

  //Fetch the data
  const { data, error, isLoading } = useSWR(
    `https://example-apis.vercel.app/api/art`,
    fetcher
  );

  //We only need the fetched data once. We then add a few things to the objects and use this newly created array in state.
  const constructNewArray = (data) => {
    return data.map((item) => ({
      ...item,
      isFavourite: false,
      comments: [],
    }));
  };

  //If we have received the data from the API we then convert it to our needs and place in state.
  useEffect(() => {
    if (data && data.length !== 0) {
      setApiData(constructNewArray(data));
    }
  }, [data]);

  //Handle the comments inputs
  const handleCommentsInput = (formData, slug) => {
    const newObj = { id: uid(), ...formData };
    const updatedArray = apiData.map((item) =>
      item.slug === slug
        ? { ...item, comments: [...item.comments, newObj] }
        : item
    );

    setApiData(updatedArray);
  };

  //If no errors show our stuff
  if (error) throw new Error("There is something wrong with the API");
  if (isLoading) return <h1>Loading...</h1>;
  if (data && data.length !== 0)
    return (
      <>
        <Header />
        <aside className="art-main-section">
          <Component
            {...pageProps}
            data={apiData}
            fetcher={fetcher}
            handleFavouritesToggle={handleFavouritesToggle}
            handleCommentsInput={handleCommentsInput}
          />
        </aside>
        <Footer />
      </>
    );
};

export default App;
