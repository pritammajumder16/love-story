import { motion } from "framer-motion";
import { Heart, Smile, Star } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { ProposalSection } from "@/components/proposal-section";
import { RomanticButton } from "@/components/ui/romantic-button";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { personalInfo, loveReasons } from "@/data/demoData";

export default function Home() {
  const scrollToProposal = () => {
    const proposalSection = document.getElementById("proposal-section");
    if (proposalSection) {
      proposalSection.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  const iconMap = { "😊": Smile, "💝": Heart, "⭐": Star };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={{
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
      }}
      transition={{ duration: 0.6 }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="min-h-screen relative">
        <div className="gradient-bg min-h-screen flex items-center justify-center relative">
          {/* Background overlay */}
          <div className="absolute inset-0 bg-black/30"></div>
          <div 
            className="absolute inset-0 opacity-30" 
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          
          <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
            <motion.h1 
              className="font-romantic text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-rose-gold via-romantic-pink to-sunset bg-clip-text text-transparent"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
            >
              {personalInfo.yourName} & {personalInfo.partnerName}
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
            >
              A Love Story Written in the Stars
            </motion.p>
            <motion.div 
              className="text-lg md:text-xl mb-8"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.6 }}
            >
              <p className="mb-4 font-script text-2xl">Since {personalInfo.meetingDate}</p>
              <p className="italic">From {personalInfo.yourLocation} to {personalInfo.partnerLocation}</p>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.9 }}
            >
              <RomanticButton 
                onClick={scrollToProposal}
                variant="elegant"
                withHeart
                className="animate-heartbeat"
                testId="button-see-heart"
              >
                See My Heart
              </RomanticButton>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Love Declaration Section */}
      <section className="py-20 bg-gradient-to-br from-soft-pink via-white to-soft-pink">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-romantic text-5xl md:text-6xl font-bold text-romantic-purple mb-6">
                Why I Love You, {personalInfo.partnerNickname}
              </h2>
              <div className="w-24 h-1 bg-romantic-pink mx-auto"></div>
            </div>
          </ScrollReveal>

          <motion.div 
            className="grid md:grid-cols-3 gap-8 mb-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {loveReasons.map((reason, index) => {
              const IconComponent = iconMap[reason.icon as keyof typeof iconMap] || Heart;
              return (
              <ScrollReveal key={reason.title} delay={index * 0.2}>
                <motion.div 
                  className="love-card bg-white rounded-3xl p-8 shadow-xl"
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-center">
                    <IconComponent className="mx-auto h-12 w-12 text-romantic-pink mb-6" />
                    <h3 className="font-romantic text-2xl font-semibold text-romantic-purple mb-4">
                      {reason.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              </ScrollReveal>
            );
            })}
          </motion.div>
        </div>
      </section>

      {/* Proposal Section */}
      <section id="proposal-section">
        <ProposalSection />
      </section>

      {/* Footer */}
      <footer className="bg-romantic-dark text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <div className="mb-8">
              <h3 className="font-romantic text-3xl font-bold mb-4">Forever Yours</h3>
              <p className="text-white/80 max-w-2xl mx-auto">
                This app is a testament to our love story, {personalInfo.partnerNickname}. Every page, every animation, 
                every word is crafted with love for you. I can't wait to spend forever making 
                more memories together.
              </p>
            </div>
            <div className="flex justify-center space-x-6 mb-8">
              <Heart className="text-romantic-pink text-2xl animate-heartbeat" fill="currentColor" />
              <span className="text-romantic-pink text-2xl">∞</span>
              <Heart className="text-romantic-pink text-2xl animate-heartbeat" fill="currentColor" />
            </div>
            <p className="text-white/60">Made with ❤️ by {personalInfo.yourName} for {personalInfo.partnerName} • {personalInfo.meetingDate}</p>
          </ScrollReveal>
        </div>
      </footer>
    </motion.div>
  );
}
