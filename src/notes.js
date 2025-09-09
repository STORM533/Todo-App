import { pt } from "date-fns/locale";
import { formCreator ,dialog } from "./content.js";
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

}
const divBUttons = function(){
    const mainDiv = document.querySelectorAll("#mainDiv");
    const btn1  = document.createElement("div");
    const btn2 = document.createElement("div");
    mainDiv.append(btn1 , btn2);
    btn1.id = "deleteDiv";
    btn2.id = "editDiv";
    const dltSvg = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>
    const editSvg = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z" /></svg>
    btn1.innerHTML = dltSvg;
    btn2.innerHTML = editSvg;

btn1.textContent = ""
}
function mainDivForm () {
    const count = document.querySelectorAll("#mainDiv").length;
    const mainDiv = document.querySelector("#mainDiv");
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
    const appendBox = document.querySelector(`.${string}`);
    appendBox.append(pTitle , pDueDate , pPriority , pDescription);
    
}

export{button};
