import Clients from "../components/Clients";
import { CTAFinal } from "../components/cta";
import Hero from "../components/hero";
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
