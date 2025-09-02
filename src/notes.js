import { formCreator ,dialog } from "./content.js";
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
    dialogs.close();
    dialogs.remove();
}
function showDialog(){
    
    const dialogs = document.querySelector("dialog");
    const forms1 = formCreator("for" , "title" , "TITLE" , "text");
    const forms2 = formCreator("for")
    forms.formAppends();
    forms.appends();
    dialogs.showModal();
}

export{button};
