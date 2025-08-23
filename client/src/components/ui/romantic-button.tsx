import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

interface RomanticButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "romantic" | "elegant" | "dreamy";
  withHeart?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit";
  testId?: string;
}

export function RomanticButton({
  children,
  className,
  variant = "romantic",
  withHeart = false,
  onClick,
  disabled = false,
  type = "button",
  testId,
}: RomanticButtonProps) {
  const variants = {
    romantic: "bg-romantic-pink hover:bg-deep-purple text-white shadow-lg hover:shadow-romantic-pink/30",
    elegant: "bg-gradient-to-r from-romantic-pink to-deep-purple hover:from-deep-purple hover:to-romantic-pink text-white shadow-lg",
    dreamy: "bg-white/20 backdrop-blur-lg border border-white/30 text-white hover:bg-white/30 shadow-lg",
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Button
        onClick={onClick}
        disabled={disabled}
        type={type}
        className={cn(
          "px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform",
          variants[variant],
          disabled && "opacity-50 cursor-not-allowed hover:scale-100",
          className
        )}
        data-testid={testId}
      >
        {withHeart && <Heart className="mr-2 h-5 w-5" fill="currentColor" />}
        {children}
      </Button>
    </motion.div>
  );
}
