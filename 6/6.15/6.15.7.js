// Returns an encrypted or decrypted message using a Caesar cipher.
function caesarCipher(message, key) {
   if (typeof message !== "string"){
      throw new TypeError(message +" is not a string.");
   }
   if (!Number.isInteger(key))
      throw new TypeError(key + " is not an integer."); 
   if (key < -25 || key > 25)
      throw new RangeError("Key must be between -25 and 25.");
   
   // Make negative keys positive
   if (key < 0) {
      key += 26;   
   }
   
   message = message.toUpperCase();
   let newMessage = "";
   for (let i = 0; i < message.length; i++) {
      let code = message.charCodeAt(i);
      
      // Only convert letters
      if (code >= 65 && code <= 90) {
         code = ((code - 65 + key) % 26) + 65;
      }
      
      newMessage += String.fromCharCode(code);
   }
   return newMessage;
}


let message = "Experience is the teacher of all things.";

// Encrypt the message
try{
   message = caesarCipher(message, 3);
   console.log(message);
}
catch(ex){
   if (ex.name === TypeError)
      console.log("Men willingly believe what they wish");
   else if (ex.name === RangeError)
      console.log("The die is cast.");
}

try{
// Decrypt the message
   message = caesarCipher(message, -3);
   console.log(message);
}
catch(ex){
   if (ex.name === TypeError)
      console.log("Men willingly believe what they wish");
   else if (ex.name === RangeError)
      console.log("The die is cast.");
}

try{
// Decrypt the message
   message = caesarCipher(message, -26);
   console.log(message);
}
catch(ex){
   if (ex.name === "TypeError")
      console.log("Men willingly believe what they wish");
   else if (ex.name === "RangeError")
      console.log("The die is cast.");
}
