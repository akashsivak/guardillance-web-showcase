import { Shield, Eye, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-security.jpg";


const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Security Operations Center"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Protecting What Matters Most
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Advanced security and surveillance solutions for businesses and homes. 
            24/7 monitoring with cutting-edge technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-glow text-lg"
            >
              Request a Quote
            </Button>
            <Button
              size="lg"
             
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-glow text-lg"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            >
              Our Services
            </Button>
          </div>

          {/* Feature Icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center animate-fade-in">
              <div className="bg-primary/20 backdrop-blur-sm p-4 rounded-full mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Total Protection</h3>
              <p className="text-gray-300 text-sm">Comprehensive security coverage</p>
            </div>
            <div className="flex flex-col items-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="bg-primary/20 backdrop-blur-sm p-4 rounded-full mb-4">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">24/7 Monitoring</h3>
              <p className="text-gray-300 text-sm">Round-the-clock surveillance</p>
            </div>
            <div className="flex flex-col items-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="bg-primary/20 backdrop-blur-sm p-4 rounded-full mb-4">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Secure Systems</h3>
              <p className="text-gray-300 text-sm">State-of-the-art technology</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
