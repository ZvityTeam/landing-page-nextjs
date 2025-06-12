import { Faq } from "@/components/sections/faq";
import { FeatureSection } from "@/components/sections/feature-section";
import { Hero } from "@/components/sections/product-hero";
import { SeparatorSection } from "@/components/sections/separator-section";
import { TrialSection } from "@/components/sections/trial-section";
import { Check } from "lucide-react";
import Image from "next/image";
import product1 from "../../assets/product-hero1.png";

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
  ];

  // Feature data
  const features = [
    {
      id: "feature-1",
      title: "Intuitive Dashboard",
      description:
        "One view for all conversations, tickets, and performance—built to keep your team in sync and focused.",
      icon: "https://ext.same-assets.com/1405474887/260646423.svg",
      iconColor: "bg-orange-100",
    },
    {
      id: "feature-2",
      title: "Seamless Integration",
      description:
        "Connect your WhatsApp, Instagram, Shopify, or CRM in minutes using our simple API and plug-and-play setup.",
      icon: "https://ext.same-assets.com/1405474887/1998606599.svg",
      iconColor: "bg-blue-100",
    },
    {
      id: "feature-3",
      title: "Actionable Analytics",
      description:
        "Turn chats into insights. Track customer behavior, agent responsiveness, and support trends to drive better decisions.",
      icon: "https://ext.same-assets.com/1405474887/2018733539.svg",
      iconColor: "bg-green-100",
    },
    {
      id: "feature-4",
      title: "Enterprise-Grade Security",
      description:
        "Your data is encrypted, stored on AWS & Azure, and protected by audit logs, role-based access, and compliance checks.",
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
      iconPath: "/icons/sep2.png",
      title: "One Inbox to rule them all",
      description:
        "WhatsApp, Instagram, Messenger, and your website—all managed from a single, AI-powered interface with smart routing and escalation.",
    },
    {
      iconPath: "/icons/sep3.png",
      title: "Built-In Ticketing, Zero Chaos",
      description:
        "Auto-create and track tickets from chats, so nothing falls through the cracks—even when your team is offline.",
    },
    {
      iconPath: "/icons/sep1.png",
      title: "Insights That Cut Costs",
      description:
        "Track customer trends, agent performance, and common queries—so you reduce support overhead and make faster decisions.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero
        title={
          <>
            Turn Conversations into
            <br />
            <span className="text-primary-gradient">
              Revenue, Loyalty & Speed
            </span>
          </>
        }
        subtitle="Unify support, capture leads, auto-escalate tickets, and track every conversation—TurinIQ turns chats into insights and action that drive growth."
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
            Built for Teams Who
            <br />
            <span className="text-primary-gradient">
              Value Every Conversation
            </span>
          </>
        }
        description="From AI-powered ticketing to deep analytics, TurinIQ brings structure, speed, and insights to your customer conversations—all in one place."
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
                Support That Sorts Itself.
              </h2>
              <p className="text-muted-foreground mb-8">
                TurinIQ blends always-on AI agents with smart human handoff—so
                you resolve tickets faster, handle more queries, and never miss
                a beat.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="mt-1 mr-3 text-primary">
                    <Check size={18} />
                  </div>
                  <p>24/7 AI-Powered Responses</p>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 mr-3 text-primary">
                    <Check size={18} />
                  </div>
                  <p>Automatic Escalation to Human Agents</p>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 mr-3 text-primary">
                    <Check size={18} />
                  </div>
                  <p>All Conversations in One Inbox</p>
                </div>
              </div>
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
                  <p>Gaps flagged. Smarter every time</p>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 mr-3 text-primary">
                    <Check size={18} />
                  </div>
                  <p>Track Support Trends and Bottlenecks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Integration Feature */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-semibold tracking-wider text-primary uppercase mb-3">
              Seamless Integrations
            </span>
            <h2 className="heading-secondary mb-4">
              Built to scale—connect your stack.
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From startups to enterprises, TurinIQ integrates effortlessly with
              your existing tools and workflows.
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
        </div>
      </section>
      {/* Security Feature */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-semibold tracking-wider text-primary uppercase mb-3">
              Data Protection
            </span>
            <h2 className="heading-secondary mb-4">Security You Can Trust</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              TurinIQ is built with enterprise-grade security to keep your data
              safe, isolated, and protected at every step.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-muted-foreground mb-8">
                Our platform ensures your business operates in a secure,
                isolated environment with strict controls and industry-best
                practices.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="mt-1 mr-3 text-primary">
                    <Check size={18} />
                  </div>
                  <p>
                    <strong>Business Isolation:</strong> Each business is
                    assigned a unique tenant ID, ensuring no cross-business data
                    access.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 mr-3 text-primary">
                    <Check size={18} />
                  </div>
                  <p>
                    <strong>Chat Session Security:</strong> Every user chat is
                    isolated with a unique session ID, encrypted, and
                    access-controlled.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 mr-3 text-primary">
                    <Check size={18} />
                  </div>
                  <p>
                    <strong>End-to-End Encryption:</strong> All data is
                    encrypted at rest and in transit, leveraging AWS and Azure
                    infrastructure.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 mr-3 text-primary">
                    <Check size={18} />
                  </div>
                  <p>
                    <strong>AI Privacy:</strong> Powered by OpenAI APIs in
                    stateless mode, with no data retention or training unless
                    you opt-in.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/assets/security.png"
                  alt="TurinIQ Security Architecture Diagram"
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
      <TrialSection />
      {/* FAQ Section */}
      <Faq
        faqs={faqs}
        tagline="COMMON QUESTIONS"
        title="Frequently Asked Questions"
        description="Find answers to common questions about our product, features, and how it can benefit your business."
      />
    </>
  );
}
