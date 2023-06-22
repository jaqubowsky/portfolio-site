import myPhoto from "@/images/my-photo.png";
import Image from "next/image";
import SectionName from "./SectionName";
import Section from "./Section";
import Skills from "./Skills";
import AboutSection from "./AboutSkillsSection";
import AboutMeSection from "./AboutMeSection";
import { aboutMe } from "@/lib/aboutMe";

const About = () => {
  return (
    <Section id="about">
      <SectionName>About</SectionName>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <Image className="mb-6" src={myPhoto} alt="Photo of Jakub Nalewajk" />
        <div className="flex flex-col">
          <AboutMeSection>
            <p>{aboutMe}</p>
          </AboutMeSection>
          <AboutSection>
            <Skills />
          </AboutSection>
        </div>
      </div>
    </Section>
  );
};

export default About;
