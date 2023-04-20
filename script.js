let btn = document.getElementById("btn");
let txt = document.getElementById("txt");
function fun() {
  if (btn.textContent === "ok") {
    btn.textContent = "yes";
  } else {
    btn.textContent = "ok";
  }
}
btn.addEventListener("click", fun);
