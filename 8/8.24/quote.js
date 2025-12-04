window.addEventListener("DOMContentLoaded", function () {
   document.querySelector("#fetchQuotesBtn").addEventListener("click", function () {

      // Get values from drop-downs
      const topicDropdown = document.querySelector("#topicSelection");
      const selectedTopic = topicDropdown.options[topicDropdown.selectedIndex].value;
      const countDropdown = document.querySelector("#countSelection");
      const selectedCount = countDropdown.options[countDropdown.selectedIndex].value;
   
      // Get and display quotes
      fetchQuotes(selectedTopic, selectedCount);      
   });
});

function showAnonymousQuotes(count) {
   let html = "<ol>";
   for (let c = 1; c <= count; c++) {
      html += `<li>Quote ${c} - Anonymous</li>`;
   }
   html += "</ol>";

   document.querySelector("#quotes").innerHTML = html
}

function fetchQuotes(topic, count) {   
   // Construct the URL with query parameters
   const url = `https://wp.zybooks.com/quotes.php?topic=${topic}&count=${count}`;

   // Use Fetch API to get data
   fetch(url)
      .then(response => response.json())
      .then(data => {
         const quotesDiv = document.querySelector("#quotes");

         // Check if the API returned an error object (e.g., topic not found)
         if (data.error) {
            quotesDiv.innerHTML = data.error;
         }
         // Check if the API returned an array of quotes
         else if (Array.isArray(data)) {
            let html = "<ol>";
            // Iterate through the array to build list items
            for (let i = 0; i < data.length; i++) {
               html += `<li>${data[i].quote} - ${data[i].source}</li>`;
            }
            html += "</ol>";
            quotesDiv.innerHTML = html;
         }
      })
      .catch(error => {
         // Handle network errors or JSON parsing issues
         console.error("Error fetching quotes:", error);
      });
}