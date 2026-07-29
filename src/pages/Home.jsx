import About from "../components/home/About";
import BlogSection from "../components/home/Blogs";
import FeaturedWork from "../components/home/Featured";
import Hero from "../components/home/Hero";
import HireSection from "../components/home/Hire";
import OurClients from "../components/home/OurClient";
import ServicesLight from "../components/home/Services";
import TestimonialsLight from "../components/home/Testimonial";
import Process from "../components/home/Process";

export default function HomePage() {
    return (
        <>
            {/* <h1>Testing Git</h1> */}
            <Hero />
            <About />
            <FeaturedWork />
            <BlogSection />
            <ServicesLight />
            <Process/>
            <OurClients />
            <TestimonialsLight />
            <HireSection />
        </>
    );
}