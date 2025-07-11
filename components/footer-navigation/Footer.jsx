//Simple footer with nav and links to all pages
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
      <Link className="art-link" href="/favourites">
        Favourites
      </Link>
    </nav>
  );
};

export default Footer;
