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
            <img src="/bg-typeGithub.png"
                alt="Image de fond style github"
                className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-be
                         from-background/20 via-background/80 to-background "
            />
        </div>
        {/*Carré vert type repo github*/}
        <div className="absoute inset-0 overflow-hidden pointer-events-none">
            {positions.map((pos, index) => (
                <div
                    key={index}
                    className="absolute w-5 h-5 opacity-50"
                    style={{
                        backgroundColor: '#0a970a',
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
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"/>
                                Software
                        </span>
                    </div>
                    {/*Titre principal*/}
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in">
                            Développeur <span className="text-primary glow-text">Fullstack</span> 
                            <br /> 
                            passionné par le code 
                            <br /> 
                            <span className="font-serif italic font-normal text-white">
                                et les défis web'.
                            </span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-lg animate-fade-in">
                            Bonjour, je suis Jérémie Chabanais - Je conçois, développe et transmets
                            ma passion du web et du code.
                        </p>
                    </div>
                </div>
            {/*Colonne de droite image*/}
            </div>
        </div>
    </section>
    );
}