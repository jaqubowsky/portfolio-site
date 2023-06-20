/* eslint-disable react/no-unescaped-entities */
import Section from "./Section";
import Link from "./LinkComponent";
import LinkComponent from "./LinkComponent";

const Greetings = () => {
  return (
    <Section id="home" className="h-screen w-screen bg-black text-white">
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
      <LinkComponent href="#about" size="large">
        View my work
      </LinkComponent>
    </Section>
  );
};

export default Greetings;
