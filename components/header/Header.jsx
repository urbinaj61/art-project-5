import { useRouter } from "next/router";

//Just a normal header. But displaying which page we are on from pathname information derived from our router object.
const Header = () => {
  const router = useRouter();

  let heading = "Art Gallery";

  if (router.pathname === "/")
    heading = (
      <>
        <h1 className="art-heading">{heading}</h1>
        <h3 className="art-sub-heading">Spotlight</h3>
      </>
    );
  if (router.pathname === "/favourites")
    heading = (
      <>
        <h1 className="art-heading">{heading}</h1>
        <h3 className="art-sub-heading">Favourites</h3>
      </>
    );
  if (router.pathname === "/gallery")
    heading = (
      <>
        <h1 className="art-heading">{heading}</h1>
        <h3 className="art-sub-heading">Art Pieces</h3>
      </>
    );
  if (router.pathname === "/details/[slug]")
    heading = (
      <>
        <h1 className="art-heading">{heading}</h1>
        <h3 className="art-sub-heading">Details Page</h3>
      </>
    );

  return <header className="art-header">{heading}</header>;
};

export default Header;
