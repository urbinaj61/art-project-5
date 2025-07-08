import { useEffect } from "react";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";
import { Inter } from "next/font/google";
import "../styles/main.css";
import useSWR from "swr";
import Header from "../components/header/Header.jsx";
import Footer from "../components/footer-navigation/Footer.jsx";

//Setup the SWR fetcher
const fetcher = (...args) => fetch(...args).then((response) => response.json());

//Setup font
const inter = Inter({ subsets: ["latin"] });

//Apply localStorage
const App = ({ Component, pageProps }) => {
  const [apiData, setApiData] = useLocalStorageState("art", {
    defaultValue: [],
  });

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
    if (data && data.length !== 0 && apiData.length === 0) {
      setApiData(constructNewArray(data));
    }
  }, [data, apiData]);

  //Handle the comments inputs
  const handleCommentsInput = (formData, slug) => {
    const now = new Date();
    const time = now.toLocaleString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });

    const newObj = { id: uid(), time, ...formData };
    const updatedArray = apiData.map((item) =>
      item.slug === slug
        ? { ...item, comments: [...item.comments, newObj] }
        : item
    );

    setApiData(updatedArray);
  };

  //Handle deletion of a comment
  const handleDeleteComments = (id, slug) => {
    setApiData((prevData) =>
      prevData.map((item) =>
        item.slug === slug
          ? {
              ...item,
              comments: item.comments.filter(
                (comment) => comment.id !== String(id)
              ),
            }
          : item
      )
    );
  };

  //If no errors show our stuff
  if (error) throw new Error("There is something wrong with the API");
  if (isLoading) return <h1>Loading...</h1>;
  if (data && data.length !== 0)
    return (
      <div className={inter.className}>
        <Header />
        <aside className="art-main-section">
          <Component
            {...pageProps}
            data={apiData}
            fetcher={fetcher}
            handleFavouritesToggle={handleFavouritesToggle}
            handleCommentsInput={handleCommentsInput}
            handleDeleteComments={handleDeleteComments}
          />
        </aside>
        <Footer />
      </div>
    );
};

export default App;
