"use strict";
const role = document.querySelector("#role");
const loginId = document.querySelector("#login");
const password = document.querySelector("#password");
const invalidLogin = document.querySelector("#invalidLogin");
const loginBtn = document.querySelector("#loginBtn");
loginBtn.addEventListener("click", () => {
    //   console.log(role.options[role.selectedIndex].value)
    //   console.log(loginId.value)
    //   console.log(password.value)
    if (role.options[role.selectedIndex].value === "Doctor" &&
        loginId.value === "doctor" &&
        password.value === "password") {
        window.location.href = "../Doctor/index.html";
    }
    else {
        loginId.value = "";
        password.value = "";
        invalidLogin.innerText = "Invalid Login Credentials";
        // console.log(invalidLogin.innerText)
    }
});
