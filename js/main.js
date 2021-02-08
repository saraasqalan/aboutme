'use strict';

let userName = prompt('what\'s your name');
alert('welcome  '+ userName);

console.log("please answer by yes or no");

let userPlace = prompt('Did you live in Amman');
if(userPlace.toLocaleLowerCase()=='yes')
alert('Your delevary is free');
else if(userPlace.toLocaleLowerCase()=='no')
 alert ('Your delevary is 3 JD');

 console.log("please answer by yes or no");

 let gender = prompt('Are you Male');
if(gender.toLowerCase() === 'yes'){
  alert('Your course is 25% discount!');
}else if(gender.toLowerCase() === 'no'){
  alert('you got  50% discount!');

  console.log("please answer by yes or no");

  let userAge = prompt('is your age between 18-28')
if(userAge.toLocaleLowerCase()=='yes')
alert('Your next course is free');
else if(userAge.toLocaleLowerCase()=='no')
 alert ('you have 50% discount in next course');

 console.log("please answer by yes or no");

 let userNationalitye = prompt('are you jordanian')
 if(userNationalitye.toLocaleLowerCase()=='yes')
 alert('you have 30% discount in bus fees');
 else if(ususerNationality.toLocaleLowerCase()=='no')
  alert ('you have 50% discount in bus fees');

  console.log("please answer by yes or no");

  let courseName =prompt('are you intrest in css')
  if(courseName.toLocaleLowerCase()=='yes')
  alert('Your css course is free');
  else if(courseName.toLocaleLowerCase()=='no')
   alert ('you have 50% discount in anycourse');



}