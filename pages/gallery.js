import Cards from "@/components/gallery/Cards";
import Header from "../components/header/Header";

const Gallery = ({ data }) => {
  return (
    <>
      <Header />
      <Cards data={data} />
    </>
  );
};

export default Gallery;
