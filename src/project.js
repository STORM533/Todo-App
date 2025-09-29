import { formCreator ,setupDialog , divButtons ,mainDivForm} from "./content.js";
import { renderNotes } from "./storage.js";
import "./styles/projectStyle.css";

const buttonWork = function (){
    const btn1 = document.querySelector("#addProject");
    const defaults = document.querySelector("#allProjects");
    const div = document.createElement("div");
    div.id = "defaults";
    div.classList.add("projects")
    div.textContent = "PROJECT(Default)";
    defaults.append(div);
    ensureDefaultProject();
    btn1.addEventListener("click" , () => {
        setupDialog();
        projectDialog();
        submitProject();
        closeDialogs();
    })
}
function projectDialog () {
    const dialog = document.querySelector("dialog");
    const forms = formCreator("input" ,"title" , "TITLE" , "text");
    forms.appends();
    dialog.style.height = "30px";
    dialog.style.overflow = "hidden";
    dialog.showModal();
}
function submitProject () {
    const btn2 = document.querySelector("#submitBtn");
    const dialogs = document.querySelector("dialog");
    btn2.addEventListener("click" ,() => {
        validation();
        createProjects(dialogs);
        ensureDefaultProject();
    })
}
function closeDialogs() {
    const btn3 = document.querySelector("#closeBtn");
    const dialogs = document.querySelector("dialog");
    btn3.addEventListener("click" , () => {
        dialogs.close();
        dialogs.remove();
    })
    
}
function close () {
    const dialog = document.querySelector("dialog");
    dialog.close();
    dialog.remove();
}
function validation () {
    const form  = document.querySelector("#myForm");
    if(!form.reportValidity()) {
        return;
    }else
        close();
}
const projects  =  function (target) {
    const list = document.querySelector("#allProjects");
    const defaults = document.createElement("div");
    defaults.textContent = target
    defaults.id = target;
    defaults.classList.add("projects");
    list.append(defaults);
}
function createProjects(dialog) {
    const divTitle = dialog.querySelector("#title").value;
    if(isDuplicateProject(divTitle)) {
        return;
    } else {
        projects(divTitle);
        
    }
}
function isDuplicateProject(title) {
    const allProjects = document.querySelectorAll("#allProjects .projects");
    for (let project of allProjects) {
        if (project.textContent.trim().toLowerCase() === title.trim().toLowerCase()) {
            alert(`Project "${title}" already exists!`);
            return true; 
        }
    }
    return false; 
}
function ensureDefaultProject() {
    const allProjects = document.querySelectorAll("#allProjects .projects");

    if (allProjects.length === 0) return;

    // Ensure default exists
    let defaultDiv = document.querySelector("#allProjects #default");
    if (!defaultDiv) {
        defaultDiv = allProjects[0];
        defaultDiv.id = "default";
    }

    // Apply colors
    allProjects.forEach(p => {
        p.style.backgroundColor = (p.id === "default") ? "red" : "#0077ff";
    });

    // Click handlers
    allProjects.forEach(project => {
        project.addEventListener("click", () => {
            const currentDefault = document.querySelector("#allProjects #default");
            if (currentDefault) {
                currentDefault.id = currentDefault.textContent.trim().replace(/\s+/g, "_");
                currentDefault.style.backgroundColor = "#0077ff";
            }

            // Set new default
            project.id = "default";
            project.style.backgroundColor = "red";

            renderNotes(project.textContent.trim());
            console.log("New default project:", project.textContent);
        });
    });
}
function searchActiveProject () {
    const project = document.querySelector("#allProjects #default");
    if(project) {
        return project.textContent.trim();
    }
}
export {buttonWork,searchActiveProject,ensureDefaultProject};