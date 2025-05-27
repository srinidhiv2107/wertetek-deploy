"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Mail, Phone, MapPin } from "lucide-react";
import { ClipLoader } from 'react-spinners';

const serviceID = "service_agilwqn";
const templateID = "template_strna9a";
const userID = "7dLWh_nlVFZJb8vI3";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  [key: string]: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [statusMessage, setStatusMessage] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const validateEmail = (email: string): boolean =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setErrors((prev) => ({ ...prev, [e.target.name]: '' }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!validateEmail(formData.email))
      newErrors.email = "Enter a valid email.";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.message.trim())
      newErrors.message = "Message cannot be empty.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    emailjs
        .send(serviceID, templateID, formData, userID)
        .then(() => {
          setStatusMessage("Message sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
          setErrors({});
        })
        .catch(() => {
          setStatusMessage("Failed to send message. Please try again later.");
        })
        .finally(() => {
          setLoading(false);
          setTimeout(() => setStatusMessage(''), 3000);
        });
  };

  return (
      <section id="contact" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto max-w-screen-xl px-4 md:px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">
                Get in Touch
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                We're here to help and answer any question you might have. We look
                forward to hearing from you!
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <ScrollReveal delay={100} className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4 text-muted-foreground">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-accent mr-4 shrink-0 mt-1" />
                    <span>RR Nagar, Bengaluru</span>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-accent mr-4 shrink-0 mt-1" />
                    <a
                        href="mailto:Admin@wertetek.com"
                        className="hover:text-accent transition-colors"
                    >
                      Admin@wertetek.com
                    </a>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-accent mr-4 shrink-0 mt-1" />
                    <a
                        href="tel:+919686643633"
                        className="hover:text-accent transition-colors"
                    >
                      9686643633
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-4">
                  Office Hours
                </h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 3:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <form
                  className="space-y-6 p-8 border rounded-lg shadow-lg bg-card"
                  onSubmit={handleSubmit}
              >
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="mt-1 bg-background"
                  />
                  {errors.name && (
                      <p className="text-red-600 text-sm mt-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john.doe@example.com"
                      className="mt-1 bg-background"
                  />
                  {errors.email && (
                      <p className="text-red-600 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Inquiry about services"
                      className="mt-1 bg-background"
                  />
                  {errors.subject && (
                      <p className="text-red-600 text-sm mt-1">{errors.subject}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message..."
                      rows={5}
                      className="mt-1 bg-background"
                  />
                  {errors.message && (
                      <p className="text-red-600 text-sm mt-1">{errors.message}</p>
                  )}
                </div>
                <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    size="lg"
                    disabled={loading}
                >
                  {loading ? <ClipLoader size={25} color="#000000" /> : "Submit"}
                </Button>
                {statusMessage && (
                    <p className="text-center mt-4 text-sm text-muted-foreground">
                      {statusMessage}
                    </p>
                )}
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>
  );
}
