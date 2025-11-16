import { AreaHeader } from "./AreaHeader";
import { ProjectBoxLg } from "./ProjectBoxLg";
import { ProjectBoxSm } from "./ProjectBoxSm";

export const PersonalProjects = () => {
  return (
    <section>
      <AreaHeader
        title="Personal Projects"
        subtitle="Independent projects focused on learning, experimentation, and
          creative solutions, allowing exploration of new technologies and
          development approaches."
      />
      <ProjectBoxLg
        title="Meu manto sagrado"
        role="Creator & Developer"
        link="https://manto-sagrado.vercel.app"
        github="https://github.com/CMatchelo/manto-sagrado"
        description="A web platform for organizing and showcasing sports jersey collections, with detailed item records and sharable public profiles."
        stacks={["Typescript", "HTML", "Tailwind", "NextJS", "Firebase"]}
        imgs={["./mantoSagradoHome.png", "./mantoSagradoHome2.png", "./mantoSagradoHome3.png"]}
      />
      <div className="flex flex-col md:flex-row gap-5">
        <ProjectBoxSm
          title="Canllection"
          role="Creator & Developer"
          link="https://new-canllection.vercel.app/"
          github="https://github.com/CMatchelo/new_canllection"
          description="A platform for cataloging beverage can collections, with item details and shareable public profiles."
          stacks={["Typescript", "HTML", "Tailwind", "NextJS", "Firebase"]}
          imgs={["./canllectionHome.png"]}
        />
        <ProjectBoxSm
          title="Minhas HQs"
          role="Creator & Developer"
          link="https://minhas-tex.web.app/auth"
          github="https://github.com/CMatchelo/minhas-tex"
          description="Web platform for managing comic book collections"
          stacks={["Typescript", "HTML", "Tailwind", "ReactJS", "Firebase"]}
          imgs={["./minhasHq.png"]}
        />
        <ProjectBoxSm
          title="ADRC Icasa Website"
          role="Creator & Developer"
          link="https://icasa-site.web.app"
          github="https://github.com/CMatchelo/icasa-site"
          description="Non-official fan website for Icasa, featuring match results, schedules, and league standings."
          stacks={["Javascript", "HTML", "CSS", "ReactJS", "Firebase"]}
          imgs={["./icasaHome.png"]}
        />
      </div>
    </section>
  );
};
