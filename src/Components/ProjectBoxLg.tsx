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
  const [emblaRef] = useEmblaCarousel();

  return (
    <div
      className="flex flex-col-reverse h-full sm:flex-row gap-0 sm:gap-5 
      bg-bg2 border border-detail3 rounded-md
      my-5 shadow-2xl"
    >
      <div className="flex flex-col  flex-1 m-5">
        <span className="text-2xl font-bold">{title}</span>
        <span>{role}</span>
        <span className="mt-4">{description}</span>
        <div className="mt-auto">
          <div className="flex flex-row flex-wrap gap-y-3 gap-x-1 mt-4">
            {stacks.map((stack, i) => (
              <div key={i}>
                <StackChip stackName={stack} />
              </div>
            ))}
          </div>
          <div className="mt-4 flex flex-col sm:flex-row gap-4">
            {link && (
              <a
                target="_blank"
                href={link}
                className="bg-detail1 self-start py-1 px-4 rounded-2xl hover:bg-detail2 transition cursor-pointer flex flex-row gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z"
                  />
                </svg>
                Live project
              </a>
            )}

            {github && (
              <a
                target="_blank"
                href={github}
                className="border border-detail1 self-start py-1 px-4 rounded-2xl hover:bg-bg3 transition cursor-pointer flex flex-row gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                  />
                </svg>
                View on GitHub
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="overflow-hidden flex-1 self-center" ref={emblaRef}>
        <div className="flex flex-1">
          {imgs.map((src, i) => (
            <img
              key={i}
              src={src}
              className="flex-[0_0_100%] w-full h-auto object-cover"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
