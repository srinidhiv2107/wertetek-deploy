import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Mail, Phone, MapPin } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-screen-xl px-4 md:px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">
              Get in Touch
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              We&apos;re here to help and answer any question you might have. We look forward to hearing from you!
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <ScrollReveal delay={100} className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-4">Contact Information</h3>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-accent mr-4 shrink-0 mt-1" />
                  <span>RR Nagar, Bengaluru</span>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-accent mr-4 shrink-0 mt-1" />
                  <a href="mailto:Admin@wertetek.com" className="hover:text-accent transition-colors">Admin@wertetek.com</a>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-accent mr-4 shrink-0 mt-1" />
                  <a href="tel:+919686643633" className="hover:text-accent transition-colors">9686643633</a>
                </div>
              </div>
            </div>
            <div>
               <h3 className="text-2xl font-semibold text-primary mb-4">Office Hours</h3>
               <div className="space-y-2 text-muted-foreground">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 3:00 PM</p>
                  <p>Sunday: Closed</p>
               </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <form className="space-y-6 p-8 border rounded-lg shadow-lg bg-card">
              <div>
                <Label htmlFor="name" className="text-foreground/80">Full Name</Label>
                <Input id="name" type="text" placeholder="John Doe" className="mt-1 bg-background" />
              </div>
              <div>
                <Label htmlFor="email" className="text-foreground/80">Email Address</Label>
                <Input id="email" type="email" placeholder="john.doe@example.com" className="mt-1 bg-background" />
              </div>
              <div>
                <Label htmlFor="subject" className="text-foreground/80">Subject</Label>
                <Input id="subject" type="text" placeholder="Inquiry about services" className="mt-1 bg-background" />
              </div>
              <div>
                <Label htmlFor="message" className="text-foreground/80">Message</Label>
                <Textarea id="message" placeholder="Your message..." rows={5} className="mt-1 bg-background" />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" size="lg">
                Send Message
              </Button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
