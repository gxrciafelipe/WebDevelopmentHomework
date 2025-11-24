// Step 2: Convert the space-separated scores string into an array
function parseScores(scoresString) {
   return scoresString.trim() === "" ? [] : scoresString.split(" ");
}

// Step 3: Build grade distribution array [A, B, C, D, F]
function buildDistributionArray(scoresArray) {
   const distribution = [0, 0, 0, 0, 0]; // A, B, C, D, F
   for (let scoreStr of scoresArray) {
      let score = parseInt(scoreStr);
      if (score >= 90) distribution[0]++;
      else if (score >= 80) distribution[1]++;
      else if (score >= 70) distribution[2]++;
      else if (score >= 60) distribution[3]++;
      else distribution[4]++;
   }
   return distribution;
}

// Step 4: Build table content
function setTableContent(userInput) {
   const scoresArray = parseScores(userInput);
   const distribution = buildDistributionArray(scoresArray);

   // Build first-row (bars)
   let firstRowHTML = "";
   for (let i = 0; i < distribution.length; i++) {
      let barHeight = distribution[i] * 10; // 10px per occurrence
      firstRowHTML += `<td><div style="height:${barHeight}px" class="bar${i}"></div></td>`;
   }
   document.getElementById("first-row").innerHTML = firstRowHTML;

   // Build third-row (counts)
   let thirdRowHTML = "";
   for (let count of distribution) {
      thirdRowHTML += `<td>${count}</td>`;
   }
   document.getElementById("third-row").innerHTML = thirdRowHTML;
}

// Example call to test
setTableContent("45 78 98 83 86 99 90 59");
