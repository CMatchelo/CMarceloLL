interface AreaHeaderProps {
    title: string;
    subtitle?: string;
}

export const AreaHeader = ({ title, subtitle }: AreaHeaderProps) => {
    return (
        <div className="mt-5 flex flex-col gap-3 items-center max-w-2xl text-center">
            <div className="flex items-center gap-3 mb-1">
                <span className="h-px w-8 bg-detail1 opacity-60" />
                <h2>{title}</h2>
                <span className="h-px w-8 bg-detail1 opacity-60" />
            </div>
            {subtitle && <h3>{subtitle}</h3>}
        </div>
    );
};
