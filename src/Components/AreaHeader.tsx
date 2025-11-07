interface AreaHeaderProps {
    title: string,
    subtitle?: string
}

export const AreaHeader = ({title, subtitle}: AreaHeaderProps) => {
    return (
        <div className="mt-5 flex flex-col gap-4 items-center max-w-3xl">
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
        </div>
    )
}