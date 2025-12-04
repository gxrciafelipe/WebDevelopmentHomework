function checkForm() {
   // 1. Get references to the HTML elements
   const nameInput = document.getElementById("fullName");
   const emailInput = document.getElementById("email");
   const passwordInput = document.getElementById("password");
   const confirmInput = document.getElementById("passwordConfirm");
   const errorDiv = document.getElementById("formErrors");
   
   // Initialize an array to store error messages
   let errorList = [];

   // 2. Reset state: Remove 'error' class from all inputs initially
   // This ensures that if a user fixes an input, the red border is removed.
   nameInput.classList.remove("error");
   emailInput.classList.remove("error");
   passwordInput.classList.remove("error");
   confirmInput.classList.remove("error");

   // 3. Validation Logic (Performed in the specific order requested)

   // Validate Full Name (length >= 1)
   if (nameInput.value.length < 1) {
      errorList.push("Missing full name.");
      nameInput.classList.add("error");
   }

   // Validate Email (Matches provided Regex)
   const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
   if (!emailRegex.test(emailInput.value)) {
      errorList.push("Invalid or missing email address.");
      emailInput.classList.add("error");
   }

   // Validate Password Length (10-20 characters)
   if (passwordInput.value.length < 10 || passwordInput.value.length > 20) {
      errorList.push("Password must be between 10 and 20 characters.");
      passwordInput.classList.add("error");
   }

   // Validate Password Lowercase (at least one a-z)
   if (!/[a-z]/.test(passwordInput.value)) {
      errorList.push("Password must contain at least one lowercase character.");
      passwordInput.classList.add("error");
   }

   // Validate Password Uppercase (at least one A-Z)
   if (!/[A-Z]/.test(passwordInput.value)) {
      errorList.push("Password must contain at least one uppercase character.");
      passwordInput.classList.add("error");
   }

   // Validate Password Digit (at least one 0-9)
   if (!/[0-9]/.test(passwordInput.value)) {
      errorList.push("Password must contain at least one digit.");
      passwordInput.classList.add("error");
   }

   // Validate Password Match (Password vs Confirm Password)
   if (passwordInput.value !== confirmInput.value) {
      errorList.push("Password and confirmation password don't match.");
      confirmInput.classList.add("error");
   }

   // 4. Display Logic
   if (errorList.length > 0) {
      // Errors exist: Show the div and build the list
      errorDiv.classList.remove("hide");
      
      let ulHtml = "<ul>";
      for (let i = 0; i < errorList.length; i++) {
         ulHtml += "<li>" + errorList[i] + "</li>";
      }
      ulHtml += "</ul>";
      
      errorDiv.innerHTML = ulHtml;
   } else {
      // No errors: Hide the div
      errorDiv.classList.add("hide");
   }
}

document.getElementById("submit").addEventListener("click", function(event) {
   checkForm();

   // Prevent default form action. DO NOT REMOVE THIS LINE
   event.preventDefault();
});