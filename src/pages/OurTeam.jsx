
import TeamHero from "../components/team/Hero";
import Teamstats from "../components/team/Teamstats";
import Teamcta from "../components/team/Teamcta";
import TeamCards from "../components/team/Teamgrid";

export default function TeamPage() {
  return (
    <main>
     
     <TeamHero />
      <Teamstats />
      <TeamCards />
      <Teamcta />
    </main>
  );
}
