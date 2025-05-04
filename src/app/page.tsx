import { Hero } from "@/components/sections/hero";
import { ClientsLogo } from "@/components/sections/clients-logo";
import { FeatureSection } from "@/components/sections/feature-section";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { Pricing } from "@/components/sections/pricing";
import Image from "next/image";

export default function Home() {
  // Demo data for feature section
  const features = [
    {
      id: "feature-1",
      title: "Quality First",
      description: "Whether you're a seasoned professional or just starting your creative journey.",
      icon: "https://ext.same-assets.com/1405474887/260646423.svg",
      iconColor: "bg-orange-100",
    },
    {
      id: "feature-2",
      title: "Reliability Spectra",
      description: "Spectra is here to make the process of building stunning websites seamless and inspiring.",
      icon: "https://ext.same-assets.com/1405474887/1998606599.svg",
      iconColor: "bg-blue-100",
    },
    {
      id: "feature-3",
      title: "Communication",
      description: "At the heart of Spectra lies a powerful yet intuitive interface that caters to both designers and developers.",
      icon: "https://ext.same-assets.com/1405474887/2018733539.svg",
      iconColor: "bg-green-100",
    },
  ];

  // Demo data for stats
  const stats = [
    {
      id: "stat-1",
      value: "98%",
      label: "With Spectra's responsive design, your creations will shine on any device."
    },
    {
      id: "stat-2",
      value: "24K+",
      label: "Spectra is here to make the process of building stunning websites."
    }
  ];

  // Demo data for testimonials
  const testimonials = [
    {
      id: "testimonial-1",
      quote: "This SaaS solution completely transformed our workflow. It increased our efficiency, improved collaboration, and saved us time. It's an amazing solution!",
      author: {
        name: "Alan Fresco",
        title: "Director of Content @Flowbase",
        avatar: "https://ext.same-assets.com/1405474887/4075682080.png",
      },
    },
    {
      id: "testimonial-2",
      quote: "I'm impressed with the user-friendly interface and powerful features of this SaaS solution. The support team is also incredibly responsive!",
      author: {
        name: "Dylan Meringu",
        title: "UI Designer @Flowbase",
        avatar: "https://ext.same-assets.com/1508219890/501033152.png",
      },
    },
    {
      id: "testimonial-3",
      quote: "I can't imagine running our business without this SaaS platform anymore. It has simplified our complex processes.",
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
      id: "faq-1",
      question: "Is Spectra compatible with all devices?",
      answer: "Yes, Spectra is fully responsive and works on all modern devices including desktops, tablets, and smartphones.",
      category: "general",
    },
    {
      id: "faq-2",
      question: "How to get started with Spectra?",
      answer: "Getting started is easy! Simply sign up for an account, choose a template, and start customizing it to fit your needs.",
      category: "getting-started",
    },
    {
      id: "faq-3",
      question: "What design elements do you offer?",
      answer: "Spectra offers a wide range of design elements including buttons, cards, forms, headers, footers, and much more.",
      category: "design",
    },
    {
      id: "faq-4",
      question: "Can I customize templates in Spectra?",
      answer: "Absolutely! All templates in Spectra are fully customizable to match your brand identity and requirements.",
      category: "general",
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

  return (
    <>
      {/* Hero Section */}
      <Hero
        title={<>The Future of Decision - Making <span className="text-primary-gradient">Made Simple</span> ✧</>}
        subtitle="Crafted for designers and developers alike, Spectra offers an unrivaled innovative platform"
      />

      {/* Clients Logo Section */}
      <ClientsLogo />

      {/* Feature Section 1 */}
      <FeatureSection
        tagline="Content Section"
        title={<>Provide powerful solutions <span className="text-primary-gradient">at all times.</span></>}
        description="Embrace a world of endless possibilities as you immerse yourself in powerful solutions. build powerful marketing sites."
        features={features}
        stats={stats}
        layout="grid"
        image="https://framerusercontent.com/images/O1JkJUFpNelOoODKNvE5w8kt9b8.png"
      />

      {/* Feature Section 2 */}
      <FeatureSection
        tagline="Content Section"
        title={<>Build your site<br />faster with Spectra</>}
        description="Whether you're a seasoned professional or just starting your creative journey, Spectra is here to make the process of building faster."
        features={[
          {
            id: "data-analytics",
            title: "Data driven analytics",
            description: "Where ingenuity meets simplicity. Our mission is to revolutionize the way designers and developers collaborate",
            icon: "https://ext.same-assets.com/1405474887/2116589346.svg",
          },
          {
            id: "beautiful-design",
            title: "Beautiful Design",
            description: "Say goodbye to unnecessary complexities and embrace the simplicity of Spectra.",
            icon: "https://ext.same-assets.com/1405474887/4061061103.svg",
          },
          {
            id: "clean-dev",
            title: "Clean Development",
            description: "Say goodbye to unnecessary complexities and embrace the simplicity of Spectra.",
            icon: "https://ext.same-assets.com/1508219890/111633572.svg",
          },
        ]}
        layout="columns"
        backgroundColor="bg-muted/30"
        image="https://framerusercontent.com/images/1r8r7iTwfEWVf0QMHDybOqtgxI.png"
        imagePosition="left"
      />

      {/* Social Proof / Testimonials */}
      <Testimonials
        testimonials={testimonials}
        reviewPlatform={{
          name: "Clutch",
          logo: "https://ext.same-assets.com/348228198/2282137836.svg",
          total: "48+",
        }}
      />

      {/* Pricing Section */}
      <Pricing
        tiers={pricingTiers}
        backgroundColor="bg-muted/30"
      />

      {/* FAQ Section */}
      <Faq
        faqs={faqs}
        categories={["Tab one", "Tab two"]}
      />
    </>
  );
}
