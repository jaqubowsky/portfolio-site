/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Section from "./Section";

const Greetings = () => {
  return (
    <Section
      id="home"
      className="h-screen w-screen bg-black flex-container  text-white"
    >
      <div className="text-center text-4xl group transition-color cursor-pointer mb-6">
        <h1 className="group-hover:text-red-500 transition-color">
          Hello I'm {""}
          <span className="text-red-500 group-hover:text-white transition-color">
            Jakub Nalewajk
          </span>
          .
        </h1>
        <h2 className="group-hover:text-red-500 transition-color">
          I'm a front-end web-developer.
        </h2>
      </div>
      <Link
        href="#about"
        className="border py-2 px-6 text-white hover:bg-red-500 hover:no-underline hover:border-red-500 transition ease-in-out duration-700 delay-75"
      >
        View my work
      </Link>
    </Section>
  );
};

export default Greetings;
