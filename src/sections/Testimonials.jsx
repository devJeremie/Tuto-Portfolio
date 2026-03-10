const testimonials = [
  {
    quote:
      "Un développeur passionné et pédagogue. Ses applications mobiles pour nos journées portes ouvertes ont été un succès auprès des apprenants et du public. Toujours force de proposition avec l'IA !",
    author: "David N.",
    role: "Responsable Formation, AFPA Bègles",
    avatar:
      " https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
  },
  {
    quote:
      "Excellence technique Symfony/React et grande capacité à vulgariser les concepts complexes.",
    author: "Thomas L.",
    role: "CEO, Nouvea Formation",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
  },
  {
    quote:
      "Fiable, créatif et orienté résultats. A livré plusieurs e-boutiques performantes et sites vitrines.",
    author: "Sophie R.",
    role: "Product Owner, ClimbKode",
    avatar:
      "https://images.unsplash.com/photo-1581403341630-a6e0b9d2d257?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBvcnRyYWl0fGVufDB8fDB8fHww",
  },
  {
    quote:
      "Grâce à sa formation, j'ai décroché mon titre CDA et un poste de développeur web ! Pédagogie au top, projets concrets Symfony/React React Native, et un accompagnement personnalisé qui m'a permis de progresser rapidement. Je recommande les yeux fermés !",
    author: "Louise M.",
    role: "Apprenant promotion 2025/2026",
    avatar:
      "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODd8fHBvcnRyYWl0fGVufDB8fDB8fHww",
  },
];

export const Testimonials = () => {
    return (
        <section id="testimonials" className="py-32 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px]
                            bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
            />
            <div className="container mx-auto px-6 relative z-10">
                {/*Header section*/}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                        Ce qu'ils disent de moi
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in 
                                   animation-delay-100 text-secondary-foreground"
                    >
                        Des témoignages de 
                    </h2>
                    <span>clients et partenaires satisfaits</span>
                </div>
            </div>
        </section>
    );
}