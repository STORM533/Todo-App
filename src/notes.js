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
    const btn2 = document.querySelector("#submitBtn");
        btn2.addEventListener("click" , () =>{
            formValidation();
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
const formValidation = function() {
    const form  = document.querySelector("#myForm");
        if(!form.reportValidity()){
            return;
        } else {
            closeDialog();
            
        }
}
function closeDialog(){
    const dialogs = document.querySelector("dialog");
    divButtons();
    mainDivForm();
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
            setupDialog ();
            const div = button.closest(".mainDiv");
            formEditor(div);
            
            const dialog = document.querySelector("dialog");
            editCloseBtn(dialog);
            submitCloseBtn(div ,dialog);
        });  
    });
}
function submitCloseBtn (target , dialog) {
    const btn2 = dialog.querySelector("#submitBtn");
        btn2.addEventListener("click" , () =>{
            Array.from(target.children).forEach(child =>{
                if(child.tagName !== "BUTTON") {
                    child.remove();
                };
            });
            mainDivForm();
            dialog.close();
            dialog.remove();
        });
}
function editCloseBtn (dialog) {
    const btn3 = dialog.querySelector("#closeBtn");
    btn3.addEventListener("click" , () =>{
        dialog.close();
        dialog.remove();
    });
}
function formEditor (editTarget) {
    showDialog();
    const divTitle = editTarget.querySelector(".title").textContent;
    const divDueDate = editTarget.querySelector(".dueDate").textContent;
    const divDescription = editTarget.querySelector(".description").textContent;
    const divPriority = editTarget.querySelector(".priority").textContent;
    document.querySelector("#title").value = divTitle;
    document.querySelector("#textArea").value = divDescription;
    document.querySelector("#dueDate").value = divDueDate;
    document.querySelector("#priority").value = divPriority;
}


export{button};
