'use strict';

let FinalScore = 0

let userName = prompt('what\'s your name');
alert('welcome  ' + userName);
console.log("please answer by yes or no")
alert("please answer by yes or no");


function UserCity() 
{switch (userPlace.toLowerCase()) {
  case ('yes'):
  case ('y'):
    alert(' me to Your delevary is free');
    FinalScore ++
    break;
  case ('no'):
  case ('n'):
    alert(' sorry i\'m not so Your delevary is 3 JD');
    break;
  default:
    alert('IT\'S NOT WORKING')
}}
function UserGender(){
if (gender.toLowerCase() === 'yes' || gender.toLowerCase() === 'y') {
  FinalScore ++ ;
  alert('i\'m no so Your course is 25% discount!');
} else if (gender.toLowerCase() === 'no' || gender.toLowerCase() === 'n')
  alert('me to so you got  50% discount!');
}

function UserAge(){
  if (userAge.toLowerCase() == 'yes' || userAge.toLowerCase() == 'y'){
  FinalScore ++ ;
    alert('me too guss what !!Your next course is free');}
  else if (userAge.toLowerCase() == 'no' || userAge.toLowerCase() == 'n')
    alert('don\'t worry you will have 50% discount in next course'); 
  }
  function UserNationality() {
    if (userNationalitye.toLowerCase() == 'yes' || userNationalitye.toLowerCase() == 'Y'){
      FinalScore ++ ;
        alert('ooh me to so you have 30% discount in bus fees');}
      else if (userNationalitye.toLowerCase() == 'no' || userNationalitye.toLowerCase() == 'n')
        alert('that whay you got  50% discount in bus fees');
      }
      function CssIntrest(){
        if (courseName.toLowerCase() == 'yes' || courseName.toLowerCase() == 'Y'){
            alert('me to so Your css course is free');
            FinalScore ++}
          else if (courseName.toLowerCase() == 'no' || courseName.toLowerCase() == 'n')
            alert('don\'t worry you have 50% discount in anycourse');
          }


let userPlace = prompt('Did you live in Amman');
UserCity();
let gender = prompt('Are you Male');
UserGender();
let userAge = prompt('is your age between 18-28');
UserAge();
let userNationalitye = prompt('are you jordanian');
UserNationality();
let courseName = prompt('are you intrest in css');
CssIntrest();



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
    myAge = prompt('pleas try agin you have :' + attempts);
  }
  else if (myAge>23 && myAge<30){
    alert('you are so close');
    
    myAge = prompt('pleas try agin you have :' + attempts);

  }
  else if (myAge == '23') {
    alert('grat correct answer !!!');
    FinalScore ++ ;
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
      FinalScore ++;
      break;
    }
    else if (userInput !== visitList[i])  {
    attempt -= 1;
    userInput = prompt('please try again you have : ' + attempt + ' remaining!');
  }}
  if (attempt=1) {
    alert('italy, america, turkey, palestine,egypt, sirya');
    
  alert ('we are the same in '+ FinalScore +'  of 7');
  alert('hope to see you agin ' + userName + ' in my page');
  }
  


