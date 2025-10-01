var quotetext = "";
const button = document.getElementById('clickme');
document.getElementById("quote-text").innerHTML = quotetext;

//Define API URL
const apiURL ='https://api.kanye.rest/';

function handleClick(){

    fetch(apiURL)
        .then(response => response.json()) //parse JSON from response
        .then(data => {
            document.getElementById("quote-text").innerHTML = data.quote;
        })
        .catch(error => {
            console.error("Error: ", error)
    });
}
button.addEventListener("click", handleClick)
