import { useRouter } from "next/router";
import useSWR from "swr";
import Details from "@/components/details/Details";

const ArtPiece = ({ fetcher }) => {
  const router = useRouter();
  const { slug, imageSource, name, artist, year, genre } = router.query;
  console.log("here", slug);

  const { data, error, isLoading } = useSWR(
    `https://example-apis.vercel.app/api/art/details/${slug}`,
    fetcher
  );

  return (
    <Details
      imageSource={imageSource}
      name={name}
      artist={artist}
      year={year}
      genre={genre}
    />
  );
};

export default ArtPiece;
