const optionPages = (function () {
    const content  = document.querySelector("#content");
    const optionPage = document.createElement("div");
    optionPage.setAttribute("id" , "optionPage" );
    content.appendChild(optionPage);
    return {optionPage};
})();
const mainPages = (function (){
    const content = document.querySelector("#content");
    const mainPage  = document.createElement("div");
    mainPage.setAttribute("id" , "mainPage");
    content.appendChild(mainPage);
    return{mainPage};
})();
const options  = function(name , type){
    const optionPage = document.querySelector("#optionPage");
    const div = document.createElement(type);
    div.id = name;
    const append = () => optionPage.append(div);
    const setText = (text) => div.textContent = text;
    return{append , element:div , setText}
}
//if you want to add a option just add in this and append 
function optionsDOM() {
    const  addTasks = options("addNote" , "button");
    const newProject = options("addProject" , "button");
    const  allNotes = options("allNotes" , "div");
    allNotes.setText("ALL NOTES");
    newProject.setText("ADD PROJECT");
    addTasks.setText("ADD NOTE");
    addTasks.append();
    newProject.append();
    allNotes.append();
}
const formCreator = function( type ,labelName , text , typeName) {
    const form = document.querySelector("#myForm");
    const div = document.createElement("div");
    const elements = document.createElement(type);
    const tag = type.toLowerCase();
    if(tag === "label"){
        elements.setAttribute("for" , labelName);
        elements.textContent = text;
        const input = document.createElement("input");
        input.setAttribute("type" , typeName);
        input.setAttribute("name" , labelName );
        input.id =labelName;
        div.append(elements , input);
    };
    if(tag === "textarea") {
        elements.id = "text";
        div.append(elements);
    };
    if(tag === "select") {
        
    }
    const appends = () => form.appendChild(div);
    return {appends};
}
const dialog =function(){
    const mainBody = document.querySelector("#mainPage");
    const div = document.createElement("div");
    const dialog = document.createElement("dialog");
    const closeButton = document.createElement("button");
    div.id = "mainDiv";
    closeButton.id = "closeButton";
    closeButton.textContent = "CLOSE";
    const form  = document.createElement("form");
    form.id = "myForm";
    form.method = "post";
    dialog.append(form , closeButton);
    div.append(dialog);
    mainBody.append(div);
}
export {optionPages , mainPages , optionsDOM , formCreator , dialog};


