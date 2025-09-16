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
    allNotes.setText("ALL PROJECT");
    newProject.setText("ADD PROJECT");
    addTasks.setText("ADD NOTE");
    addTasks.append();
    newProject.append();
    allNotes.append();
}
//creates form 
const formCreator = function( type ,labelName , text , typeName) {
    const form = document.querySelector("#myForm");
    const div = document.createElement("div");
    const elements = document.createElement(type);
    const label = document.createElement("label");
    label.setAttribute("for" , labelName);
    label.textContent = text;
    const tag = type.toLowerCase();
    if(tag === "input"){
        elements.setAttribute("type" , typeName);
        elements.setAttribute("name" , labelName );
        elements.id =labelName;
        elements.required = true;
        div.append(label , elements);
    };
    if(tag === "textarea") {
        elements.setAttribute("name" , labelName );
        elements.id = labelName;
        div.setAttribute("id" , "myId");
        elements.setAttribute("rows" , "10");
        elements.setAttribute("cols" , "45");
        div.append(label , elements);
    };
    if(tag === "select") {
        elements.setAttribute("name" , labelName );
        elements.id = labelName;
        const option1 = document.createElement("option");
        const option2 = document.createElement("option");
        const option3 = document.createElement("option");
        const option4 = document.createElement("option");
        option1.value = "";
        option2.value = "High Priority";
        option3.value = "Medium Priority";
        option4.value = "Low Priority";
        option1.text = "--Please assign priority--";
        option2.text = "High Priority";
        option3.text = "Medium Priority";
        option4.text = "Low Priority";
        elements.append(option1 , option2 , option3 , option4);
        div.append(label , elements);
    }
    const appends = () => form.appendChild(div);
    return {appends};
}
const setupDialog =function(){
    const dialog = document.createElement("dialog");
    const form  = document.createElement("form");
    form.id = "myForm";
    form.method = "post";
    const buttonDiv = document.createElement("div");
    const submitButton = document.createElement("button");
    submitButton.type = "button";
    submitButton.id = "submitBtn";
    submitButton.textContent = "SUBMIT";
    const closeButton = document.createElement("button");
    closeButton.type = "button";
    closeButton.id = "closeBtn";
    closeButton.textContent = "CLOSE";
    buttonDiv.append(submitButton , closeButton);
    form.append(buttonDiv);
    dialog.append(form);
    document.body.appendChild(dialog);

    return {dialog , form , submitButton , closeButton}
}
const divButtons = function(){
    const count = document.querySelectorAll(".mainDiv").length;
    const mainDivs = document.querySelectorAll(".mainDiv");
    const btn1  = document.createElement("button");
    const btn2 = document.createElement("button");
    btn1.id = `deleteDiv-${count}`;
    btn2.id = `editDiv-${count}`;
    btn1.classList.add("deleteDiv");
    btn2.classList.add("editDiv");
    const dltSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>`
    const editSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z" /></svg>`
    btn1.innerHTML = dltSvg;
    btn2.innerHTML = editSvg;
    mainDivs.forEach(button =>{
        button.append(btn1 , btn2);
    }) 
    mainDivs.appendChild;
    return{btn1 , btn2};
}
//HOly fucking i lose brain cells editing this
const mainDivForm = function(target) {
    const title = document.querySelector("#title").value;
    const description = document.querySelector("#textArea").value;
    const dueDate = document.querySelector("#dueDate").value;
    const priority = document.querySelector("#priority").value;
    const divTitle = document.createElement("div");
    divTitle.textContent = title;
    divTitle.classList.add("title");

    const divDueDate = document.createElement("div");
    divDueDate.textContent = dueDate;
    divDueDate.classList.add("dueDate");

    const divDescription = document.createElement("div");
    divDescription.textContent = description;
    divDescription.classList.add("description");

    const divPriority = document.createElement("div");
    divPriority.textContent = priority;
    divPriority.classList.add("priority");

    target.append(divTitle, divDueDate, divPriority, divDescription);   
    
}

export {optionPages , mainPages , optionsDOM , formCreator , setupDialog ,divButtons ,mainDivForm};


