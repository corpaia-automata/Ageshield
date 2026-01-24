import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeOJTISyVLIVuP8AkWwK1oqrPjVVb3ldGuvNa0hBx7hUNanPQ/viewform?usp=publish-editor";

const CTASection = () => {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif">
          Begin Your AgeShield™ Journey
        </h2>
        
        <p className="mt-6 text-primary-foreground/80 font-sans leading-relaxed">
          The first step is a short registration process to assess suitability and initiate onboarding.
        </p>

        <div className="mt-10">
          <Button variant="cta" size="xl" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90" asChild>
            <a href={FORM_URL} target="_blank" rel="noopener noreferrer">
              Begin AgeShield™ Registration
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>

        <p className="mt-6 text-sm text-primary-foreground/70 font-sans">
          Our Programme Admin will contact you within 24 hours to guide the next steps.
        </p>
      </div>
    </section>
  );
};

export default CTASection;
