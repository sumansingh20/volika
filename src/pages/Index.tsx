import FloatingHearts from "@/components/FloatingHearts";
import RosePetals from "@/components/RosePetals";
import MusicPlayer from "@/components/MusicPlayer";
import HeroSection from "@/components/sections/HeroSection";
import ShayariSection from "@/components/sections/ShayariSection";
import LoveLetterSection from "@/components/sections/LoveLetterSection";
import MemoriesSection from "@/components/sections/MemoriesSection";
import WhySpecialSection from "@/components/sections/WhySpecialSection";
import TimelineSection from "@/components/sections/TimelineSection";
import PromiseSection from "@/components/sections/PromiseSection";
import FinalSection from "@/components/sections/FinalSection";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background Effects */}
      <FloatingHearts />
      <RosePetals />
      
      {/* Music Player */}
      <MusicPlayer />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <ShayariSection />
        <LoveLetterSection />
        <MemoriesSection />
        <WhySpecialSection />
        <TimelineSection />
        <PromiseSection />
        <FinalSection />
      </main>
      
      {/* Footer */}
      <footer className="relative py-8 text-center bg-foreground/95">
        <p className="font-body text-sm text-primary-foreground/70">
          Made with ❤️ for Volika
        </p>
        <p className="font-handwritten text-2xl text-primary-foreground/90 mt-2">
          Happy Valentine's Day 2025
        </p>
      </footer>
    </div>
  );
};

export default Index;
