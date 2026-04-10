import { motion } from "motion/react";
import { ArrowUpRight } from "@phosphor-icons/react";

export const ProjectCard = ({ title, category, year }: { title: string, category: string, year: string }) => {
  return (
    <motion.div 
      whileHover={{ scale: 0.98 }}
      className="group relative p-8 border-4 border-foreground bg-background hover:bg-foreground hover:text-background transition-colors cursor-pointer flex flex-col justify-between aspect-square"
    >
      <div className="flex justify-between items-start">
        <span className="text-xs font-black uppercase tracking-widest opacity-60 group-hover:opacity-100">{category}</span>
        <span className="text-xs font-black">{year}</span>
      </div>
      
      <div>
        <h3 className="text-4xl font-black uppercase leading-none tracking-tighter mb-4">{title}</h3>
        <div className="flex justify-between items-end">
          <div className="size-12 border-2 border-current flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <ArrowUpRight size={24} weight="bold" />
          </div>
          <span className="text-[10px] font-black uppercase opacity-40 group-hover:opacity-100 italic">View Folder</span>
        </div>
      </div>
    </motion.div>
  );
};
