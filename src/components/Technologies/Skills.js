import { DiReact, DiTerminal,DiDatabase } from "react-icons/di";
import { SiJava, SiFirebase, SiGit, SiWordpress } from "react-icons/si";
import { RiFlutterFill } from "react-icons/ri";

export const Skills = [
  {
    slug: "react",
    Component: DiReact,
    title: "ReactJs",
    Description: () => <>.</>,
  },
  {
    slug: "wordpress",
    Component: SiWordpress,
    title: "WordPress",
    Description: () => <>. </>,
  },
  {
    slug: "databases",
    Component: DiDatabase,
    title: "Databases",
    Description: () => <>Database manipulation.</>,
  },
  {
    slug: "java",
    Component: SiJava,
    title: "Java",
    Description: () => <>I can code in Java. But I mainly use it for Android app development.</>,
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
