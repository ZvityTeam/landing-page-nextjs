"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Product", href: "/product" },
    // { name: "Blog", href: "/blog" },
    // { name: "Pricing", href: "/pricing" },
  ];

    // Function to handle smooth scrolling to the TrialSection
  const handleScrollToAccess = (e) => {
    e.preventDefault(); // Prevent default behavior
    const targetId = "access";
    const currentPath = pathname === "/" ? "" : pathname; // Handle root path
    const targetPath = `${currentPath}#${targetId}`; // Append #access to current path
    const fallbackPath = "/product#access"; // Fallback if section not found

    // Check if the access section exists on the current page
    const element = document.getElementById(targetId);
    if (element) {
      // If on the correct page and section exists, scroll directly
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to the current page with #access or fallback to product page
      router.push(pathname === "/product" ? targetPath : fallbackPath);
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // Delay to ensure page navigation completes
    }
    setIsMenuOpen(false); // Close mobile menu if open
  };


  return (
    <header className="py-4 border-b border-border/40">
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="flex items-center">
            <div className="w-5 h-5 bg-primary rounded-sm flex items-center justify-center mr-1">
              <div className="w-2 h-2 bg-white rounded-full" />
            </div>
            <span className="font-bold text-xl">TurinIQ.</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`px-3 py-2 text-sm font-medium rounded-full transition-colors ${
                pathname === item.href
                  ? "text-foreground bg-primary/10 border border-black rounded-full border-b-2"
                  : "text-foreground/80 hover:text-foreground"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Sign Up Button */}
        <Link href="https://www.turiniq.com/">
        <Button
          className="hidden md:block bg-primary hover:bg-primary/90 rounded-full"
        >
          Try Early Demo
        </Button>
</Link>
        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="px-2 py-1 text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                {/* <Link href="#access"> */}
                  <Button className="bg-primary hover:bg-primary/90 mt-4 rounded-full"  onClick={handleScrollToAccess}>
                    Get Early Access
                  </Button>
                {/* </Link> */}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
