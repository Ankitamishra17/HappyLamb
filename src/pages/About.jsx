import AboutAwardsLight from "../components/about/Awards";
import AboutBioLight from "../components/about/Bio";
import AboutGearDark from "../components/about/GearDark";
import AboutHero from "../components/about/Hero";

export default function AboutPage() {
    return(
        <>
        <AboutHero />
        <AboutBioLight />
        <AboutGearDark />
        <AboutAwardsLight />
        </>
    )
}