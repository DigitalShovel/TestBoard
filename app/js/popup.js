//let popupBtnShow = document.querySelector(".popup__btn-show");
//let popupBtnHide = document.querySelector(".popup__btn-hide");

let listOfViewGraph = [];
let listOfViewGraphID = ['G1-1', 'G1-2'];

for (var i=0; i<2; i++){
  listOfViewGraph.push(document.getElementById(listOfViewGraphID[i]));
}

let popup = document.querySelector(".popup");
let popupHide = document.querySelector(".popup__hide");

listOfViewGraph[0].addEventListener("click", () => {
  popup.classList.toggle("popup__show");
});

listOfViewGraph[1].addEventListener("click", () => {
  popup.classList.toggle("popup__show");
});

popupBtnHide.addEventListener("click", () => {
  popup.classList.toggle("popup__show");
});
