import { Link, useLocation } from "wouter";
import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { personalInfo } from "@/data/demoData";

// Animation variants for nav links
const linkVariants = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0 },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

// Animation for mobile sheet
const sheetVariants = {
  initial: { x: "100%", opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
  exit: { x: "100%", opacity: 0, transition: { duration: 0.3 } },
};

export function Navigation() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/diary", label: "Our Story" },
    { href: "/memories", label: "Memories" },
    { href: "/games", label: "Games" },
    {
      href: "/activities",
      label: "Activities",
    },
  ];

  const NavLink = ({
    href,
    label,
    onClick,
  }: {
    href: string;
    label: string;
    onClick?: () => void;
  }) => (
    <Link href={href} onClick={onClick}>
      <motion.div
        variants={linkVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
      >
        <Button
          variant={location === href ? "default" : "ghost"}
          className={`transition-all duration-300 text-lg font-romantic  w-full ${
            location === href
              ? "bg-romantic-pink text-white shadow-romantic"
              : "text-romantic-purple hover:text-romantic-pink hover:bg-soft-pink/20"
          } px-5 py-2 rounded-full`}
          data-testid={`nav-link-${label.toLowerCase().replace(/\s+/g, "-")}`}
        >
          {label}
        </Button>
      </motion.div>
    </Link>
  );

  return (
    <nav className="fixed top-0 w-full bg-white z-50 border-b border-romantic-pink/20 shadow-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/">
            <motion.div
              className="font-romantic text-3xl font-bold text-romantic-purple hover:text-romantic-pink transition-colors duration-300 cursor-pointer"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              data-testid="logo"
            >
              <Heart
                className="inline text-romantic-pink mr-2 h-7 w-7 animate-heartbeat"
                fill="currentColor"
              />
              {personalInfo.yourName[0]} & {personalInfo.partnerName[0]} 20
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <NavLink {...item} />
              </motion.div>
            ))}
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-romantic-purple hover:bg-soft-pink/20"
                data-testid="mobile-menu-trigger"
              >
                <Menu className="h-7 w-7" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] bg-white romantic-glass p-6 border-l border-romantic-pink/20"
            >
              <motion.div
                variants={sheetVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <div className="flex justify-between items-center mb-8">
                  <div className="font-romantic text-2xl font-bold text-romantic-purple">
                    <Heart
                      className="inline text-romantic-pink mr-2 h-6 w-6 animate-heartbeat"
                      fill="currentColor"
                    />
                    Forever Yours
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="text-romantic-purple hover:text-romantic-pink hover:bg-soft-pink/20"
                    data-testid="mobile-menu-close"
                  >
                    <X className="h-6 w-6" />
                  </Button>
                </div>
                <div className="flex flex-col space-y-6">
                  {navItems.map((item) => (
                    <NavLink
                      key={item.href}
                      {...item}
                      onClick={() => setIsOpen(false)}
                    />
                  ))}
                </div>
              </motion.div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
