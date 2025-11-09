// Returns the average of the numbers in the scores array.
function findAverage(scores) {
   if (scores.length === 0){
      throw "No scores are in the scores array";
   }
   let sum = 0;
   scores.forEach(function(score) {
      if (score < 0){
         throw "A negative score was found in the scores array. Score " + score + " is negative."
      }
      else if (!Number.isInteger(score)){
         throw "A non-integer was found in the scores array. Score " + score + " is not an integer."
      }
      sum += score;
   });
   return sum / scores.length;
}

try {
   console.log("Average = " + findAverage([90, 85, 71, 93]));
}
catch (exception) {
   console.log(exception);  
}
try{
   console.log("Average = " + findAverage([76, 80.1]));
}
catch (exception) {
   console.log(exception);  
}
try{
   console.log("Average = " + findAverage([90, -85, 71, 93]));   // Should not accept negative numbers
}
catch (exception) {
   console.log(exception);  
}
try{
   console.log("Average = " + findAverage([]));                  // Should not accept empty arrays
}
catch (exception) {
   console.log(exception);  
}
try{
   console.log("Average = " + findAverage([60, "cat", 70]));     // Should not accept non-numbers
}
catch (exception) {
   console.log(exception);  
}
