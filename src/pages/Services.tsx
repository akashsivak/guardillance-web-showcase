import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import { TrendingUp, Palette, Monitor, Smartphone } from "lucide-react";
import digitalMarketing from "@/assets/digital-marketing.jpg";
import posterDesigns from "@/assets/poster-designs.jpg";
import websiteDesigns from "@/assets/website-designs.jpg";
import appDevelopment from "@/assets/app-development.jpg";
import SurveillanceIcon from "@/icons/SurveillanceIcon";
import surveillanceImage from "@/assets/surveillance.jpg";



const ServicesPage = () => {
  const services=[
    {
      icon: TrendingUp,
      title: "Social Media Marketing",
      image: digitalMarketing,
      description: "Start Growing Your Business With Social Media",
      fullDescription: "Social media marketing involves creating and sharing content on social media platforms to achieve your marketing and branding goals. It can help you to reach a wider audience, engage with your customers, and improve your brand awareness and customer loyalty. Some common social media marketing activities include posting updates and content, running paid advertising campaigns, and engaging with users through comments and messages. Effective social media marketing can help you to drive traffic to your website, generate leads, and ultimately, improve your sales and revenue.",
    },
    {
      icon: Palette,
      title: "Poster Designs",
      image: posterDesigns,
      description: "Creative Visual Communication That Stands Out",
      fullDescription: "Our poster design service delivers eye-catching visuals that communicate your message effectively and leave a lasting impression. We combine artistic creativity with strategic thinking to create posters that not only look beautiful but also drive action. Whether you need promotional posters, event announcements, or brand awareness materials, our designs capture attention and engage your target audience. We focus on typography, color psychology, and visual hierarchy to ensure your message is clear and impactful.",
    },
    {
      icon: Monitor,
      title: "Website Designs",
      image: websiteDesigns,
      description: "Modern Digital Experiences That Convert",
      fullDescription: "We create modern, responsive websites that deliver exceptional user experiences and convert visitors into customers. Our web design approach combines stunning aesthetics with functional design principles, ensuring your website not only looks great but performs brilliantly. From e-commerce platforms to corporate websites and landing pages, we build digital experiences that are fast, mobile-friendly, and optimized for search engines. Every website we create is tailored to your brand identity and business objectives.",
    },
    {
     icon: SurveillanceIcon,
  title: "Surveillance Systems",
  image: surveillanceImage,
  description: "Smart Security Solutions For Your Home & Business",
  fullDescription:
    "We provide advanced surveillance system installation including CCTV cameras, remote monitoring setups, and smart security integrations. Our solutions help you protect your property with high-quality video surveillance, motion detection, night vision, and mobile access. Whether it's for homes, offices, or commercial spaces, we deliver reliable, modern, and secure surveillance systems tailored to your needs.",
    },
  ]
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <Services />
      </div>
      <div>
        <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Creative solutions to elevate your brand and digital presence
          </p>
        </div>

        <div className="space-y-24">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-in ${
                index % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Section */}
              <div className={`relative ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div className="relative overflow-hidden rounded-2xl shadow-card group">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                <div className="relative overflow-hidden rounded-2xl shadow-card group">
                    <div className="text-center px-6">
                      <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full mb-4 inline-flex">
                        <service.icon className="w-12 h-12 text-white" />
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold text-white">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {service.description}
                  </h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {service.fullDescription}
                </p>
                <div className="flex items-center gap-4">
                  <div className="primary p-3 rounded-lg">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;
