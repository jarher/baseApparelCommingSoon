const form = document.querySelector("form");
const inputEmail = document.getElementById("email-input");

function removeAlertMessage() {
  const alertSuccess = document.querySelector(".alert-success");
  setTimeout(() => {
    alertSuccess.style.opacity = 0;
  }, 3000);
}

function alertSucces() {
  const main = document.querySelector("main");
  const alert = document.createElement("div");
  alert.className = "alert-success";
  alert.innerHTML = `<p>Thanks for subscribe to newsletter list</p>`;
  main.appendChild(alert);
  removeAlertMessage(main);
}

form.onsubmit = function (e) {
  e.preventDefault();
  const emailRegExp = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/;

  !inputEmail.validity.valid
    ? form.classList.add("input-error")
    : !emailRegExp.test(inputEmail.value)
    ? form.classList.add("input-error")
    : alertSucces();
  inputEmail.value = "";
};

inputEmail.onfocus = () => {
  form.classList.remove("input-error");
};
