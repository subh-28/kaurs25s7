// Name: subhpreet KAur
// File: main.js in part 2 of assignment 4
// Date: 1 August 2025
// Description: An image gallery javascript 

const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

//An array of image filenames
const imageFilenames=['pic1.jpg','pic2.jpg','pic3.jpg','pic4.jpg','pic5.jpg'];

//Object for alt texts
const imageAlts={ 'pic1.jpg': 'Closeup of a blue eye',
    'pic2.jpg': 'Rock shaped like a ocean wave',
    'pic3.jpg': 'Beuatiful purple and white flowers',
    'pic4.jpg': 'Ancient Egyptian wall painting',
    'pic5.jpg': 'Moth resting on a green leaf'
};
// Loopng through the images
for(let i=0;i<imageFilenames.length;i++){
    const fileName=imageFilenames[i];
    const altText=imageAlts[fileName];


const newImage = document.createElement('img');
newImage.setAttribute('src', 'images/' + fileName);
newImage.setAttribute('alt', altText);
thumbBar.appendChild(newImage);
// To add click buton to make the clicked image bigger
  newImage.addEventListener('click', function () {
    displayedImage.setAttribute('src', newImage.getAttribute('src'));
    displayedImage.setAttribute('alt', newImage.getAttribute('alt'));
  });}


// darken/ lighten the buttons
btn.addEventListener('click',function(){
    const currentClass=btn.getAttribute('class');
    if (currentClass==='dark'){
        btn.setAttribute('class','light');
        btn.textContent='Lighten';
        overlay.style.backgroundColor='rgb(0 0 0/ 50%)';

    }else{
        btn.setAttribute('class','dark');
        btn.textContent='Darken';
        overlay.style.backgroundColor='rgb(0 0 0 / 0%)';

    }
})