type Project = {
  name: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    name: "Frontent Mentor Challenges",
    description: "Collection of challenges from frontendmentor.io, contains a lot of cool frontend related challenges to help sharpen CSS and Javascript skills",
    imageUrl: "/assets/projects/fmc/cover.png",
    githubUrl: "https://github.com/vanirvan/FrontendMentorChallenge",
    liveUrl: "https://fmc.vanirvan.my.id/"
  },
  {
    name: "Copas",
    description: "URL Shortener service that easy to use, no need to signin, NO ADS and NO TRACKER built in",
    imageUrl: "/assets/projects/copas/cover.png",
    githubUrl: "https://github.com/vanirvan/copas",
    liveUrl: "https://copas-vanirvan.vercel.app/"
  },
  {
    name: "Linkme",
    description: "A simple linktree like app, free to use",
    imageUrl: "/assets/projects/linkme/cover.png",
    githubUrl: "https://github.com/vanirvan/linkme",
    liveUrl: "https://linkme-vanirvan.vercel.app/"
  },
]

export default projects