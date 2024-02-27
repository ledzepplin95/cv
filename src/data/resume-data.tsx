import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Easton Liu",
  initials: "ZL",
  location: "San Diego CA",
  locationLink: "https://www.google.com/maps/place/Rancho+Pe%C3%B1asquitos",
  about:
    "Full Stack Engineer focused on building products with extra attention to detail",
  summary:
    "As a Full Stack Engineer, I have successfully taken multiple products from 0 to 1. I lead teams effectively, ensuring an environment where people can do their best work. Currently, I work mostly with TypeScript, React, Node.js, and GraphQL. I have over 8 years of experience in working remotely with companies all around the world.",
  avatarUrl: "https://avatars.githubusercontent.com/u/6003416?s=400&u=f01a5e32702b49cbefe0f28589b446cb1241f589&v=4",
  personalWebsiteUrl: "https://github.com/ledzepplin95",
  contact: {
    email: "Easton.Liu95@gmail.com",
    tel: "8582165383",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/ledzepplin95",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/zhihai-liu-67738942/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/HayInStack",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "China University of Mining Technlogy, Beijing",
      degree: "Master's Degree in Structral Engineering",
      start: "1999",
      end: "2002",
    },
  ],
  work: [
    {
      company: "Parabol",
      link: "https://parabol.co",
      badges: ["Remote"],
      title: "Senior Full Stack Developer",
      logo: ParabolLogo,
      start: "2021",
      end: "2024",
      description:
        "Implemented new features, led squad, worked on improving the way developers ship the code, started migration from Emotion to Tailwind CSS and more. Technologies: React, TypeScript, GraphQL",
    },   
  ],
  skills: [
    "C++",
    "",
    "",
    "",
    "",
    "",
    "",
  ],
  projects: [
    {
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
  ],
} as const;
