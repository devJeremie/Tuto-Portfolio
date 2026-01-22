import { Button } from "@/components/button";
import { ArrowRight, Download } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { Github, Linkedin, Twitter } from "lucide-react";

const positions = [...Array(20)].map(() => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    animationDuration: `${15 + Math.random() * 20}s`,
    animationDelay: `${Math.random() * 5}s`,
}));

export const Hero = () => {

    return (
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/bg-typeGithub.png"
            alt="Image de fond style github"
            className="w-full h-full object-cover opacity-40"
          />
          {/* <div POur bien voir la plateforme style repo github
            className="absolute inset-0 bg-linear-to-b
                         from-background/20 via-background/80 to-background "
          /> */}
        </div>
        {/*Carré vert type repo github*/}
        <div className="absoute inset-0 overflow-hidden pointer-events-none">
          {positions.map((pos, index) => (
            <div
              key={index}
              className="absolute w-5 h-5 opacity-50"
              style={{
                backgroundColor: "#0a970a",
                top: pos.top,
                left: pos.left,
                animation: `slow-drift ${pos.animationDuration} ease-in-out infinite`,
                animationDelay: pos.animationDelay,
              }}
            />
          ))}
        </div>
        {/*Contenu principal*/}
        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/*Colonne de gauche contenu textuel*/}
                <div className="space-y-8">
                <div className="animate-fade-in">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    Software
                    </span>
                </div>
                {/*Titre principal*/}
                <div className="space-y-4">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in animation-delay-100">
                    Développeur{" "}
                    <span className="text-primary glow-text">Fullstack</span>
                    <br />
                    passionné par le code
                    <br />
                    <span className="font-serif italic font-normal text-white">
                        et les défis web'.
                    </span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-600">
                    Bonjour, je suis Jérémie Chabanais - Je conçois, développe et
                    transmets ma passion du web et du code.
                    </p>
                </div>
                {/*Bouton d'appel à l'action*/}
                <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                    <Button
                    href="#contact"
                    size="lg"
                    className="animate-fade-in animation-delay-800"
                    >
                    Contactez-moi <ArrowRight className="w-5 h-5" />
                    </Button>
                    <AnimatedBorderButton />
                </div>
                {/* Réseau sociaux */}
                <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                    <span className="text-sm text-muted-foreground">
                    Suivez-moi :{" "}
                    </span>
                    {[
                    { icon: Github, href: "https://github.com/devJeremie" },
                    {
                        icon: Linkedin,
                        href: "https://www.linkedin.com/in/jeremie-chabanais/",
                    },
                    { icon: Twitter, href: "#" },
                    ].map((social, i) => (
                    <a
                        key={i}
                        href={social.href}
                        className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                    >
                        {<social.icon className="w-5 h-5" />}
                    </a>
                    ))}
                </div>
                </div>
                {/*Colonne de droite image profil*/}
                <div className="relative animate-fade-in animation-delay-300">
                    {/* Image de profil */}
                    <div className="relative max-w-md mx-auto">
                        <div
                        className="absolute inset-0 rounded-3xl bg-linear-to-br
                                from-primary/30 via-transparent to primary/10
                                blur-2xl animate-pulse"
                        />
                        <div className="relative glass rounded-3xl p-2 glow-border">
                        <img
                            src="/BaldMan.jpg"
                            alt="photo de profil"
                            className="w-full aspect-[4/5] object-cover rounded-2xl"
                        />
                        {/*Bage flottant*/}
                            <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                                <div className="flex items-center gap-3">
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                                <span className="text-sm font-medium">
                                    Disponible pour de nouvelles opportunités
                                </span>
                                </div>
                            </div>
                            {/* Stats du badge */}
                            <div className="
                                absolute -top-4 -let-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500"
                            >
                                <div className="">5+</div>
                                <div className="">Années Exp.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    );
}
