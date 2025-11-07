import { AreaHeader } from "./AreaHeader";
import { ProjectBoxLg } from "./ProjectBoxLg";
import { ProjectBoxSm } from "./ProjectBoxSm";

export const PersonalProjects = () => {
  return (
    <section className="flex flex-col items-center mx-4 sm:mx-10">
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
      <div className="flex flex-row gap-5">
        <ProjectBoxSm
          title="Canllection"
          role="Creator & Developer"
          link="new-canllection.vercel.app/"
          github="https://github.com/CMatchelo/new_canllection"
          description="A platform for cataloging beverage can collections, with item details and shareable public profiles."
          stacks={["Typescript", "HTML", "Tailwind", "NextJS", "Firebase"]}
          imgs={["./mantoSagradoHome.png"]}
        />
        <ProjectBoxSm
          title="My Money Bot"
          role="Creator & Developer"
          link="https://manto-sagrado.vercel.app"
          github="https://github.com/CMatchelo/manto-sagrado"
          description="A Telegram bot that helps users log their daily expenses and automatically stores all records in a linked Google Sheets document for easy tracking and organization."
          stacks={["Python", "Google Apps Script"]}
          imgs={["./mantoSagradoHome.png"]}
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
