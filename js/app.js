 'use strict';


 var parentElement = document.getElementById('cookies-store');
 cookiesStoresTable = document.getElementById("cookiesstore-table");
 

 var cookiesStoreLocation = [];
 
function CookiesStores(minCustomerPerHr, maxCustomerPerHr, avgcookiespurchasedPercustomer, storeName) {
  this.minCustomerPerHr = minCustomerPerHr;
  this.maxCustomerPerHr = maxCustomerPerHr;
  this.avgcookiespurchasedPercustomer = avgcookiespurchasedPercustomer;
  this.randomCustomerPerHr = randomCustomerPerHr;
  this.cookiesPerHrArray = cookiesPerHrArray;
  this.totalCookiesPerDay = 0;
  this.storeName = storeName;
  everyLocation.pus(this)
  this.randomCustomerPerHr = function () {
      return Math.floor(Math.random() * (this.maxCustomerPerHr - this.minCustomerPerHr + 1) + this.minCustomerPerHr);
  },
      this.cookiesPerHrArray = function () {
          for (var i = 0; i < operationHour.length; i++) {
              var cookies = Math.ceil(this.getcustomerPerHr() * this.avgcookiespurchasedPercustomer);
              this.cookiesPerHrArray.push(cookies);
              this.totalCookiesPerDay += cookies;
          }
      },
      // render a table
      this.render = function () {
          this.minCustomerPerHr();
          this.avgCookiesPurchasedPerCustomer();
          parentElement = document.getElementById('sales');
          parentTBody = document.createElement('tbody');
          parentTBody.setAttribute('id', 'cookies-store-body');
          parentElement.appendChild(parentTBody);
          parentRow = document.createElement('tr');
          tableHead = document.createElement('th');
          tableHead.textContent = this.storeName;
          parentRow.appendChild(tableHead);
          for (let i = 0; i < this.cookiesPerHrArray.length; i++) {
              tableHead = document.createElement('td');
              tableHead.textContent = this.cookiesPerHrArray[i];
              parentRow.appendChild(tableHead);
          }
          tableHead = document.createElement('td');
          tableHead.textContent = this.totalCookiesPerDay;
          parentRow.appendChild(tableHead);
          parentTBody.appendChild(parentRow);
      };


  //Render Table Head
  function renderTableHead(tagId) {
      parentElement = document.getElementById(tagId);
      parentTHead = document.createElement('thead');
      parentTHead.setAttribute('id', tagId);
      parentElement.appendChild(parentTHead);
      parentRow = document.createElement('tr');
      tableHead = document.createElement('th');
      tableHead.textContent = '';
      parentRow.appendChild(tableHead);
      for (var i = 0; i < operationHour.length; i++) {
          tableHead = document.createElement('th');
          tableHead.textContent = operationHour[i];
          parentRow.appendChild(tableHead);
      }

      // Hourly total - tied to location constructor
      function sumSalesHourly() {
          hourlyTotals = [];
          for (let j = 0; j < operationHour.length; j++) {
              let sum = 0;
              for (let i = 0; i < cookiesStoreLocation.length; i++) {
                  sum += cookiesStoreLocation[i].cookiesPerHrArray[j];
              }
              hourlyTotals.push(sum);
          }
          var sumTotal = 0;
          for (var i = 0; i < operationHour.length; i++) {
              sumTotal += hourlyTotals[i];
          }
          hourlyTotals.push(sumTotal);
      }

      // Render Totals
      function renderTotals() {
          parentElement = document.getElementById('sales');
          parentTFoot = document.createElement('tfoot');
          parentTFoot.setAttribute('id', 'cookies-stores-foot');
          parentElement.appendChild(parentTFoot);
          parentRow = document.createElement('tr');
          tableFoot = document.createElement('th');
          tableFoot.textContent = 'Totals';
          parentRow.appendChild(tableFoot);
          for (var i = 0; i < hourlyTotals.length; i++) {
              tableFoot = document.createElement('td');
              tableFoot.textContent = hourlyTotals[i];
              parentRow.appendChild(tableFoot);
          }
          parentTFoot.appendChild(parentRow);
      }

      seattleLocation = new CookieStoreLocation('Seattle', 23, 65, 6.3);
      tokyoLocation = new CookieStoreLocation('Tokyo', 3, 24, 1.2);
      dubaiLocation = new CookieStoreLocation('Dubai', 11, 38, 3.7);
      parisLocation = new CookieStoreLocation('Paris', 20, 38, 2.3);
      limaLocation = new CookieStoreLocation('Lima', 2, 16, 4.6);

      function pageRenderer() {
          renderTableHead('sales');
          // Render All the table rows
          function renderAllSalesTableData() {
              for (let i = 0; i < everyLocation.length; i++) {
                  everyLocation[i].renderSalesTableData();
              }
          }
          renderAllSalesTableData();
      
          sumSalesHourly();
          renderTotals();
          
      }
  