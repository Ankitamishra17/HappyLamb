import WorkBTSDark from "../components/work/BTS";
// import WorkGearDark from "../components/work/Gear";
import WorkGridLight from "../components/work/Grid";
import WorkHero from "../components/work/Hero";
import WorkImpactLight from "../components/work/Impact";

export default function WorkPage() {
    return(
        <>
        <WorkHero />
        <WorkGridLight />
        <WorkBTSDark />
        <WorkImpactLight />
        {/* <WorkGearDark /> */}
        </>
    )
}