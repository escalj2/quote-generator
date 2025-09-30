const button = document.getElementById("clickme");

//Define API URL
const apiURL ='https://api.kanye.rest/';


// Make a GET request
fetch(apiURL)
    .then(Response => {
        // Check if network response was a success
        if (!Response.ok){
            throw new Error('HTTP error! status: ${response.status}');
        }
        // Parse the JSON data from the response body
        return Response.json();
    })
    .then(data => {
        //Handle the retrieved data here
        console.log('API data', data);
        //Call a function to display the data in HTML
        displayDataInHtml(data);
    })
    .catch(error => {
        //Handle any errors that occurred during the fetch operation
        console.error('Error fetching data:', error)
    });

function displayDataInHtml(data) {
    //make div with id of data-container
    const dataContainer = document.getElementById('data-container');

    //clear previous content if any
    dataContainer.innerHTML = '';

    const paragraph = document.createElement('p');
    paragraph.textContent = `Data: ${JSON.stringify(data)}`;
    dataContainer.appendChild(paragraph);
}




document.getElementById("quote").innerHTML = clicks;

function handleClick(){
    document.getElementById("quote").innerHTML = clicks;
    displayDataInHtml(data);
}
button.addEventListener("click", handleClick);
