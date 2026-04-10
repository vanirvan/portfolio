import { motion } from "motion/react";

export const Marquee = ({ text }: { text: string }) => {
  return (
    <div className="bg-foreground text-background py-4 overflow-hidden whitespace-nowrap border-y-4 border-primary">
      <motion.div 
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="inline-block text-4xl font-black uppercase italic tracking-tighter"
      >
        <span className="mx-4">{text}</span>
        <span className="mx-4 text-primary">//</span>
        <span className="mx-4">{text}</span>
        <span className="mx-4 text-primary">//</span>
        <span className="mx-4">{text}</span>
        <span className="mx-4 text-primary">//</span>
        <span className="mx-4">{text}</span>
        <span className="mx-4 text-primary">//</span>
      </motion.div>
    </div>
  );
};
