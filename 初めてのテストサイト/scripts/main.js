var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/penguin.jpg') {
      myImage.setAttribute ('src','images/penguin2.jpg');
    } else {
      myImage.setAttribute ('src','images/penguin.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('きみの名前をおしえてほしいぺん');
    if(!myName || myName === null){
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = myName + '、はじめましてぺん！！'
    }
    localStorage.setItem('name', myName);
    myHeading.textContent = myName + '、はじめましてぺん！！';
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = storedName + '、また会えてうれしいぺん！！';
  }
  myButton.onclick = function() {
    setUserName();
  }