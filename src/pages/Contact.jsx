import ContactHero from "../components/contact/ContactHero";
import ContactForm from "../components/contact/ContactForm";
// import ContactInfo from "../components/contact/ContactInfo";
import ContactMap from "../components/contact/ContactMap";
import FAQ from "../components/contact/FAQ"

// export const metadata = {
//   title: "Contact — Happy Lamb",
//   description: "Get in touch with our production team.",
// };

export default function ContactPage() {
  return (
    <main >
      <ContactHero />
        <ContactForm />
        {/* <ContactInfo /> */}
      <ContactMap />
      <FAQ/>
    </main>
  );
}