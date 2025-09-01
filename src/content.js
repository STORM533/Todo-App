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

const options  = function(name , type ){
    const optionPage = document.querySelector("#optionPage");
    const div = document.createElement(type);
    div.id = name;
    const append = () => optionPage.append(div);
    const setText = (text) => div.textContent = text;
    return{append , element:div , setText}
}
//if you want to add a option just add in this and append 
function DOM() {
    const  addTasks = options("addText" , "button");
    const newProject = options("addProject" , "button");
    newProject.setText("ADD PROJECT");
    addTasks.setText("ADD NOTE");
    addTasks.append();
    newProject.append();
}
export {optionPages , mainPages , DOM};


