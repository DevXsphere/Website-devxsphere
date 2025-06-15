
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import InfiniteLogo from "./InfiniteLogo";

// Aceternity-style accent: sleek gradient, soft blur, rings, and animation
function AceternityAccent() {
  return (
    <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
      <div className="relative w-[420px] h-[120px]">
        <div className="absolute top-6 left-1/2 -translate-x-1/2 blur-3xl opacity-70 rounded-full w-[340px] h-16 bg-gradient-to-r from-accent-400 via-accent-200 to-accent-400 animate-pulse" />
        <div className="absolute border border-accent-400/50 rounded-full w-[360px] h-20 left-1/2 top-4 -translate-x-1/2" style={{borderWidth:'2px'}}/>
      </div>
    </div>
  );
}

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-background via-accent-100 to-background text-foreground relative overflow-hidden">
      {/* Aceternity-inspired effect */}
      <AceternityAccent />
      <div className="container mx-auto px-4 text-center relative z-10 pt-20">
        <div className="mb-8">
          <InfiniteLogo />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in font-display">
           dev<span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">Xsphere</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-700 dark:text-gray-200 animate-fade-in font-body">
          Bringing together like-minded developers through meetups, tech events, and open source contributions. 
          Join our global community of innovators and creators.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
          <Button size="lg" className="bg-accent-600 hover:bg-accent-700 text-white px-8 py-3">
            Join Community
          </Button>
          <Button size="lg" variant="outline" className="border-accent-600 text-accent-700 dark:text-accent-300 hover:bg-accent-700/20 hover:text-accent-900 px-8 py-3">
            Explore Events
          </Button>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={scrollToNext}>
          <ArrowDown className="w-8 h-8 text-accent-700/70 dark:text-accent-400/80" />
        </div>
      </div>
      
      {/* Background decor for entire hero */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-600/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;
