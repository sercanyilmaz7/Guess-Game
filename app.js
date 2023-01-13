const num = document.querySelector("#number");
const p1 = document.querySelector("#p1");
const btn = document.querySelector("#btn");
const body = document.querySelector("body");
let random = Math.round(Math.random() * 100);
let counter = 0;
btn.addEventListener("click", () => {
  let a = num.value;
  console.log(a);
  num.value = "";

  if (isNaN(a)) {
    alert("Please Enter A Number");
  } else if (a < 1 || a > 100) {
    alert("Please enter a number between 1-100");
    counter++;
  } else if (a == random) {
    alert("Right! You found! :)");
    body.style.backgroundImage =
      "url(https://resimarama.net/wp-content/uploads/2020/06/Aslanl%C4%B1-Galatasaray-Arka-Plan-resimleri-hd.jpg)";
  } else if (a > random) {
    alert("Down");
    body.style.backgroundColor = "yellow";
    counter++;
  } else if (a < random) {
    alert("Up");
    body.style.backgroundColor = "red";
    counter++;
  }
  num.focus();
  console.log(counter);
  p1.innerHTML = `Number of attempts ${counter}`;
});

num.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    btn.click();
  }
});
