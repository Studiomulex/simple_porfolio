function toggleMode() {
  let body = document.body;
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("mode", "dark");
  } else {
    localStorage.setItem("mode", "light");
  }
}
/*verifier le mode enregistrees dans le localstorage lors du
        page du chargement de la page*/
window.addEventListener("DOMContentLoaded", function () {
  let mode = localStorage.getItem("mode");
  if (mode === "dark") {
    document.body.classList.add("dark-mode");
  }
});
