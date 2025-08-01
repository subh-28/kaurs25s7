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

const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
