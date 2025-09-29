import "./styles/mainStyle.css";
import {optionPages , mainPages , options , optionsDOM} from "./content.js";
import {button} from "./notes.js";
import { buttonWork,ensureDefaultProject,searchActiveProject} from "./project.js";
import { renderNotes,renderProjects} from "./storage.js";
import "./styles/noteStyles.css";
optionsDOM();
button();
buttonWork();
document.addEventListener("DOMContentLoaded", () => {
    const project = searchActiveProject();
    renderNotes(project);
    renderProjects();
    ensureDefaultProject();
});


