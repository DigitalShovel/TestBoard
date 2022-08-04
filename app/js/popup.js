
let popup = document.querySelector(".popup");


let listOfViewGraph = [];
let listOfViewGraphClose = [];
let listOfViewGraphID = [['G1-1', 'C1-1'], ['G1-2', 'C1-2']];

function createPopup(){
  for (var i=0; i<2; i++){
    listOfViewGraph.push(document.getElementById(listOfViewGraphID[i][0]));
    listOfViewGraphClose.push(document.getElementById(listOfViewGraphID[i][1]));
    listOfViewGraph[i].addEventListener("click", () => {
      popup.classList.toggle("popup__show");
    });
    listOfViewGraphClose[i].addEventListener("click", () => {
      popup.classList.toggle("popup__show");
    });
  }
}