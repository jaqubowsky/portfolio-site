import About from "@/components/About";
import Greetings from "@/components/Greetings";
import NavBar from "@/components/NavBar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Greetings />
      <NavBar />
      <About />
      <Projects />
    </>
  );
}
