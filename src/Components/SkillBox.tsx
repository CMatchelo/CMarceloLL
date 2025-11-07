import { StackChip } from "./StackChip";

interface SkillBoxProps {
  title: string;
  skills: string[];
}

export const SkillBox = ({ title, skills }: SkillBoxProps) => {
  return (
    <div className="p-5 bg-bg2 border border-detail3 rounded-md flex-1">
      <span className="text-xl font-bold">{title}</span>
      <div className="flex flex-row gap-2 mt-4 flex-wrap">
        {skills.map((skill, i) => (
          <div key={i}>
            <StackChip stackName={skill} />
          </div>
        ))}
      </div>
    </div>
  );
};
