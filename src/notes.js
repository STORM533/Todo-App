import { formCreator ,dialog } from "./content.js";
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
    const div = document.querySelector("#mainDiv");
    dialogs.close();
    dialogs.remove();
    div.textContent = format(new Date() , "'Today is a' eeee");
    
}

export{button};
