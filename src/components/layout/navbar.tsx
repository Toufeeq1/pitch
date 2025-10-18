"use client";

import { useState } from "react";
import { Menu, X, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    
    { label: "Home", href: "/" },
    { label: "Events", href: "/events" },
    { label: "Organizations", href: "/organizations" },
    { label: "My Calendar", href: "#my-calendar" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex h-16 items-center justify-between">
          <button className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="flex items-center gap-2">
              <Rocket className="w-6 h-6 text-[#2463eb]" />
              <span className="text-lg font-semibold">Space Event Hub</span>
            </div>
          </button>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="
    relative text-foreground/70 hover:text-foreground 
    transition-colors 
    after:content-[''] after:absolute after:left-0 after:-bottom-1
    after:w-0 after:h-[2px] after:bg-[#2463eb]
    after:transition-all after:duration-300 
    hover:after:w-full
  "
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost">Sign In</Button>
            <Button>Get Started</Button>
          </div>

          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>

        {mobileMenuOpen && (
          <div className="lg:hidden border-t py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block py-2 text-foreground/70 hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 space-y-2">
              <Button variant="ghost" className="w-full">
                Sign In
              </Button>
              <Button className="w-full">Get Started</Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
