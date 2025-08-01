//COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

// The function used to return the random item 
function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

//RAW TEXT STRINGS
// The main story template ~ the main text
let storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

// Possible array values to inset into the story template
let insertx = ['Willy the Goblin',
'Big Daddy',
'Father Christmas']

let inserty = ['the soup kitchen',
'Disneyland',
'the White House']

let insertz = ['spontaneously combusted',
'melted into a puddle on the sidewalk',
'turned into a slug and crawled away']

//EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

// After clicking the button, the function is called.
randomize.addEventListener('click', result);

function result() {
    // To create a new copy of the story so the modifications can be done accordingly
    let newStory = storyText;

    // To choose the random value from the arrays
    const Itemx = randomValueFromArray(insertx);
    const Itemy = randomValueFromArray(inserty);
    const Itemz = randomValueFromArray(insertz);

    // To replace the text in the story with the choosed random items to modify the story
    newStory = newStory.replaceAll(':insertx:', Itemx);
    newStory = newStory.replaceAll(':inserty:', Itemy);
    newStory = newStory.replaceAll(':insertz:', Itemz);

    // Step 2 to replace the Bob with the name 
  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }
  // To convert the uk units into the us ones
  if(document.getElementById("uk").checked) {
    const weight = Math.round(300 * 0.071) + 'stone'; // To convert pounds to stones
    const temperature =  Math.round((94-32) * 5/9) + 'centigrade'; // To convert fahrenheit to celsius
    // To replace the units 
    newStory = newStory.replace('300 pounds', weight);
    newStory = newStory.replace('94 fahrenheit', temperature);
  }
  // To display the modified story
  story.textContent = newStory;
  story.style.visibility = 'visible';
}
