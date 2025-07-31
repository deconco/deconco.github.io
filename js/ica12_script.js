// Select the new quote button using a querySelector. Assign it to a new variable.
const newQuote = document.querySelector("#js-new-quote");


//Write an event listener to check if the button is clicked. 
//When the button is clicked, run a function called "getQuote".
newQuote.addEventListener('click', getQuote);


//Add a new variable that holds the API endpoint: 
//https://trivia.cyberwisp.com/getrandomchristmasquestion
const endpoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion";


let json = ''; // this makes json a global variable which means we can change it in our getQuote function and also acces it in our displayAnswer function


//Write the function declaration, and check the button click works by returning a message in the console everytime the button is clicked.
async function getQuote() {
    const answerArea = document.querySelector("#js-answer-text");
    answerArea.textContent = '';
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
        displayQuote(json.question);

    } catch (err) {
        alert('Failed to fetch a new trivia question.');
    }

}

// display the answer when the blue button is clicked
const newAnswer = document.querySelector("#js-tweet");
newAnswer.addEventListener('click', displayAnswer);


function displayAnswer() {
    const answerText = json.answer;
    const answerArea = document.querySelector("#js-answer-text");
    answerArea.textContent = answerText;
}



//Write a second function called "displayQuote" that will display the text of a fetched quote in the HTML element with an id of js-quote-text.
function displayQuote(quote) {
    const quoteText = document.querySelector('#js-quote-text');
    quoteText.textContent = quote;
}

getQuote();

//Adjust getQuote to run displayQuote at the proper place in the code.
//Notice when you refresh that a quote isn't displayed. Fix that.