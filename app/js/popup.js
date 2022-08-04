
let popup = document.querySelector(".popup");

function createPopup(quantity){
  for (var i=1; i<(quantity+1); i++){
    var arrayViewGraph = [];
    var arrayCloseButton = [];
    for (var k=1; k<7; k++){
      arrayViewGraph.push(document.getElementById("T"+i+"G"+k));
      arrayCloseButton.push(document.getElementById("T"+i+"B"+k));

      document.getElementById("T"+i+"G"+k).addEventListener("click", () => {
        document.getElementById("T"+i+"G"+k).classList.toggle("popup__show");
      });

      arrayCloseButton[k-1].addEventListener("click", () => {
        popup.classList.toggle("popup__show");
      });
    }
  }
}