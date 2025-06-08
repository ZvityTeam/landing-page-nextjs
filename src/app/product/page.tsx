import { Hero } from "@/components/sections/product-hero";
import { FeatureSection } from "@/components/sections/feature-section";
import { Faq } from "@/components/sections/faq";
import { Testimonials } from "@/components/sections/testimonials";
import { Button } from "@/components/ui/button";
import { ClientsLogo } from "@/components/sections/clients-logo";
import Image from "next/image";
import { Check } from "lucide-react";
import { SeparatorSection } from "@/components/sections/separator-section";
import product1 from "../../assets/product-hero1.png";
import { TrialSection } from "@/components/sections/trial-section";

export default function ProductPage() {
  const integrations = [
    {
      name: "WhatsApp",
      icon: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/whatsapp.svg",
    },
    {
      name: "Instagram",
      icon: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/instagram.svg",
    },
    {
      name: "Facebook",
      icon: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/facebook.svg",
    },
    {
      name: "Messenger",
      icon: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/messenger.svg",
    },
    {
      name: "Shopify",
      icon: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/shopify.svg",
    },
    {
      name: "Salesforce",
      icon: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/salesforce.svg",
    },
    // {
    //   name: "Zendesk",
    //   icon: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/zendesk.svg",
    // },
    // {
    //   name: "HubSpot",
    //   icon: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/hubspot.svg",
    // },
    // {
    //   name: "Zoho",
    //   icon: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/zoho.svg",
    // },
  ];

  // Feature data
  const features = [
    {
      id: "feature-1",
      title: "Intuitive Dashboard",
      description:
        "Access all your data and tools from one centralized, user-friendly dashboard designed for efficiency.",
      icon: "https://ext.same-assets.com/1405474887/260646423.svg",
      iconColor: "bg-orange-100",
    },
    {
      id: "feature-2",
      title: "Seamless Integration",
      description:
        "Connect with your existing tools and workflows through our comprehensive API and pre-built integrations.",
      icon: "https://ext.same-assets.com/1405474887/1998606599.svg",
      iconColor: "bg-blue-100",
    },
    {
      id: "feature-3",
      title: "Advanced Analytics",
      description:
        "Gain actionable insights with powerful analytics tools that transform your data into clear visualizations.",
      icon: "https://ext.same-assets.com/1405474887/2018733539.svg",
      iconColor: "bg-green-100",
    },
    {
      id: "feature-4",
      title: "Cloud Security",
      description:
        "Rest easy knowing your data is protected by enterprise-grade security protocols and regular updates.",
      icon: "https://ext.same-assets.com/1508219890/111633572.svg",
      iconColor: "bg-purple-100",
    },
  ];

  // FAQ data
  const faqs = [
    {
      question: "How does TurinIQ work?",
      answer:
        "You provide us with customer-facing information (product lists, return policies, pricing, etc.), and we create an AI assistant that handles all customer-facing communication across your channels (sales + support).",
    },
    {
      question: "What are the benefits for businesses?",
      answer:
        "• AI handles common queries, reducing load on your team.\n• Human-in-the-loop: unresolved queries get escalated as tickets.\n• Insights from sentiment analysis help your team prioritize smarter.\n• Save money and improve response times.",
    },
    {
      question: "Is the AI customizable for different industries or workflows?",
      answer:
        "Yes, it is adaptable to different industries, but we currently do not support advanced custom workflows.",
    },
    {
      question: "Does this replace or support human agents?",
      answer:
        "It augments them — the AI handles routine queries, while edge cases are escalated to humans.",
    },
    {
      question: "Can it support multiple languages?",
      answer:
        "Not yet — multilingual support is on our roadmap for future updates.",
    },

    {
      question: "Where is my data stored and how is it secured?",
      answer:
        "All data is securely stored in Singapore using AWS and Azure infrastructure.",
    },
    {
      question: "Is customer data used to train the AI?",
      answer:
        "Yes, but only to improve your own assistant — data is not shared or used elsewhere.",
    },
    {
      question: "What is the integration process like?",
      answer:
        "• Answer a short onboarding questionnaire.\n• Share files like product catalogs, service guides, etc.\n• We deploy your assistant to WhatsApp, Instagram, Facebook Messenger, and your website.",
    },
    {
      question: "How long does it take to go live?",
      answer: "Typically 10–20 minutes once we have the required info.",
    },
    {
      question: "What’s the pricing model?",
      answer:
        "It will be subscription-based, but pricing details will be announced post-seed round.",
    },
    {
      question: "Are there any upfront costs?",
      answer: "No upfront costs.",
    },
    {
      question: "Is there a trial or beta available?",
      answer:
        "Yes! You can either:\n• Join our beta program for early access.\n• Or try a 2-week free trial.",
    },
    {
      question: "What kind of support do you provide?",
      answer:
        "• 24/7 setup and onboarding support.\n• 48-hour resolution window for business-facing tickets.",
    },
    {
      question:
        "Will this work with my existing tools (like CRM or ticketing systems)?",
      answer:
        "We’re building integrations — for now, please reach out to info@turiniq.com with your use case.",
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      id: "testimonial-1",
      quote:
        "Implementing Spectra has transformed our workflow completely. The intuitive dashboard and powerful analytics tools have saved us countless hours and provided insights we never had before.",
      author: {
        name: "Sarah Johnson",
        title: "CTO, TechForward",
        avatar: "https://ext.same-assets.com/1508219890/501033152.png",
      },
    },
    {
      id: "testimonial-2",
      quote:
        "The seamless integration with our existing tools made adoption across our team incredibly smooth. Spectra has become the backbone of our operations.",
      author: {
        name: "Michael Chang",
        title: "Operations Director, GrowthLabs",
        avatar: "https://ext.same-assets.com/1405474887/4075682080.png",
      },
    },
  ];

  const featuresData = [
    {
      iconPath: "/icons/sep1.png", // Replace with actual path
      title: "Save on Operational Costs",
      description:
        "Reduce your dependence on large support teams by automating routine queries and workflows with smart AI.",
    },
    {
      iconPath: "/icons/sep2.png", // Replace with actual path
      title: "Stay Organized Across Channels",
      description:
        "Manage all your customer conversations—from WhatsApp to your website—through a single, unified platform.",
    },
    {
      iconPath: "/icons/sep3.png", // Replace with actual path
      title: "Make Smarter Business Decisions",
      description:
        "Use AI-powered insights from customer interactions to refine your support strategy and boost engagement.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero
        title={
          <>
            Where Customer Conversations
            <br />
            <span className="text-primary-gradient">
              Become Business Superpower
            </span>
          </>
        }
        subtitle="TurinIQ brings all your support channels into one AI-powered platform—automating the boring, organizing the messy, and uncovering insights that actually move your business forward.
"
        showVideo={true}
        alignment="center"
        tagline="MEET TURINIQ"
        page="product"
      />
      {/* Clients Logo Section */}
      <SeparatorSection features={featuresData} />
      {/* Main Features Grid */}
      <FeatureSection
        tagline="CORE FEATURES"
        title={
          <>
            Why Businesses
            <br />
            <span className="text-primary-gradient"> Love TurinIQ</span>
          </>
        }
        description="Discover how TurinIQ supercharges customer interactions and simplifies support — all from one intelligent platform."
        features={features}
        layout="marquee"
        backgroundColor="bg-background"
      />
      {/* Dashboard Showcase */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-xs font-semibold tracking-wider text-primary uppercase mb-3">
                Smart Support
              </span>
              <h2 className="heading-secondary mb-6">
                Deliver instant, intelligent, and personal service—without
                lifting a finger.
              </h2>
              <p className="text-muted-foreground mb-8">
                TurinIQ’s AI support tools are designed to automate the
                repetitive and escalate what matters—so your team stays focused
                on what truly needs a human touch.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="mt-1 mr-3 text-primary">
                    <Check size={18} />
                  </div>
                  <p>AI Agents That Work 24/7</p>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 mr-3 text-primary">
                    <Check size={18} />
                  </div>
                  <p>Smart Human Escalation</p>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 mr-3 text-primary">
                    <Check size={18} />
                  </div>
                  <p>Unified Inbox for All Channels</p>
                </div>
              </div>

              {/* <Button className="rounded-full bg-primary hover:bg-primary/90">
                Explore Dashboard
              </Button> */}
            </div>
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={product1}
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
                Control Hub
              </span>
              <h2 className="heading-secondary mb-6">
                One powerful dashboard. All your customer insights and
                workflows.
              </h2>
              <p className="text-muted-foreground mb-8">
                With TurinIQ’s centralized control center, you get the
                visibility and flexibility to operate with confidence and speed.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="mt-1 mr-3 text-primary">
                    <Check size={18} />
                  </div>
                  <p>Real-time Analytics</p>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 mr-3 text-primary">
                    <Check size={18} />
                  </div>
                  <p>Customizable Dashboard Widgets</p>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 mr-3 text-primary">
                    <Check size={18} />
                  </div>
                  <p>Multi-device Sync</p>
                </div>
              </div>

              {/* <Button className="rounded-full bg-primary hover:bg-primary/90">
                Discover Analytics
              </Button> */}
            </div>
          </div>
        </div>
      </section>
      {/* Integration Feature */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-semibold tracking-wider text-primary uppercase mb-3">
              Business-Ready Integrations
            </span>
            <h2 className="heading-secondary mb-4">
              Built to scale with you—whatever tools you use.
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Whether you're a startup or enterprise, TurinIQ plugs into your
              existing ecosystem and grows with you.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {integrations.map((integration, i) => (
              <div
                key={`integration-${i}`}
                className="bg-background rounded-xl p-4 flex flex-col items-center justify-center h-32 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <Image
                  src={integration.icon}
                  alt={`${integration.name} Integration`}
                  width={40}
                  height={40}
                  className="opacity-80 mb-3"
                />
                <span className="text-sm font-medium text-center">
                  {integration.name}
                </span>
              </div>
            ))}
          </div>

          {/* <div className="mt-12 text-center">
            <Button className="rounded-full bg-primary hover:bg-primary/90">
              View All Integrations
            </Button>
          </div> */}
        </div>
      </section>
      {/* Testimonials
      <Testimonials
        testimonials={testimonials}
        reviewPlatform={{
          name: "Clutch",
          logo: "https://ext.same-assets.com/348228198/2282137836.svg",
          total: "48+",
        }}
        backgroundColor="bg-background"
      /> */}
      {/* CTA Section */}
      {/* <section className="py-16 md:py-24 bg-primary/5">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-secondary mb-6">
              Ready to transform your business?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Start your free trial today and experience the power of Spectra
              firsthand. No credit card required.
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
      </section> */}
            <TrialSection />
      {/* FAQ Section */}
      <Faq
        faqs={faqs}
        // categories={["General", "Technical", "Support"]}
        tagline="COMMON QUESTIONS"
        title="Frequently Asked Questions"
        description="Find answers to common questions about our product, features, and how it can benefit your business."
      />
    </>
  );
}
