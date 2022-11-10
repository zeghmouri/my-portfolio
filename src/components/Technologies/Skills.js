import { DiReact, DiTerminal,DiDatabase } from "react-icons/di";
import { SiJava, SiGit, SiWordpress,SiNextdotjs,SiPrismic,SiDrupal} from "react-icons/si";

export const Skills = [
  {
    slug: "react",
    Component: DiReact,
    title: "ReactJs",
    Description: () => <> I use React library to implement the interfaces of my web projects.</>,
  },
  {
    slug: "next",
    Component: SiNextdotjs,
    title: "NextJs",
    Description: () => <>For now I am using NextJS which is a Framwork that enables React-based web applications with server-side rendering and generating static websites.</>,
  },
  {
    slug: "prismic",
    Component: SiPrismic,
    title: "Prismic",
    Description: () => <>I have solid experience in using Prismic headless CMS for best content management and creating customizable website pages.</>,
  },
  {
    slug: "wordpress",
    Component: SiWordpress,
    title: "WordPress",
    Description: () => <>I have an experience in using WordPress CMS to create blogs and other websites.</>,
  },
  {
    slug: "drupal",
    Component: SiDrupal,
    title: "Drupal",
    Description: () => <>I have an experience with Drupal CMS in creating dynamic websites.</>,
  },
  {
    slug: "databases",
    Component: DiDatabase,
    title: "Databases",
    Description: () => <>I have a solid knowledge in the manipulation of databases. Especially MySql & MongoDB.</>,
  },
  {
    slug: "java",
    Component: SiJava,
    title: "Java",
    Description: () => <>I can code in Java. But I mainly use it for Desktop app development.</>,
  },
  {
    slug: "terminal",
    Component: DiTerminal,
    title: "Scripting",
    Description: () => <>I have written dozens of Shell scripts for various purposes.</>,
  },
  {
    slug: "git",
    Component: SiGit,
    title: "Git",
    Description: () => <>Git is a tool that I use every day. I use GitHub for pushing my code.</>,
  },
];
