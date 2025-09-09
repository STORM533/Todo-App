import { pt } from "date-fns/locale";
import { formCreator ,dialog , divButtons} from "./content.js";
import "./styles/formStyles.css";
import "./styles/noteStyles.css";
import {format, formatDistance , formatRelative ,subDays} from "date-fns"
function button() {
    const btn1 = document.querySelector("#addNote");
    btn1.addEventListener("click" , () =>{
        dialog();
        showDialog();
        
        const btn2 = document.querySelector("#closeButton");
        btn2.addEventListener("click" , () =>{
            formValidation();
            
        });
        const btn3 = document.querySelector("#closeDialog");
        const dialogs = document.querySelector("dialog");
        const count = document.querySelectorAll("#mainDiv").length;
        const mainDiv = document.querySelector(`.mainDiv-${count}`);
            btn3.addEventListener("click" , () =>{
            dialogs.close();
            dialogs.remove();
            mainDiv.remove();
            
        });
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
    mainDivForm();
    dialogs.close();
    dialogs.remove();
    divButtons();
    deleteBtn();
}

function deleteBtn () {
    const mainDiv = document.querySelectorAll(".mainDiv");
    const deleteButton = document.querySelectorAll("#deleteDiv");
    mainDiv.forEach(div => {
        deleteButton.forEach(button => {
            if (div.contains(button)) {
                button.addEventListener("click", () => {
                    div.remove();
                    reIndexingDiv();
                });
            }
        });
    });
}
function reIndexingDiv() {
    const mainDiv = document.querySelectorAll(".mainDiv");
    mainDiv.forEach((div ,index) => {
        div.id = "";
        div.id = `mainDiv-${index + 1}`;
    });
}
function mainDivForm () {
    const count = document.querySelectorAll(".mainDiv").length;
    const pTitle = document.createElement("p");
    const pDescription = document.createElement("p");
    const pDueDate = document.createElement("p");
    const pPriority = document.createElement("p");
    const title = document.querySelector("#title").value;
    const description = document.querySelector("#textArea").value;
    const dueDate = document.querySelector("#dueDate").value;
    const priority = document.querySelector("#priority").value;
    pTitle.textContent = title;
    pDescription.textContent = description;
    pDueDate.textContent = dueDate;
    pPriority.textContent = priority;
    let string = `mainDiv-${count}`;
    const appendBox = document.querySelector(`#${string}`);
    appendBox.append(pTitle , pDueDate , pPriority , pDescription);
    
}

export{button};
