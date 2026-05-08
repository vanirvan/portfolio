interface FunProject {
  name: string;
  description: string;
  githubUrl?: string;
  liveUrl?: string;
  tags: string[];
}

const funProject: FunProject[] = [
  {
    name: "Fufufafa Quotes Fetcher",
    description:
      "Collection of more than 1300 quotes from the most phenomenal figures in Indonesia, Fufufafa!",
    githubUrl: "https://github.com/vanirvan/fufufafa-quotes-fetcher",
    tags: ["Playwright", "Typescript", "Uploadthing"],
  },
  {
    name: "Fufufafapi",
    description:
      "Fufufafa's quotes in Restfull API's, build with Honojs and Cloudflare Workers.",
    githubUrl: "https://github.com/vanirvan/fufufafapi",
    liveUrl: "https://fufufafapi.vanirvan.my.id/",
    tags: ["API", "Hono", "Cloudflare Workers"],
  },
  {
    name: "Timpafafa",
    description: "Timpa Text featuring Fufufafa!",
    githubUrl: "https://github.com/vanirvan/timpafafa",
    liveUrl: "https://timpafafa.vanirvan.my.id/",
    tags: ["React"],
  },
  {
    name: "CF Browser Rendering Test",
    description:
      "Experiment with Cloudflare Workers - Browser Rendering feature",
    githubUrl: "https://github.com/vanirvan/cf-browser-rendering-experiment",
    tags: ["Cloudflare Workers", "Tanstack Start"],
  },
  {
    name: "Google Genai Image Descriptions",
    description:
      "generating short image description from uploaded image, using google/genai (Gemini) as AI model",
    githubUrl: "https://github.com/vanirvan/google-genai-image-description",
    tags: ["Google Genai", "Gemini", "Tanstack Start"],
  },
];

export default funProject;
