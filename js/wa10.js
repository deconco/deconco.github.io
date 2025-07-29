const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = "One day :insertx: was swimming along in the deep abyss. :inserty: were venturing into its territory, so it devised a mater plan to destroy them by :insertz:. The sea can be a :insertq: place for unwanted visitors - especially 12,000 feet below the surface!";
let insertX = ["a giant squid", "an eel", "an octopus", "an immortal jellyfish", "a tripod fish"];
let insertY = ["Marine explorers", "Scuba pirates"];
let insertZ = ["scrambling their navigation signals", "puncturing their vessel", "stealing their equipment"];
let insertQ = ["dangerous", "unfriendly", "scary", "perilous"]

randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;

    if(customName.value !== '') {
        const name = customName.value;
        newStory = newStory.replaceAll(":insertx:", name);
      }
      
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);
    let qItem = randomValueFromArray(insertQ);
    newStory = newStory.replaceAll(":insertx:", xItem);
    newStory = newStory.replaceAll(":inserty:", yItem);
    newStory = newStory.replaceAll(":insertz:", zItem);
    newStory = newStory.replaceAll(":insertq:", qItem);
    

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300 * 0.0714286) + " stone";
    const temperature =  Math.round((94 - 32) * (5/9)) + " centigrade";
    newStory = newStory.replace("300 pounds", weight);
    newStory = newStory.replace("94 fahrenheit", temperature);
    const depth = Math.round(12000 * 0.3048) +  " meters";
    newStory = newStory.replace("12,000 feet", depth);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}