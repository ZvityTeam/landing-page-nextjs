import { Hero } from "@/components/sections/hero";
import { FeatureSection } from "@/components/sections/feature-section";
import { Pricing } from "@/components/sections/pricing";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import Image from "next/image";

export default function PricingPage() {
  // Demo data for pricing
  const pricingTiers = [
    {
      id: "free",
      name: "Free",
      price: { monthly: 0, annually: 0 },
      features: [
        { text: "Small description here", included: true },
        { text: "Small description here", included: true },
        { text: "Priority support", included: false },
        { text: "Advanced analytics", included: false },
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
        { text: "Priority support", included: false },
        { text: "Advanced analytics", included: true },
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
        { text: "Priority support", included: true },
        { text: "Advanced analytics", included: true },
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
        { text: "Priority support", included: true },
        { text: "Advanced analytics", included: true },
      ],
      buttonText: "Get Started",
      buttonLink: "#",
      icon: "https://ext.same-assets.com/348228198/2138437421.svg",
    },
  ];

  // Pricing comparison table data
  const pricingFeatures = [
    {
      category: "Workspace",
      features: [
        {
          name: "Number of Seats",
          tiers: { free: "Up to 3", plus: "Unlimited", pro: "Unlimited", enterprise: "Unlimited" }
        }
      ]
    },
    {
      category: "Email",
      features: [
        {
          name: "Email and calendar sync",
          tiers: { free: "1 account per user", plus: "1 account per user", pro: "2 account per user", enterprise: "3 account per user" }
        },
        {
          name: "Email Sending",
          tiers: { free: "200 sends per month", plus: "1,000 sends per month", pro: "Unlimited", enterprise: "Unlimited" }
        },
        {
          name: "Bulk email sending",
          tiers: { free: "10 sends at a time", plus: "50 sends at a time", pro: "50 sends at a time", enterprise: "50 sends at a time" }
        }
      ]
    },
    {
      category: "Features",
      features: [
        {
          name: "Increase Product Sales",
          tiers: { free: false, plus: true, pro: true, enterprise: true }
        },
        {
          name: "Custom integrations",
          tiers: { free: false, plus: false, pro: true, enterprise: true }
        },
        {
          name: "Advanced analytics",
          tiers: { free: false, plus: true, pro: true, enterprise: true }
        }
      ]
    }
  ];

  // FAQ data
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

  return (
    <>
      {/* Hero Section */}
      <Hero
        title={<>Our Plans Scale With<br /><span className="text-primary-gradient">Your Business</span></>}
        subtitle="Choose the perfect plan for your team's needs and scale as you grow."
        showVideo={false}
        alignment="center"
        tagline="OUR PRICING"
      />

      {/* Main Pricing Section */}
      <Pricing
        tiers={pricingTiers}
        description="Our commenting feature is a firm favorite among our customers, eliminating the need for endless email threads and multiple messaging apps."
        backgroundColor="bg-background"
      />

      {/* Detailed Pricing Comparison */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container-custom">
          <h2 className="heading-secondary mb-16 text-center">Spectra Plans</h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 pr-4 min-w-[200px]">Spectra Billing:</th>
                  <th className="py-4 px-6 min-w-[150px]">
                    <div className="flex flex-col items-center">
                      <h4 className="font-bold mb-2">Free</h4>
                      <p className="text-sm text-muted-foreground">$00.00</p>
                      <p className="text-xs text-muted-foreground">user/mo</p>
                    </div>
                  </th>
                  <th className="py-4 px-6 min-w-[150px]">
                    <div className="flex flex-col items-center">
                      <h4 className="font-bold mb-2">Plus</h4>
                      <p className="text-sm text-muted-foreground">$24.00</p>
                      <p className="text-xs text-muted-foreground">user/mo</p>
                    </div>
                  </th>
                  <th className="py-4 px-6 min-w-[150px] bg-primary/5 border-x border-border">
                    <div className="flex flex-col items-center">
                      <h4 className="font-bold mb-2">Pro</h4>
                      <p className="text-sm text-muted-foreground">$64.00</p>
                      <p className="text-xs text-muted-foreground">user/mo</p>
                    </div>
                  </th>
                  <th className="py-4 px-6 min-w-[150px]">
                    <div className="flex flex-col items-center">
                      <h4 className="font-bold mb-2">Enterprise</h4>
                      <p className="text-sm text-muted-foreground">$120.00</p>
                      <p className="text-xs text-muted-foreground">user/mo</p>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {pricingFeatures.map((category, i) => (
                  <>
                    <tr key={`category-${i}`} className="border-b border-border bg-muted/30">
                      <td colSpan={5} className="py-4 px-4 font-semibold">
                        {category.category}
                      </td>
                    </tr>
                    {category.features.map((feature, j) => (
                      <tr key={`feature-${i}-${j}`} className="border-b border-border">
                        <td className="py-4 px-4 text-sm">{feature.name}</td>
                        <td className="py-4 px-6 text-center text-sm">
                          {typeof feature.tiers.free === 'boolean' ? (
                            feature.tiers.free ? (
                              <div className="flex justify-center">
                                <Image src="https://ext.same-assets.com/348228198/1025725776.svg" alt="Yes" width={20} height={20} />
                              </div>
                            ) : (
                              <div className="flex justify-center">
                                <Image src="https://ext.same-assets.com/348228198/154756487.svg" alt="No" width={20} height={20} />
                              </div>
                            )
                          ) : (
                            feature.tiers.free
                          )}
                        </td>
                        <td className="py-4 px-6 text-center text-sm">
                          {typeof feature.tiers.plus === 'boolean' ? (
                            feature.tiers.plus ? (
                              <div className="flex justify-center">
                                <Image src="https://ext.same-assets.com/348228198/1025725776.svg" alt="Yes" width={20} height={20} />
                              </div>
                            ) : (
                              <div className="flex justify-center">
                                <Image src="https://ext.same-assets.com/348228198/154756487.svg" alt="No" width={20} height={20} />
                              </div>
                            )
                          ) : (
                            feature.tiers.plus
                          )}
                        </td>
                        <td className="py-4 px-6 text-center text-sm bg-primary/5 border-x border-border">
                          {typeof feature.tiers.pro === 'boolean' ? (
                            feature.tiers.pro ? (
                              <div className="flex justify-center">
                                <Image src="https://ext.same-assets.com/348228198/1025725776.svg" alt="Yes" width={20} height={20} />
                              </div>
                            ) : (
                              <div className="flex justify-center">
                                <Image src="https://ext.same-assets.com/348228198/154756487.svg" alt="No" width={20} height={20} />
                              </div>
                            )
                          ) : (
                            feature.tiers.pro
                          )}
                        </td>
                        <td className="py-4 px-6 text-center text-sm">
                          {typeof feature.tiers.enterprise === 'boolean' ? (
                            feature.tiers.enterprise ? (
                              <div className="flex justify-center">
                                <Image src="https://ext.same-assets.com/348228198/1025725776.svg" alt="Yes" width={20} height={20} />
                              </div>
                            ) : (
                              <div className="flex justify-center">
                                <Image src="https://ext.same-assets.com/348228198/154756487.svg" alt="No" width={20} height={20} />
                              </div>
                            )
                          ) : (
                            feature.tiers.enterprise
                          )}
                        </td>
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

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

      {/* FAQ Section */}
      <Faq
        faqs={faqs}
        categories={["Tab one", "Tab two"]}
        tagline="SPECTRA FAQS"
      />
    </>
  );
}
