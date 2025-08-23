import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Clock, Sparkles, PartyPopper } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/scroll-reveal";
import { useToast } from "@/hooks/use-toast";
import { proposalText, personalInfo } from "@/data/demoData";

export function ProposalSection() {
  const [hasResponded, setHasResponded] = useState(false);
  const [response, setResponse] = useState<string>("");
  const [proposalResponses, setProposalResponses] = useState<Array<{id: string, response: string, message?: string, date: string}>>([]);
  const { toast } = useToast();

  const handleProposalResponse = (responseType: "yes" | "maybe") => {
    setResponse(responseType);
    setHasResponded(true);

    // Save response locally
    const newResponse = {
      id: Date.now().toString(),
      response: responseType,
      message: responseType === "yes" ? "She said YES!" : "Thinking about it...",
      date: new Date().toISOString()
    };
    
    setProposalResponses(prev => [...prev, newResponse]);
    
    toast({
      title: "Response Saved! 💕",
      description: "Your response has been saved to our love story.",
    });

    // Create celebration effect for "yes"
    if (responseType === "yes") {
      createCelebrationEffect();
    }
  };

  const createCelebrationEffect = () => {
    // Create floating hearts effect
    for (let i = 0; i < 20; i++) {
      setTimeout(() => {
        const heart = document.createElement("div");
        heart.innerHTML = "💖";
        heart.style.position = "fixed";
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.top = window.innerHeight + "px";
        heart.style.fontSize = "2rem";
        heart.style.pointerEvents = "none";
        heart.style.zIndex = "9999";
        heart.style.animation = "float-up 3s ease-out forwards";

        document.body.appendChild(heart);

        setTimeout(() => {
          heart.remove();
        }, 3000);
      }, i * 100);
    }
  };

  return (
    <div className="py-20 gradient-bg">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="font-romantic text-5xl md:text-6xl font-bold text-white mb-8">
              {personalInfo.partnerName}, Will You Marry Me?
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="mb-12">
              <img
                src="https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Beautiful romantic illustration representing our love story"
                className="rounded-3xl mx-auto shadow-2xl max-w-full h-auto"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="romantic-glass rounded-3xl p-8 md:p-12 mb-12">
              <p className="text-xl md:text-2xl text-white leading-relaxed mb-8">
                {proposalText.mainMessage}
              </p>
              <p className="text-lg md:text-xl text-white/90 italic mb-8">
                {proposalText.secondMessage}
              </p>
              <p className="text-2xl md:text-3xl font-romantic font-bold text-white mb-12">
                {proposalText.finalQuestion}
              </p>
            </div>
          </ScrollReveal>

          <AnimatePresence mode="wait">
            {!hasResponded ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex flex-col sm:flex-row gap-6 justify-center"
              >
                <Button
                  onClick={() => handleProposalResponse("yes")}
                  className="bg-white text-romantic-purple px-12 py-4 rounded-full font-bold text-xl hover:bg-romantic-pink hover:text-white transition-all duration-300 transform hover:scale-105 shadow-2xl"
                  data-testid="button-yes-proposal"
                >
                  <Heart className="mr-3 h-5 w-5" fill="currentColor" />
                  YES! Forever & Always
                </Button>
                <Button
                  onClick={() => handleProposalResponse("maybe")}
                  variant="outline"
                  className="bg-transparent border-2 border-white text-white px-12 py-4 rounded-full font-bold text-xl hover:bg-white hover:text-romantic-purple transition-all duration-300 transform hover:scale-105"
                  data-testid="button-maybe-proposal"
                >
                  <Clock className="mr-3 h-5 w-5" />
                  Let me think...
                </Button>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mt-12"
              >
                {response === "yes" ? (
                  <div className="bg-gradient-to-r from-golden via-romantic-pink to-deep-purple rounded-3xl p-8 md:p-12 shadow-2xl">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                    >
                      <PartyPopper className="mx-auto h-16 w-16 text-white mb-4" />
                    </motion.div>
                    <h3 className="font-romantic text-4xl md:text-5xl font-bold text-white mb-6">
                      {proposalText.yesResponse}
                    </h3>
                    <p className="text-xl md:text-2xl text-white mb-8">
                      {proposalText.yesMessage}
                    </p>
                    <div className="text-6xl mb-6">💍💕🥳</div>
                    <p className="text-lg text-white/90 italic">
                      Get ready for a lifetime of love, laughter, and endless adventures together!
                    </p>
                  </div>
                ) : (
                  <div className="glass-effect rounded-3xl p-8 md:p-12 shadow-2xl">
                    <Sparkles className="mx-auto h-12 w-12 text-white mb-4" />
                    <h3 className="font-romantic text-3xl font-bold text-white mb-4">
                      {proposalText.maybeResponse}
                    </h3>
                    <p className="text-xl text-white/90">
                      {proposalText.maybeMessage}
                    </p>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
