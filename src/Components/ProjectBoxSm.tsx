import { useState } from "react";
import { StackChip } from "./StackChip";

interface ProjectBoxSmProps {
  title: string;
  role: string;
  description: string;
  imgs?: string[];
  stacks: string[];
  link?: string;
  github?: string;
}

export const ProjectBoxSm = ({
  title,
  role,
  description,
  imgs,
  stacks,
  link,
  github,
}: ProjectBoxSmProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex flex-col bg-bg2 border border-detail3 rounded-md my-5 shadow-2xl overflow-hidden transition-all duration-500 flex-1">
      <div className="p-5">
        <span className="text-2xl font-bold">{title}</span>
        <span className="block mt-1 text-sm opacity-80">{role}</span>
      </div>

      <div
        className={`
          transition-all duration-500 ease-in-out
          overflow-hidden h-full flex flex-col
          ${expanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}
          md:max-h-none md:opacity-100
        `}
      >
        <div className="flex justify-center items-start">
          {imgs?.map((img, i) => (
            <img key={i} src={img} className="max-h-48 object-contain" />
          ))}
        </div>

        <div className="flex flex-col flex-1 m-5 mt-auto">
          <span className="mt-4">{description}</span>
        </div>

        <div id="thisDiv" className="flex flex-col flex-1 m-5 mt-auto">
          <div className="flex flex-row flex-wrap gap-y-3 gap-x-1 my-4">
            {stacks.map((stack, i) => (
              <StackChip key={i} stackName={stack} />
            ))}
          </div>

          <div className="flex flex-col gap-4">
            {link && (
              <a
                target="_blank"
                href={link}
                className="bg-detail1 self-start py-1 px-4 rounded-2xl hover:bg-detail2 transition cursor-pointer flex flex-row gap-2"
              >
                Live Project
              </a>
            )}

            {github && (
              <a
                target="_blank"
                href={github}
                className="border border-detail1 self-start py-1 px-4 rounded-2xl hover:bg-bg3 transition cursor-pointer flex flex-row gap-2"
              >
                View on GitHub
              </a>
            )}
          </div>
        </div>
      </div>
      <button
        onClick={() => setExpanded((p) => !p)}
        className="w-full py-3 bg-bg3 hover:bg-bg4 text-center cursor-pointer transition z-10 md:hidden"
      >
        {expanded ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};
