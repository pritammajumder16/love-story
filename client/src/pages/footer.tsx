import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { personalInfo, demoMemoriesData } from "@/data/demoData";
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
    <footer className="bg-romantic-dark text-white py-12">
      <div className="max-w-4xl mx-auto px-6 text-center">
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
