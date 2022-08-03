//let popupBtnShow = document.querySelector(".popup__btn-show");
//let popupBtnHide = document.querySelector(".popup__btn-hide");

let popup = document.querySelector(".popup");
//let popupHide = document.querySelector(".popup__hide");

let listOfViewGraph = [];
let listOfViewGraphID = [['G1-1', 'C1-1'], ['G1-2', 'C1-2']];

for (var i=0; i<2; i++){
  listOfViewGraph.push(document.getElementById(listOfViewGraphID[i][0]));
  listOfViewGraph[i][0].addEventListener("click", () => {
    popup.classList.toggle("popup__show");
  });
}

/*for (var i=0; i<2; i++){
  listOfViewGraphID[i][0].addEventListener("click", () => {
    popup.classList.toggle("popup__show");
  });

  listOfViewGraphID[i][1].addEventListener("click", () => {
    popup.classList.toggle("popup__show");
  });
}*/