import "./App.css";
import { ContactArea } from "./Components/ContactArea";
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
      <ContactArea />
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  );
}

export default App;
