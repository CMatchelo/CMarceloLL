import { AreaHeader } from "./AreaHeader";
import { ProjectBoxLg } from "./ProjectBoxLg";

export const ProfessionalProjects = () => {
  return (
    <div className="flex flex-col items-center">
      <AreaHeader
        title="Professional Projects"
        subtitle="Real-world projects built in professional environments, delivering
          features, improvements, and solutions that supported business
          operations and enhanced user experience."
      />
      <ProjectBoxLg
        title="CompassUol"
        role="Front End Developer"
        link="https://www.esfera.com.vc"
        description="Worked on the development and maintenance of the company's main website and internal systems, resolving critical e-commerce issues and implementing new features to improve operational efficiency."
        stacks={[
          "Javascript",
          "Typescript",
          "HTML",
          "CSS",
          "Tailwind",
          "ReactJS",
          "NextJS",
          "KnockoutJs",
        ]}
        imgs={["./esferaHome.png"]}
      />
      <ProjectBoxLg
        title="ArmazemPB"
        role="Front End Developer"
        link="https://www.armazempb.com.br"
        description="Led front-end development for the armazempb.com.br e-commerce platform.
          Implemented new features and optimized internal systems to improve daily business workflows.
          Proactively resolved critical bugs and enhanced performance, contributing to a more stable and reliable platform."
        stacks={[
          "Javascript",
          "HTML",
          "CSS",
          "LESS",
          "Tailwind",
          "ReactJS",
          "KnockoutJs",
        ]}
        imgs={["./armazemHome.png"]}
      />
    </div>
  );
};
