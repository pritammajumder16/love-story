import { Link, useLocation } from "wouter";
import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navigation() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home", emoji: "🏠" },
    { href: "/diary", label: "Our Story", emoji: "📖" },
    { href: "/memories", label: "Memories", emoji: "💕" },
  ];

  const NavLink = ({ href, label, emoji, onClick }: { href: string; label: string; emoji: string; onClick?: () => void }) => (
    <Link href={href} onClick={onClick}>
      <Button
        variant={location === href ? "default" : "ghost"}
        className={`transition-all duration-300 hover:scale-105 ${
          location === href
            ? "bg-romantic-pink text-white shadow-lg"
            : "text-romantic-purple hover:text-romantic-pink hover:bg-soft-pink/20"
        }`}
        data-testid={`nav-link-${label.toLowerCase().replace(/\s+/g, '-')}`}
      >
        <span className="mr-2">{emoji}</span>
        {label}
      </Button>
    </Link>
  );

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-lg z-50 border-b border-romantic-pink/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/">
            <div className="font-romantic text-2xl font-bold text-romantic-purple hover:text-romantic-pink transition-colors duration-300 cursor-pointer" data-testid="logo">
              <Heart className="inline text-romantic-pink mr-2 h-6 w-6 animate-heartbeat" />
              Forever Yours
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <NavLink key={item.href} {...item} />
            ))}
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-romantic-purple" data-testid="mobile-menu-trigger">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-white/95 backdrop-blur-lg">
              <div className="flex flex-col space-y-4 mt-8">
                <div className="font-romantic text-xl font-bold text-romantic-purple mb-6">
                  <Heart className="inline text-romantic-pink mr-2 h-5 w-5" />
                  Forever Yours
                </div>
                {navItems.map((item) => (
                  <NavLink key={item.href} {...item} onClick={() => setIsOpen(false)} />
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
