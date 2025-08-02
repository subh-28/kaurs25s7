// Name: subhpreet KAur
// File: main.js in part 2 of assignment 4
// Date: 1 August 2025
// Description: An image gallery javascript 

const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageFilenames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg','pic4.jpg', 'pic5.jpg']

/* Declaring the alternative text for each image file */
const imageAltTexts = {
    'pic1.jpg': 'Human eye close look',
    'pic2.jpg': 'A rock having a look of a wave',
    'pic3.jpg': 'Flowers of white and purple colour',
    'pic4.jpg': 'Wall painting of Egypt',
    'pic5.jpg': 'A moth slaying on a leaf'
};

/* Looping through images */
for(let i = 0; i < imageFilenames.length; i++){
    const filename = imageFilenames[i]; // path to the image
    const altText = imageAltTexts[filename]; // lt text for the image

// CTo create a newimg element nd set its attributes and to upload it to the web page 
const newImage = document.createElement('img');
newImage.setAttribute('src', filename);
newImage.setAttribute('alt', altText);
thumbBar.appendChild(newImage);
// To show the big image whenever the thumbnail is pressed
newImage.onclick = function(){
    displayedImage.setAttribute = ('src', filename);
    displayedImage.setAttribute = ('alt',altText);
};
}

/* Wiring up the Darken/Lighten button */
btn.onclick = function(){
    const currentClass = btn.getAttribute('class');
    if (currentClass == 'dark'){
        btn.setAttribute('class', 'light'); // To change the class to light
        btn.textContent = 'lighten'; // To change the button text
        overlay.computedStyleMap.backgroundColor = 'rgb(0 0 0, 0.5)'; // To apply the dark overlay
   } else{
    btn.setAttribute('class', 'dark'); // To change the class to dark
    btn.textContent = 'Darken'; // To change the button text
    overlay.computedStyleMap.backgroundColor = 'rgb(0 0 0, 0)'; // To apply the light overlay
   }
};