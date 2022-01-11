const role = document.querySelector("#role") as HTMLSelectElement
const loginId = document.querySelector("#login") as HTMLInputElement
const password = document.querySelector("#password") as HTMLInputElement
const invalidLogin = document.querySelector("#invalidLogin") as HTMLDivElement

const loginBtn = document.querySelector("#loginBtn") as HTMLButtonElement

loginBtn.addEventListener("click", () => {
  //   console.log(role.options[role.selectedIndex].value)
  //   console.log(loginId.value)
  //   console.log(password.value)
  if (
    role.options[role.selectedIndex].value === "Doctor" &&
    loginId.value === "doctor" &&
    password.value === "password"
  ) {
    window.location.href = "../Doctor/index.html"
  } else {
    loginId.value = ""
    password.value = ""
    invalidLogin.innerText = "Invalid Login Credentials"
    // console.log(invalidLogin.innerText)
  }
})
