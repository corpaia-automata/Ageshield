import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeOJTISyVLIVuP8AkWwK1oqrPjVVb3ldGuvNa0hBx7hUNanPQ/viewform?usp=publish-editor";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <div className="fade-in-up opacity-0">
          <span className="text-text-subtle text-sm tracking-[0.2em] uppercase font-sans">
            by Mendiv — Your Next Chapter
          </span>
        </div>
        
        <h1 className="mt-6 text-5xl md:text-7xl lg:text-8xl font-serif font-medium text-foreground tracking-tight fade-in-up opacity-0 stagger-1">
          AgeShield™
        </h1>
        
        <p className="mt-4 text-lg md:text-xl text-muted-foreground font-sans fade-in-up opacity-0 stagger-2">
          1-Year Total Body Optimisation Programme
        </p>
        
        <p className="mt-8 text-xl md:text-2xl text-foreground font-serif italic fade-in-up opacity-0 stagger-3">
          Protect your health before disease begins.
        </p>
        
        <p className="mt-6 max-w-2xl mx-auto text-muted-foreground font-sans leading-relaxed fade-in-up opacity-0 stagger-4">
          AgeShield™ is a doctor-led, year-long preventive health programme designed to help you understand, optimise, and safeguard your body for the years ahead.
        </p>

        <div className="mt-12 fade-in-up opacity-0 stagger-4">
          <Button variant="hero" size="xl" asChild>
            <a href={FORM_URL} target="_blank" rel="noopener noreferrer">
              Begin AgeShield™ Registration
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
