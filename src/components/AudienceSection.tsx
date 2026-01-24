import { Users } from "lucide-react";

const AudienceSection = () => {
  const audience = [
    "Doctors and healthcare professionals",
    "Founders, CXOs, and senior professionals",
    "Individuals aged approximately 35–65 years",
    "People who value prevention over treatment",
  ];

  return (
    <section className="section-padding">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-foreground">
          Who AgeShield™ Is For
        </h2>
        
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {audience.map((item, index) => (
            <span 
              key={index}
              className="px-4 py-2 bg-card rounded-full text-sm font-sans text-foreground border border-border"
            >
              {item}
            </span>
          ))}
        </div>

        <p className="mt-8 text-sm text-muted-foreground font-sans">
          AgeShield™ is not intended for emergency or acute medical care.
        </p>
      </div>
    </section>
  );
};

export default AudienceSection;
