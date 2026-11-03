const photo =
  document.querySelector("#photo");

const button =
  document.querySelector("#nextBtn");

button.addEventListener("click", () => {
  photo.src = "cat2.jpg";
  photo.alt = "Cat photo 2";
});
