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
    "",
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
      school: "China University of Mining Technology, Beijing",
      degree: "Master's Degree in Structral Engineering",
      start: "",
      end: "",
    },
  ],
  work: [
    {
      company: "Single Particle",
      link: "https://www.singleparticle.com/",
      badges: ["Remote"],
      title: "Senior Software Engineer",
      logo: ParabolLogo,
      start: "2019",
      end: "present",
      description:
        "",
    },   
  ],
  skills: [
    "C++",
    "C#",
    "Microsoft Visual Studio",
    "Linux Development",
    "Cross Platform Porting",
    "CUDA",
    "Performance Optimization",
    "Debugging"
  ],
  projects: [
    {
      title: "Relion(3dem) Simulator",
      techStack: [
        "C++/C",    
        "Python",
        "CMake",
        "STL",
        "FLTK",
        "String matching/Similarity scoring",
        "ASCII Art",
      ],
      description: "Online Simulator of Relion",
      logo: ParabolLogo,
      link: {
        label: "CryoEdu",
        href: "https://cryoedu.org/about/relion-simulator/",
      },
    },
    {
      title: "M on Linux",
      techStack: ["C#/.NET", "Tensorflow", "CMake", "Porting"],
      description:
        "M",
      logo: ParabolLogo,
      link: {
        label: "M",
        href: "http://www.warpem.com/warp/",
      },
    },
  ],
} as const;
