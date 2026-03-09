const experiences = [
  {
    period: "2024 - Aujourd'hui",
    role: "Developpeur fullstack, formateur",
    company: "AFPA Bègles",
    description:
      "Chargé de réaliser des applications mobiles pour les journeés portes ouvertes, ainsi que pour la partie restauration.",
    technologies: [
      "Php",
      "Symfony",
      "React",
      "React Native",
      "Typescript",
      "Javascript",
      "IA",
    ],
    current: true,
  },
  {
    period: "2022 - Fin 2023",
    role: "Developpeur fullstack, formateur",
    company: "Nouvea Formation",
    description:
      "Chargé de réaliser des applications web et mobiles pour les futur apprenants, ainsi que pour le coworking.",
    technologies: ["Php", "Symfony", "React", "Typescript", "Javascript", "IA"],
    current: true,
  },
  {
    period: "2020 - Fin 2022",
    role: "Developpeur fullstack",
    company: "ClimbKode",
    description:
      "Chargé de réaliser des applications web pour différents clients, des e-boutique ou même des sites vitrines.",
    technologies: ["Php", "Symfony", "React", "React Native", "Typescript", "Javascript", "IA"],
    current: true,
  },
];


export const Experience = () => {
    return (
      <section id="experience" className="py-32 relative overflow-Hidden">
        <div
          className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full 
                            blur-3xl -translate-y-1/2"
        />
        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="max-w-3xl mb-16">
            <span
              className="text-secondary-foreground text-sm font-medium tracking-wider 
                                        uppercase animate-fade-in"
            >
              Parcours professionnel
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100
                                     text-secondary-foreground"
            >
              Expérience{" "}
              <span className="font-serif italic font-normal text-white">
                {" "}
                pertinentes
              </span>
            </h2>
            <p className="text-muted-foreground animate-fade-in animation-delay-200">
              Le parcours de mon évolution pro : du curieux débutant au developpeur
              accompli ainsi que le formateur que je suis devenus."
            </p>
          </div>
          { /*Timeline */}
        </div>
      </section>
    );
}