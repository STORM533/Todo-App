import { formCreator ,setupDialog , divButtons ,mainDivForm} from "./content.js";
import "./styles/projectStyle.css"
const defaultProject = function (){
    const btn1 = document.querySelector("#addProject");
    const defaults = document.querySelector("#allProjects");
    const div = document.createElement("div");
    div.id = "defaults";
    div.classList.add("projects")
    div.textContent = "PROJECT(Default)";
    defaults.append(div);
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
            return true; // it’s a duplicate
        }
    }
    return false; // no duplicate found
}

export {defaultProject};