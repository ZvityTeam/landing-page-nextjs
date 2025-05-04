import { Hero } from "@/components/sections/hero";
import { FeatureSection } from "@/components/sections/feature-section";
import { Faq } from "@/components/sections/faq";
import { Testimonials } from "@/components/sections/testimonials";
import { Button } from "@/components/ui/button";
import { ClientsLogo } from "@/components/sections/clients-logo";
import Image from "next/image";
import { Check } from "lucide-react";

export default function ProductPage() {
  // Feature data
  const features = [
    {
      id: "feature-1",
      title: "Intuitive Dashboard",
      description: "Access all your data and tools from one centralized, user-friendly dashboard designed for efficiency.",
      icon: "https://ext.same-assets.com/1405474887/260646423.svg",
      iconColor: "bg-orange-100",
    },
    {
      id: "feature-2",
      title: "Seamless Integration",
      description: "Connect with your existing tools and workflows through our comprehensive API and pre-built integrations.",
      icon: "https://ext.same-assets.com/1405474887/1998606599.svg",
      iconColor: "bg-blue-100",
    },
    {
      id: "feature-3",
      title: "Advanced Analytics",
      description: "Gain actionable insights with powerful analytics tools that transform your data into clear visualizations.",
      icon: "https://ext.same-assets.com/1405474887/2018733539.svg",
      iconColor: "bg-green-100",
    },
    {
      id: "feature-4",
      title: "Cloud Security",
      description: "Rest easy knowing your data is protected by enterprise-grade security protocols and regular updates.",
      icon: "https://ext.same-assets.com/1508219890/111633572.svg",
      iconColor: "bg-purple-100",
    },
  ];

  // FAQ data
  const faqs = [
    {
      id: "faq-1",
      question: "How does Spectra differ from other platforms?",
      answer: "Spectra stands out with its intuitive interface, comprehensive integration capabilities, and powerful analytics tools all in one platform. Our focus on user experience and seamless workflow makes us unique in the market.",
      category: "general",
    },
    {
      id: "faq-2",
      question: "Can I migrate data from another platform?",
      answer: "Yes, Spectra includes powerful migration tools that make transferring your data from other platforms simple and efficient. Our team can also provide migration assistance if needed.",
      category: "technical",
    },
    {
      id: "faq-3",
      question: "What kind of support do you offer?",
      answer: "We provide 24/7 customer support through chat, email, and phone. Our Pro and Enterprise plans include dedicated account managers and priority support.",
      category: "support",
    },
    {
      id: "faq-4",
      question: "Is Spectra suitable for small businesses?",
      answer: "Absolutely! Spectra scales with your business, offering plans suitable for teams of all sizes. Our Free and Plus plans are designed specifically with small businesses in mind.",
      category: "general",
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      id: "testimonial-1",
      quote: "Implementing Spectra has transformed our workflow completely. The intuitive dashboard and powerful analytics tools have saved us countless hours and provided insights we never had before.",
      author: {
        name: "Sarah Johnson",
        title: "CTO, TechForward",
        avatar: "https://ext.same-assets.com/1508219890/501033152.png",
      },
    },
    {
      id: "testimonial-2",
      quote: "The seamless integration with our existing tools made adoption across our team incredibly smooth. Spectra has become the backbone of our operations.",
      author: {
        name: "Michael Chang",
        title: "Operations Director, GrowthLabs",
        avatar: "https://ext.same-assets.com/1405474887/4075682080.png",
      },
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero
        title={<>The Complete<br /><span className="text-primary-gradient">Business Solution</span></>}
        subtitle="Our comprehensive platform streamlines your workflows, enhances productivity, and drives business growth through powerful analytics and seamless integrations."
        showVideo={true}
        alignment="center"
        tagline="MEET SPECTRA"
      />

      {/* Clients Logo Section */}
      <ClientsLogo
        title="Trusted by industry-leading companies"
        backgroundColor="bg-background"
      />

      {/* Main Features Grid */}
      <FeatureSection
        tagline="CORE FEATURES"
        title={<>Powerful features for<br /><span className="text-primary-gradient">modern businesses</span></>}
        description="Discover how Spectra's comprehensive suite of features can transform your business operations and drive growth."
        features={features}
        layout="grid"
        backgroundColor="bg-background"
      />

      {/* Dashboard Showcase */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-xs font-semibold tracking-wider text-primary uppercase mb-3">
                INTUITIVE INTERFACE
              </span>
              <h2 className="heading-secondary mb-6">
                Streamlined dashboard for maximum productivity
              </h2>
              <p className="text-muted-foreground mb-8">
                Our intuitive dashboard puts everything you need at your fingertips. With customizable widgets, real-time updates, and clear visualizations, managing your business has never been easier.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="mt-1 mr-3 text-primary">
                    <Check size={18} />
                  </div>
                  <p>Customizable dashboard layouts to match your workflow</p>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 mr-3 text-primary">
                    <Check size={18} />
                  </div>
                  <p>Real-time data updates across all connected devices</p>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 mr-3 text-primary">
                    <Check size={18} />
                  </div>
                  <p>Interactive data visualizations that simplify complex information</p>
                </div>
              </div>

              <Button className="rounded-full bg-primary hover:bg-primary/90">
                Explore Dashboard
              </Button>
            </div>
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Dashboard Interface"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-xl -z-10" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full blur-xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Feature */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Analytics Interface"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-xl -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-xl -z-10" />
            </div>
            <div className="order-1 lg:order-2">
              <span className="inline-block text-xs font-semibold tracking-wider text-primary uppercase mb-3">
                DATA-DRIVEN INSIGHTS
              </span>
              <h2 className="heading-secondary mb-6">
                Advanced analytics that drive business decisions
              </h2>
              <p className="text-muted-foreground mb-8">
                Transform raw data into actionable insights with our powerful analytics tools. Uncover trends, identify opportunities, and make informed decisions that propel your business forward.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="mt-1 mr-3 text-primary">
                    <Check size={18} />
                  </div>
                  <p>Comprehensive reporting tools with customizable parameters</p>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 mr-3 text-primary">
                    <Check size={18} />
                  </div>
                  <p>Predictive analytics to forecast trends and opportunities</p>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 mr-3 text-primary">
                    <Check size={18} />
                  </div>
                  <p>Export capabilities for sharing insights across your organization</p>
                </div>
              </div>

              <Button className="rounded-full bg-primary hover:bg-primary/90">
                Discover Analytics
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Feature */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-semibold tracking-wider text-primary uppercase mb-3">
              SEAMLESS CONNECTION
            </span>
            <h2 className="heading-secondary mb-4">
              Integrate with your favorite tools
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Spectra connects seamlessly with the tools you already use, creating a unified workflow that eliminates silos and enhances productivity.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[1, 2, 3, 4, 5, 6, 12].map((i) => (
              <div key={`integration-${i}`} className="bg-background rounded-xl p-4 flex items-center justify-center h-24 shadow-sm">
                <Image
                  src={`https://ext.same-assets.com/1405474887/${2000000000 + i * 100000}.svg`}
                  alt={`Integration Partner ${i}`}
                  width={40}
                  height={40}
                  className="opacity-70"
                />
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button className="rounded-full bg-primary hover:bg-primary/90">
              View All Integrations
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials
        testimonials={testimonials}
        reviewPlatform={{
          name: "Clutch",
          logo: "https://ext.same-assets.com/348228198/2282137836.svg",
          total: "48+",
        }}
        backgroundColor="bg-background"
      />

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-secondary mb-6">
              Ready to transform your business?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Start your free trial today and experience the power of Spectra firsthand. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="rounded-full bg-primary hover:bg-primary/90 text-lg px-8 py-6">
                Start Free Trial
              </Button>
              <Button className="rounded-full bg-background border border-primary text-primary hover:bg-primary/5 text-lg px-8 py-6">
                Request Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <Faq
        faqs={faqs}
        categories={["General", "Technical", "Support"]}
        tagline="COMMON QUESTIONS"
        title="Frequently Asked Questions"
        description="Find answers to common questions about our product, features, and how it can benefit your business."
      />
    </>
  );
}
