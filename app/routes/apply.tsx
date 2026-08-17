import ArtistApplicationPage from "~/components/artistAplicationPage";
import Footer from "~/components/footer";
import Navbar from "~/components/navbar";
import type { Route } from "./+types/apply";
import sendMail, { artistApplicationEmail } from "~/services/mail";

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const data = {
  first: String(formData.get("first") || ""),
  last: String(formData.get("last") || ""),
  email: String(formData.get("email") || ""),
  phone: String(formData.get("phone") || ""),
  medium: formData.getAll("medium").map(String),
  bio: String(formData.get("bio") || ""),
  booth: String(formData.get("booth") || ""),
  payment: String(formData.get("payment") || ""),
  referrer: String(formData.get("referrer") || ""),
  heard: String(formData.get("heard") || ""),
  requirements: String(formData.get("requirements") || ""),
  subscribe: String(formData.get("subscribe") || ""),
  portfolio: String(formData.get("portfolio") || ""),
  instagram: String(formData.get("instagram") || ""),
  facebook: String(formData.get("facebook") || ""),
};

  const info = await sendMail("info@artfairtamp.com", "Artist Aplication Submission By -" + data.first + " " + data.last, artistApplicationEmail(data as any));
  
  return info;
}

export default function Artist() {
  return (
    <>
    <title>Art Fair Tampa | Apply</title>
    <meta name="description" content="Art Fair Tampa is a new, world-class contemporary art fair designed to spotlight emerging and established artists while cultivating a vibrant collector ecosystem in the Southeast. Our mission is to position Tampa as a cultural hub — a place where art, hospitality, and innovation converge."/>
    <meta name="keywords" content="art fair, tampa, art fair tampa, art fair tampa 2026, art fair tampa 2026, tampa, tampa convention center, tampa convention center, tampa art fair, tampa art fair 2026, tampa art fair 2026, art fair, contemporary art, contemporary art fair, contemporary art fair tampa, contemporary art fair tampa 2026, contemporary art fair tampa 2026, international art fair, international art fair tampa, international art fair tampa 2026, international art fair tampa 2026, fine art fair, fine art fair tampa, fine art fair tampa 2026, fine art fair tampa 2026"/>
    <Navbar />
    <ArtistApplicationPage/>
    <Footer/>
    </>
  );
}