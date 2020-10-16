'use strict'
var operationHour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var seattle= {
 minCustumerPerHr : 23,
 maxCustumerPerHr: 65,
 avgCookesPerSale: 6.3,
getRandomCustomerPerHr:function(){
  this.custemerPerHr = `${RandomCustomerPerHr(23,65)}`;
  console.log(getRandomCustemerPerHr);
}
 
};


function randomCustemerPerHr(min,max) {
return Math.floor(Math.random() * (max - min + 1) + min);
}
 seattle.getRandomCustemerPerHr();
// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
  // return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive 
// }

