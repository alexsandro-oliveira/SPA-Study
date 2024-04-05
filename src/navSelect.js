export function toggleSelected() {
  document.querySelector("#menu a.active").classList.remove("active");
  event.target.classList.add("active");
}
