'use strict';
    // constructor method //
CookiesStores.operationHour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];




CookiesStores.allcookiesStore = [];
CookiesStores.tabledata = document.getElementById("cookiesstore-table");
CookiesStores.totalsales = 0;
var formElement = document.getElementById('new-location');
function CookiesStores(storeName, minCustomerPerHr, maxCustomerPerHr, avgcookiespurchasedPercustomer) {

  this.storeName = storeName;
  this.minCustomerPerHr = minCustomerPerHr;
  this.maxCustomerPerHr = maxCustomerPerHr;
  this.avgcookiespurchasedPercustomer = avgcookiespurchasedPercustomer;
  this.totalCookiesPerDay = [];
  this.cookiesPerHr = 0;
  CookiesStores.allcookiesStore.push(this);
  this.getHourlycookiesPerHr();
  this.getcookiesPerHr();

};


// The maximum is inclusive and the minimum is inclusive

var randomCustomerPerHr = function (min, max) {
  return Math.floor(Math.random() * ((max - min) + 1) + min);
};

// Hourly Generator Function // 

CookiesStores.prototype.getHourlycookiesPerHr = function () {
  for (var i = 0; i < CookiesStores.operationHour.length; i++) {
    var cookies = Math.ceil(this.avgcookiespurchasedPercustomer * randomCustomerPerHr(this.minCustomerPerHr, this.maxCustomerPerHr));
    this.totalCookiesPerDay.push(cookies);
    this.cookiesPerHr += cookies;
    CookiesStores.totalsales += cookies;
  }
};


//Render Table Raw =//

var rowrender = function () {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'location';
  trEl.appendChild(thEl);
  for (var i = 0; i < CookiesStores.operationHour.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = CookiesStores.operationHour[i];
    trEl.appendChild(tdEl);
  }

  var tdElm = document.createElement('td')
  tdElm.textContent = 'Total';
  trEl.appendChild(tdElm);
  CookiesStores.tabledata.appendChild(trEl);
};

rowrender();



  // ========Render Table Raw for total=========

CookiesStores.prototype.getcookiesPerHr = function () {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = this.storeName;
  trEl.appendChild(thEl)

  for (var i = 0; i < this.totalCookiesPerDay.length; i++) {
    var tdEl = document.createElement('td')
    tdEl.textContent = this.totalCookiesPerDay[i];
    trEl.appendChild(tdEl);
  }
  var tdElm = document.createElement('td');
  tdElm.textContent = this.cookiesPerHr;
  trEl.appendChild(tdElm);
  CookiesStores.tabledata.appendChild(trEl);

};



// ========Render Table Raw/totalhr=======

var footerrow = function () {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = 'daily total  ';
  trEl.appendChild(tdEl);

  for (var i = 0; i < CookiesStores.operationHour.length; i++) {

    var totalhourly = 0;
    var tabledata = document.createElement('td');

    for (var j = 0; j < CookiesStores.allcookiesStore.length; j++) {
      totalhourly += CookiesStores.allcookiesStore[j].totalCookiesPerDay[i];

    }
    tabledata.textContent = totalhourly;
    trEl.appendChild(tabledata)
  }


  var tdElm = document.createElement('td')
  tdElm.textContent = CookiesStores.totalsales;
  trEl.appendChild(tdElm);
  CookiesStores.tabledata.appendChild(trEl);
};


new CookiesStores('Seattle', 23, 65, 6.3);
new CookiesStores('Tokyo', 3, 24, 1.2);
new CookiesStores('Dubai', 11, 38, 3.7);
new CookiesStores('Paris', 20, 38, 2.3);
new CookiesStores('Lima', 2, 16, 4.6);
footerrow();


  // =========== FORMS========

var userInputForm = document.getElementById('user-Form');
userInputForm.addEventListener('submit', handleSubmit);

function handleSubmit(event){
  event.preventDefault();  

  var storeName =  event.target.storeName.value;
  var minCustomerPerHr = event.target.minCustomerPerHr.value; 
  var maxCustomerPerHr = event.target.maxCustomerPerHr.value;   
  var avgcookiespurchasedPercustomer = event.target.avgcookiespurchasedPercustomer.value;

  if(!storeName || !minCustomerPerHr || !maxCustomerPerHr || !avgcookiespurchasedPercustomer) {
    
    alert('please fill out the field .');
  }

  if(isNaN(minCustomerPerHr)) {
    event.target.minCustomerPerHr.value = null;
   alert('You should put a number only!');
  };
 
  if(isNaN(maxCustomerPerHr)) {
    event.target.maxCustomerPerHr = null;
    alert('You should put a number only!');
  };

  if(isNaN(avgcookiespurchasedPercustomer)){
    event.target.avgcookiespurchasedPercustomer.value = null;
     alert('You should put a number only!');
  }
 if(minCustomerPerHr < 0 || maxCustomerPerHr < 0 || avgcookiespurchasedPercustomer < 0  ){
  event.target.minCustomerPerHr.value = null;
  event.target.maxCustomerPerHr.value = null;
  event.target.avgcookiespurchasedPercustomer.value = null;
  alert ( 'the value it should be greater than zero ');

 }
  CookiesStores.tabledata.deleteRow(-1)
  new CookiesStores(storeName, +minCustomerPerHr, +maxCustomerPerHr , +avgcookiespurchasedPercustomer);
  footerrow();

  
};




