'use strict';

var operationHour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var seattleUl = document.getElementById('seattle');
var tokyoUl = document.getElementById('tokyo');
var dubaiUl = document.getElementById('dubai');
var parisUl = document.getElementById('paris');
var limaUl = document.getElementById('lima');

var seattle = {

  minCustomerPerHr: 23,
  maxCustomerPerHr: 65,
  avgcookiespurchasedPercustomer: 6.3,
  randomCustomerPerHr: [],
  cookiesPerHrArray: [],
  totalCookiesPerDay: 0,

  getcustomerPerHr: function () {
    return Math.floor(Math.random() * (this.maxCustomerPerHr - this.minCustomerPerHr + 1) + this.minCustomerPerHr);
  },

  getRandomcookies: function () {
    for (var i = 0; i < operationHour.length; i++) {
      var cookies = Math.ceil(this.getcustomerPerHr() * this.avgcookiespurchasedPercustomer);

      this.cookiesPerHrArray.push(cookies);
      this.totalCookiesPerDay += cookies;
    }
  },
  //  we did loop
  render: function () {

    this.getRandomcookies();

    for (var i = 0; i < operationHour.length; i++) {
      var li = document.createElement('li');
      li.textContent = `${operationHour[i]}: ${this.cookiesPerHrArray[i]} Cookies.`;
      seattleUl.appendChild(li);

    }
    li = document.createElement('li');
    li.textContent = `Total : ${this.totalCookiesPerDay} Cookies`;
    seattleUl.appendChild(li);


  },
};
// que2
var tokyo = {

  minCustomerPerHr: 3,
  maxCustomerPerHr: 24,
  avgcookiespurchasedPercustomer: 1.2,
  randomCustomerPerHr: [],
  cookiesPerHrArray: [],
  totalCookiesPerDay: 0,

  getcustomerPerHr: function () {
    return Math.floor(Math.random() * (this.maxCustomerPerHr - this.minCustomerPerHr + 1) + this.minCustomerPerHr);
  },

  getRandomcookies: function () {
    for (var i = 0; i < operationHour.length; i++) {
      var cookies = Math.ceil(this.getcustomerPerHr() * this.avgcookiespurchasedPercustomer);
      this.cookiesPerHrArray.push(cookies);
      this.totalCookiesPerDay += cookies;


    }
  },
  //  we did loop
  render: function () {
    this.getRandomcookies();

    for (var i = 0; i < operationHour.length; i++) {
      var li = document.createElement('li');
      li.textContent = `${operationHour[i]}: ${this.cookiesPerHrArray[i]} Cookies.`;
      tokyoUl.appendChild(li);

    }
    li = document.createElement('li');
    li.textContent = `Total : ${this.totalCookiesPerDay} Cookies`;
    tokyoUl.appendChild(li);


  },
};
//   // que3
var dubai = {

  minCustomerPerHr: 11,
  maxCustomerPerHr: 38,
  avgcookiespurchasedPercustomer: 3.7,
  randomCustomerPerHr: [],
  cookiesPerHrArray: [],
  totalCookiesPerDay: 0,

  getcustomerPerHr: function () {
    return Math.floor(Math.random() * (this.maxCustomerPerHr - this.minCustomerPerHr + 1) + this.minCustomerPerHr);
  },

  getRandomcookies: function () {
    for (var i = 0; i < operationHour.length; i++) {
      var cookies = Math.ceil(this.getcustomerPerHr() * this.avgcookiespurchasedPercustomer);
      this.cookiesPerHrArray.push(cookies);
      this.totalCookiesPerDay += cookies;


    }
  },
  //  we did loop
  render: function () {
    this.getRandomcookies();

    for (var i = 0; i < operationHour.length; i++) {
      var li = document.createElement('li');
      li.textContent = `${operationHour[i]}: ${this.cookiesPerHrArray[i]} Cookies.`;
      dubaiUl.appendChild(li);

    }
    li = document.createElement('li');
    li.textContent = `Total : ${this.totalCookiesPerDay} Cookies`;
    dubaiUl.appendChild(li);

  },
};
var paris = {

  minCustomerPerHr: 20,
  maxCustomerPerHr: 38,
  avgcookiespurchasedPercustomer: 2.3,
  randomCustomerPerHr: [],
  cookiesPerHrArray: [],
  totalCookiesPerDay: 0,

  getcustomerPerHr: function () {
    return Math.floor(Math.random() * (this.maxCustomerPerHr - this.minCustomerPerHr + 1) + this.minCustomerPerHr);
  },

  getRandomcookies: function () {
    for (var i = 0; i < operationHour.length; i++) {
      var cookies = Math.ceil(this.getcustomerPerHr() * this.avgcookiespurchasedPercustomer);
      this.cookiesPerHrArray.push(cookies);
      this.totalCookiesPerDay += cookies;


    }
  },
  //  we did loop
  render: function () {
    this.getRandomcookies();

    for (var i = 0; i < operationHour.length; i++) {
      var li = document.createElement('li');
      li.textContent = `${operationHour[i]}: ${this.cookiesPerHrArray[i]} Cookies.`;
      parisUl.appendChild(li);

    }
    li = document.createElement('li');
    li.textContent = `Total : ${this.totalCookiesPerDay} Cookies`;
    parisUl.appendChild(li);

  },
};
var lima = {

  minCustomerPerHr: 2,
  maxCustomerPerHr: 16,
  avgcookiespurchasedPercustomer: 4.6,
  randomCustomerPerHr: [],
  cookiesPerHrArray: [],
  totalCookiesPerDay: 0,

  getcustomerPerHr: function () {
    return Math.floor(Math.random() * (this.maxCustomerPerHr - this.minCustomerPerHr + 1) + this.minCustomerPerHr);
  },

  getRandomcookies: function () {
    for (var i = 0; i < operationHour.length; i++) {
      var cookies = Math.ceil(this.getcustomerPerHr() * this.avgcookiespurchasedPercustomer);
      this.cookiesPerHrArray.push(cookies);
      this.totalCookiesPerDay += cookies;


    }
  },
  //  we did loop
  render: function () {
    this.getRandomcookies();

    for (var i = 0; i < operationHour.length; i++) {
      var li = document.createElement('li');
      li.textContent = `${operationHour[i]}: ${this.cookiesPerHrArray[i]} Cookies.`;
      limaUl.appendChild(li);

    }
    li = document.createElement('li');
    li.textContent = `Total : ${this.totalCookiesPerDay} Cookies`;
    limaUl.appendChild(li);

  },
};







// function getRandomcustomerPerHr(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();