
var myImage = document.querySelector('img');
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

myImage.onclick = function() {
  //获取属性
  var mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/1.jpg') {
    myImage.setAttribute('src', 'images/2.jpg')
  } else {
    myImage.setAttribute('src', 'images/1.jpg');
    localStorage.removeItem('name');
    // localStorage.setItem('name','')
  }
}

function setUserName() {
  var myName = prompt('Pleace enter your name');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Mozilla is cool' + myName;
}
if (!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool ' + storedName;
}
myButton.onclick=function(){
    setUserName();
}