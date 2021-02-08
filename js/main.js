'use strict';
let userName = 'sara';
let userAge = 23
let userGender ='female'
console.log(userName);
console.log(userAge);
console.log(userGender);
let name = prompt('what\'s your name');
let age = prompt('How old are you');
let gender = prompt('what\'s your gender');
if(gender.toLowerCase() === 'female'){
  alert('Your course is free');
}else if(age > 22){
  alert('25JD please');
}else if(age >= 18 && age < 22 ) {
  console.log('you got  50% discount!');
}else {
  alert('you got a free ticket');
}

switch (Number(age)) {
case 20:
  console.log('20!!');
  break;
case 19:
  console.log('19!!');
  break;
default:
  console.log(age);
  break;
}