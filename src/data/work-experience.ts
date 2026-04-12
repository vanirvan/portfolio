type WorkExperience = {
  company: string;
  location: string;
  title: string;
  durationFrom: string;
  durationTo: string;
  description: string;
  highlights: string[];
  stack: string[];
};

const workExperiences: WorkExperience[] = [
  {
    company: "SABAKO",
    location: "South Jakarta, Indonesia",
    title: "Frontend Web & Mobile Developer",
    durationFrom: "Nov 2025",
    durationTo: "Apr 2026",
    description:
      "Building production applications across SaaS, construction, and desktop sectors.",
    highlights: [
      "Developed 5+ production applications spanning SaaS marketing tools, venue reservation systems, construction ERP, and desktop utilities",
      "Accelerated UI development by 70% using AI design tools (Lovable, Google Stitch) when design resources were unavailable",
      "Optimized Landing Pages performance, increasing Lighthouse score from < 70 to > 95",
      "Implemented API integrations with Tanstack Query for cached data fetching and state synchronization",
    ],
    stack: [
      "TypeScript",
      "React",
      "Next.js",
      "Astro",
      "Flutter",
      "Tailwind",
      "Lovable",
    ],
  },
  {
    company: "Indonesia's Corruption Eradication Commission (KPK)",
    location: "Indonesia",
    title: "Frontend Developer",
    durationFrom: "Jul 2025",
    durationTo: "Nov 2025",
    description:
      "Built secure coordination platform for law enforcement agencies.",
    highlights: [
      "Built secure coordination platform for managing sensitive case workflows across multiple law enforcement agencies",
      "Translated Figma UI designs into interactive React frontend with high design fidelity",
      "Set up data layer between React frontend and Laravel backend, defining API contracts upfront",
    ],
    stack: ["TypeScript", "React", "Next.js", "Tailwind", "Laravel"],
  },
  {
    company: "Syntax Corporation Indonesia",
    location: "Bekasi, Indonesia",
    title: "Frontend Developer",
    durationFrom: "Apr 2025",
    durationTo: "Jul 2025",
    description:
      "Shipped responsive, pixel-perfect interfaces for enterprise clients.",
    highlights: [
      "Shipped responsive, pixel-perfect interfaces using Next.js and shadcn/ui across 12+ screen sizes",
      "Reduced bundle size and improved initial load through strategic code splitting",
      "Simplified debugging with Zustand for state management",
      "Collaborated with backend team to define API specs, cutting integration time by 50%",
      "Managed end-to-end QA process including code review and pull request validation",
    ],
    stack: ["TypeScript", "React", "Next.js", "Tailwind", "Zustand"],
  },
  {
    company: "PT. Legend Net Indonesia",
    location: "Bandung, Indonesia",
    title: "Web Developer (Intern)",
    durationFrom: "Jul 2019",
    durationTo: "Oct 2019",
    description: "Early career software development experience.",
    highlights: [
      "Gained foundational experience in software development lifecycle",
      "Learned version control and collaborative coding practices",
    ],
    stack: ["PHP", "Laravel", "MySQL"],
  },
];

export default workExperiences;
