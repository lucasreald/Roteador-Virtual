const powerButton = document.querySelector("#powerButton");

const light = document.querySelectorAll(".light");

function turnOn() {
  light.forEach((item) => {
    item.classList.toggle("on");
  });
}

powerButton.addEventListener("click", turnOn);
