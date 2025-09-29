import {priorityColor,formValidation , editBtn , deleteBtn} from "./notes.js";
import { ensureDefaultProject, searchActiveProject } from "./project.js";
import "./styles/noteStyles.css";
import { divButtons , mainDivForm} from "./content.js";
function saveNoteToLocalStorage(projectName, target) {
    const note = {
        title: target.querySelector(".title").textContent,
        dueDate: target.querySelector(".dueDate").textContent,
        description: target.querySelector(".description").textContent,
        priority: target.querySelector(".priority").textContent,
    };
    const key = `project:${projectName}`;
    const notes = JSON.parse(localStorage.getItem(key)) || [];
    notes.push(note);
    localStorage.setItem(key, JSON.stringify(notes));
    console.log(`Notes for ${key}:`, notes);
}

function getNotes(projectName) {
    const key = `project:${projectName}`;
    return JSON.parse(localStorage.getItem(key)) || [];
}
function renderNotes(projectName) {
    const notesContainer = document.querySelector("#mainPage");
    notesContainer.innerHTML = ""; // clear old notes

    const notes = getNotes(projectName);

    notes.forEach((note, index) => {
        const div = document.createElement("div");
        div.classList.add("mainDiv");
        div.id = `mainDiv-${index + 1}`;
          
        // Add note content
       
        div.innerHTML = `
            <div class="title">${note.title}</div>
            <div class="dueDate">${note.dueDate}</div>
            <div class="priority">${note.priority}</div>
            <div class="description">${note.description}</div>
        `;
        
        notesContainer.appendChild(div);

        // Apply priority styling
        priorityColor(div);
        divButtons();
        // Add buttons and attach event handlers
            // adds edit/delete buttons to all mainDivs
        editBtn();         // attach edit handlers
        deleteBtn();       // attach delete handlers
    });
}
function renderProjects() {
    const projectList = document.querySelector("#allProjects");

    // Keep existing projects to avoid duplicates
    const existingProjects = Array.from(projectList.querySelectorAll(".projects"))
                                  .map(p => p.textContent.trim());

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);

        if (key.startsWith("project:")) {
            const projectName = key.split(":")[1];

            if (existingProjects.includes(projectName)) continue;

            const div = document.createElement("div");
            div.textContent = projectName;
            div.classList.add("projects");
            div.id = projectName === "PROJECT(Default)" ? "default" : projectName;

            div.style.backgroundColor = (div.id === "default") ? "red" : "#0077ff";

            div.addEventListener("click", () => {
                const currentDefault = document.querySelector("#allProjects #default");
                if (currentDefault && currentDefault !== div) {
                    currentDefault.id = currentDefault.textContent.trim().replace(/\s+/g, "_");
                    currentDefault.style.backgroundColor = "#0077ff";
                }

                div.id = "default";
                div.style.backgroundColor = "red";

                renderNotes(projectName);
            });

            projectList.appendChild(div);
        }
    }
}
function updateNote(projectName, oldTitle, newNote) {
    const key = `project:${projectName}`;
    const notes = JSON.parse(localStorage.getItem(key)) || [];

    const index = notes.findIndex(note => note.title === oldTitle);
    if (index !== -1) {
        notes[index] = newNote;
        localStorage.setItem(key, JSON.stringify(notes));
        console.log(`Updated note in project: ${projectName}`, notes);
    }
}

// Delete a note from localStorage
function deleteNote(projectName, title) {
    const key = `project:${projectName}`;
    let notes = JSON.parse(localStorage.getItem(key)) || [];

    notes = notes.filter(note => note.title !== title);
    localStorage.setItem(key, JSON.stringify(notes));
    console.log(`Deleted note from project: ${projectName}`, notes);
}


export { saveNoteToLocalStorage,renderNotes,renderProjects,updateNote,deleteNote};
