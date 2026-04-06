import Hero from "@/components/Hero";
import Features from "@/components/Features";
import GrowthChart from "@/components/GrowthChart";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />
      <Hero />
      <GrowthChart />
      <Features />
      <Footer />
    </div>
  );
};

export default Index;
