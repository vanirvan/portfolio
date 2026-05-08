type Project = {
  name: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  liveUrl?: string;
  tags: string[];
};

const projects: Project[] = [
  {
    name: "Frontend Mentor Challenges",
    description:
      "Collection of challenges from frontendmentor.io, contains a lot of cool frontend related challenges to help sharpen CSS and Javascript skills",
    imageUrl: "/assets/projects/fmc/cover.png",
    githubUrl: "https://github.com/vanirvan/FrontendMentorChallenge",
    liveUrl: "https://fmc.vanirvan.my.id/",
    tags: ["HTML", "CSS", "JavaScript", "React", "Astro"],
  },
  {
    name: "Copas",
    description:
      "URL Shortener service that easy to use, no need to signin, NO ADS and NO TRACKER built in",
    imageUrl: "/assets/projects/copas/cover.png",
    githubUrl: "https://github.com/vanirvan/copas",
    liveUrl: "https://copas.vanirvan.my.id/",
    tags: [
      "Tanstack Start",
      "TypeScript",
      "Drizzle",
      "Cloudflare Workers",
      "Neon DB",
    ],
  },
  {
    name: "Linkme",
    description: "A simple linktree like app, free to use",
    imageUrl: "/assets/projects/linkme/cover.png",
    githubUrl: "https://github.com/vanirvan/linkme",
    liveUrl: "https://linkme-vanirvan.vercel.app/",
    tags: ["Next.js", "TypeScript", "Prisma", "Vercel", "Neon DB"],
  },
];

export default projects;
