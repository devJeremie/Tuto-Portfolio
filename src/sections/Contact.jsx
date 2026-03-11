import {Mail, Phone, Location, Send} from "lucide-react";
import {Button} from "@/components/Button"
import { useState } from "react";

const contactInfo = [
    {
        icon: Mail,
        label: "Email",
        value: "chabanaisjeremie@gmail.com",
        href: "mailto:chabanaisjeremie@gmail.com"
    },
      {
        icon: Phone,
        label: "Tèl",
        value: "+33 6 34 26 31 10",
        href: "tel:+33634263110"
    },
      {
        icon: Location,
        label: "Location",
        value: "Bordeaux, France",
        href: "https://www.google.com/maps/place/Bordeaux"
    }
];

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })
    const handleSubmit = async (e) => {
        e.preventDefault();
    };

    return (
      <section id="contact" className="py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-6 relative z-10 ">
          {/*Section header*/}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary-foreground text-sm font-medium ">
              Une idée,
            </span>
            <h2 className="text-4-xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-200">
              un projet,{" "}
              <span className="font-serif italic font-normal text-white">
                ecrivons la suite ensemble !
              </span>
            </h2>
            <p className="text-muted-foreground animate-fade-in animation-delay/200">
              Vous avez un projet, une formation et vous chercher votre
              formateur. J'aimerais beaucoup parler de cela avec vous,
              Envoyez-moi un message et je vous recontacterai, afin de
              travailler ensemble.
            </p>
          </div>
          {/*Formulaire*/}
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300">
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2 "
                  >
                    Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Votre nom.."
                    className="w-full px-4 py-3 bg-surface rounded-xl border border-border transition-all 
                                            focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2 "
                  >
                    Email
                  </label>
                  <input
                    required
                    placeholder="votre@email.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-surface rounded-xl border border-border transition-all 
                                            focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2 "
                  >
                    Message
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Votre message.."
                    className="w-full px-4 py-3 bg-surface rounded-xl border border-border transition-all 
                                            focus:border-primary focus:ring-1 focus:ring-primary outline-none
                                            resize-none"
                  />
                </div>
                <Button className="w-full" type="submit" size="lg">
                  Envoyer le message
                  <Send />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
}