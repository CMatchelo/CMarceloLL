import { AreaHeader } from "./AreaHeader";
import { SkillBox } from "./SkillBox";

export const SkillsArea = () => {
  const programming = [
    "HTML5",
    "JavaScript",
    "TypeScript",
    "CSS3",
    "MySQL",
    "Python",
    "C#",
  ];
  const frameworks = [
    "React",
    "KnockoutJS",
    "Next.js",
    "TailwindCSS",
    "Node.js",
    "NestJS",
    "jQuery ",
  ];
  const tools = [
    "SQL Workbench",
    "Oracle Commerce Cloud",
    "WordPress",
    "Firebase",
    "Vercel",
    "Git",
    "Unity",
  ];
  const languages = ["Portuguese", "English", "French"];

  return (
    <section className="border-t border-detail3 pt-10 mt-10">
      <AreaHeader
        title="Tech Stack & Skills"
        subtitle="Technologies I use to build efficient, scalable, and user-focused solutions."
      />
      <div className="flex flex-col sm:flex-row gap-4 w-full mt-4">
        <SkillBox title="Programming" skills={programming} />
        <SkillBox title="Frameworks" skills={frameworks} />
        <SkillBox title="Tools" skills={tools} />
        <SkillBox title="Languages" skills={languages} />
      </div>
    </section>
  );
};
