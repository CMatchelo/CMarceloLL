import "./App.css";
import { ContactArea } from "./Components/ContactArea";
import { InitialArea } from "./Components/InitialArea";
import { PersonalProjects } from "./Components/PersonalProjects";
import { ProfessionalProjects } from "./Components/ProfessionalProjects";
import { SkillsArea } from "./Components/SkillsArea";

function App() {
  return (
    <div>
      <InitialArea />
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
