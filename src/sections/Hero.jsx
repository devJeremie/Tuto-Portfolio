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
            {[...Array(20)].map((_, index)  => (
                <div
                    className="absolute w-5 h-5 opacity-50"
                    style={{
                        backgroundColor: '#0a970a',
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                    }}
                />
            ))}
        </div>
    </section>
    );
}