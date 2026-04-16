import { StackChip } from "./StackChip";

interface SkillBoxProps {
  title: string;
  skills: string[];
}

export const SkillBox = ({ title, skills }: SkillBoxProps) => {
  return (
    <div className="reveal p-6 bg-bg2 border border-detail3 rounded-xl flex-1
      hover:border-detail2 transition-colors duration-300">
      <div className="flex items-center gap-2 mb-4">
        <span className="h-3 w-0.5 bg-detail1 rounded-full" />
        <span className="text-sm font-semibold uppercase tracking-widest text-detail1 opacity-80">
          {title}
        </span>
      </div>
      <div className="flex flex-row gap-2 flex-wrap">
        {skills.map((skill, i) => (
          <StackChip key={i} stackName={skill} />
        ))}
      </div>
    </div>
  );
};
