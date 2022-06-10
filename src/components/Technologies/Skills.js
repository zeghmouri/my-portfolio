import { DiReact, DiTerminal,DiDatabase } from "react-icons/di";
import { SiJava, SiFirebase, SiGit, SiWordpress } from "react-icons/si";
import { RiFlutterFill } from "react-icons/ri";

export const Skills = [
  {
    slug: "react",
    Component: DiReact,
    title: "ReactJs",
    Description: () => <> I use React library to implement the interfaces of my web projects.</>,
  },
  {
    slug: "wordpress",
    Component: SiWordpress,
    title: "WordPress",
    Description: () => <>I have an experience in using WordPress to create blogs and other websites.</>,
  },
  {
    slug: "databases",
    Component: DiDatabase,
    title: "Databases",
    Description: () => <>I have a solid knowledge in the manipulation of databases. Especially MySql and MongoDB.</>,
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
