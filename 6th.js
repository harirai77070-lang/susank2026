const nameEl = document.querySelector("#name");
const avatar = document.querySelector("#avatar");
const details = document.querySelector("#details");
const button = document.querySelector("#updateBtn");
const profile = document.querySelector("#profile");

button.addEventListener("click", () => {
  nameEl.textContent = "Susank subedi ";

  details.innerHTML = `
    <p>Major: Computer Science</p>
    <p>Level: Beginner Web Developer</p>
  `;

  avatar.src = "susank.png";
  avatar.alt = "Updated profile photo";

  profile.style.backgroundColor = "#f1f5f9";
  profile.style.padding = "24px";
});
