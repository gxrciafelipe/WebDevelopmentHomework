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

function fetchQuotes(topic, count) {
    // Remove the anonymous quotes
    // showAnonymousQuotes(count);  // no longer needed

    // Create XMLHttpRequest
    let xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.addEventListener("load", responseReceivedHandler);

    // Open request to the API with topic and count parameters
    xhr.open("GET", `https://wp.zybooks.com/quotes.php?topic=${topic}&count=${count}`);
    xhr.send();
}

function responseReceivedHandler() {
    const quotesDiv = document.querySelector("#quotes");
    quotesDiv.innerHTML = ""; // Clear previous content

    let response = this.response;

    if (response.error) {
        // Display error message
        const p = document.createElement("p");
        p.textContent = response.error;
        quotesDiv.appendChild(p);
    } else if (Array.isArray(response)) {
        // Create an ordered list of quotes
        const ol = document.createElement("ol");
        for (let item of response) {
            const li = document.createElement("li");
            li.textContent = `${item.quote} - ${item.source}`;
            ol.appendChild(li);
        }
        quotesDiv.appendChild(ol);
    }
}
