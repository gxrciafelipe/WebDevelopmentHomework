document.querySelector("#submitBtn").addEventListener("click", submitBtnClick);

function isStrongPassword(password) {
   return password.length >= 6 && /\d/.test(password) && password !== "password1";
}

function submitBtnClick() {
   let passwordInput = document.querySelector("#password");
   let password = passwordInput.value;

   // Reset rule styling
   document.getElementById("ruleLength").classList.remove("error");
   document.getElementById("ruleDigit").classList.remove("error");
   document.getElementById("ruleNotPassword").classList.remove("error");

   if (isStrongPassword(password)) {
      document.querySelector("#errorMsg").classList.add("hidden");
      passwordInput.classList.remove("error-textbox");
   } else {
      document.querySelector("#errorMsg").classList.remove("hidden");
      passwordInput.classList.add("error-textbox");

      // Highlight violated rules
      if (password.length < 6) {
         document.getElementById("ruleLength").classList.add("error");
      }
      if (!/\d/.test(password)) {
         document.getElementById("ruleDigit").classList.add("error");
      }
      if (password === "password1") {
         document.getElementById("ruleNotPassword").classList.add("error");
      }
   }
}

