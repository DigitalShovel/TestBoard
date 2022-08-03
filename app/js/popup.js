let popupBtnShow = document.querySelector(".popup__btn-show");
let popupBtnHide = document.querySelector(".popup__btn-hide");

let popup = document.querySelector(".popup");
let popupHide = document.querySelector(".popup__hide");

popupBtnShow.addEventListener("click", () => {
  popup.classList.toggle("popup__show");
});

popupBtnHide.addEventListener("click", () => {
  popup.classList.toggle("popup__show");
});
