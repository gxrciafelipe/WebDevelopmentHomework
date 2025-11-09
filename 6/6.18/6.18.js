function isStrongPassword(password) {
    if (password.length >= 8) {
        if (!password.toLowerCase().includes("password")) {
            if (/[A-Z]/.test(password)) {
                return true;
            }
        }
    }
    return false;
}

console.log("Testing isStrongPassword()...");

console.log("Qwerty - " + isStrongPassword("Qwerty"));                  // false - Too short
console.log("passwordQwerty - " + isStrongPassword("passwordQwerty"));  // false - Contains "password"
console.log("qwerty123 - " + isStrongPassword("qwerty123"));            // false - No uppercase chars
console.log("Qwerty123 - " + isStrongPassword("Qwerty123"));            // true


// Do NOT remove the following line:
export default isStrongPassword;
