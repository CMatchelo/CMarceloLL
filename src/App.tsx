import "./App.css";
import { PersonalProjects } from "./Components/PersonalProjects";
import { ProfessionalProjects } from "./Components/ProfessionalProjects";
import { SkillsArea } from "./Components/SkillsArea";

function App() {
  return (
    <div>
      <h1 className="bg-bg1 text-detail1">Cicero Marcelo L. Leite</h1>
      <ProfessionalProjects />
      <PersonalProjects />
      <SkillsArea />
    </div>
  );
}

export default App;
