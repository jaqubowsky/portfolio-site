import exp from "constants";
import Link from "next/link";

const sections = [
  { title: "HOME", url: "#" },
  { title: "ABOUT", url: "#about" },
  { title: "PROJECTS", url: "#projects" },
  { title: "CONTACT", url: "#contact" },
];

const NavBar = () => {
  const sectionsEl = sections.map((section) => {
    return (
      <Link
        key={section.title}
        href={section.url}
        className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-red-500 mr-4 transition-color"
      >
        {section.title}
      </Link>
    );
  });

  return (
    <nav className="z-50 top-0 left-0 w-full flex sticky items-center justify-between bg-gray-900 p-4 border-b-2 border-b-red-600">
      <div className="flex items-center flex-shrink-0 ml-60">{sectionsEl}</div>
    </nav>
  );
};

export default NavBar;
