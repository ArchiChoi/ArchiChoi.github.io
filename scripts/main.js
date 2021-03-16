let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/section-image.jpg') {
    myImage.setAttribute('src','images/plan-image.jpg');
  } else {
    myImage.setAttribute('src','images/section-image.jpg');
  }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  localStorage.setItem('name',myName);
  myHeading.textContent = 'Welcome to Bamseom Library, '+ myName;
}

if(!localStorage.getitem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome to Bamseom Library, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
