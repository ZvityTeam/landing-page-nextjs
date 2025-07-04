"use client";

import Link from "next/link";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <footer className="bg-muted/50 pt-16 pb-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between mb-16 gap-10">
          {/* Logo and Description */}
          <div className="md:w-1/4">
            <Link href="/" className="flex items-center mb-6">
              <div className="flex items-center">
                <div className="w-5 h-5 bg-primary rounded-sm flex items-center justify-center mr-1">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <span className="font-bold text-xl">TurinIQ.</span>
              </div>
            </Link>
            <p className="text-muted-foreground mb-6">
              Clarity in every customer moment.
            </p>
            <div className="mt-5 text-muted-foreground">
              <Button
                asChild
                className="rounded-full bg-primary hover:bg-primary/90 text-md px-8 py-6"
              >
                <Link href="/assets/TurinIQ.pdf" download>
                  Download Full Brochure
                </Link>
              </Button>
            </div>
            {/* <div className="flex space-x-4">
              <Link
                href="https://www.twitter.com"
                className="w-10 h-10 rounded-full bg-background flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              >
                <Twitter size={18} />
              </Link>
              <Link
                href="https://www.instagram.com"
                className="w-10 h-10 rounded-full bg-background flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              >
                <Instagram size={18} />
              </Link>
              <Link
                href="https://www.facebook.com"
                className="w-10 h-10 rounded-full bg-background flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              >
                <Facebook size={18} />
              </Link>
            </div> */}
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:w-2/4">
            <div>
              {/* <h3 className="font-bold mb-4">Pages</h3> */}
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Home
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              {/* <h3 className="font-bold mb-4">Pages</h3> */}
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/about"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              {/* <h3 className="font-bold mb-4">Pages</h3> */}
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/product"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Product
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="md:w-1/4">
            <h3 className="font-bold mb-4">Reach out to us at</h3>
            <div className="flex flex-col space-y-5">
              <a
                href="mailto:contact@turiniq.com"
                className="text-blue-600 hover:underline"
              >
                info@turiniq.com
              </a>
              <a
                href="https://www.producthunt.com/products/turiniq?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-turiniq"
                target="_blank"
              >
                <img
                  src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=975769&theme=light&t=1749768384008"
                  alt="TurinIQ - Customer&#0032;AI&#0032;that&#0032;sells&#0044;&#0032;supports&#0044;&#0032;and&#0032;escalates | Product Hunt"
                  style={{ width: "250px", height: "54px" }}
                  width="250"
                  height="54"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        {/* <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>
            Made by Spectra Template & powered by{" "}
            <a
              href="https://www.flowbase.co"
              className="text-foreground hover:text-primary"
            >
              Flowbase.
            </a>
          </p>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
