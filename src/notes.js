function button() {
    const btn = document.querySelector("#addNote");
    btn.addEventListener("click" , () =>{
        note();
    });
}
export{button};

const note = function(){
    const mainBody = document.querySelector("#mainPage");
    const div = document.createElement("div");
    const dialog = document.createElement("dialog");
    const  button  = document.createElement("button");
    const  closeButton = document.createElement("button");
    div.appendChild(dialog);
    dialog.appendChild(button);
    div.append(closeButton);
    mainBody.append(div);
    const dialogBox = document.querySelector("dialog");
    const showButton = document.querySelector("dialog + button");
    const closeButtons = document.querySelector("dialog button");
    showButton.addEventListener("click" , () =>{
        dialogBox.showModal();
    });
    closeButtons.addEventListener("click" , () =>{
        dialogBox.close();
    });
    const form = document.createElement("form");
    form.id = "myForm";
    form.method = "dialog";
    const title =formCreator("for" , "title" , "TITLE" , "title" , "text");
    
    title.appends();
    title.appendDialog();
    
} 
const formCreator = function(labelType , labelName , text , inputName , inputType) {
    const form = document.querySelector("#myForm");
    const div = document.createElement("div");
    const label = document.createElement("label");
    label.setAttribute(labelType , labelName);
    label.textContent = text;
    const input = document.createElement("input");
    input.setAttribute(inputType , inputName);
    input.id =inputName;
    const appendDialog = () => form.appendChild(div);
    const appends = () => div.append(label , input);
    return{appends , appendDialog }
}