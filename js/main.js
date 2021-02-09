'use strict';

let userName = prompt('what\'s your name');
alert('welcome  '+ userName);
console.log("please answer by yes or no")
alert("please answer by yes or no");

let userPlace = prompt('Did you live in Amman');
switch(userPlace.toLowerCase()){
case ('yes'):
alert('Your delevary is free');
case ('y'):
alert('Your delevary is free');
break;
case('no'):
alert ('Your delevary is 3 JD');
case('n'):
alert ('Your delevary is 3 JD');
break;
default:
  alert('IT\'S NOT WORKING')
}

 console.log("please answer by yes or no");

 let gender = prompt('Are you Male');
if(gender.toLowerCase() === 'yes' || 'Y'){
  alert('Your course is 25% discount!');
}else if(gender.toLowerCase() === 'no' || 'n'){
  alert('you got  50% discount!');

  console.log("please answer by yes or no");

  let userAge = prompt('is your age between 18-28')
if(userAge.toLocaleLowerCase()=='yes' || 'Y')
alert('Your next course is free');
else if(userAge.toLocaleLowerCase()=='no' || 'n')
 alert ('you have 50% discount in next course');

 console.log("please answer by yes or no");

 let userNationalitye = prompt('are you jordanian')
 if(userNationalitye.toLocaleLowerCase()=='yes' || 'Y')
 alert('you have 30% discount in bus fees');
 else if(ususerNationality.toLocaleLowerCase()=='no' || 'n')
  alert ('you have 50% discount in bus fees');

  console.log("please answer by yes or no");

  let courseName =prompt('are you intrest in css')
  if(courseName.toLocaleLowerCase()=='yes' || 'Y')
  alert('Your css course is free');
  else if(courseName.toLocaleLowerCase()=='no' || 'n')
   alert ('you have 50% discount in anycourse');



}