"use strict";

var sliderElement = document.querySelector("#slider");
var buttonElement = document.querySelector("#button");
var sizePassword = document.querySelector("#valor");
var password = document.querySelector("#password");
var containerPassword = document.querySelector("#container-password");
var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@";
var novaSenha = "";
sizePassword.innerHTML = sliderElement.value;

slider.oninput = function () {
  sizePassword.innerHTML = this.value;
};
//# sourceMappingURL=script.dev.js.map
