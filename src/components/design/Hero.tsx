import { motion } from "motion/react";

export const Title = () => {
  return (
    <div className="overflow-hidden">
      <motion.h1
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-[12vw] leading-[0.8] font-black uppercase tracking-tighter break-words select-none"
      >
        I'm Irvan
        <br />
        Maulana
      </motion.h1>
    </div>
  );
};

export const Tag = ({
  children,
  primary = false,
}: {
  children: React.ReactNode;
  primary?: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5 }}
      className={`px-6 py-3 text-2xl font-black uppercase ${
        primary
          ? "bg-primary text-secondary"
          : "border-4 border-primary text-foreground italic"
      }`}
    >
      {children}
    </motion.div>
  );
};
