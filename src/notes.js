import { pt } from "date-fns/locale";
import { formCreator ,setupDialog , divButtons ,mainDivForm} from "./content.js";
import "./styles/formStyles.css";
import "./styles/noteStyles.css";
import {format, formatDistance , formatRelative ,subDays} from "date-fns"
function button() {
    const btn1 = document.querySelector("#addNote");
    const mainPage = document.querySelector("#mainPage");
    btn1.addEventListener("click" , () =>{
        const mainDiv =  document.createElement("div");
        mainPage.append(mainDiv);
        mainDiv.classList.add("mainDiv");
        const count  = document.querySelectorAll(".mainDiv").length;
        mainDiv.id = `mainDiv-${count}`;
        setupDialog();
        showDialog();
        submitNote();
        closeNote();
    });
}
function submitNote () {
    const count = document.querySelectorAll(".mainDiv").length;
    const btn2 = document.querySelector("#submitBtn");
        btn2.addEventListener("click" , () =>{
            const div = document.querySelector(`#mainDiv-${count}`);
            formValidation(div);
            priorityColor(div);
        });
}
function closeNote () {
    const btn3 = document.querySelector("#closeBtn");
        const dialogs = document.querySelector("dialog");
        const count = document.querySelectorAll(".mainDiv").length;
        const mainDiv = document.querySelector(`#mainDiv-${count}`);
            btn3.addEventListener("click" , () =>{
            dialogs.close();
            dialogs.remove();
            mainDiv.remove();
        });
}
function showDialog(){
    const dialogs = document.querySelector("dialog");
    const forms1 = formCreator("input" , "title" , "TITLE" , "text");
    const forms2 = formCreator("textArea" ,"textArea" ,"DESCRIPTION" ,"");
    const forms3 = formCreator("input" , "dueDate" , "DUE DATE" , "date");
    const forms4 = formCreator("select" , "priority" , "PRIORITY" ,"");
    forms1.appends();
    forms3.appends();
    forms4.appends();
    forms2.appends();
    dialogs.showModal();
}
const formValidation = function(target) {
    const form  = document.querySelector("#myForm");
        if(!form.reportValidity()){
            return;
        } else {
            closeDialog(target);
            
        }
}
function closeDialog(target){
    const dialogs = document.querySelector("dialog");
    divButtons();
    mainDivForm(target);
    dialogs.close();
    dialogs.remove();
    deleteBtn();
    editBtn();
}

function deleteBtn () {
    const count  = document.querySelectorAll(".mainDiv").length;
    const mainDiv = document.querySelectorAll(".mainDiv");
    const deleteButton = document.querySelectorAll(`#deleteDiv-${count}`);
    mainDiv.forEach(div => {
        deleteButton.forEach(button => {
            if (div.contains(button)) {
                button.addEventListener("click", () => {
                    div.remove();
                    reIndexingId();
                });
            }
        });
    });
}
function reIndexingId() {
    const mainDiv = document.querySelectorAll(".mainDiv");
    const deleteBtn = document.querySelectorAll(".deleteDiv");
    const editBtn = document.querySelectorAll(".editDiv");
    const title = document.querySelectorAll(".title");
    const dueDate = document.querySelectorAll(".dueDate");
    const priority =document.querySelectorAll(".priority");
    const description = document.querySelectorAll(".description");
    title.forEach((div ,index) => {
        div.id = "";
        div.id = `mainDiv-${index + 1}`;
    });
    dueDate.forEach((div ,index) => {
        div.id = "";
        div.id = `mainDiv-${index + 1}`;
    });
    description.forEach((div ,index) => {
        div.id = "";
        div.id = `mainDiv-${index + 1}`;
    });
    priority.forEach((div ,index) => {
        div.id = "";
        div.id = `mainDiv-${index + 1}`;
    });
    mainDiv.forEach((div ,index) => {
        div.id = "";
        div.id = `mainDiv-${index + 1}`;
    });
    deleteBtn.forEach((button,index) =>{
        button.id = "";
        button.id = `deleteDiv-${index + 1}`;
    });
    editBtn.forEach((button,index) =>{
        button.id = "";
        button.id = `editDiv-${index + 1}`;
    });
}

function editBtn (){
    const editButton = document.querySelectorAll(".editDiv");
    editButton.forEach(button => {
        button.addEventListener("click", () => {
            let dialog = document.querySelector("dialog");
            const div = button.closest(".mainDiv");
            if(!dialog) {
                
                
                setupDialog();
                showDialog();
                dialog = document.querySelector("dialog");
                formEditor(div , dialog);
                
                
                editCloseBtn(dialog);
                submitCloseBtn(div ,dialog);
                
            }
           
        });  
    });
}
const submitCloseBtn = function(target ,dialog){
    const btn2 = dialog.querySelector("#submitBtn");
        btn2.addEventListener("click" , () =>{
            Array.from(target.children).forEach(child =>{
                if(child.tagName !== "BUTTON") {
                    child.remove();
                };
            });
            mainDivForm(target);
            dialog.close();
            dialog.remove();
            const priority = target.querySelector(".priority");
            if(priority) {
                priorityColor(target);
            }
        });
}
const editCloseBtn = function(dialog) {
    const btn3 = dialog.querySelector("#closeBtn");
    btn3.addEventListener("click" , () =>{
        dialog.close();
        dialog.remove();
    });
}
const formEditor = function(editTarget , dialog) {
    const divTitle = editTarget.querySelector(".title").textContent;
    const divDueDate = editTarget.querySelector(".dueDate").textContent;
    const divDescription = editTarget.querySelector(".description").textContent;
    const divPriority = editTarget.querySelector(".priority").textContent;
    dialog.querySelector("#title").value = divTitle;
    dialog.querySelector("#textArea").value = divDescription;
    dialog.querySelector("#dueDate").value = divDueDate;
    dialog.querySelector("#priority").value = divPriority;
}
const priorityColor = function(target) {
    let priority = target.querySelector(".priority");
    if(!priority) {
        return;
    }
    priority = target.querySelector(".priority").textContent.trim();

    const colors = {
        "High Priority": "#e74c3c",
        "Medium Priority": "#f39c12",
        "Low Priority": "#2ecc71"
    };

    if (colors[priority]) {
        target.style.backgroundColor = colors[priority];
        target.style.color = "#fff";
    }
};


export{button,priorityColor};
