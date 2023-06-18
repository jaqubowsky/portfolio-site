import About from "@/components/About";
import Contact from "@/components/Contact";
import Greetings from "@/components/Greetings";
import NavBar from "@/components/NavBar";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Greetings />
      <NavBar />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
