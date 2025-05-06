import { Hero } from "@/components/sections/hero";
import { ClientsLogo } from "@/components/sections/clients-logo";
import { FeatureSection } from "@/components/sections/feature-section";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import Image from "next/image";
import { TrialSection } from "@/components/sections/trial-section";
import step1 from "../../assets/step1.png";
import step2 from "../../assets/step2.png";
import step3 from "../../assets/step3.png";

export default function AboutPage() {
  // Company values data
  const companyValues = [
    {
      id: "value-1",
      title: "Customer-Centric Innovation",
      description:
        "We obsess over simplifying support experiences. Everything we build is driven by our goal to make communication smoother, faster, and more human—even when it’s AI.",
      icon: step1,
      iconColor: "bg-orange-100",
    },
    {
      id: "value-2",
      title: "Built for Scale, Designed for Humans",
      description:
        "We combine enterprise-grade performance with user-friendly design. Whether you're a growing startup or a large business, our platform fits seamlessly and grows with you.",
      icon: step2,
      iconColor: "bg-blue-100",
    },
    {
      id: "value-3",
      title: "Transparency & Trust",
      description:
        "We believe in building honest relationships—with our clients, our users, and each other. No fluff, just real solutions that deliver real results.",
      icon: step3,
      iconColor: "bg-green-100",
    },
  ];

  // Team members data
  const teamMembers = [
    {
      id: "member-1",
      name: "Sophia Park",
      title: "UI Designer @Flowbase",
      description:
        "Creative visionary with a passion for design, transforms ideas into stunning.",
      image: "https://ext.same-assets.com/1508219890/501033152.png",
    },
    {
      id: "member-2",
      name: "Fig Nelson",
      title: "UI Designer @Flowbase",
      description:
        "Effortlessly developed websites with Spectra - a designer's dream!",
      image: "https://ext.same-assets.com/1508219890/501033152.png",
    },
    {
      id: "member-3",
      name: "Fletch Skinner",
      title: "UI Designer @Flowbase",
      description:
        "Boosted my business with Spectra - highly recommended for entrepreneurs!",
      image: "https://ext.same-assets.com/1508219890/501033152.png",
    },
  ];

  // Stats for the about page
  const stats = [
    {
      id: "stat-1",
      value: "348+",
      label: "Total Workers",
    },
    {
      id: "stat-2",
      value: "12.8+",
      label: "years experience",
    },
    {
      id: "stat-3",
      value: "124+",
      label: "current project",
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

  return (
    <>
      {/* Hero Section */}
      <Hero
        title={
          <>
            We’re a Bold Team on a<br />
            <span className="text-primary-gradient">
              Mission to Redefine
            </span>{" "}
            Customer Interactions
          </>
        }
        subtitle="At TurinIQ, we’re building more than just a product—we’re creating a smarter, faster, and more human way for businesses to connect with their customers. Backed by innovation and driven by impact, our team is committed to transforming how support teams work and grow"
        showVideo={false}
        showImage={false}
      />

      {/* About Company Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="heading-secondary mb-6">
                At TurinIQ, we believe the future of customer support is smart,
                simple, and scalable.
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-8">
              <p className="text-muted-foreground mb-8">
                We started with a bold idea: businesses shouldn’t have to choose
                between speed, personalization, and efficiency when talking to
                their customers. So we built a platform that brings them all
                together—powered by AI, made for humans. From retail shops to
                tech startups, teams use TurinIQ to untangle support chaos,
                automate the repetitive, and actually connect with
                customers—wherever they are.
              </p>
            </div>
          </div>

          {/* <div className="mt-16">
            <h3 className="text-xl font-semibold mb-8">
              Companies solve problems faster with our technology
            </h3>
            <ClientsLogo backgroundColor="bg-transparent" />
          </div> */}
        </div>
      </section>

      {/* Company Values Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container-custom">
          <h2 className="heading-secondary mb-16 text-center">
            Our Company's Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
            {companyValues.map((value) => (
              <div
                key={value.id}
                className="flex flex-col items-start text-start"
              >
                <div
                  className={`w-12 h-12 rounded-full bg-white border border-black border-b-2 flex items-center justify-center mb-4`}
                >
                  <Image
                    src={value.icon}
                    alt={value.title}
                    width={24}
                    height={24}
                    className="h-6 w-6 object-contain"
                  />
                </div>
                <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diversity and Inclusion Section */}
      {/* <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-lg font-medium mb-2">
                Celebrate diversity, focus on inclusion
              </h3>
              <h2 className="heading-secondary mb-6">48+</h2>
              <p className="text-muted-foreground">
                They say that there's no shame in failing, the shame is in not
                trying.
              </p>
            </div>
            <div>
              <h2 className="heading-secondary mb-6">100+</h2>
              <p className="text-muted-foreground">
                Step into the world of Spectra, where creativity knows no bounds
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Collaboration Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-sm font-semibold text-primary uppercase mb-2">
                OUR CULTURE
              </h3>
              <h2 className="heading-secondary mb-6">
                Where bold ideas meet thoughtful execution.
              </h2>
              <Image
                src="https://ext.same-assets.com/1508219890/3029697989.svg"
                alt="Watch Video"
                width={64}
                height={64}
                className="mt-4"
              />
            </div>
            <div>
              <div className="rounded-xl overflow-hidden">
                <Image
                  src="https://framerusercontent.com/images/1r8r7iTwfEWVf0QMHDybOqtgxI.png"
                  alt="Collaboration"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      {/* <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h3 className="text-sm font-semibold text-primary uppercase mb-2">
              Our Team
            </h3>
            <h2 className="heading-secondary mb-4">
              Meet our expert developers
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Embrace a world of endless possibilities as you immerse yourself.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="border border-border rounded-xl p-6 hover:border-primary/30 transition-colors"
              >
                <div className="flex flex-col items-center mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={80}
                    height={80}
                    className="rounded-full mb-4"
                  />
                  <h3 className="font-bold mb-1">{member.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {member.title}
                  </p>
                  <p className="text-sm text-center">{member.description}</p>
                </div>
                <div className="flex justify-center space-x-3 mt-4">
                  <div className="w-8 h-8 rounded-full bg-muted/50 flex items-center justify-center">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-muted/50 flex items-center justify-center">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23 3.00029C22.0424 3.67577 20.9821 4.1924 19.86 4.53029C19.2577 3.8378 18.4573 3.34698 17.567 3.12422C16.6767 2.90146 15.7395 2.95749 14.8821 3.28474C14.0247 3.612 13.2884 4.19469 12.773 4.95401C12.2575 5.71332 11.9877 6.61263 12 7.53029V8.53029C10.2426 8.57586 8.50127 8.18581 6.93101 7.39574C5.36074 6.60568 4.01032 5.43862 3 4.00029C3 4.00029 -1 13.0003 8 17.0003C5.94053 18.3983 3.48716 19.0992 1 19.0003C10 24.0003 21 19.0003 21 7.50029C20.9991 7.2217 20.9723 6.94429 20.92 6.67029C21.9406 5.66378 22.6608 4.393 23 3.00029Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-muted/50 flex items-center justify-center">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6 9H2V21H6V9Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <TrialSection />

      {/* FAQ Section */}
      <Faq faqs={faqs} />

      {/* Testimonials */}
      {/* <Testimonials
        testimonials={[
          {
            id: "testimonial-1",
            quote:
              "Significant cost savings and improved efficiency since implementing this SaaS product.",
            author: {
              name: "Dianne Ameter",
              title: "Product Designer @flowbase",
              avatar: "https://ext.same-assets.com/1508219890/501033152.png",
            },
          },
          {
            id: "testimonial-2",
            quote:
              "This SaaS product transformed the way we manage our business.",
            author: {
              name: "Octavia Melvin",
              title: "CEO @flowbase",
              avatar: "https://ext.same-assets.com/1508219890/501033152.png",
            },
          },
        ]}
        reviewPlatform={{
          name: "Clutch",
          logo: "https://ext.same-assets.com/348228198/2282137836.svg",
          total: "48+",
        }}
      /> */}
    </>
  );
}
