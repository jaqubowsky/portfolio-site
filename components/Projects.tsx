import ProjectCard from "./ProjectCard";
import Section from "./Section";
import SectionName from "./SectionName";
import FakeStore from "@/images/FakeStore.png";
import PayTo from "@/images/PayTo.png";
import QuizzApp from "@/images/QuizzApp.png";
import MovieWatchList from "@/images/MovieWatchList.png";
import Portfolio from "@/images/Portfolio.png";

const projects = [
  {
    id: 1,
    title: "FakeStore",
    description:
      "FakeStore is a fake e-commerce site built with React, Next.js and TailwindCSS.",
    images: [FakeStore],
    link: "https://github.com/jaqubowsky/shopping-app-v2",
    technologies: ["React", "TypeScript", "TailwindCSS"],
  },
  {
    id: 2,
    title: "FakeStore API",
    description:
      "FakeStore API is a fake e-commerce API built with Node.js and Express.",
    images: [],
    link: "https://github.com/jaqubowsky/shopping-app-v2-api",
    technologies: ["Node.js", "Express", "Prisma"],
  },
  {
    id: 3,
    title: "PayTo",
    description: "App that simulates real card validation form on a page.",
    images: [PayTo],
    link: "https://github.com/jaqubowsky/PayTo",
    technologies: ["JavaScript", "HTML", "SCSS"],
  },
  {
    id: 4,
    title: "Quizz App",
    description:
      "App that allows the user to select answers and then displays the correct results.",
    images: [QuizzApp],
    link: "https://github.com/jaqubowsky/quizz-app",
    technologies: ["React", "Styled Components", "Vite"],
  },
  {
    id: 5,
    title: "Movie watchlist",
    description: "App that allows the user to add movies to the watchlist.",
    images: [MovieWatchList],
    link: "https://github.com/jaqubowsky/movie-watchlist",
    technologies: ["JavaScript", "HTML", "CSS"],
  },
  {
    id: 6,
    title: "Portfolio site",
    description: "My portfolio site built with React, Next.js and TailwindCSS.",
    images: [Portfolio],
    link: "https://github.com/jaqubowsky/portfolio-site",
    technologies: ["React", "Next.js", "TailwindCSS"],
  },
];

const Projects = () => {
  const projectsEl = projects.map((project) => (
    <ProjectCard key={project.id} project={project} />
  ));

  return (
    <Section id="projects" className="bg-gray-200">
      <SectionName>Projects</SectionName>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-8">{projectsEl}</div>
    </Section>
  );
};

export default Projects;
