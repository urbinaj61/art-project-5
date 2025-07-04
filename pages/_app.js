import "../styles/main.css";
import useSWR from "swr";

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
      <Component {...pageProps} data={data} fetcher={fetcher} />
    </>
  );
};

export default App;
