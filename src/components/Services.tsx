import { TrendingUp, Palette, Monitor, Smartphone } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Strategic digital marketing campaigns to boost your online presence and drive measurable results for your business.",
    },
    {
      icon: Palette,
      title: "Poster Designs",
      description: "Eye-catching poster designs that communicate your message effectively and leave a lasting impression.",
    },
    {
      icon: Monitor,
      title: "Website Designs",
      description: "Modern, responsive websites that deliver exceptional user experiences and convert visitors into customers.",
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "Custom mobile and web applications built with cutting-edge technology to bring your ideas to life.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Creative solutions to elevate your brand and digital presence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="border-border hover:shadow-card transition-all duration-300 hover:-translate-y-2 animate-fade-in bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
