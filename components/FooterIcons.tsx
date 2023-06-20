import Link from "next/link";
import { GitHub, Linkedin } from "react-feather";

const footerIcons = [
  {
    name: "github",
    icon: GitHub,
    link: "https://github.com/jaqubowsky",
  },
  {
    name: "linkedin",
    icon: Linkedin,
    link: "https://www.linkedin.com/in/jakub-nalewajk/",
  },
];

const FooterIcons = () => {
  const footerIconsEl = footerIcons.map((icon) => {
    const Icon = icon.icon;
    return (
      <Link
        key={icon.name}
        href={icon.link}
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 bg-rose-50 hover:scale-[90%] transition-all hover:bg-white rounded-sm drop-shadow-lg group"
      >
        <Icon className="text-black  group-hover:text-black" />
      </Link>
    );
  });

  return <div className="flex-container gap-6 mb-6">{footerIconsEl}</div>;
};

export default FooterIcons;
