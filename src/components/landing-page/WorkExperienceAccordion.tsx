import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "~/components/ui/accordion";
import workExperiences from "~/data/work-experience";

export function WorkExperienceAccordion() {
  return (
    <Accordion
      type="multiple"
      defaultValue={["item-0"]}
      className="w-full space-y-4"
    >
      {workExperiences.map((work, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className="group/item border-none bg-background/50 backdrop-blur-sm rounded-2xl px-5 transition-all duration-300 hover:bg-muted/20 data-[state=open]:bg-card/30 data-[state=open]:shadow-md"
        >
          <AccordionTrigger className="hover:no-underline py-4">
            <div className="flex w-full flex-col md:flex-row md:items-center md:justify-between text-left gap-4 pr-4">
              <div className="flex flex-col gap-1.5 items-start">
                <h3 className="text-xl md:text-2xl font-bold group-hover/accordion-trigger:text-primary transition-colors">
                  {work.title}
                </h3>
                <p className="text-sm md:text-base font-medium text-muted-foreground">
                  {work.company}
                  {work.location && ` • ${work.location}`}
                </p>
              </div>
              <span className="text-xs md:text-sm font-semibold text-muted-foreground shrink-0 border border-border/40 px-3 py-1 rounded-full bg-muted/50 mt-1 md:mt-0 transition-colors group-data-[state=open]/item:bg-primary/10 group-data-[state=open]/item:text-primary group-data-[state=open]/item:border-primary/20">
                {work.durationFrom} - {work.durationTo}
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pt-2 pb-5">
            <div className="space-y-6 px-1">
              <p className="text-sm md:text-base text-foreground leading-relaxed opacity-90 border-l-2 border-primary/40 pl-4 py-1.5">
                {work.description}
              </p>

              {work.highlights.length > 0 && (
                <ul className="space-y-3 mt-4">
                  {work.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="text-sm md:text-base text-muted-foreground pl-6 relative before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-primary/60 before:absolute before:left-1 before:top-2 hover:text-foreground transition-colors"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex flex-wrap gap-2.5 pt-4 mt-6 border-t border-border/40 border-dashed">
                {work.stack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-semibold px-3 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-lg transition-colors hover:bg-primary hover:text-primary-foreground cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
