import { SemrushPromoBar } from "@/components/semrush/PromoBar";
import { SemrushNavbar } from "@/components/semrush/Navbar";
import { SemrushHero } from "@/components/semrush/Hero";
import { SemrushLogoBar } from "@/components/semrush/LogoBar";
import { SemrushEdgeBanner } from "@/components/semrush/EdgeBanner";
import { SemrushScaleBanner } from "@/components/semrush/ScaleBanner";
import { SemrushSolutions } from "@/components/semrush/Solutions";
import { SemrushDataStats } from "@/components/semrush/DataStats";
import { SemrushAIVisibility } from "@/components/semrush/AIVisibility";
import { SemrushCustomerWin } from "@/components/semrush/CustomerWin";
import { SemrushNews } from "@/components/semrush/News";
import { SemrushFAQ } from "@/components/semrush/FAQ";
import { SemrushGetStarted } from "@/components/semrush/GetStarted";
import { SemrushFooter } from "@/components/semrush/Footer";

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <SemrushPromoBar />
      <SemrushNavbar />
      <main>
        <SemrushHero />
        <SemrushLogoBar />
        <SemrushEdgeBanner />
        <SemrushScaleBanner />
        <SemrushSolutions />
        <SemrushDataStats />
        <SemrushAIVisibility />
        <SemrushCustomerWin />
        <SemrushNews />
        <SemrushFAQ />
        <SemrushGetStarted />
      </main>
      <SemrushFooter />
    </div>
  );
}
