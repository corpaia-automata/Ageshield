import { Check } from "lucide-react";

const WhySection = () => {
  const pillars = [
    "Prevention over reaction",
    "Long-term optimisation over one-time testing",
    "Doctor interpretation over automated reports",
  ];

  return (
    <section className="section-padding bg-section-alt">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-foreground text-center">
          Why AgeShield™
        </h2>
        
        <div className="mt-10 space-y-6 text-center">
          <p className="text-muted-foreground font-sans leading-relaxed">
            Most healthcare reacts after symptoms appear. Most health check-ups provide snapshots — not direction.
          </p>
          
          <p className="text-xl text-foreground font-serif italic">
            AgeShield™ works before decline begins.
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className="flex items-center gap-3 text-foreground font-sans"
            >
              <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Check className="w-4 h-4 text-primary" />
              </div>
              <span>{pillar}</span>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-muted-foreground font-sans text-sm">
          This is not a check-up or a wellness package. This is health stewardship over one full year.
        </p>
      </div>
    </section>
  );
};

export default WhySection;
