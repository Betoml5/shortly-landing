const $btnMenu = document.querySelector("#btnMenu");
const $menu = document.querySelector("#menu");
const $imgWorking = document.querySelector("#imgWorking");
$btnMenu.addEventListener("click", () => {
  if ($menu.style.display === "none") {
    $menu.style.display = "block";
  } else {
    $menu.style.display = "none";
    $imgWorking.style.display = "none";
  }

  if ($imgWorking.style.display === "none") {
    $imgWorking.style.display = "block";
  } else {
    $imgWorking.style.display = "none";
  }
});
