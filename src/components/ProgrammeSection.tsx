import { Activity, Brain, Calendar, Heart, Moon, TrendingUp } from "lucide-react";

const ProgrammeSection = () => {
  const includes = [
    { icon: Brain, text: "Deep health diagnostics (genetic, epigenetic, gut microbiome, blood markers)" },
    { icon: Moon, text: "Proper sleep and breathing evaluation (via an overnight sleep study)" },
    { icon: Activity, text: "Doctor-led interpretation and personalised optimisation plan" },
    { icon: Heart, text: "Continuous health monitoring throughout the year" },
    { icon: TrendingUp, text: "Mid-year reassessment to measure real biological change" },
    { icon: Calendar, text: "Annual review with a long-term health roadmap" },
  ];

  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-foreground text-center">
          What the Programme Includes
        </h2>
        
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {includes.map((item, index) => (
            <div 
              key={index}
              className="flex gap-4 p-4 rounded-lg hover:bg-card transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="text-foreground font-sans text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-muted-foreground font-sans text-sm">
          All assessments and timelines are coordinated by our medical team.
        </p>
      </div>
    </section>
  );
};

export default ProgrammeSection;
