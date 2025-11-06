import { StackChip } from "./StackChip";

interface ProjectBoxLgProps {
  title: string;
  role: string;
  description: string;
  imgs?: string[];
  stacks: string[];
  link: string;
}

export const ProjectBoxLg = ({
  title,
  role,
  description,
  imgs,
  stacks,
  link,
}: ProjectBoxLgProps) => {
  return (
    <div className="flex flex-row gap-5 bg-bg2 mx-10 my-5 border border-detail3 rounded-md">
      <div className="flex flex-col flex-1 m-5">
        <span className="text-2xl font-bold">{title}</span>
        <span>{role}</span>
        <span className="mt-4">{description}</span>
        <div className="flex flex-row flex-wrap gap-y-3 gap-x-1 mt-4">
          {stacks.map((stack, i) => (
            <div key={i}>
              <StackChip stackName={stack} />
            </div>
          ))}
        </div>
        <a
          target="_blank"
          href={link}
          className="mt-4 bg-detail1 self-start py-2 px-4 rounded-2xl hover:bg-detail2 transition cursor-pointer flex flex-row gap-2"
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
      </div>

      <div className="flex-1 self-center">
        {imgs?.map((img, i) => (
            <img key={i} src={img} />
        ))}
      </div>
    </div>
  );
};
