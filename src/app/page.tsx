import { Hero } from "@/components/sections/hero";
import { ClientsLogo } from "@/components/sections/clients-logo";
import { FeatureSection } from "@/components/sections/feature-section";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { Pricing } from "@/components/sections/pricing";
import Image from "next/image";
import step1 from "../assets/step1.png";
import step2 from "../assets/step2.png";
import step3 from "../assets/step3.png";
import { StatSection } from "@/components/sections/stat-section";
import { SeparatorSection } from "@/components/sections/separator-section";
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
      value: "10-Minute Setup",
      label:
        "Get started in minutes—no developers, no downtime. Just connect and go.",
    },
    {
      id: "stat-2",
      value: "24/7 Active Chat",
      label:
        "Never miss a message again. Our AI-powered chatbot stays online even when your team’s offline.",
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
            Customer Conversations - Unified, Simplified,{" "}
            <span className="text-primary-gradient">Supercharged</span> ✧
          </>
        }
        subtitle="From WhatsApp to your website—TurinIQ brings all your customer chats into one smart platform, powered by AI and built for growth."
      />

      {/* Clients Logo Section */}
      {/* <ClientsLogo /> */}

      {/* Feature Section 1 */}
      <StatSection
        tagline="Content Section"
        title={
          <>
            Always{" "}
            <span className="text-primary-gradient">
              -On Support. Instant Setup
            </span>
          </>
        }
        description="Step into a smarter way of handling customer queries—without the wait or the hassle. TurinIQ empowers your team to launch fast and stay responsive, all day, every day."
        features={features}
        stats={stats}
        layout="grid"
        // image="https://framerusercontent.com/images/O1JkJUFpNelOoODKNvE5w8kt9b8.png"
      />

      {/* Feature Section 2 */}
      <FeatureSection
        // tagline="Content Section"
        backgroundColor="white"
        title={
          <>
            Set up in 3 simple steps
            {/* <br /> */}
            {/* and core features */}
          </>
        }
        description="Whether you're a tech pro or just getting started, TurinIQ is built for ease. Get your support system live in just minutes—no code, no complications."
        features={[
          {
            id: "channel",
            title: "Connect Your Channels",
            description:
              "Link WhatsApp, Instagram, Facebook, or your website in just a few clicks.",
            icon: "../",
            bulletPoints: [
              "Unified inbox setup for all channels from Day 1",
              "No technical setup—just login and authorize access",
            ],
            // bulletPoints = [
            //   "Unified inbox setup for all channels from Day 1",
            //   "No technical setup—just login and authorize access",
            // ],
          },
          {
            id: "bot",
            title: "Customize Your Chatbot",
            description:
              "Use our drag-and-drop flow builder to train your bot—zero coding needed.",
            icon: "https://spectra-template.framer.website/#svg-203503966_589",
            bulletPoints: [
              " Simple Chat interface for setting up",
              "Easily set up FAQ responses or escalation paths to human agents",
            ],
          },
          {
            id: "live",
            title: "Go Live Instantly",
            description:
              "Deploy with one click and start engaging customers right away.",
            icon: "https://spectra-template.framer.website/#svg-203503966_589",
            bulletPoints: [
              "Enable human takeover and fallback routing from launch",
              "Monitor real-time conversations directly from the dashboard",
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
            See TurinIQ <span className="text-primary-gradient">in Action</span>
          </>
        }
        description="Whether you're running a retail store or scaling your tech service, TurinIQ makes customer communication seamless and smart."
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
