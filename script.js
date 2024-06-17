const textbox = document.getElementById("textbox");
const clickbutton = document.getElementById("clickbutton");

clickbutton.addEventListener("click", function () {
  textbox.innerText = "YES BUTTON IS CLICKED";
});
