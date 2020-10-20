'use strict';

CookiesStores.operationHour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

//  var parentElement = document.getElementById('cookies-store');


CookiesStores.allcookiesStore = [];
CookiesStores.tabledata = document.getElementById("cookiesstore-table");
CookiesStores.totalsales = 0;

function CookiesStores (storeName, minCustomerPerHr, maxCustomerPerHr, avgcookiespurchasedPercustomer) {
  
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


//=============== The maximum is exclusive and the minimum is inclusive ===============//

  var randomCustomerPerHr  = function (min, max) {
  return Math.floor(Math.random() * ((max - min ) + 1) + min);
};

  //====================== Hourly Generator Function =====================================// 

   CookiesStores.prototype.getHourlycookiesPerHr = function () {
    for (var i = 0; i < CookiesStores.operationHour.length; i++) {
      var cookies = Math.ceil(this.avgcookiespurchasedPercustomer * randomCustomerPerHr(this.minCustomerPerHr, this.maxCustomerPerHr));
      this.totalCookiesPerDay.push(cookies);
      this.cookiesPerHr += cookies;
      CookiesStores.totalsales  += cookies; 
    }
  };


  //============================== Render Table Raw ====================================//

    var rowHeaderrender = function () {
    var trEl = document.createElement('tr');
    var thEl = document.createElement('th');
    thEl.textContent = 'Location';
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
   
   rowHeaderrender();
   
    

    //============================== Render Table Raw for total  ====================================//

   CookiesStores.prototype.getcookiesPerHr = function (){
    var trEl = document.createElement('tr');
    var thEl = document.createElement('th');
    thEl.textContent = this.storeName;
    trEl.appendChild(thEl)
    
    for (var i = 0 ; i < this.totalCookiesPerDay.length; i++){
    var tdEl = document.createElement('td')
      tdEl.textContent = this.totalCookiesPerDay[i];
      trEl.appendChild(tdEl);
    }
   var tdElm = document.createElement('td');
      tdElm.textContent = this.cookiesPerHr;
      trEl.appendChild(tdElm);
      CookiesStores.tabledata.appendChild(trEl);

   };
   

   
   //============================== Render Table Raw/hr====================================//

   var foterrow = function () {
    var trEl = document.createElement('tr');
    var tdEl = document.createElement('td');
    tdEl.textContent = 'Total per hour: ' ;
    trEl.appendChild(tdEl);

    for (var i = 0; i < CookiesStores.operationHour.length; i++) {
      
      var totalhourly = 0;
      var tabledata = document.createElement('td');
      
      for (var j = 0; j < CookiesStores.allcookiesStore.length; j++){
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
console.log(CookiesStores.allcookiesStore);

new CookiesStores('Seattle', 23, 65, 6.3);
new CookiesStores('Tokyo', 3, 24, 1.2);
new CookiesStores('Dubai', 11, 38, 3.7);
new CookiesStores('Paris', 20, 38, 2.3);
new CookiesStores('Lima', 2, 16, 4.6);

foterrow();
