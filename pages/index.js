import Link from "next/link";
const HomePage = ({ data }) => {
  return (
    <main>
      <h1>Hello from Next.js</h1>
      <Link href="/gallery/gallery">Gallery</Link>
    </main>
  );
};

export default HomePage;
