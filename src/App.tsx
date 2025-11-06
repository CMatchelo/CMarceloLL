import "./App.css";
import { PersonalProjects } from "./Components/PersonalProjects";
import { ProfessionalProjects } from "./Components/ProfessionalProjects";

function App() {
  return (
    <div>
      <h1 className="bg-bg1 text-detail1">Cicero Marcelo L. Leite</h1>
      <ProfessionalProjects />
      <PersonalProjects />
    </div>
  );
}

export default App;
