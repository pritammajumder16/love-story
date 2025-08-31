import { motion } from "framer-motion";
import { Heart, Download, Sparkles, CheckCircle } from "lucide-react";
import { personalInfo, demoMemoriesData } from "@/data/demoData";
import { useState, useEffect } from "react";

// Add this interface for the beforeinstallprompt event
interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

function getDaysSinceStart(meetingDate: Date): number {
  const meeting = meetingDate;
  const today = new Date();
  const diffTime = today.getTime() - meeting.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  return diffDays >= 0 ? diffDays : 0;
}

export default function Footer() {
  const daysTogether = getDaysSinceStart(personalInfo.meetingDateFormat);
  const memoriesCount = demoMemoriesData.length;
  const [installPrompt, setInstallPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setInstallPrompt(e as BeforeInstallPromptEvent);
    };

    const handleAppInstalled = () => {
      setIsInstalled(true);
    };

    // Check if already installed
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsInstalled(true);
    }

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (installPrompt) {
      // If we have the prompt available, use it
      try {
        await installPrompt.prompt();
        const { outcome } = await installPrompt.userChoice;

        if (outcome === "accepted") {
          console.log("User accepted the install prompt");
          setIsInstalled(true);
        }
      } catch (error) {
        console.error("Error installing app:", error);
      }
    } else if (isInstalled) {
      // If already installed, guide user to reinstall
      if (
        navigator.userAgent.includes("Android") ||
        navigator.userAgent.includes("iPhone")
      ) {
        // Mobile devices
        alert(
          "To reinstall, please uninstall the app first from your home screen, then visit this page again to install."
        );
      } else {
        // Desktop browsers
        alert(
          "To reinstall, please remove the app from your browser settings, then refresh this page to install again."
        );
      }
    } else {
      // If no prompt available and not installed
      alert(
        "Installation is not available at this time. Please try again later."
      );
    }
  };

  const stats = [
    {
      value: daysTogether,
      label: "Days Together",
      color: "text-romantic-pink",
    },
    {
      value: memoriesCount,
      label: "Memories Created",
      color: "text-accent-gold",
    },
    { value: "∞", label: "Moments Shared", color: "text-green-400" },
    { value: "∞", label: "Love Forever", color: "text-blue-400" },
  ];

  return (
    <footer className="bg-romantic-dark text-white py-12 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-10 left-1/4 w-16 h-16 bg-romantic-pink rounded-full"></div>
        <div className="absolute bottom-20 right-1/3 w-12 h-12 bg-accent-gold rounded-full"></div>
        <div className="absolute top-1/2 left-10 w-10 h-10 bg-green-400 rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl font-romantic font-bold text-gradient mb-4">
            {personalInfo.yourName} & {personalInfo.partnerName}
          </h3>
          <p className="text-xl text-white/80">
            Forever and Always, {personalInfo.partnerNickname}
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-8 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div
                className={`text-3xl font-bold ${stat.color}`}
                data-testid={`stat-${stat.label
                  .toLowerCase()
                  .replace(" ", "-")}`}
              >
                {stat.value}
              </div>
              <div className="text-sm text-white/60">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* PWA Install Button - Always shown */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <button
            onClick={handleInstallClick}
            className={`group font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center mx-auto transform hover:-translate-y-1 ${
              isInstalled
                ? "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-emerald-600 hover:to-green-500"
                : "bg-gradient-to-r from-romantic-pink to-purple-500 hover:from-purple-500 hover:to-romantic-pink"
            } text-white`}
          >
            {isInstalled ? (
              <>
                <CheckCircle className="w-5 h-5 mr-2" />
                App Installed - Reinstall?
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                <Download className="w-5 h-5 mr-2" />
                Install Our Love App
              </>
            )}
          </button>
          <p className="text-white/60 text-sm mt-2">
            {isInstalled
              ? "Click to learn how to reinstall"
              : "Add to your home screen for easy access"}
          </p>
        </motion.div>

        <motion.div
          className="border-t border-white/20 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-white/60">
            Made with{" "}
            <Heart
              className="w-4 h-4 text-romantic-pink mx-1 inline animate-heartbeat"
              fill="currentColor"
            />{" "}
            by {personalInfo.yourName} for {personalInfo.partnerName}
          </p>
          <p className="text-sm text-white/50 mt-2">
            Our love story continues... 💕
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
