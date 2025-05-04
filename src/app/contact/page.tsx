import { Hero } from "@/components/sections/hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FeatureSection } from "@/components/sections/feature-section";
import { Faq } from "@/components/sections/faq";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  // FAQ data
  const faqs = [
    {
      id: "faq-1",
      question: "What is the typical response time?",
      answer: "We typically respond to all inquiries within 24-48 hours during business days. For urgent matters, please indicate so in your message.",
      category: "general",
    },
    {
      id: "faq-2",
      question: "Do you offer custom solutions?",
      answer: "Yes, we provide custom solutions tailored to your specific needs. Please describe your requirements in detail when contacting us.",
      category: "services",
    },
    {
      id: "faq-3",
      question: "Can I schedule a demo?",
      answer: "Absolutely! You can request a demo through our contact form or by emailing us directly at demo@spectra.com.",
      category: "services",
    },
    {
      id: "faq-4",
      question: "Where are your offices located?",
      answer: "Our headquarters is in San Francisco, with additional offices in New York, London, and Singapore. We also have remote team members worldwide.",
      category: "general",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero
        title={<>Get in Touch<br /><span className="text-primary-gradient">With Our Team</span></>}
        subtitle="Have questions or need assistance? We're here to help. Reach out to our team using the contact information below or by filling out the form."
        showVideo={false}
        alignment="center"
        tagline="CONTACT US"
      />

      {/* Contact Form Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="heading-secondary mb-6">Send us a message</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and our team will get back to you as soon as possible.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-medium">
                      First Name
                    </label>
                    <Input id="first-name" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="text-sm font-medium">
                      Last Name
                    </label>
                    <Input id="last-name" placeholder="Enter your last name" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </label>
                  <Input id="email" type="email" placeholder="Enter your email address" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium">
                    Company Name
                  </label>
                  <Input id="company" placeholder="Enter your company name" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input id="subject" placeholder="What is this regarding?" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Please provide details about your inquiry..."
                    rows={5}
                    className="resize-none"
                  />
                </div>

                <Button className="w-full sm:w-auto rounded-full bg-primary hover:bg-primary/90">
                  Send Message
                </Button>
              </form>
            </div>

            <div>
              <div className="bg-muted/30 p-8 rounded-xl mb-8">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Office Location</h4>
                      <p className="text-muted-foreground">
                        123 Innovation Street, Tech District<br />
                        San Francisco, CA 94103<br />
                        United States
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Email Us</h4>
                      <p className="text-muted-foreground mb-1">
                        General Inquiries: info@spectra.com
                      </p>
                      <p className="text-muted-foreground mb-1">
                        Support: support@spectra.com
                      </p>
                      <p className="text-muted-foreground">
                        Sales: sales@spectra.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Call Us</h4>
                      <p className="text-muted-foreground mb-1">
                        Main Office: +1 (555) 123-4567
                      </p>
                      <p className="text-muted-foreground">
                        Support Hotline: +1 (555) 987-6543
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden h-[300px] relative">
                <Image
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                  alt="Office"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold text-primary uppercase mb-2 block">OUR PRESENCE</span>
            <h2 className="heading-secondary mb-4">Global Offices</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              With offices around the world, we're ready to serve you wherever you are.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-background p-6 rounded-xl">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">San Francisco</h3>
              <p className="text-muted-foreground">
                123 Innovation Street<br />
                Tech District<br />
                San Francisco, CA 94103
              </p>
            </div>

            <div className="bg-background p-6 rounded-xl">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">New York</h3>
              <p className="text-muted-foreground">
                456 Business Avenue<br />
                Financial District<br />
                New York, NY 10005
              </p>
            </div>

            <div className="bg-background p-6 rounded-xl">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">London</h3>
              <p className="text-muted-foreground">
                789 Global Square<br />
                Westminster<br />
                London, SW1A 1AA, UK
              </p>
            </div>

            <div className="bg-background p-6 rounded-xl">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">Singapore</h3>
              <p className="text-muted-foreground">
                101 Tech Tower<br />
                Marina Bay<br />
                Singapore, 018956
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <Faq
        faqs={faqs}
        categories={["General", "Services"]}
        tagline="FREQUENTLY ASKED QUESTIONS"
        title="Questions About Contacting Us"
        description="Find answers to common questions about our contact process and support services."
      />
    </>
  );
}
