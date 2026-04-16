import { StackChip } from "./StackChip";
import useEmblaCarousel from "embla-carousel-react";

interface ProjectBoxLgProps {
  title: string;
  role: string;
  description: string;
  imgs: string[];
  stacks: string[];
  link?: string;
  github?: string;
}

export const ProjectBoxLg = ({
  title,
  role,
  description,
  imgs,
  stacks,
  link,
  github,
}: ProjectBoxLgProps) => {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  return (
    <div
      className="reveal group flex flex-col-reverse sm:flex-row gap-0
        bg-bg2 border border-detail3 rounded-xl
        my-5 shadow-2xl overflow-hidden
        hover:border-detail2 transition-colors duration-300"
    >
      {/* Content */}
      <div className="flex flex-col flex-1 p-6 sm:p-8">
        {/* role badge */}
        <span className="inline-flex self-start text-xs font-semibold uppercase tracking-widest
          text-detail1 bg-detail3 px-3 py-1 rounded-full mb-3">
          {role}
        </span>

        <span className="text-2xl font-bold tracking-tight mb-3">{title}</span>

        <p className="text-sm text-[#b0aac8] leading-relaxed flex-1">{description}</p>

        {/* stacks */}
        <div className="flex flex-row flex-wrap gap-2 mt-6">
          {stacks.map((stack, i) => (
            <StackChip key={i} stackName={stack} />
          ))}
        </div>

        {/* actions */}
        <div className="mt-6 flex flex-wrap gap-3">
          {link && (
            <a
              target="_blank"
              href={link}
              className="flex items-center gap-2 bg-detail1 text-bg1 text-sm font-semibold
                px-5 py-2 rounded-lg hover:bg-detail2 transition-colors duration-200
                shadow-md shadow-detail1/20"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
              Live Project
            </a>
          )}

          {github && (
            <a
              target="_blank"
              href={github}
              className="flex items-center gap-2 border border-detail3 text-sm font-medium
                px-5 py-2 rounded-lg hover:border-detail1 hover:bg-bg3 transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
              </svg>
              View on GitHub
            </a>
          )}
        </div>
      </div>

      {/* Image carousel */}
      <div className="overflow-hidden flex-1 bg-bg1" ref={emblaRef}>
        <div className="flex h-full">
          {imgs.map((src, i) => (
            <img
              key={i}
              src={src}
              className="flex-[0_0_100%] w-full object-cover object-top
                group-hover:scale-[1.02] transition-transform duration-700 ease-out"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
