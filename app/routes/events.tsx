import EventsPage from "~/components/eventsPage";
import Footer from "~/components/footer";
import Navbar from "~/components/navbar";

export default function Artist() {
  return (
    <>
    <title>Art Fair Tampa | Events</title>
    <meta name="description" content="Art Fair Tampa is a new, world-class contemporary art fair designed to spotlight emerging and established artists while cultivating a vibrant collector ecosystem in the Southeast. Our mission is to position Tampa as a cultural hub — a place where art, hospitality, and innovation converge."/>
    <Navbar />
    <EventsPage/>
    <Footer/>
    </>
  );
}