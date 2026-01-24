const JourneySection = () => {
  const phases = [
    {
      step: "Understand",
      phase: "Phase 1",
      months: "Months 0–3",
      description: "Deep assessment and baseline understanding",
    },
    {
      step: "Optimise",
      phase: "Phase 2",
      months: "Months 4–6",
      description: "Personalised optimisation and correction",
    },
    {
      step: "Protect",
      phase: "Phase 3",
      months: "Months 7–12",
      description: "Stability, resilience, and long-term protection",
    },
  ];

  return (
    <section className="section-padding bg-section-alt">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-foreground text-center">
          Your 1-Year Journey
        </h2>
        
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {phases.map((phase, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-background rounded-xl shadow-sm"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-serif text-lg mb-4">
                {index + 1}
              </div>
              <h3 className="text-xl font-serif text-foreground">{phase.step}</h3>
              <p className="mt-1 text-sm text-primary font-sans font-medium">{phase.months}</p>
              <p className="mt-3 text-sm text-muted-foreground font-sans">{phase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
