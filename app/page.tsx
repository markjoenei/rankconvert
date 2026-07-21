import { SemrushHero } from "@/components/semrush/Hero";
import { SemrushLogoBar } from "@/components/semrush/LogoBar";
import { SemrushEdgeBanner } from "@/components/semrush/EdgeBanner";
import { SemrushSolutions } from "@/components/semrush/Solutions";
import { SemrushDataStats } from "@/components/semrush/DataStats";
import { SemrushAIVisibility } from "@/components/semrush/AIVisibility";
import { SemrushCustomerWin } from "@/components/semrush/CustomerWin";
import { SemrushNews } from "@/components/semrush/News";
import { SemrushFAQ } from "@/components/semrush/FAQ";
import { SemrushGetStarted } from "@/components/semrush/GetStarted";
import { SemrushPreFooterCTA } from "@/components/semrush/PreFooterCTA";
import { Reveal } from "@/components/ui/Reveal";

export default function Home() {
  return (
    <>
      <SemrushHero />
      <Reveal variant="fade" duration={700}><SemrushLogoBar /></Reveal>
      <Reveal variant="up"><SemrushEdgeBanner /></Reveal>
      <Reveal variant="up"><SemrushSolutions /></Reveal>
      <Reveal variant="left"><SemrushDataStats /></Reveal>
      <Reveal variant="blur"><SemrushAIVisibility /></Reveal>
      <Reveal variant="right"><SemrushGetStarted /></Reveal>
      <Reveal variant="up"><SemrushCustomerWin /></Reveal>
      <Reveal variant="left"><SemrushFAQ /></Reveal>
      <Reveal variant="up"><SemrushNews /></Reveal>
      <Reveal variant="scale"><SemrushPreFooterCTA /></Reveal>
    </>
  );
}
