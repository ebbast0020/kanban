
window.addEventListener("keydown", checkKey);


function checkKey(ev){     if(ev.keyCode === 13)    
    {       
      saveNewTask();    }     }    const mySaveButton = document.getElementById("saveNewTask");

// lägg till klick på save-knappen
mySaveButton.addEventListener("click",saveNewTask);  
function saveNewTask(){ 
    
    //Hämta textrutans innehåll
    const text = document.getElementById("newTask"); 
    
    console.log(text.value); 
    
    //Skapa en ny div
    var divTask = document.createElement("div"); 
    
    //Lägg till lyssnare till vårt nya element 
    divTask.addEventListener("click",moveToNext);
    
  
        

        const firstKanban = document.getElementsByClassName("kanban")[0];
        console.log(firstKanban);


        console.log("new Element is clicked"); 
   


    //Skapa en text-node som du kan lägga in i din nya div
    var theText = document.createTextNode(text.value); 
   
    //Lägg till text-noden till din nyskapde div
    divTask.appendChild(theText); 
    
    //Lägg till nya diven i föräldern till knappen du tryckte på
    firstKanban.appendChild(divTask); 
    
    //Tömmer textruta
    text.value= "";    



}


function moveToNext(){

//vi måste hitta vilket index vår nuvarande förälder har, detta för att kunna byta ut föräldern mot en bättre.

const kanban = Array.from(document.getElementsByClassName("kanban"));

//leta efter index för föräldern jag kom ifrån
let currentParentIndex = kanban.indexOf(this.parentElement);
currentParentIndex = currentParentIndex +1;
kanban[currentParentIndex].appendChild(this);



}

/*function moveToDone(){

    const thirdKanban = document.getElementsByClassName("kanban")[3];
    thirdKanban.appendChild(this);
}*/