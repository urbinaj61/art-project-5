import { useState, useEffect } from "react";
import "../styles/main.css";
import useSWR from "swr";
import Header from "../components/header/Header.jsx";
import Footer from "../components/footer-navigation/Footer.jsx";

const fetcher = (...args) => fetch(...args).then((response) => response.json());

const App = ({ Component, pageProps }) => {
  const [apiData, setApiData] = useState([]);

  const handleFavouritesToggle = (slug) => {
    const updatedArray = apiData.map((item) =>
      item.slug === slug ? { ...item, isFavourite: !item.isFavourite } : item
    );

    setApiData(updatedArray);
  };

  const { data, error, isLoading } = useSWR(
    `https://example-apis.vercel.app/api/art`,
    fetcher
  );

  const constructNewArray = (data) => {
    return data.map((item) => ({
      ...item,
      isFavourite: false,
      comments: [],
    }));
  };

  useEffect(() => {
    if (data && data.length !== 0) {
      setApiData(constructNewArray(data));
    }
  }, [data]);

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
          />
        </aside>
        <Footer />
      </>
    );
};

export default App;
