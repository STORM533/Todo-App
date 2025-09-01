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
//if you want to add a option just add in this and append to optionPages
const options = (function(){
    const optionPage = document.querySelector("#optionPage");
    const addTask = document.createElement("button");
    const newProject = document.createElement("button");
    newProject.classList.add("newProject");
    addTask.classList.add("task");
    newProject.textContent = "NEW PROJECT";
    addTask.textContent = "ADD TASK";
    optionPage.append(addTask , newProject);

})();
    

export {optionPages , mainPages , options};


