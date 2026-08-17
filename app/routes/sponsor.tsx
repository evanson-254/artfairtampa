import Footer from "~/components/footer";
import Navbar from "~/components/navbar";
import SponsorApplicationPage from "~/components/sponsorAplicationPage";
import sendMail, { artistApplicationEmail, sponsorApplicationEmail } from "~/services/mail";
import type { Route } from "./+types/sponsor";

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  
  const data = {
    name: String(formData.get("company") || ""),
    first: String(formData.get("first") || ""),
    last: String(formData.get("last") || ""),
    email: String(formData.get("email") || ""),
    phone: String(formData.get("phone") || ""),
    sponsor: String(formData.get("sponsor") || ""),
    method: String(formData.get("method") || ""),
    why_sponsor: String(formData.get("why_sponsor") || ""),
    heard_about: String(formData.get("heard_about") || ""),
    contactTime: String(formData.get("contactTime") || ""),
    comment: String(formData.get("comment") || ""),
  };

  const info = await sendMail("info@artfairtamp.com",
    "Sponsor Aplication Submission By -" + data.first + " " + data.last,
    sponsorApplicationEmail(data )
  );

  return info;
}

export default function Artist() {
  return (
    <>
      <title>Art Fair Tampa | Sponsor</title>
      <meta name="description" content="Art Fair Tampa is a new, world-class contemporary art fair designed to spotlight emerging and established artists while cultivating a vibrant collector ecosystem in the Southeast. Our mission is to position Tampa as a cultural hub — a place where art, hospitality, and innovation converge."/>
      <Navbar />
      <SponsorApplicationPage />
      <Footer />
    </>
  );
}