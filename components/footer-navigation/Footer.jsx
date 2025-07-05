import Link from "next/link";
const Footer = () => {
  return (
    <nav className="art-navigation">
      <Link className="art-link" href="/">
        Spotlight
      </Link>
      <Link className="art-link" href="/gallery">
        Art Pieces
      </Link>
      <Link className="art-link" href="/">
        Favourites
      </Link>
    </nav>
  );
};

export default Footer;
