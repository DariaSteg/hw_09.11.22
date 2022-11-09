
// 1) написати функцію, яка повертає слово 'odd' або 'even', в залежності від прийнятого аргументу(число).
// Значення для перевірки функції вводить користувач.


let userInput = prompt("Enter number: ");

 function checkUserInputNumber() {
  if (userInput %2 !== 0 ) {
    return "odd";
  }
  else{return "even";}
 }
 let result = checkUserInputNumber();
 console.log(result);

//  2)написати функцію, яка приймає два аргументи і, якщо аргументи одного типу, то повертає той, який має більше значення (якщо значення рівні - повертаємо null), інакше(фкщо різного типу) теж повертає null.
//  Значення для перевірки функції вводить користувач.


let userInput1 = prompt("Enter first number: ");
let userInput2 = prompt("Enter second number: ");



if(findTypeofNumber(userInput1) || findTypeofNumber(userInput2)){
  let result2 = findHightNumber(userInput1,userInput2);
  console.log(result2);
}
 else{
  console.log("null");}

  function findHightNumber(userNumber1,userNumber2){
    if (userNumber1 > userNumber2)
    {return userNumber1;}
    {return userNumber2;}}
    

  function findTypeofNumber(val1,val2){
  if (typeof val1 === typeof val2 && val1 !== val2)
  {return true;}
  {return false;}}





 
 

 


