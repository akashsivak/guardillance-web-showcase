import { CheckCircle2 } from "lucide-react";

const About = () => {
  const features = [
    "Licensed and certified security professionals",
    "State-of-the-art surveillance technology",
    "Rapid response and emergency support",
    "Customized solutions for every client",
    "Proven track record of excellence",
    "Competitive pricing with no hidden fees",
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Why Choose Guardillance?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              With over a decade of experience in the security industry, Guardillance has become 
              the trusted name for businesses and homeowners seeking reliable protection. Our 
              commitment to excellence and innovation sets us apart.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              We combine cutting-edge technology with personalized service to deliver security 
              solutions that give you complete peace of mind. From initial consultation to 
              ongoing support, we're with you every step of the way.
            </p>
            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
              <p className="text-lg font-semibold text-foreground">
                "Your safety is our priority. We don't just install security systems - we build 
                lasting relationships based on trust and reliability."
              </p>
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="bg-gradient-primary p-8 rounded-2xl shadow-glow">
              <h3 className="text-2xl font-bold text-white mb-6">What Sets Us Apart</h3>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-white flex-shrink-0 mt-0.5" />
                    <span className="text-white text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-8 border-t border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-4xl font-bold text-white mb-2">10+</div>
                    <div className="text-white/90">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-white mb-2">5K+</div>
                    <div className="text-white/90">Clients Protected</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
