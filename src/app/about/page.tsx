import { Hero } from "@/components/sections/hero";
import { ClientsLogo } from "@/components/sections/clients-logo";
import { FeatureSection } from "@/components/sections/feature-section";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import Image from "next/image";

export default function AboutPage() {
  // Company values data
  const companyValues = [
    {
      id: "value-1",
      title: "Work-Life Balance",
      description: "We are focused on achieving results and driving measurable impact",
      icon: "https://ext.same-assets.com/1508219890/3492787071.svg",
      iconColor: "bg-orange-100",
    },
    {
      id: "value-2",
      title: "Innovation Driven",
      description: "We foster a culture of continuous learning, where every individual is encouraged",
      icon: "https://ext.same-assets.com/1508219890/1926923393.svg",
      iconColor: "bg-blue-100",
    },
    {
      id: "value-3",
      title: "Active Collaboration",
      description: "We believe that great achievements are the result of effective collaboration",
      icon: "https://ext.same-assets.com/1508219890/2735250022.svg",
      iconColor: "bg-green-100",
    },
    {
      id: "value-4",
      title: "Social & Ethical",
      description: "We conduct business with the utmost integrity, adhering to the highest standards",
      icon: "https://ext.same-assets.com/1508219890/1926923393.svg",
      iconColor: "bg-purple-100",
    },
    {
      id: "value-5",
      title: "Fun & Positive",
      description: "We believe in creating a fun and positive work environment that fosters happiness",
      icon: "https://ext.same-assets.com/1508219890/2735250022.svg",
      iconColor: "bg-yellow-100",
    },
    {
      id: "value-6",
      title: "Health Care & Support",
      description: "We believe in giving back to society and making a positive impact",
      icon: "https://ext.same-assets.com/1508219890/3492787071.svg",
      iconColor: "bg-red-100",
    },
  ];

  // Team members data
  const teamMembers = [
    {
      id: "member-1",
      name: "Sophia Park",
      title: "UI Designer @Flowbase",
      description: "Creative visionary with a passion for design, transforms ideas into stunning.",
      image: "https://ext.same-assets.com/1508219890/501033152.png",
    },
    {
      id: "member-2",
      name: "Fig Nelson",
      title: "UI Designer @Flowbase",
      description: "Effortlessly developed websites with Spectra - a designer's dream!",
      image: "https://ext.same-assets.com/1508219890/501033152.png",
    },
    {
      id: "member-3",
      name: "Fletch Skinner",
      title: "UI Designer @Flowbase",
      description: "Boosted my business with Spectra - highly recommended for entrepreneurs!",
      image: "https://ext.same-assets.com/1508219890/501033152.png",
    },
  ];

  // Stats for the about page
  const stats = [
    {
      id: "stat-1",
      value: "348+",
      label: "Total Workers"
    },
    {
      id: "stat-2",
      value: "12.8+",
      label: "years experience"
    },
    {
      id: "stat-3",
      value: "124+",
      label: "current project"
    }
  ];

  // FAQ data
  const faqs = [
    {
      id: "faq-1",
      question: "Is Spectra compatible with all devices?",
      answer: "Yes, Spectra is fully responsive and works perfectly on desktops, tablets, and mobile devices.",
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
      answer: "Spectra offers a comprehensive library of design elements including buttons, cards, forms, headers, and much more.",
      category: "design",
    },
    {
      id: "faq-4",
      question: "Can I customize templates in Spectra?",
      answer: "Absolutely! All templates in Spectra are fully customizable to match your brand identity and requirements.",
      category: "general",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero
        title={<>Were On a<br /><span className="text-primary-gradient">Mission to Power</span> Customers</>}
        subtitle="At the heart of Spectra lies a powerful yet intuitive interface that caters to both designers and developers"
        showVideo={true}
      />

      {/* About Company Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="heading-secondary mb-6">
                At Spectra Company, we aim to provide our customers with the highest quality software solutions.
              </h2>
              <p className="text-muted-foreground mb-8">
                For designers, the template offers a vast array of visually captivating elements.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat) => (
                <div key={stat.id}>
                  <h3 className="text-4xl font-bold mb-2 text-primary">{stat.value}</h3>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-xl font-semibold mb-8">Companies solve problems faster with our technology</h3>
            <ClientsLogo backgroundColor="bg-transparent" />
          </div>
        </div>
      </section>

      {/* Company Values Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container-custom">
          <h2 className="heading-secondary mb-16 text-center">Our Company's Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyValues.map((value) => (
              <div key={value.id} className="flex flex-col items-center text-center">
                <div className={`w-12 h-12 rounded-full ${value.iconColor} flex items-center justify-center mb-4`}>
                  <Image
                    src={value.icon}
                    alt={value.title}
                    width={24}
                    height={24}
                    className="h-6 w-6 object-contain"
                  />
                </div>
                <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diversity and Inclusion Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-lg font-medium mb-2">Celebrate diversity, focus on inclusion</h3>
              <h2 className="heading-secondary mb-6">48+</h2>
              <p className="text-muted-foreground">
                They say that there's no shame in failing, the shame is in not trying.
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
      </section>

      {/* Collaboration Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-sm font-semibold text-primary uppercase mb-2">OUR CULTURE</h3>
              <h2 className="heading-secondary mb-6">Collaboration is at our core.</h2>
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
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h3 className="text-sm font-semibold text-primary uppercase mb-2">Our Team</h3>
            <h2 className="heading-secondary mb-4">Meet our expert developers</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Embrace a world of endless possibilities as you immerse yourself.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="border border-border rounded-xl p-6 hover:border-primary/30 transition-colors">
                <div className="flex flex-col items-center mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={80}
                    height={80}
                    className="rounded-full mb-4"
                  />
                  <h3 className="font-bold mb-1">{member.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{member.title}</p>
                  <p className="text-sm text-center">{member.description}</p>
                </div>
                <div className="flex justify-center space-x-3 mt-4">
                  <div className="w-8 h-8 rounded-full bg-muted/50 flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-muted/50 flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23 3.00029C22.0424 3.67577 20.9821 4.1924 19.86 4.53029C19.2577 3.8378 18.4573 3.34698 17.567 3.12422C16.6767 2.90146 15.7395 2.95749 14.8821 3.28474C14.0247 3.612 13.2884 4.19469 12.773 4.95401C12.2575 5.71332 11.9877 6.61263 12 7.53029V8.53029C10.2426 8.57586 8.50127 8.18581 6.93101 7.39574C5.36074 6.60568 4.01032 5.43862 3 4.00029C3 4.00029 -1 13.0003 8 17.0003C5.94053 18.3983 3.48716 19.0992 1 19.0003C10 24.0003 21 19.0003 21 7.50029C20.9991 7.2217 20.9723 6.94429 20.92 6.67029C21.9406 5.66378 22.6608 4.393 23 3.00029Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-muted/50 flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <Faq
        faqs={faqs}
        categories={["Tab one", "Tab two"]}
      />

      {/* Testimonials */}
      <Testimonials
        testimonials={[
          {
            id: "testimonial-1",
            quote: "Significant cost savings and improved efficiency since implementing this SaaS product.",
            author: {
              name: "Dianne Ameter",
              title: "Product Designer @flowbase",
              avatar: "https://ext.same-assets.com/1508219890/501033152.png",
            },
          },
          {
            id: "testimonial-2",
            quote: "This SaaS product transformed the way we manage our business.",
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
      />
    </>
  );
}
