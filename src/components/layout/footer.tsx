"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram } from "lucide-react";

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
                <span className="font-bold text-xl">Spectra.</span>
              </div>
            </Link>
            <p className="text-muted-foreground mb-6">
              Leave mediocrity behind and embark on a journey of exploration with Spectra as your trusted companion.
            </p>
            <div className="flex space-x-4">
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
            </div>
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:w-2/4">
            <div>
              <h3 className="font-bold mb-4">Pages</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/product" className="text-muted-foreground hover:text-primary transition-colors">
                    Product
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Pages</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/pricing" className="text-muted-foreground hover:text-primary transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Pages</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/login" className="text-muted-foreground hover:text-primary transition-colors">
                    Login
                  </Link>
                </li>
                <li>
                  <Link href="/signup" className="text-muted-foreground hover:text-primary transition-colors">
                    Register
                  </Link>
                </li>
                <li>
                  <Link href="/404" className="text-muted-foreground hover:text-primary transition-colors">
                    404
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="md:w-1/4">
            <h3 className="font-bold mb-4">Newsletter</h3>
            <div className="flex">
              <Input
                type="email"
                placeholder="Email address"
                className="rounded-l-full rounded-r-none border-r-0"
              />
              <Button
                className="bg-primary hover:bg-primary/90 rounded-r-full rounded-l-none"
              >
                Sign Up Now
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>Made by Spectra Template & powered by <a href="https://www.flowbase.co" className="text-foreground hover:text-primary">Flowbase.</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
