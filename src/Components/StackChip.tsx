interface StackChipProps {
  stackName: string;
}

export const StackChip = ({ stackName }: StackChipProps) => {
  return <span className="text-sm rounded-3xl py-1 px-2 bg-bg3 text-detail1">{stackName}</span>;
};
