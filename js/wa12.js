// Select the new quote button using a querySelector. Assign it to a new variable.
const newQuote = document.querySelector("#js-new-quote");


//Write an event listener to check if the button is clicked. 
//When the button is clicked, run a function called "getQuote".
newQuote.addEventListener('click', getQuote);


//Add a new variable that holds the API endpoint: 
//https://trivia.cyberwisp.com/getrandomchristmasquestion
const endpoint = "https://geek-jokes.sameerkumar.website/api?format=json";


let json = ''; // this makes json a global variable which means we can change it in our getQuote function and also acces it in our displayAnswer function


//Write the function declaration, and check the button click works by returning a message in the console everytime the button is clicked.
async function getQuote() {
    const answerArea = document.querySelector("#js-answer-text");
    answerArea.textContent = '';
    const catArea = document.querySelector("#cat-image");
    catArea.innerHTML = "";
    //console.log("testing getQuote");   //test that it works!
    
    try {
        //Change the getQuote function to use the fetch method to get a random quote from that endpoint.
        const response = await fetch(endpoint);

        //If it fails, output an error message to the console AND via alert
        if (!response.ok) {
            throw Error(response.statusText);
        }

        json = await response.json();
        //If successful, output the quote to the console
        //console.log(json.question);  // specifies that we want ONLY the question
        //console.log(json.answer);   // or only the answer
        displayQuote(json.joke);

    } catch (err) {
        alert('Failed to fetch new Chuck Norris content.');
    }

}


//Write a second function called "displayQuote" that will display the text of a fetched quote in the HTML element with an id of js-quote-text.
function displayQuote(joke) {
    const quoteText = document.querySelector('#js-quote-text');
    quoteText.textContent = joke;
}


/// new stuff trying to fetch an image and then display it

// event listener added to the button
const newCat = document.querySelector("#js-tweet");
newCat.addEventListener('click', getCat);

// add the API and make myCat a global variable
const endpoint2 = "https://cataas.com/cat?position=center&json=true";
let myCat = "";


async function getCat() {
    const catArea = document.querySelector("#js-answer-text");
    try {
        //get a random cat from the endpoint
        const response = await fetch(endpoint2);

        //If it fails, output an error message to the console AND via alert
        if (!response.ok) {
            throw Error(response.statusText);
        }

        myCat = await response.json();
        // I think I want the url as the source to be able to display the picture??
        displayCat(myCat.url);

    } catch (err) {
        alert('Failed to fetch a cat.');
    }

}

// pass the url we fetched, make a new image with that url as the source,
// and then append it to the area in the document where I want it to show up
function displayCat(url) {
    const catSource = url;
    const catArea = document.querySelector("#cat-image");
    const newImage = document.createElement('img');
    newImage.setAttribute('src', catSource);
    newImage.setAttribute('alt', "an image of a cat");
    catArea.appendChild(newImage);
}


getQuote();
