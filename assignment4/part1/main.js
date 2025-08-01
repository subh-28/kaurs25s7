//COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

//RAW TEXT STRINGS

let storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

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

randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;

    const Itemx = randomValueFromArray(insertx);
    const Itemy = randomValueFromArray(inserty);
    const Itemz = randomValueFromArray(insertz);

    newStory = newStory.replaceAll(':insertx:', Itemx);
    newStory = newStory.replaceAll(':inserty:', Itemy);
    newStory = newStory.replaceAll(':insertz:', Itemz);

  



  }

  story.textContent = ;
  story.style.visibility = 'visible';
}
