import Link from "next/link";
import Header from "../components/header/Header.jsx";

const HomePage = ({ data }) => {
  return (
    <>
      <Header />

      <Link href="/gallery">Gallery</Link>
      <Link href="/spotlight">Spotlight</Link>
    </>
  );
};

export default HomePage;
