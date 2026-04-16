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
    <div className="reveal flex flex-col bg-bg2 border border-detail3 rounded-xl
      shadow-xl overflow-hidden flex-1
      hover:border-detail2 transition-colors duration-300 group">

      {/* thumbnail */}
      <div className="relative overflow-hidden bg-bg1 h-36">
        {imgs?.map((img, i) => (
          <img
            key={i}
            src={img}
            className="absolute inset-0 w-full h-full object-cover object-top
              group-hover:scale-105 transition-transform duration-700 ease-out opacity-80"
          />
        ))}
        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg2 via-transparent to-transparent" />
      </div>

      {/* header always visible */}
      <div className="px-5 pt-4 pb-2">
        <span className="inline-flex text-xs font-semibold uppercase tracking-widest
          text-detail1 bg-detail3 px-2 py-0.5 rounded-full mb-2">
          {role}
        </span>
        <p className="text-lg font-bold tracking-tight">{title}</p>
      </div>

      {/* expandable body */}
      <div
        className={`
          transition-all duration-500 ease-in-out overflow-hidden flex flex-col
          ${expanded ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}
          md:max-h-none md:opacity-100 md:flex-1
        `}
      >
        <div className="flex flex-col flex-1 px-5 pb-5">
          <p className="text-sm text-[#b0aac8] leading-relaxed mt-2">{description}</p>

          <div className="flex flex-row flex-wrap gap-2 mt-4">
            {stacks.map((stack, i) => (
              <StackChip key={i} stackName={stack} />
            ))}
          </div>

          <div className="flex flex-col gap-3 mt-5">
            {link && (
              <a
                target="_blank"
                href={link}
                className="flex items-center gap-2 self-start text-sm font-semibold
                  bg-detail1 text-bg1 px-4 py-1.5 rounded-lg
                  hover:bg-detail2 transition-colors duration-200
                  shadow-sm shadow-detail1/20"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-3.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
                Live Project
              </a>
            )}
            {github && (
              <a
                target="_blank"
                href={github}
                className="flex items-center gap-2 self-start text-sm font-medium
                  border border-detail3 px-4 py-1.5 rounded-lg
                  hover:border-detail1 hover:bg-bg3 transition-colors duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                </svg>
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>

      {/* mobile toggle */}
      <button
        onClick={() => setExpanded((p) => !p)}
        className="w-full py-2.5 flex items-center justify-center gap-1.5
          bg-bg3 hover:bg-detail3 text-sm text-[#b0aac8]
          transition-colors duration-200 cursor-pointer md:hidden"
      >
        {expanded ? (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
            </svg>
            Show Less
          </>
        ) : (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
            Show More
          </>
        )}
      </button>
    </div>
  );
};
