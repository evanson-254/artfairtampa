import ArtistsPage from "~/components/artist-hero";
import Footer from "~/components/footer";
import Navbar from "~/components/navbar";

export default function Artist() {
  return (
    <>
    <title>Art Fair Tampa | Artists</title>
    <meta name="description" content="Art Fair Tampa is a new, world-class contemporary art fair designed to spotlight emerging and established artists while cultivating a vibrant collector ecosystem in the Southeast. Our mission is to position Tampa as a cultural hub — a place where art, hospitality, and innovation converge."/>
    <meta name="keywords" content="art fair, tampa, art fair tampa, art fair tampa 2026, art fair tampa 2026, tampa, tampa convention center, tampa convention center, tampa art fair, tampa art fair 2026, tampa art fair 2026, art fair, contemporary art, contemporary art fair, contemporary art fair tampa, contemporary art fair tampa 2026, contemporary art fair tampa 2026, international art fair, international art fair tampa, international art fair tampa 2026, international art fair tampa 2026, fine art fair, fine art fair tampa, fine art fair tampa 2026, fine art fair tampa 2026"/>
    <Navbar />
    <ArtistsPage/>
    <Footer/>
    </>
  );
}