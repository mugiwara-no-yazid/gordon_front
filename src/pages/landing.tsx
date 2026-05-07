import Clients from "../components/Clients";
import { CTAFinal } from "../components/cta";
import { Footer } from "../components/footer";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Services from "../components/nosservice";
import Testimonials from "../components/testimonials";
import WhyUs from "../components/whyus";

export default function Home()
{
    return <>
    <Hero/>
    <Services/>
    <WhyUs/>
    <Clients/>
    <Testimonials/>
    <CTAFinal/>
    </>
}