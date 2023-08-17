import HeadSection from "../components/HeadSection";
import SecondSection from "../components/SecondSection";
import ThirdSection from "../components/ThirdSection";
import ClientsSection from "../components/ClientsSection";
import PlanSection from "../components/PlanSection";
import GuaranteeSection from "../components/GuaranteeSection";
import FaqSection from "../components/FaqSection";
import TeamSection from "../components/TeamSection";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <main className="w-full overflow-hidden relative">
      <HeadSection />
      <SecondSection />
      <ThirdSection />
      <ClientsSection />
      <PlanSection />
      <GuaranteeSection />
      <FaqSection />
      <TeamSection />
      <ContactSection />
    </main>
  );
}
