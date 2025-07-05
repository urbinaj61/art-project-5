import "../styles/main.css";
import useSWR from "swr";
import Header from "../components/header/Header.jsx";
import Footer from "../components/footer-navigation/Footer.jsx";

const fetcher = (...args) => fetch(...args).then((response) => response.json());

const App = ({ Component, pageProps }) => {
  const { data, error, isLoading } = useSWR(
    `https://example-apis.vercel.app/api/art`,
    fetcher
  );

  if (error) throw new Error("There is something wrong with the API");
  if (isLoading) return <h1>Loading...</h1>;

  return (
    <>
      <Header />
      <Component {...pageProps} data={data} fetcher={fetcher} />
      <Footer />
    </>
  );
};

export default App;
