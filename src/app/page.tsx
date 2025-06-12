import { Faq } from "@/components/sections/faq";
import { FeatureSection } from "@/components/sections/feature-section";
import { Hero } from "@/components/sections/hero";
import { StatSection } from "@/components/sections/stat-section";
import { TrialSection } from "@/components/sections/trial-section";

export default function Home() {
  // Demo data for feature section
  const features = [
    {
      id: "feature-1",
      title: "Quality First",
      description:
        "Whether you're a seasoned professional or just starting your creative journey.",
      icon: "../../assets/step1.png",
      iconColor: "bg-orange-100",
    },
    {
      id: "feature-2",
      title: "Reliability Spectra",
      description:
        "Spectra is here to make the process of building stunning websites seamless and inspiring.",
      icon: "../../assets/step2.png",
      iconColor: "bg-blue-100",
    },
    {
      id: "feature-3",
      title: "Communication",
      description:
        "At the heart of Spectra lies a powerful yet intuitive interface that caters to both designers and developers.",
      icon: "../../assets/step3.png",
      iconColor: "bg-green-100",
    },
  ];

  // Demo data for stats
  const stats = [
    {
      id: "stat-1",
      value: "Live in 10 Minutes",
      label:
        "No dev time, no setup headaches. Just connect your channels and go.",
    },
    {
      id: "stat-2",
      value: "24/7 Smart Chat",
      label:
        "AI handles customer queries day and night — even when your team is away.",
    },
    {
      id: "stat-3",
      value: "Auto Escalations",
      label:
        "Complex queries? Our system flags them for human follow-up — instantly.",
    },
  ];

  // Demo data for testimonials
  const testimonials = [
    {
      id: "testimonial-1",
      quote:
        "This SaaS solution completely transformed our workflow. It increased our efficiency, improved collaboration, and saved us time. It's an amazing solution!",
      author: {
        name: "Alan Fresco",
        title: "Director of Content @Flowbase",
        avatar: "https://ext.same-assets.com/1405474887/4075682080.png",
      },
    },
    {
      id: "testimonial-2",
      quote:
        "I'm impressed with the user-friendly interface and powerful features of this SaaS solution. The support team is also incredibly responsive!",
      author: {
        name: "Dylan Meringu",
        title: "UI Designer @Flowbase",
        avatar: "https://ext.same-assets.com/1508219890/501033152.png",
      },
    },
    {
      id: "testimonial-3",
      quote:
        "I can't imagine running our business without this SaaS platform anymore. It has simplified our complex processes.",
      author: {
        name: "Dianne Ameter",
        title: "Product Designer @Flowbase",
        avatar: "https://ext.same-assets.com/1508219890/501033152.png",
      },
    },
  ];

  // Demo data for FAQ
  const faqs = [
    {
      question: "How does TurinIQ work?",
      answer:
        "You share your product info, pricing, and policies—we build an AI assistant that manages all customer conversations across your channels.",
    },
    {
      question: "What are the benefits for businesses?",
      answer:
        "Your team saves time, support becomes faster, and key insights help you serve customers better. Complex queries are escalated to your team.",
    },
    {
      question: "Is the AI customizable for different industries or workflows?",
      answer:
        "Yes, we support most industries and use cases. Custom workflows are limited for now but coming soon.",
    },
    {
      question: "Does this replace or support human agents?",
      answer:
        "It supports them. AI handles routine chats, while your team focuses on high-value conversations.",
    },
    {
      question: "Can it support multiple languages?",
      answer:
        "Not yet, but it’s on our roadmap. English is fully supported today.",
    },
    {
      question: "Where is my data stored and how is it secured?",
      answer:
        "Your data is stored in secure data centers managed by AWS and Azure, with encryption both at rest and in transit. We follow enterprise-grade security practices, and never share your data with third parties.",
    },
    {
      question: "Is customer data used to train the AI?",
      answer:
        "No, your customer data is not used to train our AI by default. You can choose to enable training with your data for better personalization—but it’s always opt-in and fully under your control.",
    },
    {
      question: "What is the integration process like?",
      answer:
        "You can easily connect your WhatsApp, Instagram, Facebook Messenger, or even third-party tools like Shopify and CRMs using secure APIs. Just fill out a short onboarding form, and we guide you through the setup step-by-step.",
    },

    {
      question: "How long does it take to go live?",
      answer: "Usually 10 to 20 minutes after we get your information.",
    },
    {
      question:
        "Will this work with my existing tools (like CRM or ticketing systems)?",
      answer:
        "We’re working on integrations. Let us know your tools and we’ll find a way to support them.",
    },
    {
      question: "What’s the pricing model?",
      answer: "Subscription-based. We’ll announce pricing soon.",
    },
    {
      question: "Is there a trial or beta available?",
      answer:
        "Yes. You can join our beta or try a 2-week free trial to see it in action.",
    },
    {
      question: "What kind of support do you provide?",
      answer:
        "We offer 24/7 onboarding help and resolve any business queries within 48 hours.",
    },
  ];

  // Demo data for pricing
  const pricingTiers = [
    {
      id: "free",
      name: "Free",
      price: { monthly: 0, annually: 0 },
      features: [
        { text: "Small description here", included: true },
        { text: "Small description here", included: true },
      ],
      buttonText: "Get Started",
      buttonLink: "#",
      icon: "https://ext.same-assets.com/348228198/2712404983.svg",
    },
    {
      id: "plus",
      name: "Plus",
      price: { monthly: 29, annually: 24 },
      features: [
        { text: "Small description here", included: true },
        { text: "Small description here", included: true },
      ],
      buttonText: "Get Started",
      buttonLink: "#",
      icon: "https://ext.same-assets.com/348228198/2520537136.svg",
    },
    {
      id: "pro",
      name: "Pro",
      price: { monthly: 79, annually: 64 },
      features: [
        { text: "Small description here", included: true },
        { text: "Small description here", included: true },
      ],
      buttonText: "Sign up for free",
      buttonLink: "#",
      popular: true,
      icon: "https://ext.same-assets.com/348228198/623997740.svg",
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: { monthly: 149, annually: 120 },
      features: [
        { text: "Small description here", included: true },
        { text: "Small description here", included: true },
      ],
      buttonText: "Get Started",
      buttonLink: "#",
      icon: "https://ext.same-assets.com/348228198/2138437421.svg",
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
            Meet Your Ideal{" "}
            <span className="text-primary-gradient text-balance">
              Sales & Support Teammate ✧
            </span>
          </>
        }
        subtitle="From WhatsApp to your website — TurinIQ brings every customer conversation into one AI-powered inbox that sells, supports, and scales with you."
      />

      {/* Clients Logo Section */}
      {/* <ClientsLogo /> */}

      {/* Feature Section 1 */}
      <StatSection
        tagline="Built for Speed. Designed for Scale."
        title={
          <>
            <span className="text-primary-gradient">Always-On Support.</span>{" "}
            Setup in Minutes.
          </>
        }
        description="Deliver instant, AI-powered support without delays or downtime. With TurinIQ, your team launches fast, stays available 24/7, and never misses a customer again — even when you're offline."
        features={features}
        stats={stats}
        layout="grid"
        // image="https://framerusercontent.com/images/O1JkJUFpNelOoODKNvE5w8kt9b8.png"
      />

      {/* Feature Section 2 */}
      <FeatureSection
        tagline="Fast Onboarding, Zero Headaches"
        backgroundColor="white"
        title={
          <>
            Set Up in 3 Simple Steps —{" "}
            <span className="text-primary-gradient">Live in 10 Minutes</span>
          </>
        }
        description="TurinIQ is built for speed and simplicity. Whether you're a founder, marketer, or support lead, getting started takes minutes. No developers, no code, no stress — just instant value."
        features={[
          {
            id: "channel",
            title: "Connect Channels in 1 Click",
            description:
              "Link WhatsApp, Instagram, Facebook, or your website with a single login.",
            icon: "../",
            bulletPoints: [
              "Unified inbox for all customer conversations",
              "No tech setup — just login and connect",
            ],
          },
          {
            id: "bot",
            title: "Train Your AI Teammate",
            description:
              "Customize your AI with ease — no code or complex logic required.",
            icon: "https://spectra-template.framer.website/#svg-203503966_589",
            bulletPoints: [
              "Just upload documents and let it learn",
              "Tell it when to escalate and define sales flows in plain English",
            ],
          },
          {
            id: "live",
            title: "Go Live & Engage Instantly",
            description:
              "Launch in one click and start chatting with customers immediately.",
            icon: "https://spectra-template.framer.website/#svg-203503966_589",
            bulletPoints: [
              "Fallback to human support when needed",
              "Track chats and performance as it happens",
            ],
          },
        ]}
        layout="image-like"
        // backgroundColor="bg-muted"
        // image="https://framerusercontent.com/images/1r8r7iTwfEWVf0QMHDybOqtgxI.png"
        // imagePosition="left"
      />

      {/* Social Proof / Testimonials */}
      <StatSection
        tagline="Product Demo"
        title={
          <>
            See <span className="text-primary-gradient">TurinIQ</span> in Action
          </>
        }
        description="Turn every chat into a win—see how TurinIQ helps you support, sell, and scale from one powerful dashboard."
        features={features}
        // stats={stats}
        layout="grid"
        image="/assets/product-hero.png"
      />

      {/* Pricing Section */}
      {/* <Pricing tiers={pricingTiers} backgroundColor="bg-muted/30" /> */}

      {/* <SeparatorSection features={featuresData} /> */}

      <TrialSection />

      {/* FAQ Section */}
      <Faq faqs={faqs} categories={[]} />
    </>
  );
}
