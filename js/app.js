'use strict';

var operationHour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var stores = document.getElementById("seatle");
// var stores = document.getElementById("tokyo");


var seattle = {

  storeName: 'Seattle',
  minCustomerPerHr : 23,
  maxCustomerPerHr: 65,
  avgcookiespurchasedPercustomer: 6.3,
  randomCustomerPerHr : [],
  cookiesPerHr: [],
  totalCookiesPerDay: 0,
 
  getcustomerPerHr: function () {
  for (var i = 0; i < operationHour.length; i++) {
    var randomCust = getRandom(this.minCustomerPerHr, this.maxCustomerPerHr);
    this.randomCustomerPerHr  = `${randomCust}`
  //  console.log(`${this.customerPerHr}`);
    
  };

  },
  
  getRandomcookies: function (){
   for (var i = 0 ; i < this.randomCustomerPerHr.length ; i++) {
    var cookies = Math.round(this.randomCustomerPerHr[i] * this.avgcookiespurchasedPercustomer);
    this.totalCookiesPerDay += `${cookies}`;
    this.cookiesPerHr = `${cookies}`;
    
    
   };
  },
    //  we did loop
  render: function (){
    this.getcustomerPerHr();
    this.getRandomcookies();
  var ul = document.createElement('ul');
  var h2 = document.createElement('h2');
  h2.textContent = this.storesName;
  stores.appendChild(h2);
  for (var i = 0; i < operationHour.length ; i++ ) {
    var li = document.createElement('li');
    li.textContent = `${operationHour[i]}: ${this.cookiesPerHr[i]} Cookies.`;
    ul.appendChild(li);

   }
   li = document.createElement('li');
   li.textContent = `Total : ${this.totalCookiesPerDay} Cookies` ;
   ul.appendChild(li);
   stores.appendChild(ul);

},
};

var stores = document.getElementById("tokyo");
var tokyo = {

  storeName: 'Tokyo',
  minCustomerPerHr : 3,
  maxCustomerPerHr: 24,
  avgcookiespurchasedPercustomer: 1.2 ,
  randomCustomerPerHr : [],
  cookiesPerHr: [],
  totalCookiesPerDay: 0,
 
  getcustomerPerHr: function () {
  for (var i = 0; i < operationHour.length; i++) {
    var randomCust = getRandom(this.minCustomerPerHr, this.maxCustomerPerHr);
    this.randomCustomerPerHr  = `${randomCust}`
  //  console.log(`${this.customerPerHr}`);
    
  };

  },
  
  getRandomcookies: function (){
   for (var i = 0 ; i < this.randomCustomerPerHr.length ; i++) {
    var cookies = Math.round(this.randomCustomerPerHr[i] * this.avgcookiespurchasedPercustomer);
    this.totalCookiesPerDay += `${cookies}`;
    this.cookiesPerHr = `${cookies}`;
    
    
   };
  },
    //  we did loop
  render: function (){
    this.getcustomerPerHr();
    this.getRandomcookies();
  var ul = document.createElement('ul');
  var h2 = document.createElement('h2');
  h2.textContent = this.storesName;
  stores.appendChild(h2);
  for (var i = 0; i < operationHour.length ; i++ ) {
    var li = document.createElement('li');
    li.textContent = `${operationHour[i]}: ${this.cookiesPerHr[i]} Cookies.`;
    ul.appendChild(li);

   }
   li = document.createElement('li');
   li.textContent = `Total : ${this.totalCookiesPerDay} Cookies` ;
   ul.appendChild(li);
   stores.appendChild(ul);

},
};




  // getcustomerPerHr: function(){
  //  this.customerPerHr = `${randomPerHr(23, 65)}`;
  //  console.log(`${this.customerPerHr}`);

//  }
  


function getRandom(min, max) {
return Math.floor(Math.random() * (max - min + 1) + min);
}
 seattle.render();
 tokyo.render();
 seattle.getcustomerPerHr();
 seattle.getRandomcookies()
 tokyo.getcustomerPerHr();
 tokyo.getRandomcookies()
//  rankie.getAge();
// frankie.render();
// jumper.getAge();
// jumper.render();
// serena.getAge();
// serena.render();


// function getRandomIntInclusive(min, max) {
  // return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive 
// }
// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
//  for( var i =0 ; i < operationHour.length;i++) {
//    var cookies = this.cookiesSoldPerHr();
//  }

 
 
  // cookiesSoldPerHr = function(){
  // // randomCustomerPerHr() * avgCookiesSalePerCustomer(6.5);           
  // return Math.round (this.customerPerHr * this.avgCookiesSalePerCustomer,6.5);




 
 

//   function avgCookiesSalePerCustomer(){
//     return Math.random();
//   }
   
//   cookiesSoldPerHr = function(){
//     randomCustomerPerHr * avgCookiesSalePerCustomer;
//     return `${randomCustomerPerHr(23, 65)}`*  Math.random(6.5);
//   }
// // function getRandom() {
// //   return Math.random();
// // }

// seattle.getcustomerPerHr();
// seattle.cookiesSoldPerHr();