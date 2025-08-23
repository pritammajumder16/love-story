import { ScrollReveal } from "@/components/scroll-reveal";
import { personalInfo } from "@/data/demoData";
import { Heart } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-romantic-dark text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <ScrollReveal>
          <div className="mb-8">
            <h3 className="font-romantic text-3xl font-bold mb-4">
              Forever Yours
            </h3>
            <p className="text-white/80 max-w-2xl mx-auto">
              This app is a testament to our love story,{" "}
              {personalInfo.partnerNickname}. Every page, every animation, every
              word is crafted with love for you. I can't wait to spend forever
              making more memories together.
            </p>
          </div>
          <div className="flex justify-center space-x-6 mb-8">
            <Heart
              className="text-romantic-pink text-2xl animate-heartbeat"
              fill="currentColor"
            />
            <span className="text-romantic-pink text-2xl">∞</span>
            <Heart
              className="text-romantic-pink text-2xl animate-heartbeat"
              fill="currentColor"
            />
          </div>
          <p className="text-white/60">
            Made with ❤️ by {personalInfo.yourName} for{" "}
            {personalInfo.partnerName} • {personalInfo.meetingDate}
          </p>
        </ScrollReveal>
      </div>
    </footer>
  );
};

export default Footer;
