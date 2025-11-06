import { AreaHeader } from "./AreaHeader";
import { ProjectBoxLg } from "./ProjectBoxLg";

export const PersonalProjects = () => {
  return (
    <div className="flex flex-col items-center">
      <AreaHeader
        title="Personal Projects"
        subtitle="Independent projects focused on learning, experimentation, and
          creative problem-solving, allowing exploration of new technologies and
          development approaches."
      />
      <ProjectBoxLg
        title="Reorganizar"
        role="Full Stack Developer"
        link="https://www.reorganizar.com.br"
        description="A web platform designed for mental health professionals and patients, enabling the secure registration and 
          sharing of personal thoughts. It supports different user roles (psychologist and patient), ensuring privacy 
          so that only the patient and their psychologist can access the records. Built with Next.js, TailwindCSS, 
          and Firebase."
        stacks={["Typescript", "HTML", "Tailwind", "NextJS", "Firebase"]}
        imgs={["./reorganizarHome.png"]}
      />
    </div>
  );
};
