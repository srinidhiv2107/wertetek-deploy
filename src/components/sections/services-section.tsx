import { Cog, Cpu, Code, Smartphone, Construction, Home } from 'lucide-react';
import { ServiceCard } from '@/components/service-card';
import { ScrollReveal } from '@/components/scroll-reveal';

export function ServicesSection() {
  const servicesData = [
    {
      icon: Cog,
      title: "Mechanical Services",
      description: "Our mechanical services encompass complete design, robust assembly, thorough validation, and efficient manufacturing processes, ensuring top-quality results and innovative solutions for your engineering projects."
    },
    {
      icon: Cpu,
      title: "Electronics Services",
      description: "We provide expert electronics services, covering everything from intricate PCB design and firmware development to system integration, validation, and scalable manufacturing solutions."
    },
    {
      icon: Code,
      title: "Website Development",
      description: "Leverage our expertise in website development to create stunning, responsive, and high-performing online presences that drive engagement, enhance user experience, and support your business growth."
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "Our app development team builds intuitive and powerful mobile applications for iOS and Android, tailored to meet your specific business needs and deliver seamless user experiences."
    },
    /*{
      icon: Construction,
      title: "Construction Services",
      description: "Wertetek's construction services manage projects from concept to completion, delivering quality workmanship, sustainable practices, and structural integrity for residential and commercial buildings."
    },
    {
      icon: Home,
      title: "Interior Design",
      description: "Transform your spaces with our creative interior design services, focusing on aesthetic appeal, functionality, and personalized solutions that reflect your style for homes and businesses."
    },*/
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-screen-xl px-4 md:px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">
              Our Comprehensive Services
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Delivering excellence across a wide spectrum of technical and creative domains to bring your vision to life.
            </p>
          </div>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
