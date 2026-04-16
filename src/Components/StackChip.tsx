interface StackChipProps {
  stackName: string;
}

export const StackChip = ({ stackName }: StackChipProps) => {
  return (
    <span
      className="text-xs font-medium rounded-full py-1 px-3
        bg-bg3 text-detail1
        border border-detail3
        hover:border-detail1 hover:bg-detail3
        transition-colors duration-200
        cursor-default select-none"
    >
      {stackName}
    </span>
  );
};
