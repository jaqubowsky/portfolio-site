const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Next.js",
  "Tailwind CSS",
  "Git",
  "Vite",
];

const Skills = () => {
  const skillsEl = skills.map((skill) => (
    <div key={skill}>
      <h3>{skill}</h3>
    </div>
  ));

  return <div className="grid grid-cols-3 gap-4">{skillsEl}</div>;
};

export default Skills;
