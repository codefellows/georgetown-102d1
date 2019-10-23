'use strict'

// var today = new Date();
var hourNow = prompt('What time is it?'); // 10
console.log('Amanda, you put in the number' + hourNow);

var favoriteColor = prompt('What is your favorite color?'); //rEd
var greeting;

var newColor = favoriteColor.toLowerCase(); // red

if(newColor === 'red'){
  var name = prompt('What is your name?');
  if(name === "amanda"){
    alert('Congratulations! You are correct!!!!');
  } else{
    alert('Congratulations, you are wrong.');
  }

} else{
  alert('Congratulations, you are wrong.');

}


if (hourNow > 18) {
  greeting = 'Good evening, Class!';
} 
// if 15 is greater than 12
else if (hourNow > 12) {
  greeting = 'Good afternoon, Class!';
} else if (hourNow >= 0) {
  greeting = 'Good morning!';
} else {
  greeting = 'Welcome!';
}

document.write('<h3>' + greeting + '</h3>');
