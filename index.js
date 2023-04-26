// Code your solution in this file!
 let drivers=['Antonia', 'Nuru', 'Amari', 'Mo'];
 console.log(drivers);

const returnFirstTwoDrivers =function(drivers) {
return  drivers.slice(0, 2);
 }
 console.log(returnFirstTwoDrivers(drivers));//['Antonia', 'Nuru']

 
 
 const returnLastTwoDrivers =function(drivers) {
    return  drivers.slice(2, 4);
    
     }
     console.log(returnLastTwoDrivers(drivers));//['Amari', 'Mo']
   
 let selectingDrivers=[returnFirstTwoDrivers ,returnLastTwoDrivers];
 
 
function createFareMultiplier (number1) {
    return function(number2) {
      return number1*number2;
    }
  }

  const fareDoubler=createFareMultiplier(2);
  
  const fareTripler=createFareMultiplier(3);

  /*function selectDifferentDrivers(returnFirstTwoDrivers ,returnLastTwoDrivers){
    returnFirstTwoDrivers();
    returnLastTwoDrivers();
  }
  function test (a,b) { 
    // ...
};
// pass only the second parameter 
test( ... , b);*/
function selectDifferentDrivers(drivers ,functions){
   return functions(drivers)
  }
  