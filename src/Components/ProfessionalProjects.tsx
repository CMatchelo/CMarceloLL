import { AreaHeader } from "./AreaHeader";
import { ProjectBoxLg } from "./ProjectBoxLg";

export const ProfessionalProjects = () => {
  return (
    <section className="flex flex-col flex-1 items-center mx-4 sm:mx-10">
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
        imgs={["./esferaHome.png", "./esferaHome2.png"]}
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
        imgs={["./armazemHome.png", "./armazemHome2.png"]}
      />
      <ProjectBoxLg
        title="Reorganizar"
        role="Full Stack Developer"
        link="https://www.reorganizar.com.br"
        github="https://github.com/CMatchelo/mindlog"
        description="A web platform designed for mental health professionals and patients, enabling the secure registration and 
          sharing of personal thoughts. It supports different user roles (psychologist and patient), ensuring privacy 
          so that only the patient and their psychologist can access the records."
        stacks={["Typescript", "HTML", "Tailwind", "NextJS", "Firebase"]}
        imgs={["./reorganizarHome.png", "./reorganizarHome2.png"]}
      />
      <div className="flex gap-5"></div>
    </section>
  );
};
