import "./App.css";
import { useEffect } from "react";
import { ContactArea } from "./Components/ContactArea";
import { InitialArea } from "./Components/InitialArea";
import { PersonalProjects } from "./Components/PersonalProjects";
import { ProfessionalProjects } from "./Components/ProfessionalProjects";
import { SkillsArea } from "./Components/SkillsArea";

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    const targets = document.querySelectorAll(".reveal");
    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <InitialArea />
      <ProfessionalProjects />
      <PersonalProjects />
      <SkillsArea />
      <ContactArea />
    </div>
  );
}

export default App;
