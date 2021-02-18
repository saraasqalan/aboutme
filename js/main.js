'use strict';
let finalScore = 0;

let userName = prompt('what\'s your name');
alert('welcome  ' + userName);
console.log("please answer by yes or no");
alert("please answer by yes or no");


function userCity()
{switch (userPlace.toLowerCase()) {
case ('yes'):
case ('y'):
  alert(' me to Your delevary is free');
  finalScore ++;
  break;
case ('no'):
case ('n'):
  alert(' sorry i\'m not so Your delevary is 3 JD');
  break;
default:
  alert('IT\'S NOT WORKING');
}}
function userGender(){
  if (gender.toLowerCase() === 'yes' || gender.toLowerCase() === 'y') {

    alert('i\'m no so Your course is 25% discount!');
  } else if (gender.toLowerCase() === 'no' || gender.toLowerCase() === 'n')
    finalScore ++ ;
  alert('me to so you got  50% discount!');
}

function userAge (){
  // eslint-disable-next-line eqeqeq
  if (Age.toLowerCase() == 'yes' || Age.toLowerCase() == 'y'){
    finalScore ++ ;
    alert('me too guss what !!Your next course is free');}
  // eslint-disable-next-line eqeqeq
  else if (Age.toLowerCase() == 'no' || Age.toLowerCase() == 'n')
    alert('don\'t worry you will have 50% discount in next course');
}
function userNationality() {
  // eslint-disable-next-line eqeqeq
  if (userNationalitye.toLowerCase() == 'yes' || userNationalitye.toLowerCase() == 'Y'){
    finalScore ++ ;
    alert('ooh me to so you have 30% discount in bus fees');}
  else if (userNationalitye.toLowerCase() == 'no' || userNationalitye.toLowerCase() == 'n')
    alert('that whay you got  50% discount in bus fees');
}
function cssIntrest(){
  // eslint-disable-next-line eqeqeq
  if (courseName.toLowerCase() == 'yes' || courseName.toLowerCase() == 'Y'){
    alert('me to so Your css course is free');
    fnalScore ++;}
  // eslint-disable-next-line eqeqeq
  else if (courseName.toLowerCase() == 'no' || courseName.toLowerCase() == 'n')
    alert('don\'t worry you have 50% discount in anycourse');
}


let userPlace = prompt('Did you live in Amman');
userCity();
let gender = prompt('Are you Male');
userGender();
let Age = prompt('is your age between 18-28');
userAge();
let userNationalitye = prompt('are you jordanian');
userNationality();
let courseName = prompt('are you intrest in css');
cssIntrest();



let attempts = 4;
let myAge = prompt('now try to know my age');

for (let i = 0; i < attempts; i++) {
  if (myAge > 30) {
    alert('you are too high');
    attempts-=1;
    myAge = prompt('pleas try agin you have :' + attempts);
  }
  else if (myAge<23){
    alert('you are too low');
    attempts-=1;
    myAge = prompt('pleas try agin you have :' + attempts);
  }
  else if (myAge>23 && myAge<=30){
    alert('you are so close');
    attempts-=1;
    myAge = prompt('pleas try agin you have :' + attempts);

  }
  else if (myAge == '23') {
    alert('grat correct answer !!!');
    finalScore ++ ;
    break;
  }
}
if (!attempts) {
  alert('the correct answer was 23 ');
}
let visitList = ['italy', ' america', 'turkey', 'palestine', 'egypt', 'sirya'];
let attempt = 6;
let userInput = prompt(' now we have another game try to guess the City');

for (let i = 1; i < visitList.length; i++) {
  if (userInput === visitList[i]) {
    alert('correct answer!');
    finalScore ++;
    break;
  }
  else if (userInput !== visitList[i])  {
    attempt -= 1;
    userInput = prompt('please try again you have : ' + attempt + ' remaining!');
  }}
if (attempt=1) {
  alert('italy, america, turkey, palestine,egypt, sirya');

  alert ('we are the same in '+ finalScore +'  of 7');
  alert('hope to see you agin ' + userName + ' in my page');
}


