import { formCreator ,dialog } from "./content.js";
import {format, formatDistance , formatRelative ,subDays} from "date-fns"
function button() {
    const btn1 = document.querySelector("#addNote");
    btn1.addEventListener("click" , () =>{
        dialog();
        showDialog();
        const btn2 = document.querySelector("#closeButton");
        btn2.addEventListener("click" , () =>{
            closeDialog();
        });
    });
}
function closeDialog(){
    const dialogs = document.querySelector("dialog");
    const div = document.querySelector("#mainDiv");
    dialogs.close();
    dialogs.remove();
    div.textContent = format(new Date() , "'Today is a' eeee");
}
function showDialog(){
    const dialogs = document.querySelector("dialog");
    const forms1 = formCreator("label" , "title" , "TITLE" , "text");
    const forms2 = formCreator("textArea" ,"" ,"" ,"" );
    forms1.appends();
    forms2.appends();
    dialogs.showModal();
}

export{button};
